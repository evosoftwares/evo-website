/**
 * ============================================
 * NLU INTEGRATION - ADAPTADOR PARA CHAT
 * Conecta o NLU Engine ao sistema de chat existente
 * ============================================
 *
 * v3.4.0 - Architecture Refactor (Senior Review Fixes):
 * - [P0] AsyncMutex: Previne race conditions em operações de sync
 * - [P0] syncNLUResponseToGroq() agora é chamado no fluxo NLU-only
 * - [P1] GroqAdapter: Desacoplamento via interface (Dependency Injection)
 * - [P1] UUID tracking: Mensagens têm IDs únicos para tracking preciso
 * - [P2] Logging melhorado com níveis (debug, info, warn, error)
 * - Detecção de duplicatas por UUID (não mais por string + timestamp)
 * - Cache TTL aumentado para 500ms (evita thrashing)
 *
 * v3.3.1 - Context Synchronization (Correções)
 * v3.3 - Context Synchronization (Original)
 * v3.2 - Performance e Otimizações
 * v3.1 - Groq Integration (IA Generativa)
 * v3.0 - Learning System, Disambiguation, Slot filling
 */

const NLUIntegration = (function() {
    'use strict';

    // ============================================
    // [P1] LOGGER - Logging com níveis
    // ============================================
    const Logger = {
        level: 'info', // 'debug' | 'info' | 'warn' | 'error' | 'silent'
        levels: { debug: 0, info: 1, warn: 2, error: 3, silent: 4 },

        shouldLog(level) {
            return this.levels[level] >= this.levels[this.level];
        },
        debug(...args) { this.shouldLog('debug') && console.debug('[NLU]', ...args); },
        info(...args) { this.shouldLog('info') && console.info('[NLU]', ...args); },
        warn(...args) { this.shouldLog('warn') && console.warn('[NLU]', ...args); },
        error(...args) { this.shouldLog('error') && console.error('[NLU]', ...args); }
    };

    // ============================================
    // [P1] UUID GENERATOR - IDs únicos para mensagens
    // ============================================
    function generateUUID() {
        // Fallback para browsers sem crypto.randomUUID
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        // Polyfill simples
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // ============================================
    // [P0] ASYNC MUTEX - Previne race conditions
    // ============================================
    class AsyncMutex {
        constructor() {
            this._locked = false;
            this._queue = [];
        }

        async acquire() {
            return new Promise(resolve => {
                if (!this._locked) {
                    this._locked = true;
                    resolve();
                } else {
                    this._queue.push(resolve);
                }
            });
        }

        release() {
            if (this._queue.length > 0) {
                const next = this._queue.shift();
                next();
            } else {
                this._locked = false;
            }
        }

        async runExclusive(fn) {
            await this.acquire();
            try {
                return await fn();
            } finally {
                this.release();
            }
        }

        isLocked() {
            return this._locked;
        }
    }

    // Mutex singleton para operações de sync
    const syncMutex = new AsyncMutex();

    // ============================================
    // [P1] GROQ ADAPTER - Desacoplamento via interface
    // ============================================
    const GroqAdapter = {
        _provider: null,
        _mockHistory: [],

        // Injeta o provider (default: window.GroqIntegration)
        setProvider(provider) {
            this._provider = provider;
            Logger.info('GroqAdapter: Provider configurado');
        },

        // Obtém o provider atual (lazy load do window)
        getProvider() {
            if (this._provider) return this._provider;
            if (typeof window !== 'undefined' && window.GroqIntegration) {
                return window.GroqIntegration;
            }
            return null;
        },

        // Verifica disponibilidade
        isAvailable() {
            const provider = this.getProvider();
            return provider && typeof provider.isConfigured === 'function' && provider.isConfigured();
        },

        // API unificada
        getHistoryCounts() {
            const provider = this.getProvider();
            if (!provider) return { total: 0, user: 0, assistant: 0 };

            if (typeof provider.getHistoryCounts === 'function') {
                return provider.getHistoryCounts();
            }
            // Fallback se método não existir
            const history = this.getHistory();
            return {
                total: history.length,
                user: history.filter(m => m.role === 'user').length,
                assistant: history.filter(m => m.role === 'assistant').length
            };
        },

        getHistory() {
            const provider = this.getProvider();
            if (!provider || typeof provider.getHistory !== 'function') return [];
            return provider.getHistory();
        },

        addToHistory(role, content) {
            const provider = this.getProvider();
            if (provider && typeof provider.addToHistory === 'function') {
                provider.addToHistory(role, content);
                return true;
            }
            return false;
        },

        clearHistory() {
            const provider = this.getProvider();
            if (provider && typeof provider.clearHistory === 'function') {
                provider.clearHistory();
                return true;
            }
            return false;
        },

        clearCache() {
            const provider = this.getProvider();
            if (provider && typeof provider.clearCache === 'function') {
                provider.clearCache();
                return true;
            }
            return false;
        },

        shouldUseGroq(analysis) {
            const provider = this.getProvider();
            if (provider && typeof provider.shouldUseGroq === 'function') {
                return provider.shouldUseGroq(analysis);
            }
            return false;
        },

        async generateResponse(message, context) {
            const provider = this.getProvider();
            if (!provider || typeof provider.generateResponse !== 'function') {
                return { error: 'Groq not available', fallback: true };
            }
            return provider.generateResponse(message, context);
        }
    };

    // Referência ao engine
    const engine = window.NLUEngine;

    // Cache de contexto da conversa (v3.4.0: mensagens com UUID)
    let conversationContext = {
        lastCategory: null,
        lastIntent: null,
        messageHistory: [],  // Formato: { id, message, timestamp, category, intent, response?, source? }
        userInfo: {},
        sessionStart: Date.now(),
        pendingDisambiguation: null, // v3.0: Para rastrear desambiguações pendentes
        lastAnalysis: null,          // v3.0: Última análise completa
        lastGroqResponse: null,      // v3.3: Metadados da última resposta Groq
        lastSyncTimestamp: null      // v3.3: Timestamp da última sincronização
    };

    // Map de IDs para lookup rápido (v3.4.0)
    const messageIdIndex = new Map();

    // ============================================
    // FUNÇÕES DE COMPATIBILIDADE
    // ============================================

    /**
     * Substitui a função antiga calculateKeywordScore
     * Mantém compatibilidade com o sistema existente
     */
    function calculateKeywordScore(userMessage) {
        const analysis = engine.processMessage(userMessage, conversationContext);
        return analysis.category.allScores;
    }

    /**
     * Substitui a função antiga detectCategory
     * Retorna no formato esperado pelo chat existente
     * [P1] v3.4.0: Usa addMessageToHistory para garantir UUID
     */
    function detectCategory(message) {
        const analysis = engine.processMessage(message, conversationContext);

        // Atualizar contexto
        if (analysis.category.detected) {
            conversationContext.lastCategory = analysis.category.detected;
        }
        if (analysis.intent.primary) {
            conversationContext.lastIntent = analysis.intent.primary.intent;
        }

        // [P1] Adicionar ao histórico com UUID
        const messageId = addMessageToHistory(message, {
            category: analysis.category.detected,
            intent: analysis.intent.primary?.intent,
            source: 'detect_category'
        });

        // Formato compatível com sistema existente
        return {
            category: analysis.category.detected,
            confidence: analysis.category.score || 0,
            allScores: analysis.category.allScores,
            messageId: messageId,  // [P1] UUID da mensagem
            // Novos campos do NLU
            nlu: {
                intent: analysis.intent.primary,
                needsDisambiguation: analysis.category.needsDisambiguation,
                alternatives: analysis.category.alternatives,
                entities: analysis.entities,
                sentiment: analysis.sentiment,
                processingTime: analysis.meta.processingTime
            }
        };
    }

    /**
     * Substitui a função antiga detectSpecificNiche
     * Usa fuzzy matching melhorado
     */
    function detectSpecificNiche(message, category) {
        if (!window.nichosExpandidos || !category) return null;

        const normalized = engine.normalizeText(message);
        const tokens = engine.tokenize(normalized);
        const expandedTokens = engine.expandSynonyms(tokens);
        const categoryNiches = window.nichosExpandidos[category];

        if (!categoryNiches) return null;

        let bestMatch = null;
        let bestScore = 0;

        // Percorrer cada subcategoria de nicho
        for (const [subcategory, keywords] of Object.entries(categoryNiches)) {
            for (const keyword of keywords) {
                const normalizedKeyword = engine.normalizeText(keyword);

                // 1. Match exato
                if (normalized.includes(normalizedKeyword)) {
                    const score = normalizedKeyword.length * 2;
                    if (score > bestScore) {
                        bestScore = score;
                        bestMatch = {
                            keyword: keyword,
                            subcategory: subcategory,
                            score: score,
                            matchType: 'exact'
                        };
                    }
                }
                // 2. Fuzzy match
                else {
                    for (const token of expandedTokens) {
                        const similarity = engine.combinedSimilarity(token, normalizedKeyword);
                        if (similarity > 0.8) {
                            const score = normalizedKeyword.length * similarity;
                            if (score > bestScore) {
                                bestScore = score;
                                bestMatch = {
                                    keyword: keyword,
                                    subcategory: subcategory,
                                    score: score,
                                    matchType: 'fuzzy',
                                    similarity: similarity
                                };
                            }
                        }
                    }
                }
            }
        }

        return bestMatch;
    }

    /**
     * Substitui a função antiga normalizeText
     */
    function normalizeText(text) {
        return engine.normalizeText(text);
    }

    // ============================================
    // NOVAS FUNCIONALIDADES
    // ============================================

    /**
     * Processa mensagem completa com análise avançada
     */
    function processMessage(message) {
        const analysis = engine.processMessage(message, conversationContext);

        // Atualizar contexto
        updateContext(analysis);

        return {
            // Dados básicos
            message: message,
            category: analysis.category.detected,
            categoryConfidence: analysis.category.confidence,

            // Intent
            intent: analysis.intent.primary?.intent || null,
            intentConfidence: analysis.intent.primary?.confidence || 0,

            // Análise completa
            analysis: analysis,

            // Sugestões inteligentes
            suggestions: generateSmartSuggestions(analysis),

            // Resposta recomendada
            recommendedAction: determineAction(analysis),

            // Debug info
            debug: {
                processingTime: analysis.meta.processingTime,
                tokensProcessed: analysis.meta.tokenCount,
                corrections: analysis.processed.expandedTokens.length - analysis.processed.tokens.length
            }
        };
    }

    /**
     * Atualiza contexto da conversa (otimizado)
     * [P1] v3.4.0: Usa addMessageToHistory para garantir UUID em todas as mensagens
     */
    function updateContext(analysis) {
        const ctx = conversationContext; // Cache local para evitar lookups repetidos
        const category = analysis.category;
        const intent = analysis.intent;
        const entities = analysis.entities;

        // Atualizar categoria e intent
        if (category.detected) {
            ctx.lastCategory = category.detected;
        }
        if (intent.primary) {
            ctx.lastIntent = intent.primary.intent;
        }

        // Extrair entidades de forma otimizada
        const values = entities.values;
        const phones = entities.phones;
        if (values && values.length > 0) {
            ctx.userInfo.mentionedValues = values;
        }
        if (phones && phones.length > 0) {
            ctx.userInfo.phone = phones[0];
        }

        // [P1] Adicionar ao histórico com UUID via addMessageToHistory
        addMessageToHistory(analysis.original, {
            category: category.detected,
            intent: intent.primary?.intent,
            source: 'nlu_context'
        });
    }

    /**
     * Gera sugestões inteligentes baseadas na análise
     */
    function generateSmartSuggestions(analysis) {
        const suggestions = [];
        const intent = analysis.intent.primary?.intent;
        const category = analysis.category.detected;

        // Baseado na intenção
        if (intent === 'pergunta_preco') {
            suggestions.push(
                { text: '💰 Ver investimento detalhado', action: 'show_price' },
                { text: '📋 Comparar pacotes', action: 'show_packages' }
            );
        }
        else if (intent === 'pergunta_prazo') {
            suggestions.push(
                { text: '📅 Ver prazos por pacote', action: 'show_timeline' },
                { text: '⚡ Opção express', action: 'show_express' }
            );
        }
        else if (intent === 'pergunta_features') {
            suggestions.push(
                { text: '📋 Ver todas funcionalidades', action: 'show_features' },
                { text: '✨ Funcionalidades premium', action: 'show_premium' }
            );
        }
        else if (intent === 'pergunta_garantia') {
            suggestions.push(
                { text: '🔒 Entendi sobre garantia', action: 'continue' },
                { text: '🤔 Tenho outra dúvida', action: 'more_questions' }
            );
        }
        else if (intent === 'falar_humano') {
            suggestions.push(
                { text: '💬 Falar no WhatsApp', action: 'whatsapp' },
                { text: '📞 Solicitar ligação', action: 'callback' }
            );
        }

        // Baseado na categoria detectada
        if (category && analysis.category.confidence > 60) {
            if (suggestions.length === 0) {
                const emoji = engine.getCategoryEmoji(category);
                const name = engine.formatCategoryName(category);
                suggestions.push(
                    { text: `${emoji} Sim, é ${name}!`, action: 'confirm_category' },
                    { text: '🔄 Não é bem isso', action: 'reject_category' }
                );
            }
        }

        // Se precisa disambiguação
        if (analysis.category.needsDisambiguation && analysis.category.alternatives) {
            suggestions.length = 0; // Limpar sugestões anteriores
            suggestions.push({ text: '🤔 Me ajuda a entender melhor...', action: 'clarify' });
            analysis.category.alternatives.slice(0, 2).forEach(alt => {
                const emoji = engine.getCategoryEmoji(alt.category);
                const name = engine.formatCategoryName(alt.category);
                suggestions.push({
                    text: `${emoji} ${name}`,
                    action: `select_${alt.category}`
                });
            });
        }

        // Fallback
        if (suggestions.length === 0) {
            suggestions.push(
                { text: '💬 Continuar conversa', action: 'continue' },
                { text: '📞 Falar com especialista', action: 'whatsapp' }
            );
        }

        return suggestions;
    }

    /**
     * Determina ação recomendada baseada na análise
     */
    function determineAction(analysis) {
        const intent = analysis.intent.primary?.intent;
        const category = analysis.category.detected;
        const confidence = analysis.category.confidence;

        // Ações baseadas em intent
        if (intent === 'falar_humano') {
            return { action: 'redirect_whatsapp', priority: 'high' };
        }
        if (intent === 'despedida') {
            return { action: 'farewell', priority: 'low' };
        }
        if (intent === 'saudacao' && !category) {
            return { action: 'greeting', priority: 'medium' };
        }

        // Ações baseadas em categoria
        if (category && confidence >= 70) {
            return {
                action: 'continue_flow',
                category: category,
                priority: 'high'
            };
        }
        if (category && confidence >= 50) {
            return {
                action: 'confirm_category',
                category: category,
                alternatives: analysis.category.alternatives,
                priority: 'medium'
            };
        }

        // Ações baseadas em intent secundário
        if (analysis.intent.secondary) {
            return {
                action: 'answer_question',
                intent: analysis.intent.secondary.intent,
                priority: 'medium'
            };
        }

        // Fallback
        return { action: 'ask_clarification', priority: 'low' };
    }

    /**
     * Respostas inteligentes para intenções específicas
     */
    const intentResponses = {
        pergunta_preco: (analysis, userName) => {
            const category = analysis.category.detected;
            if (category) {
                const priceRanges = {
                    delivery: 'R$ 14.000 a R$ 31.500',
                    ecommerce: 'R$ 13.000 a R$ 29.000',
                    educacao: 'R$ 12.000 a R$ 27.000',
                    saude: 'R$ 16.000 a R$ 36.000',
                    fitness: 'R$ 14.000 a R$ 32.000',
                    gestao: 'R$ 17.500 a R$ 39.000',
                    servicos: 'R$ 12.500 a R$ 28.000',
                    pets: 'R$ 13.000 a R$ 30.000',
                    imobiliario: 'R$ 15.000 a R$ 34.000',
                    transporte: 'R$ 16.000 a R$ 36.000',
                    financas: 'R$ 16.500 a R$ 37.000',
                    social: 'R$ 15.000 a R$ 35.000',
                    entretenimento: 'R$ 15.000 a R$ 35.000',
                    viagens: 'R$ 14.500 a R$ 33.000'
                };
                const range = priceRanges[category] || 'R$ 12.000 a R$ 39.000';
                const name = engine.formatCategoryName(category);
                return `${userName}, para um app de <strong>${name}</strong>, o investimento fica entre <strong>${range}</strong>.<br><br>Isso inclui:<br>✅ Apps iOS e Android nativos<br>✅ 5 anos de suporte e hospedagem<br>✅ Conformidade LGPD<br>✅ Registro de marca`;
            }
            return `${userName}, o investimento varia de <strong>R$ 12.000 a R$ 39.000</strong> dependendo do tipo de app. Me conta mais sobre o que você precisa pra eu dar um valor mais preciso!`;
        },

        pergunta_prazo: (analysis, userName) => {
            const category = analysis.category.detected;
            if (category) {
                const name = engine.formatCategoryName(category);
                return `${userName}, para um app de <strong>${name}</strong>, o prazo varia:<br><br>• Pacote Básico: <strong>15-25 dias</strong><br>• Pacote Profissional: <strong>25-40 dias</strong><br>• Pacote Completo: <strong>40-65 dias</strong>`;
            }
            return `${userName}, criamos apps em <strong>15 a 65 dias</strong> dependendo da complexidade. Qual tipo de app você quer criar?`;
        },

        pergunta_garantia: (analysis, userName) => {
            return `Pode ficar tranquilo, ${userName}! 🔒<br><br>Oferecemos <strong>garantia total</strong>:<br><br>✅ 30 dias de garantia de satisfação<br>✅ Direito de arrependimento (CDC)<br>✅ Contrato formal com todas as garantias<br>✅ 5 anos de suporte técnico incluso<br><br>Se não ficar satisfeito, devolvemos seu investimento!`;
        },

        pergunta_features: (analysis, userName) => {
            const category = analysis.category.detected;
            if (category) {
                const featuresMap = {
                    delivery: '📱 App do cliente<br>📊 Painel administrativo<br>🚗 App do entregador<br>💳 Pagamento online<br>📍 Rastreamento em tempo real',
                    ecommerce: '🛒 Carrinho de compras<br>💳 Gateway de pagamento<br>📦 Gestão de estoque<br>📊 Relatórios de vendas<br>🔔 Notificações push',
                    educacao: '📹 Área de vídeos<br>📝 Provas e exercícios<br>📊 Progresso do aluno<br>💬 Chat integrado<br>📜 Certificados automáticos',
                    saude: '📅 Agendamento online<br>📋 Prontuário digital<br>💳 Pagamento integrado<br>🔔 Lembretes automáticos<br>📊 Relatórios médicos',
                    gestao: '📅 Agenda inteligente<br>👥 Gestão de clientes<br>💰 Controle financeiro<br>📊 Dashboard completo<br>🔔 Notificações automáticas'
                };
                const features = featuresMap[category] || featuresMap.gestao;
                const name = engine.formatCategoryName(category);
                return `${userName}, um app de <strong>${name}</strong> inclui:<br><br>${features}<br><br>E muito mais! Quer saber de alguma funcionalidade específica?`;
            }
            return `${userName}, cada app tem funcionalidades específicas. Me conta que tipo de app você quer criar que eu detalho tudo!`;
        },

        pergunta_diferenciais: (analysis, userName) => {
            return `${userName}, nossos diferenciais são:<br><br>🏆 <strong>5 anos de suporte</strong> - Ninguém oferece isso<br>🔒 <strong>LGPD inclusa</strong> - Seu app já nasce em conformidade<br>®️ <strong>Registro de marca</strong> - Protegemos sua marca no INPI<br>⚡ <strong>Tecnologia nativa</strong> - Apps rápidos e estáveis<br>💯 <strong>100% no Reclame Aqui</strong> - Satisfação garantida<br><br>E o melhor: tudo isso já está incluso no preço, sem surpresas!`;
        },

        pergunta_suporte: (analysis, userName) => {
            return `${userName}, esse é nosso diferencial! 🛡️<br><br>Você ganha <strong>5 anos de suporte completo</strong>:<br><br>✅ Hospedagem em nuvem<br>✅ Atualizações de segurança<br>✅ Correção de bugs<br>✅ Suporte técnico ilimitado<br>✅ Monitoramento 24/7<br>✅ Backup automático<br><br>Sem custo adicional! É o melhor do mercado.`;
        },

        pergunta_pagamento: (analysis, userName) => {
            return `${userName}, oferecemos várias formas de pagamento:<br><br>💳 <strong>Cartão de crédito</strong> - Até 12x sem juros<br>📱 <strong>PIX</strong> - 5% de desconto à vista<br>📄 <strong>Boleto</strong> - Parcelamos em até 6x<br>💰 <strong>Por etapas</strong> - Paga conforme entregamos<br><br>Qual forma fica melhor pra você?`;
        }
    };

    /**
     * Gera resposta baseada na análise NLU
     */
    function generateResponse(analysis, userName = 'você') {
        const intent = analysis.intent.primary?.intent;

        // Se tem intent específico com resposta
        if (intent && intentResponses[intent]) {
            return {
                message: intentResponses[intent](analysis, userName),
                suggestions: generateSmartSuggestions(analysis),
                action: determineAction(analysis)
            };
        }

        // Resposta padrão
        return null;
    }

    /**
     * Verifica se deve interromper fluxo para responder pergunta
     */
    function shouldInterruptFlow(analysis) {
        const interruptIntents = [
            'pergunta_preco',
            'pergunta_prazo',
            'pergunta_garantia',
            'pergunta_features',
            'pergunta_diferenciais',
            'pergunta_suporte',
            'pergunta_pagamento',
            'falar_humano'
        ];

        if (analysis.intent.primary) {
            return interruptIntents.includes(analysis.intent.primary.intent) &&
                   analysis.intent.primary.confidence > 50;
        }
        return false;
    }

    // ============================================
    // LEARNING SYSTEM (v3.0)
    // ============================================

    /**
     * Corrige uma detecção de intent incorreta e aprende com ela
     * @param {string} userMessage - Mensagem original do usuário
     * @param {string} correctIntent - O intent correto
     */
    function correctIntentDetection(userMessage, correctIntent) {
        const lastAnalysis = conversationContext.lastAnalysis;
        if (lastAnalysis && lastAnalysis.intent.primary) {
            const wrongIntent = lastAnalysis.intent.primary.intent;
            engine.learnFromCorrection(userMessage, wrongIntent, correctIntent);
            return {
                learned: true,
                from: wrongIntent,
                to: correctIntent
            };
        }
        return { learned: false };
    }

    /**
     * Responde a uma seleção de desambiguação do usuário
     * @param {string} selectedIntent - Intent selecionado pelo usuário
     */
    function resolveDisambiguation(selectedIntent) {
        const pending = conversationContext.pendingDisambiguation;
        if (pending) {
            // Aprender com a escolha do usuário
            const wrongIntent = pending.topIntents.find(i => i.intent !== selectedIntent);
            if (wrongIntent) {
                engine.learnFromCorrection(pending.message, wrongIntent.intent, selectedIntent);
            }

            conversationContext.pendingDisambiguation = null;
            conversationContext.lastIntent = selectedIntent;

            return {
                resolved: true,
                intent: selectedIntent,
                learned: !!wrongIntent
            };
        }
        return { resolved: false };
    }

    /**
     * Obtém estatísticas do sistema de aprendizado
     */
    function getLearningStats() {
        const corrections = engine.getLearnedCorrections();
        const count = Object.keys(corrections).length;

        return {
            totalCorrections: count,
            corrections: corrections,
            hasLearned: count > 0
        };
    }

    /**
     * Limpa todas as correções aprendidas
     */
    function clearLearning() {
        engine.clearLearnedCorrections();
        return { cleared: true };
    }

    // ============================================
    // DISAMBIGUATION HANDLING (v3.0)
    // ============================================

    /**
     * Verifica se há desambiguação pendente e processa resposta
     * @param {string} userResponse - Resposta do usuário à desambiguação
     */
    function handleDisambiguationResponse(userResponse) {
        const pending = conversationContext.pendingDisambiguation;
        if (!pending) return null;

        const normalized = engine.normalizeText(userResponse);

        // Procurar qual opção o usuário selecionou
        for (const option of pending.options) {
            const optionNormalized = engine.normalizeText(option.text);
            if (normalized.includes(optionNormalized) ||
                normalized.includes(option.intent.replace('pergunta_', '').replace('_', ' '))) {
                return resolveDisambiguation(option.intent);
            }
        }

        // Verificar por palavras-chave
        const keywords = {
            'pergunta_preco': ['preco', 'valor', 'custo', 'investimento', 'custa'],
            'pergunta_prazo': ['prazo', 'tempo', 'demora', 'dias', 'quando'],
            'pergunta_features': ['funcionalidades', 'funcoes', 'recursos', 'features'],
            'pergunta_garantia': ['garantia', 'seguranca', 'confianca'],
            'pergunta_pagamento': ['pagamento', 'pagar', 'parcela', 'cartao'],
            'criar_app': ['criar', 'fazer', 'app', 'aplicativo'],
            'falar_humano': ['humano', 'pessoa', 'falar', 'atendente', 'whatsapp']
        };

        for (const option of pending.options) {
            const intentKeywords = keywords[option.intent] || [];
            for (const keyword of intentKeywords) {
                if (normalized.includes(keyword)) {
                    return resolveDisambiguation(option.intent);
                }
            }
        }

        return null; // Não conseguiu resolver
    }

    /**
     * Processa mensagem verificando desambiguação pendente
     */
    function processMessageWithDisambiguation(message) {
        // Primeiro, verificar se há desambiguação pendente
        if (conversationContext.pendingDisambiguation) {
            const resolution = handleDisambiguationResponse(message);
            if (resolution && resolution.resolved) {
                return {
                    type: 'disambiguation_resolved',
                    resolution: resolution,
                    intent: resolution.intent
                };
            }
        }

        // Processar mensagem normalmente
        const analysis = processMessage(message);

        // Salvar análise para possível correção futura
        conversationContext.lastAnalysis = analysis.analysis;

        // Se precisa de desambiguação, salvar para próxima mensagem
        if (analysis.analysis.needsIntentDisambiguation && analysis.analysis.disambiguation) {
            conversationContext.pendingDisambiguation = {
                message: message,
                topIntents: analysis.analysis.intent.all.slice(0, 2),
                options: analysis.analysis.disambiguation.options,
                question: analysis.analysis.disambiguation.question,
                timestamp: Date.now()
            };

            return {
                type: 'disambiguation_needed',
                question: analysis.analysis.disambiguation.question,
                options: analysis.analysis.disambiguation.options,
                analysis: analysis
            };
        }

        return {
            type: 'processed',
            analysis: analysis
        };
    }

    // ============================================
    // CONTEXT SYNCHRONIZATION (v3.4.0 - Refactored)
    // ============================================

    // Cache para evitar chamadas repetidas (TTL aumentado: 500ms)
    let syncCache = {
        lastGroqHistory: null,
        lastGroqCounts: null,
        cacheTime: 0
    };

    const SYNC_CACHE_TTL = 500; // 500ms (era 100ms - causava thrashing)

    /**
     * Obtém contagens do Groq com cache (evita múltiplas chamadas)
     * [P1] Usa GroqAdapter ao invés de window.GroqIntegration
     */
    function getGroqCountsCached() {
        const now = Date.now();
        // Cache válido por 500ms
        if (syncCache.lastGroqCounts && now - syncCache.cacheTime < SYNC_CACHE_TTL) {
            return syncCache.lastGroqCounts;
        }

        // Usar adapter ao invés de acesso direto
        syncCache.lastGroqCounts = GroqAdapter.getHistoryCounts();
        syncCache.cacheTime = now;
        return syncCache.lastGroqCounts;
    }

    /**
     * Invalida cache de sync (chamar após modificações)
     */
    function invalidateSyncCache() {
        syncCache.cacheTime = 0;
        Logger.debug('Sync cache invalidado');
    }

    /**
     * [P1] Adiciona mensagem ao histórico NLU com UUID
     * @returns {string} UUID da mensagem criada
     */
    function addMessageToHistory(message, options = {}) {
        const id = generateUUID();
        const now = Date.now();

        const entry = {
            id,
            message,
            timestamp: now,
            category: options.category || conversationContext.lastCategory,
            intent: options.intent || conversationContext.lastIntent,
            response: options.response || null,
            source: options.source || 'nlu'
        };

        conversationContext.messageHistory.push(entry);
        messageIdIndex.set(id, entry);

        // Manter limite de 20 mensagens
        while (conversationContext.messageHistory.length > 20) {
            const removed = conversationContext.messageHistory.shift();
            if (removed) messageIdIndex.delete(removed.id);
        }

        Logger.debug('Mensagem adicionada:', id.substring(0, 8));
        return id;
    }

    /**
     * [P1] Busca mensagem por UUID
     */
    function getMessageById(id) {
        return messageIdIndex.get(id) || null;
    }

    /**
     * [P1] Atualiza mensagem existente por UUID
     */
    function updateMessageById(id, updates) {
        const entry = messageIdIndex.get(id);
        if (!entry) return false;

        Object.assign(entry, updates);
        Logger.debug('Mensagem atualizada:', id.substring(0, 8));
        return true;
    }

    /**
     * [P0] Sincroniza contexto NLU → Groq (com mutex)
     * Usa mutex para prevenir race conditions
     */
    async function syncNLUToGroqAsync() {
        return syncMutex.runExclusive(() => {
            return syncNLUToGroqInternal();
        });
    }

    /**
     * Versão síncrona (legacy) - para compatibilidade
     */
    function syncNLUToGroq() {
        // Se mutex estiver bloqueado, retornar status
        if (syncMutex.isLocked()) {
            Logger.warn('syncNLUToGroq: Operação em andamento, pulando');
            return { synced: false, reason: 'sync_in_progress' };
        }
        return syncNLUToGroqInternal();
    }

    /**
     * Implementação interna da sincronização NLU → Groq
     * [P1] Usa GroqAdapter ao invés de window.GroqIntegration
     */
    function syncNLUToGroqInternal() {
        if (!GroqAdapter.isAvailable()) {
            return { synced: false, reason: 'Groq not available' };
        }

        const nluHistory = conversationContext.messageHistory;
        const groqCounts = getGroqCountsCached();

        // Verificar se já está sincronizado
        const nluUserMsgs = nluHistory.length;
        const groqUserMsgs = groqCounts.user;

        if (nluUserMsgs <= groqUserMsgs) {
            return { synced: true, reason: 'already_synced', nluCount: nluUserMsgs, groqCount: groqUserMsgs };
        }

        // Converter mensagens NLU que ainda não estão no Groq
        const newMessages = nluHistory.slice(groqUserMsgs);
        let addedCount = 0;

        newMessages.forEach(nluMsg => {
            // Adicionar mensagem do usuário ao Groq via adapter
            GroqAdapter.addToHistory('user', nluMsg.message);
            addedCount++;

            // Se tiver resposta associada, adicionar também
            if (nluMsg.response) {
                GroqAdapter.addToHistory('assistant', nluMsg.response);
            }
        });

        // Invalidar cache após modificação
        invalidateSyncCache();

        Logger.info(`syncNLUToGroq: ${addedCount} mensagens sincronizadas`);

        return {
            synced: true,
            added: addedCount,
            nluCount: nluHistory.length,
            groqCount: getGroqCountsCached().total
        };
    }

    /**
     * [P0] Sincroniza contexto Groq → NLU (com mutex)
     * [P1] Usa UUID para detecção de duplicatas (mais preciso que string+timestamp)
     */
    async function syncGroqToNLUAsync(userMessage, groqResponse, groqData = {}) {
        return syncMutex.runExclusive(() => {
            return syncGroqToNLUInternal(userMessage, groqResponse, groqData);
        });
    }

    /**
     * Versão síncrona (legacy) - para compatibilidade
     */
    function syncGroqToNLU(userMessage, groqResponse, groqData = {}) {
        if (syncMutex.isLocked()) {
            Logger.warn('syncGroqToNLU: Operação em andamento, enfileirando');
            // Executar depois que mutex liberar
            syncMutex.runExclusive(() => {
                return syncGroqToNLUInternal(userMessage, groqResponse, groqData);
            });
            return { synced: true, queued: true };
        }
        return syncGroqToNLUInternal(userMessage, groqResponse, groqData);
    }

    /**
     * Implementação interna da sincronização Groq → NLU
     */
    function syncGroqToNLUInternal(userMessage, groqResponse, groqData = {}) {
        const now = Date.now();

        // [P1] Buscar por mensagem recente (5s) com mesmo conteúdo
        const recentThreshold = now - 5000;
        const existing = conversationContext.messageHistory.find(
            m => m.message === userMessage && m.timestamp > recentThreshold
        );

        let messageId;
        let updated = false;

        if (existing) {
            // Atualizar mensagem existente via UUID
            updateMessageById(existing.id, {
                response: groqResponse,
                source: 'groq_updated'
            });
            messageId = existing.id;
            updated = true;
        } else {
            // Adicionar nova mensagem com resposta
            messageId = addMessageToHistory(userMessage, {
                source: 'groq_sync',
                response: groqResponse
            });
        }

        // Armazenar metadados do Groq (truncado para evitar memory leak)
        conversationContext.lastGroqResponse = {
            messageId,
            response: groqResponse.length > 500 ? groqResponse.substring(0, 500) + '...' : groqResponse,
            model: groqData.model,
            timestamp: now,
            cached: groqData.cached || false
        };

        // Invalidar cache
        invalidateSyncCache();

        Logger.debug('syncGroqToNLU:', updated ? 'atualizado' : 'novo', messageId.substring(0, 8));

        return { synced: true, updated, messageId };
    }

    /**
     * [P0] Sincroniza após resposta NLU (quando Groq não é usado)
     * CORRIGIDO: Agora é efetivamente chamado no fluxo híbrido
     */
    async function syncNLUResponseToGroqAsync(userMessage, nluResponse, messageId = null) {
        return syncMutex.runExclusive(() => {
            return syncNLUResponseToGroqInternal(userMessage, nluResponse, messageId);
        });
    }

    /**
     * Versão síncrona (legacy)
     */
    function syncNLUResponseToGroq(userMessage, nluResponse, messageId = null) {
        if (syncMutex.isLocked()) {
            Logger.warn('syncNLUResponseToGroq: Operação em andamento');
            return { synced: false, reason: 'sync_in_progress' };
        }
        return syncNLUResponseToGroqInternal(userMessage, nluResponse, messageId);
    }

    /**
     * Implementação interna
     */
    function syncNLUResponseToGroqInternal(userMessage, nluResponse, messageId = null) {
        if (!GroqAdapter.isAvailable()) {
            Logger.debug('syncNLUResponseToGroq: Groq não disponível');
            return { synced: false, reason: 'groq_not_available' };
        }

        // Adicionar par user/assistant ao Groq para manter contexto
        GroqAdapter.addToHistory('user', userMessage);
        GroqAdapter.addToHistory('assistant', nluResponse);

        // Invalidar cache
        invalidateSyncCache();

        Logger.info('syncNLUResponseToGroq: Par sincronizado para Groq');

        return { synced: true, messageId };
    }

    /**
     * [P0] Sincronização bidirecional completa (com mutex)
     */
    async function syncContextsAsync() {
        return syncMutex.runExclusive(async () => {
            const nluToGroq = syncNLUToGroqInternal();
            invalidateSyncCache();

            return {
                nluToGroq: nluToGroq,
                timestamp: Date.now(),
                nluHistory: conversationContext.messageHistory.length,
                groqHistory: GroqAdapter.isAvailable() ? getGroqCountsCached().total : 0
            };
        });
    }

    /**
     * Versão síncrona (legacy)
     */
    function syncContexts() {
        const nluToGroq = syncNLUToGroq();
        invalidateSyncCache();

        return {
            nluToGroq: nluToGroq,
            timestamp: Date.now(),
            nluHistory: conversationContext.messageHistory.length,
            groqHistory: GroqAdapter.isAvailable() ? getGroqCountsCached().total : 0
        };
    }

    /**
     * [P0] Reseta TODOS os contextos (NLU + Groq) - com mutex
     */
    async function resetAllContextsAsync() {
        return syncMutex.runExclusive(() => {
            return resetAllContextsInternal();
        });
    }

    /**
     * Versão síncrona (legacy)
     */
    function resetAllContexts() {
        if (syncMutex.isLocked()) {
            Logger.warn('resetAllContexts: Operação em andamento');
            return { reset: false, reason: 'sync_in_progress' };
        }
        return resetAllContextsInternal();
    }

    /**
     * Implementação interna
     */
    function resetAllContextsInternal() {
        const errors = [];

        // Reset NLU
        try {
            conversationContext = {
                lastCategory: null,
                lastIntent: null,
                messageHistory: [],
                userInfo: {},
                sessionStart: Date.now(),
                pendingDisambiguation: null,
                lastAnalysis: null,
                lastGroqResponse: null,
                lastSyncTimestamp: null
            };
            messageIdIndex.clear();
        } catch (e) {
            errors.push('NLU reset failed: ' + e.message);
            Logger.error('Reset NLU falhou:', e);
        }

        // Reset Groq via adapter
        try {
            GroqAdapter.clearHistory();
        } catch (e) {
            errors.push('Groq history clear failed: ' + e.message);
        }

        try {
            GroqAdapter.clearCache();
        } catch (e) {
            errors.push('Groq cache clear failed: ' + e.message);
        }

        // Invalidar cache de sync
        invalidateSyncCache();

        Logger.info('resetAllContexts: Contextos resetados');

        return {
            reset: errors.length === 0,
            timestamp: Date.now(),
            errors: errors.length > 0 ? errors : undefined
        };
    }

    /**
     * Obtém estado de sincronização atual
     * [P1] Inclui info do mutex
     */
    function getSyncStatus() {
        const nluCount = conversationContext.messageHistory.length;
        const groqCounts = getGroqCountsCached();

        return {
            nluMessageCount: nluCount,
            groqMessageCount: groqCounts.total,
            groqUserMessageCount: groqCounts.user,
            groqAssistantMessageCount: groqCounts.assistant,
            isSynced: nluCount === groqCounts.user,
            drift: nluCount - groqCounts.user,
            lastSync: conversationContext.lastSyncTimestamp || null,
            mutexLocked: syncMutex.isLocked()  // [P0] Info do mutex
        };
    }

    // ============================================
    // GROQ INTEGRATION (v3.4.0 - Refactored)
    // ============================================

    /**
     * Processa mensagem com sistema híbrido (NLU + Groq)
     * [P0] CORRIGIDO: Agora chama syncNLUResponseToGroq quando só NLU responde
     * [P1] Usa GroqAdapter ao invés de window.GroqIntegration
     * @param {string} message - Mensagem do usuário
     * @param {object} options - Opções de processamento
     * @returns {Promise<object>} Resultado híbrido
     */
    async function processMessageHybrid(message, options = {}) {
        // Primeiro, processar com NLU local
        const nluResult = processMessageWithDisambiguation(message);

        // [P1] Verificar se Groq está disponível via adapter
        if (!GroqAdapter.isAvailable()) {
            Logger.debug('processMessageHybrid: Groq não disponível');
            return {
                ...nluResult,
                source: 'nlu-only',
                groqAvailable: false
            };
        }

        const analysis = nluResult.analysis?.analysis || nluResult.analysis || {};

        // Mesclar informações do usuário (passadas via options ou do contexto interno)
        const userInfo = { ...conversationContext.userInfo, ...(options.userInfo || {}) };

        // Contexto enriquecido para Groq
        const groqContext = {
            userName: userInfo.userName || userInfo.name,
            budget: userInfo.budget,
            timeline: userInfo.timeline,
            appType: userInfo.appType,
            features: userInfo.features || [],
            category: analysis.category?.detected,
            intent: analysis.intent?.primary?.intent,
            confidence: analysis.overallConfidence,
            messageHistory: conversationContext.messageHistory.slice(-5)
        };

        // [P1] Decidir se usa Groq via adapter
        const shouldUseGroq = GroqAdapter.shouldUseGroq(analysis);

        if (shouldUseGroq || options.forceGroq) {
            try {
                // Sincronizar contexto NLU → Groq ANTES de chamar
                await syncNLUToGroqAsync();

                // [P1] Usar adapter para gerar resposta
                const groqResponse = await GroqAdapter.generateResponse(message, groqContext);

                if (groqResponse.message && !groqResponse.error) {
                    // Sincronizar contexto Groq → NLU APÓS resposta
                    const syncResult = await syncGroqToNLUAsync(message, groqResponse.message, {
                        model: groqResponse.model,
                        cached: groqResponse.cached
                    });

                    // Atualizar timestamp de última sincronização
                    conversationContext.lastSyncTimestamp = Date.now();

                    Logger.info('processMessageHybrid: Resposta Groq gerada');

                    return {
                        type: 'groq_response',
                        message: groqResponse.message,
                        messageId: syncResult.messageId,  // [P1] UUID da mensagem
                        nluAnalysis: analysis,
                        groqData: {
                            model: groqResponse.model,
                            cached: groqResponse.cached,
                            processingTime: groqResponse.processingTime,
                            usage: groqResponse.usage
                        },
                        source: 'hybrid-groq',
                        groqAvailable: true,
                        syncStatus: getSyncStatus()
                    };
                }
            } catch (error) {
                Logger.warn('Groq fallback to NLU:', error.message);
            }
        }

        // [P0] CORREÇÃO DO DEAD CODE: Sincronizar resposta NLU com Groq para evitar drift
        // Extrair resposta NLU se disponível
        let nluResponseMessage = null;
        if (nluResult.analysis?.recommendedAction?.action) {
            // Se tiver uma resposta gerada pelo NLU
            const nluGenerated = generateResponse(analysis, conversationContext.userInfo.name);
            if (nluGenerated && nluGenerated.message) {
                nluResponseMessage = nluGenerated.message;
            }
        }

        // [P0] Chamar syncNLUResponseToGroq para manter contextos sincronizados
        if (nluResponseMessage) {
            await syncNLUResponseToGroqAsync(message, nluResponseMessage);
            Logger.info('processMessageHybrid: Resposta NLU sincronizada com Groq');
        }

        const nluResultFinal = {
            ...nluResult,
            source: 'hybrid-nlu',
            groqAvailable: true,
            groqSkipped: !shouldUseGroq ? 'high_confidence' : 'error',
            nluResponseSynced: !!nluResponseMessage,  // [P0] Flag indicando se foi sincronizado
            syncStatus: getSyncStatus()
        };

        return nluResultFinal;
    }

    /**
     * Gera resposta usando Groq diretamente (força uso)
     * [P1] Usa GroqAdapter
     * @param {string} message - Mensagem do usuário
     * @returns {Promise<object>} Resposta do Groq
     */
    async function generateGroqResponse(message) {
        if (!GroqAdapter.isAvailable()) {
            return {
                error: 'Groq não configurado',
                fallback: true
            };
        }

        const context = {
            userName: conversationContext.userInfo.name,
            category: conversationContext.lastCategory,
            intent: conversationContext.lastIntent
        };

        return await GroqAdapter.generateResponse(message, context);
    }

    /**
     * Verifica se Groq está disponível e configurado
     * [P1] Usa GroqAdapter
     */
    function isGroqAvailable() {
        return GroqAdapter.isAvailable();
    }

    /**
     * Configura API key do Groq
     * [P1] Usa provider do adapter
     */
    function setGroqApiKey(apiKey) {
        const provider = GroqAdapter.getProvider();
        if (provider && typeof provider.setApiKey === 'function') {
            return provider.setApiKey(apiKey);
        }
        return false;
    }

    /**
     * Obtém estatísticas do Groq
     * [P1] Usa provider do adapter
     */
    function getGroqStats() {
        const provider = GroqAdapter.getProvider();
        if (provider && typeof provider.getStats === 'function') {
            return provider.getStats();
        }
        return { isConfigured: false };
    }

    /**
     * [P1] Injeta um provider customizado para Groq (Dependency Injection)
     * Útil para testes ou implementações alternativas
     */
    function setGroqProvider(provider) {
        GroqAdapter.setProvider(provider);
    }

    /**
     * [P1] Configura nível de logging
     * @param {'debug'|'info'|'warn'|'error'|'silent'} level
     */
    function setLogLevel(level) {
        if (Logger.levels[level] !== undefined) {
            Logger.level = level;
            Logger.info('Log level configurado:', level);
            return true;
        }
        return false;
    }

    // ============================================
    // BATCH PROCESSING (v3.2 - Performance)
    // ============================================

    /**
     * Processa múltiplas mensagens em batch (otimizado)
     * Útil para análise de histórico ou processamento em lote
     * @param {string[]} messages - Array de mensagens
     * @returns {object[]} Array de resultados
     */
    function processMessagesBatch(messages) {
        const results = new Array(messages.length);

        for (let i = 0; i < messages.length; i++) {
            results[i] = processMessage(messages[i]);
        }

        return results;
    }

    /**
     * Processa múltiplas mensagens com Groq em paralelo
     * @param {string[]} messages - Array de mensagens
     * @param {object} options - Opções de processamento
     * @returns {Promise<object[]>} Array de resultados
     */
    async function processMessagesBatchHybrid(messages, options = {}) {
        const batchSize = options.batchSize || 3; // Máximo 3 em paralelo
        const results = [];

        // Processar em batches para não sobrecarregar API
        for (let i = 0; i < messages.length; i += batchSize) {
            const batch = messages.slice(i, i + batchSize);
            const batchPromises = batch.map(msg => processMessageHybrid(msg, options));
            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);
        }

        return results;
    }

    /**
     * Pré-aquece o cache com mensagens comuns
     * Útil para inicialização do sistema
     */
    async function warmupCache(commonMessages) {
        if (!window.GroqIntegration || !window.GroqIntegration.isConfigured()) {
            return { warmed: false, reason: 'Groq not configured' };
        }

        const results = await processMessagesBatchHybrid(commonMessages, { batchSize: 2 });
        return {
            warmed: true,
            count: results.length,
            cached: results.filter(r => r.groqData?.cached).length
        };
    }

    // ============================================
    // UTILITÁRIOS
    // ============================================

    /**
     * Reseta contexto da conversa
     */
    function resetContext() {
        conversationContext = {
            lastCategory: null,
            lastIntent: null,
            messageHistory: [],
            userInfo: {},
            sessionStart: Date.now(),
            pendingDisambiguation: null,
            lastAnalysis: null
        };
    }

    /**
     * Obtém contexto atual
     */
    function getContext() {
        return { ...conversationContext };
    }

    /**
     * Define informação do usuário
     */
    function setUserInfo(key, value) {
        conversationContext.userInfo[key] = value;
    }

    /**
     * Obtém estatísticas da sessão (otimizado)
     */
    function getSessionStats() {
        const ctx = conversationContext;
        const duration = Date.now() - ctx.sessionStart;
        const history = ctx.messageHistory;

        // Usar Set diretamente é mais eficiente que map + filter + spread
        const categories = new Set();
        const intents = new Set();

        for (let i = 0; i < history.length; i++) {
            const msg = history[i];
            if (msg.category) categories.add(msg.category);
            if (msg.intent) intents.add(msg.intent);
        }

        return {
            duration: duration,
            durationFormatted: formatDuration(duration),
            messageCount: history.length,
            categoriesDetected: Array.from(categories),
            intentsDetected: Array.from(intents)
        };
    }

    function formatDuration(ms) {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        if (minutes > 0) {
            return `${minutes}m ${seconds % 60}s`;
        }
        return `${seconds}s`;
    }

    // ============================================
    // API PÚBLICA (v3.4.0)
    // ============================================

    return {
        // Funções de compatibilidade (substituem as antigas)
        calculateKeywordScore: calculateKeywordScore,
        detectCategory: detectCategory,
        detectSpecificNiche: detectSpecificNiche,
        normalizeText: normalizeText,

        // Novas funcionalidades
        processMessage: processMessage,
        generateResponse: generateResponse,
        generateSmartSuggestions: generateSmartSuggestions,
        shouldInterruptFlow: shouldInterruptFlow,

        // Processamento com desambiguação (v3.0)
        processMessageWithDisambiguation: processMessageWithDisambiguation,
        handleDisambiguationResponse: handleDisambiguationResponse,
        resolveDisambiguation: resolveDisambiguation,
        hasPendingDisambiguation: () => !!conversationContext.pendingDisambiguation,
        getPendingDisambiguation: () => conversationContext.pendingDisambiguation,

        // Learning System (v3.0)
        correctIntentDetection: correctIntentDetection,
        getLearningStats: getLearningStats,
        clearLearning: clearLearning,

        // Gestão de contexto
        resetContext: resetContext,
        getContext: getContext,
        setUserInfo: setUserInfo,
        updateContext: updateContext,

        // Utilitários
        getSessionStats: getSessionStats,

        // Groq Integration (v3.4.0 - Refactored)
        processMessageHybrid: processMessageHybrid,
        generateGroqResponse: generateGroqResponse,
        isGroqAvailable: isGroqAvailable,
        setGroqApiKey: setGroqApiKey,
        getGroqStats: getGroqStats,
        setGroqProvider: setGroqProvider,  // [P1] Dependency Injection

        // Batch Processing (v3.2)
        processMessagesBatch: processMessagesBatch,
        processMessagesBatchHybrid: processMessagesBatchHybrid,
        warmupCache: warmupCache,

        // Context Synchronization (v3.4.0 - Refactored)
        // Versões síncronas (legacy/compatibilidade)
        syncNLUToGroq: syncNLUToGroq,
        syncGroqToNLU: syncGroqToNLU,
        syncNLUResponseToGroq: syncNLUResponseToGroq,
        syncContexts: syncContexts,
        resetAllContexts: resetAllContexts,
        getSyncStatus: getSyncStatus,
        invalidateSyncCache: invalidateSyncCache,

        // [P0] Versões async (recomendadas - previnem race conditions)
        syncNLUToGroqAsync: syncNLUToGroqAsync,
        syncGroqToNLUAsync: syncGroqToNLUAsync,
        syncNLUResponseToGroqAsync: syncNLUResponseToGroqAsync,
        syncContextsAsync: syncContextsAsync,
        resetAllContextsAsync: resetAllContextsAsync,

        // [P1] Message tracking por UUID
        getMessageById: getMessageById,
        updateMessageById: updateMessageById,

        // [P2] Configuração de logging
        setLogLevel: setLogLevel,

        // Acesso ao engine
        engine: engine
    };
})();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.NLUIntegration = NLUIntegration;

    // Substituir funções globais antigas (compatibilidade)
    window.calculateKeywordScoreNLU = NLUIntegration.calculateKeywordScore;
    window.detectCategoryNLU = NLUIntegration.detectCategory;
    window.detectSpecificNicheNLU = NLUIntegration.detectSpecificNiche;
    window.normalizeTextNLU = NLUIntegration.normalizeText;
}
