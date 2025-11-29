/**
 * ============================================
 * GROQ INTEGRATION - IA Generativa para Chat
 * Integração com Groq API para respostas inteligentes
 * ============================================
 *
 * Features:
 * - Cliente API com retry automático
 * - Cache LRU de respostas para economia
 * - Sistema de prompts contextuais
 * - Fallback para NLU local
 * - Debounce e throttle para chamadas
 * - Rate limiting inteligente
 * - Limpeza automática de cache expirado
 *
 * @version 1.1.0
 * @author Evo
 */

const GroqIntegration = (function() {
    'use strict';

    // ============================================
    // CONFIGURACOES
    // ============================================

    // ============================================
    // CONSTANTES DE VALIDAÇÃO
    // ============================================
    const VALIDATION = {
        MIN_API_KEY_LENGTH: 20,
        MAX_HISTORY_SIZE: 20,
        MAX_CACHE_SIZE: 100,
        CACHE_CLEANUP_THRESHOLD: 20
    };

    const CONFIG = {
        // API Settings
        API_URL: 'https://api.groq.com/openai/v1/chat/completions',
        // API Key deve ser configurada via setApiKey() ou variável de ambiente
        API_KEY: '',

        // Modelo - Llama 3.1 70B e o mais capaz e rapido
        MODEL: 'llama-3.1-70b-versatile',
        // Alternativas:
        // 'llama-3.1-8b-instant' - Mais rapido, menos capaz
        // 'mixtral-8x7b-32768' - Bom balance
        // 'gemma2-9b-it' - Compacto e eficiente

        // Parametros de geracao
        MAX_TOKENS: 500,
        TEMPERATURE: 0.7,
        TOP_P: 0.9,

        // Timeouts e retries
        TIMEOUT_MS: 10000,
        MAX_RETRIES: 2,
        RETRY_DELAY_MS: 1000,

        // Cache
        CACHE_ENABLED: true,
        CACHE_TTL_MS: 5 * 60 * 1000, // 5 minutos

        // Thresholds para decidir quando usar Groq
        USE_GROQ_THRESHOLD: 70, // Usar Groq se confianca NLU < 70%
        COMPLEX_QUERY_KEYWORDS: [
            'como funciona', 'me explica', 'pode detalhar',
            'quero entender', 'diferenca entre', 'comparar',
            'por que', 'qual a vantagem', 'me conta mais',
            'especificamente', 'tecnicamente', 'na pratica'
        ]
    };

    // ============================================
    // ESTADO
    // ============================================

    let state = {
        apiKey: '',
        isConfigured: false,
        requestCount: 0,
        lastRequestTime: 0,
        cache: new Map(),
        conversationHistory: [],
        rateLimitRemaining: 100,
        rateLimitReset: 0,
        // Debounce state
        pendingRequest: null,
        debounceTimer: null
    };

    // ============================================
    // DEBOUNCE & THROTTLE
    // ============================================

    const DEBOUNCE_MS = 300; // Espera 300ms antes de enviar

    /**
     * Debounce para evitar múltiplas chamadas rápidas
     */
    function debounce(fn, delay = DEBOUNCE_MS) {
        return function(...args) {
            return new Promise((resolve, reject) => {
                if (state.debounceTimer) {
                    clearTimeout(state.debounceTimer);
                }
                state.debounceTimer = setTimeout(async () => {
                    try {
                        const result = await fn.apply(this, args);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                }, delay);
            });
        };
    }

    /**
     * Throttle - máximo 1 request por intervalo
     */
    function canMakeRequest() {
        const now = Date.now();
        const minInterval = 500; // Mínimo 500ms entre requests
        return now - state.lastRequestTime >= minInterval;
    }

    // ============================================
    // SISTEMA DE PROMPTS
    // ============================================

    const SYSTEM_PROMPTS = {
        // Prompt principal do assistente
        main: `Voce e a EVA, assistente virtual inteligente da Evo, uma empresa especializada em desenvolvimento de aplicativos mobile e sistemas web personalizados.

SOBRE A EVO:
- Mais de 300 apps entregues com sucesso
- Equipe de 25+ desenvolvedores especializados
- Prazo medio de entrega: 45-90 dias
- Tecnologias: React Native, Flutter, Node.js, Python
- Garantia de 12 meses incluida
- Suporte tecnico vitalicio

PRECOS REFERENCIAIS:
- App simples (MVP): R$ 15.000 - R$ 35.000
- App intermediario: R$ 35.000 - R$ 80.000
- App complexo/enterprise: R$ 80.000 - R$ 200.000+
- Manutencao mensal: a partir de R$ 1.500/mes

FORMAS DE PAGAMENTO:
- Ate 12x no cartao sem juros
- PIX com 5% de desconto
- 40% entrada + 60% na entrega

DIFERENCIAIS:
- Codigo fonte 100% do cliente
- App publicado nas lojas (Apple/Google)
- Painel administrativo incluso
- Treinamento da equipe
- Documentacao tecnica completa

ACOES AUTOMATICAS (Use estas tags no final da resposta para ativar funcoes na tela):
- {{SHOW_ROI}} -> Use quando o cliente perguntar sobre retorno, lucro ou valer a pena.
- {{SHOW_PACKAGES}} -> Use quando o cliente quiser ver precos, planos ou opcoes.
- {{COLLECT_WHATSAPP}} -> Use quando o cliente quiser proposta, orcamento ou falar com humano.

Exemplos de uso:
"Posso calcular uma estimativa de retorno para voce. {{SHOW_ROI}}"
"Temos otimas opcoes de pacotes para o seu perfil. {{SHOW_PACKAGES}}"
"Vou pedir para um consultor entrar em contato. {{COLLECT_WHATSAPP}}"

DIRETRIZES DE COMUNICACAO:
1. Seja amigavel, profissional e objetivo
2. Responda em portugues brasileiro
3. Use no maximo 3-4 frases por resposta
4. Sempre direcione para proximo passo (agendar call, passar contato, etc)
5. Se nao souber algo especifico, ofereca conectar com especialista
6. Nunca invente informacoes - prefira dizer que vai verificar
7. Personalize usando o nome do usuario quando disponivel`,

        // Prompts especificos por contexto
        preco: `Ao falar sobre precos:
- Sempre mencione que valores dependem do escopo
- Ofereca fazer uma analise gratuita do projeto
- Destaque o parcelamento em ate 12x
- Mencione o desconto de 5% no PIX`,

        prazo: `Ao falar sobre prazos:
- Prazo tipico: 45-90 dias
- Projetos urgentes tem adicional de 20-30%
- Sempre mencione que depende da complexidade
- Ofereca fazer cronograma detalhado`,

        garantia: `Ao falar sobre garantia e confianca:
- Garantia de 12 meses para bugs
- Suporte tecnico vitalicio
- +300 apps entregues
- Contrato formal com todas as clausulas
- Portfolio disponivel para consulta`,

        features: `Ao falar sobre funcionalidades:
- Pergunte sobre o nicho especifico
- Mencione funcionalidades comuns do nicho
- Destaque personalizacao total
- Ofereca mostrar demos similares`,

        negociacao: `Ao perceber interesse em negociar:
- Seja flexivel mas profissional
- Ofereca beneficios extras ao inves de desconto
- Mencione condicoes especiais para projetos maiores
- Direcione para call com comercial para fechar`
    };

    // ============================================
    // FUNCOES DE CONFIGURACAO
    // ============================================

    /**
     * Configura a API key do Groq
     * @param {string} key - API key do Groq
     * @returns {boolean} true se configurado com sucesso
     */
    function setApiKey(key) {
        if (!key || key.length < VALIDATION.MIN_API_KEY_LENGTH) {
            if (typeof console !== 'undefined' && console.error) {
                console.error('[Groq] API key inválida');
            }
            return false;
        }
        state.apiKey = key;
        CONFIG.API_KEY = key;
        state.isConfigured = true;
        return true;
    }

    /**
     * Verifica se Groq esta configurado
     */
    function isConfigured() {
        return state.isConfigured && state.apiKey.length > 0;
    }

    /**
     * Atualiza configuracoes
     */
    function updateConfig(newConfig) {
        Object.assign(CONFIG, newConfig);
    }

    // ============================================
    // CACHE LRU OTIMIZADO
    // ============================================

    // Cache key otimizado - evita JSON.stringify custoso
    function getCacheKey(message, context) {
        const msg = message.toLowerCase().trim();
        const ctx = context ? `${context.category || ''}:${context.intent || ''}` : '';
        return `${msg}|${ctx}`;
    }

    // LRU: Move item acessado para o final (mais recente)
    function getFromCache(key) {
        if (!CONFIG.CACHE_ENABLED) return null;

        const cached = state.cache.get(key);
        if (!cached) return null;

        const now = Date.now();
        if (now - cached.timestamp > CONFIG.CACHE_TTL_MS) {
            state.cache.delete(key);
            return null;
        }

        // LRU: Mover para o final (mais recente)
        state.cache.delete(key);
        state.cache.set(key, cached);

        return cached.response;
    }

    function setCache(key, response) {
        if (!CONFIG.CACHE_ENABLED) return;

        // Se já existe, remover primeiro (para reordenar no final)
        if (state.cache.has(key)) {
            state.cache.delete(key);
        }

        state.cache.set(key, {
            response: response,
            timestamp: Date.now()
        });

        // LRU: Remover os mais antigos se exceder limite
        if (state.cache.size > VALIDATION.MAX_CACHE_SIZE) {
            const keysToRemove = Array.from(state.cache.keys()).slice(0, VALIDATION.CACHE_CLEANUP_THRESHOLD);
            keysToRemove.forEach(k => state.cache.delete(k));
        }
    }

    // Limpeza periódica de cache expirado
    function cleanExpiredCache() {
        const now = Date.now();
        for (const [key, value] of state.cache.entries()) {
            if (now - value.timestamp > CONFIG.CACHE_TTL_MS) {
                state.cache.delete(key);
            }
        }
    }

    // ============================================
    // CONSTRUTOR DE MENSAGENS
    // ============================================

    /**
     * Constroi o array de mensagens para a API
     */
    function buildMessages(userMessage, context = {}) {
        const messages = [];

        // System prompt principal
        let systemPrompt = SYSTEM_PROMPTS.main;

        // Adicionar contexto especifico baseado no intent
        if (context.intent) {
            const intentPrompt = SYSTEM_PROMPTS[context.intent.replace('pergunta_', '')];
            if (intentPrompt) {
                systemPrompt += '\n\n' + intentPrompt;
            }
        }

        // Adicionar info do usuario se disponivel
        if (context.userName) {
            systemPrompt += `\n\nO usuario se chama ${context.userName}. Use o nome dele ocasionalmente para personalizar.`;
        }

        // Adicionar categoria detectada
        if (context.category) {
            systemPrompt += `\n\nO usuario esta interessado em: ${context.category}. Contextualize suas respostas para esse nicho.`;
        }

        // Adicionar informacoes do projeto (se disponiveis)
        if (context.appType) systemPrompt += `\n\nTipo de App: ${context.appType}`;
        if (context.budget) systemPrompt += `\n\nOrcamento Estimado: ${context.budget}`;
        if (context.timeline) systemPrompt += `\n\nPrazo Desejado: ${context.timeline}`;

        messages.push({
            role: 'system',
            content: systemPrompt
        });

        // Adicionar historico recente (ultimas 4 mensagens)
        const recentHistory = state.conversationHistory.slice(-4);
        recentHistory.forEach(msg => {
            messages.push({
                role: msg.role,
                content: msg.content
            });
        });

        // Mensagem atual do usuario
        messages.push({
            role: 'user',
            content: userMessage
        });

        return messages;
    }

    // ============================================
    // API CALLS
    // ============================================

    /**
     * Faz chamada para API do Groq
     */
    async function callGroqAPI(messages, retryCount = 0) {
        if (!isConfigured()) {
            throw new Error('Groq API nao configurada. Use setApiKey() primeiro.');
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.TIMEOUT_MS);

        try {
            const response = await fetch(CONFIG.API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${state.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: CONFIG.MODEL,
                    messages: messages,
                    max_tokens: CONFIG.MAX_TOKENS,
                    temperature: CONFIG.TEMPERATURE,
                    top_p: CONFIG.TOP_P,
                    stream: false
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            // Atualizar rate limit info
            state.rateLimitRemaining = parseInt(response.headers.get('x-ratelimit-remaining') || 100);
            state.rateLimitReset = parseInt(response.headers.get('x-ratelimit-reset') || 0);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));

                // Rate limit - esperar e retry
                if (response.status === 429 && retryCount < CONFIG.MAX_RETRIES) {
                    const waitTime = (state.rateLimitReset * 1000) || CONFIG.RETRY_DELAY_MS;
                    await new Promise(resolve => setTimeout(resolve, waitTime));
                    return callGroqAPI(messages, retryCount + 1);
                }

                throw new Error(`Groq API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            state.requestCount++;
            state.lastRequestTime = Date.now();

            return {
                content: data.choices[0]?.message?.content || '',
                usage: data.usage,
                model: data.model,
                finishReason: data.choices[0]?.finish_reason
            };

        } catch (error) {
            clearTimeout(timeoutId);

            if (error.name === 'AbortError') {
                throw new Error('Groq API timeout');
            }

            // Retry para erros de rede
            if (retryCount < CONFIG.MAX_RETRIES && error.message.includes('fetch')) {
                await new Promise(resolve => setTimeout(resolve, CONFIG.RETRY_DELAY_MS));
                return callGroqAPI(messages, retryCount + 1);
            }

            throw error;
        }
    }

    // ============================================
    // FUNCOES PRINCIPAIS
    // ============================================

    /**
     * Gera resposta usando Groq
     * @param {string} userMessage - Mensagem do usuario
     * @param {object} context - Contexto da conversa (intent, category, userName, etc)
     * @returns {Promise<object>} Resposta gerada
     */
    async function generateResponse(userMessage, context = {}) {
        const startTime = performance.now();

        // Verificar cache primeiro
        const cacheKey = getCacheKey(userMessage, context);
        const cachedResponse = getFromCache(cacheKey);
        if (cachedResponse) {
            return {
                ...cachedResponse,
                cached: true,
                processingTime: Math.round(performance.now() - startTime)
            };
        }

        try {
            const messages = buildMessages(userMessage, context);
            const result = await callGroqAPI(messages);

            // Salvar no historico de forma otimizada
            addToHistoryOptimized(userMessage, result.content);

            const response = {
                message: result.content,
                source: 'groq',
                model: result.model,
                usage: result.usage,
                cached: false,
                processingTime: Math.round(performance.now() - startTime)
            };

            // Salvar no cache
            setCache(cacheKey, response);

            return response;

        } catch (error) {
            console.error('Groq Error:', error.message);

            return {
                message: null,
                error: error.message,
                source: 'groq',
                fallback: true,
                processingTime: Math.round(performance.now() - startTime)
            };
        }
    }

    /**
     * Decide se deve usar Groq ou NLU local
     * @param {object} nluAnalysis - Resultado da analise NLU
     * @returns {boolean} true se deve usar Groq
     */
    function shouldUseGroq(nluAnalysis) {
        if (!isConfigured()) return false;

        // 1. Confianca baixa - usar Groq
        const confidence = nluAnalysis.overallConfidence ||
                          nluAnalysis.intent?.primary?.confidence || 0;
        if (confidence < CONFIG.USE_GROQ_THRESHOLD) {
            return true;
        }

        // 2. Precisa de desambiguacao - usar Groq pode ajudar
        if (nluAnalysis.needsIntentDisambiguation) {
            return true;
        }

        // 3. Pergunta complexa detectada
        const message = (nluAnalysis.original || '').toLowerCase();
        const isComplex = CONFIG.COMPLEX_QUERY_KEYWORDS.some(kw =>
            message.includes(kw)
        );
        if (isComplex) {
            return true;
        }

        // 4. Sem intent detectado
        if (!nluAnalysis.intent?.primary) {
            return true;
        }

        // 5. Intent generico (saudacao, despedida) - usar local
        const genericIntents = ['saudacao', 'despedida', 'confirmacao', 'negacao'];
        if (genericIntents.includes(nluAnalysis.intent.primary.intent)) {
            return false;
        }

        return false;
    }

    /**
     * Processa mensagem de forma hibrida (NLU + Groq)
     * @param {string} message - Mensagem do usuario
     * @param {object} nluResult - Resultado do NLU local
     * @param {object} context - Contexto adicional
     * @returns {Promise<object>} Resposta hibrida
     */
    async function processHybrid(message, nluResult, context = {}) {
        const analysis = nluResult.analysis || nluResult;

        // Enriquecer contexto com dados do NLU
        const enrichedContext = {
            ...context,
            category: analysis.category?.detected,
            intent: analysis.intent?.primary?.intent,
            confidence: analysis.overallConfidence,
            entities: analysis.entities
        };

        // Decidir se usa Groq
        if (shouldUseGroq(analysis)) {
            const groqResponse = await generateResponse(message, enrichedContext);

            if (groqResponse.message && !groqResponse.error) {
                return {
                    type: 'groq',
                    message: groqResponse.message,
                    nluAnalysis: analysis,
                    groqData: groqResponse,
                    source: 'hybrid-groq'
                };
            }
            // Fallback para NLU se Groq falhar
        }

        // Usar resposta do NLU local
        return {
            type: 'nlu',
            nluAnalysis: analysis,
            source: 'hybrid-nlu'
        };
    }

    // ============================================
    // UTILITARIOS
    // ============================================

    /**
     * Limpa historico de conversa
     */
    function clearHistory() {
        state.conversationHistory = [];
    }

    /**
     * Limpa cache
     */
    function clearCache() {
        state.cache.clear();
    }

    /**
     * Obtem estatisticas
     */
    function getStats() {
        return {
            isConfigured: state.isConfigured,
            requestCount: state.requestCount,
            cacheSize: state.cache.size,
            historyLength: state.conversationHistory.length,
            rateLimitRemaining: state.rateLimitRemaining,
            lastRequestTime: state.lastRequestTime
        };
    }

    // ============================================
    // SYNC HELPERS (v1.1.0 - Sync Support)
    // ============================================

    /**
     * Importa histórico de outro sistema (ex: NLU)
     * @param {Array} messages - Array de mensagens no formato {role, content}
     * @param {boolean} replace - Se true, substitui histórico; se false, adiciona
     */
    function importHistory(messages, replace = false) {
        if (replace) {
            state.conversationHistory = [];
        }

        messages.forEach(msg => {
            if (msg.role && msg.content) {
                state.conversationHistory.push({
                    role: msg.role,
                    content: msg.content
                });
            }
        });

        // Manter limite de histórico
        while (state.conversationHistory.length > VALIDATION.MAX_HISTORY_SIZE) {
            state.conversationHistory.shift();
        }

        return { imported: messages.length, total: state.conversationHistory.length };
    }

    /**
     * Exporta histórico em formato compatível com NLU
     * @returns {Array} Histórico no formato NLU: {message, timestamp, source}
     */
    function exportHistoryForNLU() {
        return state.conversationHistory
            .filter(m => m.role === 'user')
            .map((m, index) => ({
                message: m.content,
                timestamp: Date.now() - ((state.conversationHistory.length - index) * 1000),
                source: 'groq_export'
            }));
    }

    /**
     * Obtém contagem de mensagens por role
     */
    function getHistoryCounts() {
        const userCount = state.conversationHistory.filter(m => m.role === 'user').length;
        const assistantCount = state.conversationHistory.filter(m => m.role === 'assistant').length;

        return {
            total: state.conversationHistory.length,
            user: userCount,
            assistant: assistantCount
        };
    }

    /**
     * Adiciona mensagem ao historico de forma otimizada
     * Evita criar novo array com slice()
     */
    function addToHistoryOptimized(userMessage, assistantMessage) {
        const history = state.conversationHistory;
        history.push(
            { role: 'user', content: userMessage },
            { role: 'assistant', content: assistantMessage }
        );

        // Remover os mais antigos se exceder limite
        while (history.length > VALIDATION.MAX_HISTORY_SIZE) {
            history.shift();
        }
    }

    /**
     * Adiciona mensagem ao historico manualmente
     * @param {string} role - 'user' ou 'assistant'
     * @param {string} content - Conteúdo da mensagem
     */
    function addToHistory(role, content) {
        state.conversationHistory.push({ role, content });
        while (state.conversationHistory.length > VALIDATION.MAX_HISTORY_SIZE) {
            state.conversationHistory.shift();
        }
    }

    // ============================================
    // API PUBLICA
    // ============================================

    return {
        // Configuracao
        setApiKey: setApiKey,
        isConfigured: isConfigured,
        updateConfig: updateConfig,

        // Funcoes principais
        generateResponse: generateResponse,
        shouldUseGroq: shouldUseGroq,
        processHybrid: processHybrid,

        // Gestao de historico
        clearHistory: clearHistory,
        addToHistory: addToHistory,
        getHistory: () => [...state.conversationHistory],

        // Sync Helpers (v1.1.0)
        importHistory: importHistory,
        exportHistoryForNLU: exportHistoryForNLU,
        getHistoryCounts: getHistoryCounts,

        // Cache
        clearCache: clearCache,
        cleanExpiredCache: cleanExpiredCache,

        // Utilitarios
        getStats: getStats,
        canMakeRequest: canMakeRequest,

        // Constantes
        CONFIG: CONFIG,
        SYSTEM_PROMPTS: SYSTEM_PROMPTS
    };
})();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.GroqIntegration = GroqIntegration;
}

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GroqIntegration;
}
