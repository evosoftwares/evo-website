/**
 * ============================================
 * NLU ENGINE - NATURAL LANGUAGE UNDERSTANDING
 * Motor de Inteligência Artificial para Chat
 * ============================================
 *
 * Algoritmo multi-camadas com:
 * - Fuzzy Matching (Levenshtein + Jaro-Winkler)
 * - N-gram Analysis (unigrams, bigrams, trigrams)
 * - Multi-Intent Detection
 * - Context-Aware Scoring com Decay Temporal
 * - Synonym Expansion
 * - Confidence Scoring com Softmax Calibration
 * - Correção Ortográfica Automática
 * - Expansão de Abreviações
 * - Regex Pattern Matching Flexível
 * - Slot Filling para Entidades
 * - TF-IDF Real com Corpus de Treinamento
 * - Negative Patterns para Falsos Positivos
 * - Disambiguation Inteligente
 * - Machine Learning from User Corrections
 *
 * @version 3.0.0
 * @author Evo
 */

const NLUEngine = (function() {
    'use strict';

    // ============================================
    // CONFIGURAÇÕES GLOBAIS
    // ============================================
    const CONFIG = {
        FUZZY_THRESHOLD: 0.75,           // Threshold para fuzzy matching
        MIN_CONFIDENCE: 60,              // Confiança mínima para resposta direta
        DISAMBIGUATION_THRESHOLD: 70,    // Abaixo disso, pede confirmação
        CONTEXT_BOOST: 1.3,              // Boost para contexto da conversa
        TYPO_PENALTY: 0.15,              // Penalidade para typos corrigidos
        NGRAM_WEIGHT: {
            unigram: 1.0,
            bigram: 1.5,
            trigram: 2.0
        },
        // Novas configurações v3.0
        REGEX_WEIGHT: 1.5,               // Peso extra para match via regex
        SLOT_FILL_BOOST: 15,             // Boost quando slot é preenchido
        CONTEXT_WINDOW_SIZE: 5,          // Últimas N mensagens para contexto
        NEGATIVE_PATTERN_PENALTY: 0.5,   // Penalidade para negative patterns
        SOFTMAX_TEMPERATURE: 1.0,        // Temperatura para softmax calibration
        LEARNING_BOOST: 20,              // Boost para correções aprendidas
        TFIDF_SMOOTH: 0.5                // Suavização para TF-IDF
    };

    // ============================================
    // SISTEMA DE APRENDIZADO (LEARNING)
    // ============================================

    // Storage para correções aprendidas
    let learnedCorrections = new Map();

    // Carregar correções do localStorage se disponível
    function loadLearnedCorrections() {
        try {
            if (typeof localStorage !== 'undefined') {
                const saved = localStorage.getItem('nlu_corrections');
                if (saved) {
                    const data = JSON.parse(saved);
                    learnedCorrections = new Map(Object.entries(data));
                }
            }
        } catch (e) {
            console.warn('NLU: Could not load learned corrections', e);
        }
    }

    // Salvar correções no localStorage
    function saveLearnedCorrections() {
        try {
            if (typeof localStorage !== 'undefined') {
                const data = Object.fromEntries(learnedCorrections);
                localStorage.setItem('nlu_corrections', JSON.stringify(data));
            }
        } catch (e) {
            console.warn('NLU: Could not save learned corrections', e);
        }
    }

    /**
     * Aprende com correção do usuário
     * @param {string} userMessage - Mensagem original
     * @param {string} detectedIntent - Intent detectado incorretamente
     * @param {string} correctIntent - Intent correto informado pelo usuário
     */
    function learnFromCorrection(userMessage, detectedIntent, correctIntent) {
        const key = normalizeText(userMessage);
        learnedCorrections.set(key, {
            correct: correctIntent,
            wrong: detectedIntent,
            timestamp: Date.now(),
            count: (learnedCorrections.get(key)?.count || 0) + 1
        });
        saveLearnedCorrections();
        return true;
    }

    /**
     * Aplica correções aprendidas aos intents
     */
    function applyLearnedCorrections(message, intents) {
        const key = normalizeText(message);

        // Match exato
        if (learnedCorrections.has(key)) {
            const correction = learnedCorrections.get(key);
            return intents.map(intent => {
                if (intent.intent === correction.correct) {
                    return { ...intent, score: intent.score + CONFIG.LEARNING_BOOST, learned: true };
                }
                if (intent.intent === correction.wrong) {
                    return { ...intent, score: intent.score * 0.5, penalized: true };
                }
                return intent;
            });
        }

        // Match fuzzy para mensagens similares
        for (const [learnedKey, correction] of learnedCorrections) {
            const similarity = combinedSimilarity(key, learnedKey);
            if (similarity > 0.85) {
                const boost = CONFIG.LEARNING_BOOST * similarity;
                return intents.map(intent => {
                    if (intent.intent === correction.correct) {
                        return { ...intent, score: intent.score + boost, learned: true };
                    }
                    if (intent.intent === correction.wrong) {
                        return { ...intent, score: intent.score * 0.7, penalized: true };
                    }
                    return intent;
                });
            }
        }

        return intents;
    }

    // Inicializar correções ao carregar
    loadLearnedCorrections();

    // ============================================
    // CAMADA 1: PRÉ-PROCESSAMENTO
    // ============================================

    /**
     * Normaliza texto removendo acentos, pontuação e normalizando espaços
     */
    function normalizeText(text) {
        if (!text) return '';
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')  // Remove acentos
            .replace(/[^\w\s]/g, ' ')          // Remove pontuação
            .replace(/\s+/g, ' ')              // Normaliza espaços
            .trim();
    }

    /**
     * Tokeniza texto em palavras
     */
    function tokenize(text) {
        return normalizeText(text).split(' ').filter(t => t.length > 0);
    }

    /**
     * Expande abreviações comuns do português brasileiro
     */
    const abbreviations = {
        'vc': 'voce',
        'vcs': 'voces',
        'tb': 'tambem',
        'tbm': 'tambem',
        'pq': 'porque',
        'pra': 'para',
        'pro': 'para o',
        'ta': 'esta',
        'to': 'estou',
        'tou': 'estou',
        'td': 'tudo',
        'oq': 'o que',
        'q': 'que',
        'qto': 'quanto',
        'qt': 'quanto',
        'qts': 'quantos',
        'qnd': 'quando',
        'qdo': 'quando',
        'cmg': 'comigo',
        'ctg': 'contigo',
        'msg': 'mensagem',
        'info': 'informacao',
        'infos': 'informacoes',
        'obs': 'observacao',
        'obg': 'obrigado',
        'vlw': 'valeu',
        'blz': 'beleza',
        'flw': 'falou',
        'n': 'nao',
        'nd': 'nada',
        'ngm': 'ninguem',
        'qm': 'quem',
        'qlqr': 'qualquer',
        'qq': 'qualquer',
        'mt': 'muito',
        'mto': 'muito',
        'msm': 'mesmo',
        'tmb': 'tambem',
        'hj': 'hoje',
        'agr': 'agora',
        'dps': 'depois',
        'vdd': 'verdade',
        'ctz': 'certeza',
        'pfv': 'por favor',
        'pf': 'por favor',
        'plz': 'por favor',
        'rs': 'risos',
        'kk': 'risos',
        'kkk': 'risos',
        'lol': 'risos',
        'app': 'aplicativo',
        'apps': 'aplicativos',
        'cel': 'celular',
        'tel': 'telefone',
        'whats': 'whatsapp',
        'zap': 'whatsapp',
        'face': 'facebook',
        'insta': 'instagram',
        'msg': 'mensagem',
        'bora': 'vamos',
        'tmj': 'estamos juntos',
        'slk': 'serio',
        'plmds': 'pelo amor de deus',
        'pfvr': 'por favor',
        'add': 'adicionar',
        'adm': 'administrador',
        'dnd': 'de nada',
        'fds': 'fim de semana',
        'gnt': 'gente',
        'hr': 'hora',
        'hrs': 'horas',
        'min': 'minuto',
        'mins': 'minutos',
        'seg': 'segundo',
        'segs': 'segundos',
        'num': 'numero',
        'nums': 'numeros',
        'pqp': 'expressao',
        'qro': 'quero',
        'aki': 'aqui',
        'ai': 'ai',
        'eh': 'e',
        'ne': 'nao e',
        'c': 'com',
        's': 'sim',
        'sla': 'sei la',
        'vei': 'velho',
        'mano': 'amigo',
        'cara': 'amigo',
        'brother': 'amigo',
        'bro': 'amigo'
    };

    /**
     * Expande abreviações comuns no texto
     * @param {string} text - Texto original
     * @returns {string} Texto com abreviações expandidas
     */
    function expandAbbreviations(text) {
        const words = text.split(' ');
        return words
            .map(word => {
                const normalized = normalizeText(word);
                return abbreviations[normalized] || word;
            })
            .join(' ');
    }

    // ============================================
    // CAMADA 2: FUZZY MATCHING
    // ============================================

    /**
     * Calcula distância de Levenshtein entre duas strings
     */
    function levenshteinDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],     // deletion
                        dp[i][j - 1],     // insertion
                        dp[i - 1][j - 1]  // substitution
                    );
                }
            }
        }
        return dp[m][n];
    }

    /**
     * Calcula similaridade de Levenshtein (0-1)
     */
    function levenshteinSimilarity(str1, str2) {
        const maxLen = Math.max(str1.length, str2.length);
        if (maxLen === 0) return 1;
        const distance = levenshteinDistance(str1, str2);
        return 1 - (distance / maxLen);
    }

    /**
     * Calcula similaridade Jaro-Winkler (melhor para nomes e palavras curtas)
     */
    function jaroWinklerSimilarity(s1, s2) {
        if (s1 === s2) return 1;
        if (s1.length === 0 || s2.length === 0) return 0;

        const matchWindow = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;
        const s1Matches = new Array(s1.length).fill(false);
        const s2Matches = new Array(s2.length).fill(false);

        let matches = 0;
        let transpositions = 0;

        // Find matches
        for (let i = 0; i < s1.length; i++) {
            const start = Math.max(0, i - matchWindow);
            const end = Math.min(i + matchWindow + 1, s2.length);

            for (let j = start; j < end; j++) {
                if (s2Matches[j] || s1[i] !== s2[j]) continue;
                s1Matches[i] = true;
                s2Matches[j] = true;
                matches++;
                break;
            }
        }

        if (matches === 0) return 0;

        // Count transpositions
        let k = 0;
        for (let i = 0; i < s1.length; i++) {
            if (!s1Matches[i]) continue;
            while (!s2Matches[k]) k++;
            if (s1[i] !== s2[k]) transpositions++;
            k++;
        }

        const jaro = (matches / s1.length + matches / s2.length +
                     (matches - transpositions / 2) / matches) / 3;

        // Winkler modification
        let prefix = 0;
        for (let i = 0; i < Math.min(4, Math.min(s1.length, s2.length)); i++) {
            if (s1[i] === s2[i]) prefix++;
            else break;
        }

        return jaro + prefix * 0.1 * (1 - jaro);
    }

    /**
     * Combina Levenshtein e Jaro-Winkler para melhor precisão
     */
    function combinedSimilarity(str1, str2) {
        const lev = levenshteinSimilarity(str1, str2);
        const jw = jaroWinklerSimilarity(str1, str2);
        // Média ponderada: Jaro-Winkler tem peso maior para palavras curtas
        const shortWordBonus = str1.length < 5 ? 0.6 : 0.4;
        return (lev * (1 - shortWordBonus)) + (jw * shortWordBonus);
    }

    /**
     * Encontra melhor match em um dicionário usando fuzzy matching
     */
    function fuzzyMatch(word, dictionary, threshold = CONFIG.FUZZY_THRESHOLD) {
        if (!word || word.length < 2) return null;

        let bestMatch = null;
        let bestScore = 0;

        for (const term of dictionary) {
            const similarity = combinedSimilarity(word, term);
            if (similarity > bestScore && similarity >= threshold) {
                bestScore = similarity;
                bestMatch = {
                    original: word,
                    match: term,
                    score: similarity,
                    isExact: similarity === 1
                };
            }
        }

        return bestMatch;
    }

    /**
     * Corrige palavras com erros ortográficos usando fuzzy matching
     */
    function correctSpelling(tokens, dictionary) {
        return tokens.map(token => {
            // Se já existe no dicionário, retorna direto
            if (dictionary.includes(token)) {
                return { word: token, corrected: false, confidence: 1 };
            }

            // Tenta fuzzy match
            const match = fuzzyMatch(token, dictionary);
            if (match && match.score >= CONFIG.FUZZY_THRESHOLD) {
                return {
                    word: match.match,
                    original: token,
                    corrected: true,
                    confidence: match.score
                };
            }

            return { word: token, corrected: false, confidence: 1 };
        });
    }

    // ============================================
    // CAMADA 3: N-GRAM ANALYSIS
    // ============================================

    /**
     * Extrai n-grams de um texto
     */
    function extractNgrams(tokens, n) {
        if (tokens.length < n) return [];
        const ngrams = [];
        for (let i = 0; i <= tokens.length - n; i++) {
            ngrams.push(tokens.slice(i, i + n).join(' '));
        }
        return ngrams;
    }

    /**
     * Extrai todos os n-grams (1, 2, 3)
     */
    function extractAllNgrams(text) {
        const tokens = tokenize(text);
        return {
            unigrams: tokens,
            bigrams: extractNgrams(tokens, 2),
            trigrams: extractNgrams(tokens, 3)
        };
    }

    // ============================================
    // CORPUS DE TREINAMENTO PARA TF-IDF
    // ============================================

    const intentCorpus = {
        pergunta_preco: [
            "quanto custa fazer um app",
            "qual o investimento para criar um aplicativo",
            "me passa os valores do projeto",
            "quanto fica um sistema completo",
            "qual o preco de um app de delivery",
            "quanto vou gastar para ter meu app",
            "qual o custo total do desenvolvimento",
            "me da uma ideia de valor",
            "quanto cobram pelo servico",
            "qual a faixa de preco",
            "investimento necessario para o app",
            "valores para desenvolvimento",
            "quanto sai um app simples",
            "preco para fazer um ecommerce"
        ],
        pergunta_prazo: [
            "quanto tempo demora para ficar pronto",
            "qual o prazo de entrega do app",
            "em quantos dias fica pronto",
            "tempo de desenvolvimento estimado",
            "quando posso ter meu app funcionando",
            "demora muito para desenvolver",
            "prazo para entregar o projeto",
            "quanto tempo leva para criar",
            "previsao de entrega do sistema",
            "em quanto tempo consigo lancar",
            "urgente preciso rapido",
            "deadline para o projeto"
        ],
        pergunta_features: [
            "o que inclui no pacote",
            "quais funcionalidades tem o app",
            "o que vem no sistema",
            "recursos disponiveis no aplicativo",
            "funciona como o ifood",
            "faz o que esse app",
            "tem como adicionar tal funcao",
            "da pra fazer isso no app",
            "posso adicionar novos recursos",
            "customizar as funcionalidades",
            "personalizar o aplicativo",
            "features que vem incluidas"
        ],
        pergunta_garantia: [
            "tem garantia o servico",
            "se eu nao gostar posso cancelar",
            "tem reembolso caso de problema",
            "como funciona a devolucao",
            "posso confiar em voces",
            "e confiavel esse servico",
            "e seguro contratar",
            "qual o risco de contratar",
            "se der problema o que acontece",
            "se nao funcionar como esperado",
            "tem contrato formal",
            "protecao ao consumidor"
        ],
        pergunta_pagamento: [
            "quais formas de pagamento",
            "como posso pagar",
            "tem parcelamento disponivel",
            "parcelo em quantas vezes",
            "aceita cartao de credito",
            "pode ser no pix",
            "aceita boleto bancario",
            "preciso dar entrada",
            "pago tudo a vista",
            "divide em quantas parcelas",
            "aceita financiamento",
            "condicoes de pagamento"
        ],
        pergunta_diferenciais: [
            "qual o diferencial de voces",
            "por que devo escolher voces",
            "vantagem de contratar aqui",
            "melhor que a concorrencia",
            "diferente dos outros",
            "o que voces tem de especial",
            "beneficio de trabalhar com voces",
            "comparado a outras empresas",
            "destaque da empresa"
        ],
        pergunta_suporte: [
            "tem suporte depois de pronto",
            "ajuda tecnica apos entrega",
            "como funciona manutencao",
            "atualizacao do sistema",
            "se precisar de ajuda",
            "assistencia tecnica inclusa",
            "pos venda como funciona",
            "depois de pronto quem cuida",
            "hospedagem esta inclusa"
        ],
        criar_app: [
            "quero criar um aplicativo",
            "quero fazer um app de delivery",
            "preciso de um sistema para minha empresa",
            "desenvolver um aplicativo",
            "construir um app para",
            "montar um sistema de",
            "fazer um aplicativo tipo",
            "criar uma plataforma de"
        ],
        falar_humano: [
            "quero falar com alguem",
            "tem atendente humano",
            "falar com pessoa real",
            "chamar um vendedor",
            "consultor disponivel",
            "especialista pode me atender",
            "whatsapp para contato",
            "numero para ligar",
            "contato direto por favor"
        ],
        saudacao: [
            "oi tudo bem",
            "ola bom dia",
            "boa tarde",
            "boa noite",
            "hey como vai",
            "eai beleza",
            "fala ai",
            "salve",
            "hello"
        ],
        despedida: [
            "tchau obrigado",
            "ate mais tarde",
            "ate logo",
            "falou valeu",
            "obrigado pela ajuda",
            "valeu pela informacao",
            "brigado"
        ]
    };

    // Construir IDF do corpus
    const corpusIDF = {};
    (function buildIDF() {
        const allDocs = Object.values(intentCorpus).flat();
        const totalDocs = allDocs.length;
        const termDocCount = {};

        allDocs.forEach(doc => {
            const terms = new Set(tokenize(doc));
            terms.forEach(term => {
                termDocCount[term] = (termDocCount[term] || 0) + 1;
            });
        });

        for (const [term, count] of Object.entries(termDocCount)) {
            corpusIDF[term] = Math.log((totalDocs + 1) / (count + CONFIG.TFIDF_SMOOTH));
        }
    })();

    /**
     * Calcula score TF-IDF real baseado no corpus
     */
    function calculateTFIDF(term, document) {
        const tokens = tokenize(document);
        if (tokens.length === 0) return 0;

        // TF: frequência do termo no documento (normalizada)
        const tf = tokens.filter(t => t === term).length / tokens.length;

        // IDF: do corpus pré-computado
        const idf = corpusIDF[term] || Math.log(Object.keys(intentCorpus).length + 1);

        return tf * idf;
    }

    /**
     * Calcula similaridade TF-IDF entre mensagem e corpus de intent
     */
    function calculateIntentTFIDFScore(message, intentName) {
        if (!intentCorpus[intentName]) return 0;

        const msgTokens = tokenize(message);
        const corpusDocs = intentCorpus[intentName];

        let maxSimilarity = 0;

        corpusDocs.forEach(doc => {
            const docTokens = new Set(tokenize(doc));
            let similarity = 0;
            let matchCount = 0;

            msgTokens.forEach(token => {
                if (docTokens.has(token)) {
                    similarity += calculateTFIDF(token, doc);
                    matchCount++;
                } else {
                    // Fuzzy match para tokens similares
                    for (const docToken of docTokens) {
                        const sim = combinedSimilarity(token, docToken);
                        if (sim > 0.8) {
                            similarity += calculateTFIDF(docToken, doc) * sim;
                            matchCount += sim;
                            break;
                        }
                    }
                }
            });

            // Normalizar pela quantidade de tokens
            if (msgTokens.length > 0) {
                similarity = (similarity / msgTokens.length) * Math.min(1, matchCount / 2);
            }

            maxSimilarity = Math.max(maxSimilarity, similarity);
        });

        return maxSimilarity * 10; // Escalar para compatibilidade com outros scores
    }

    // ============================================
    // CAMADA 4: SYNONYM EXPANSION
    // ============================================

    const synonymGroups = {
        // Delivery & Food
        'delivery': ['entrega', 'deliveri', 'deivery', 'entregas', 'pedido', 'pedidos'],
        'restaurante': ['restaurantes', 'lanchonete', 'hamburgueria', 'pizzaria', 'comida'],
        'ifood': ['rappi', 'uber eats', 'ubereats', '99food', 'aiqfome'],

        // E-commerce
        'loja': ['lojas', 'store', 'shop', 'comercio', 'varejo', 'ecommerce'],
        'vender': ['venda', 'vendas', 'comercializar', 'negocio'],
        'produto': ['produtos', 'mercadoria', 'item', 'itens', 'catalogo'],
        'carrinho': ['cart', 'checkout', 'compra', 'compras'],

        // Educacao
        'curso': ['cursos', 'aula', 'aulas', 'treinamento', 'capacitacao'],
        'aluno': ['alunos', 'estudante', 'estudantes', 'aprendiz'],
        'professor': ['professores', 'instrutor', 'tutor', 'mentor'],
        'ead': ['online', 'distancia', 'elearning', 'e-learning'],

        // Saude
        'medico': ['medicos', 'doutor', 'dr', 'dra', 'clinico'],
        'consulta': ['consultas', 'atendimento', 'agendamento'],
        'paciente': ['pacientes', 'cliente', 'clientes'],
        'clinica': ['clinicas', 'consultorio', 'hospital'],
        'academia': ['gym', 'fitness', 'treino', 'musculacao'],

        // Gestao
        'empresa': ['empresas', 'negocio', 'negocios', 'companhia'],
        'gestao': ['gerenciamento', 'administracao', 'controle'],
        'funcionario': ['funcionarios', 'colaborador', 'equipe', 'time'],
        'agenda': ['agendamento', 'agendar', 'horario', 'marcacao'],
        'barbearia': ['barbeiro', 'barber', 'corte', 'cabelo'],
        'salao': ['beleza', 'cabeleireiro', 'estetica', 'manicure'],
        'petshop': ['pet shop', 'pet', 'veterinario', 'banho e tosa'],

        // Financas
        'dinheiro': ['grana', 'verba', 'recurso', 'capital', 'investimento'],
        'pagar': ['pagamento', 'pago', 'parcela', 'parcelas', 'parcelamento'],
        'preco': ['valor', 'custo', 'investimento', 'quanto custa'],

        // Geral
        'aplicativo': ['app', 'aplicacao', 'sistema', 'plataforma', 'software'],
        'criar': ['fazer', 'desenvolver', 'construir', 'montar'],
        'quero': ['preciso', 'gostaria', 'desejo', 'necessito'],
        'bom': ['otimo', 'excelente', 'legal', 'top', 'show'],
        'rapido': ['urgente', 'logo', 'agora', 'ja']
    };

    /**
     * Expande tokens com sinônimos
     */
    function expandSynonyms(tokens) {
        const expanded = new Set(tokens);

        tokens.forEach(token => {
            // Verifica se o token é um sinônimo de algum grupo
            for (const [main, synonyms] of Object.entries(synonymGroups)) {
                if (token === main || synonyms.includes(token)) {
                    expanded.add(main);
                    synonyms.forEach(s => expanded.add(s));
                }
            }
        });

        return Array.from(expanded);
    }

    /**
     * Encontra o termo principal de um grupo de sinônimos
     */
    function findMainTerm(word) {
        for (const [main, synonyms] of Object.entries(synonymGroups)) {
            if (word === main || synonyms.includes(word)) {
                return main;
            }
        }
        return word;
    }

    // ============================================
    // CAMADA 5: INTENT DETECTION
    // ============================================

    const intentPatterns = {
        // Intenções de preço/custo
        pergunta_preco: {
            patterns: [
                'quanto custa', 'qual o preco', 'qual valor', 'quanto fica',
                'preco do', 'valor do', 'investimento', 'quanto vai custar',
                'quanto e', 'qual o custo', 'me passa o valor', 'quanto sai',
                'orcamento', 'tabela de precos', 'quanto cobra', 'cobram quanto'
            ],
            // Regex flexíveis para variações
            regex: [
                /quant[oa]\s+(custa|fica|sai|cobra[rm]?|e|vai)/i,
                /qual\s+(o\s+)?(preco|valor|custo|investimento)/i,
                /(preco|valor|custo)\s+(d[oae]|para|do)/i,
                /me\s+pass[ae]\s+(o\s+)?(valor|preco)/i,
                /faixa\s+de\s+(preco|valor)/i,
                /(orcamento|tabela).*(preco|valor)/i
            ],
            // Negative patterns - evita falsos positivos
            negativePatterns: [
                'nao quero saber preco agora',
                'depois falamos de valor',
                'sem compromisso de preco',
                'nao preciso de orcamento',
                'valor nao importa agora'
            ],
            weight: 15,
            response_key: 'preco'
        },

        // Intenções de prazo
        pergunta_prazo: {
            patterns: [
                'quanto tempo', 'qual o prazo', 'demora quanto', 'quando fica pronto',
                'prazo de entrega', 'dias para', 'tempo de desenvolvimento',
                'quanto tempo leva', 'demora muito', 'fica pronto quando',
                'previsao de entrega', 'deadline', 'urgente'
            ],
            regex: [
                /quant[oa]\s+temp[oa]/i,
                /qual\s+(o\s+)?prazo/i,
                /demora\s+(quanto|muito|pouco)/i,
                /quando\s+(fica|estara|vai\s+estar)\s+pronto/i,
                /em\s+quant[oa]s?\s+(dias?|semanas?|meses?)/i,
                /tempo\s+(de\s+)?(desenvolvimento|entrega|producao)/i,
                /(urgente|rapido|logo|ja)\s*(preciso|quero|necessito)?/i
            ],
            negativePatterns: [
                'prazo nao e problema',
                'sem pressa',
                'pode demorar',
                'nao tenho urgencia'
            ],
            weight: 15,
            response_key: 'prazo'
        },

        // Intenções de funcionalidades
        pergunta_features: {
            patterns: [
                'o que inclui', 'quais funcionalidades', 'o que tem', 'recursos',
                'funciona como', 'faz o que', 'tem como', 'da pra fazer',
                'posso adicionar', 'customizar', 'personalizar', 'features',
                'o que vem', 'incluso', 'contempla'
            ],
            regex: [
                /o\s+que\s+(inclui|tem|vem|faz)/i,
                /qua(l|is)\s+funcionalidades?/i,
                /(funciona|funcionalidade)\s+(como|igual|tipo)/i,
                /(tem|da)\s+(como|pra)\s+(fazer|adicionar|colocar)/i,
                /(posso|consigo)\s+(adicionar|customizar|personalizar)/i,
                /recursos\s+(disponiveis|inclusos|do\s+app)/i
            ],
            negativePatterns: [
                'nao preciso de funcionalidades extras',
                'funcionalidade basica esta ok'
            ],
            weight: 12,
            response_key: 'features'
        },

        // Intenções de garantia/confiança
        pergunta_garantia: {
            patterns: [
                'garantia', 'se eu nao gostar', 'reembolso', 'devolucao',
                'posso confiar', 'confiavel', 'seguro', 'risco',
                'se der problema', 'se nao funcionar', 'contrato',
                'proteção', 'arrependimento'
            ],
            regex: [
                /(tem|qual)\s+(a\s+)?garantia/i,
                /se\s+(eu\s+)?(nao\s+)?gostar/i,
                /(reembolso|devolucao|estorno)/i,
                /(posso|da\s+pra)\s+confiar/i,
                /(e|voces\s+sao)\s+(confiavel|confiaveis|seguro)/i,
                /se\s+(der|tiver)\s+problema/i,
                /(contrato|termo|acordo)\s+(formal|juridico)?/i
            ],
            negativePatterns: [
                'nao preciso de garantia',
                'confio em voces'
            ],
            weight: 12,
            response_key: 'garantia'
        },

        // Intenções de pagamento
        pergunta_pagamento: {
            patterns: [
                'formas de pagamento', 'como pagar', 'parcelamento', 'parcelo',
                'cartao', 'pix', 'boleto', 'entrada', 'a vista',
                'divide em quantas', 'aceita', 'financiar'
            ],
            regex: [
                /(formas?|opcoes?|condicoes?)\s+de\s+pagamento/i,
                /como\s+(posso\s+)?(pagar|fazer\s+o\s+pagamento)/i,
                /(parcel[ao]|divide)\s+(em\s+)?quant[ao]s?/i,
                /aceita[rm]?\s+(cartao|pix|boleto|credito|debito)/i,
                /(pago|pagar)\s+(tudo\s+)?(a\s+vista|avista)/i,
                /(preciso|tenho\s+que)\s+(dar\s+)?entrada/i
            ],
            negativePatterns: [
                'pagamento nao e problema',
                'forma de pagamento depois'
            ],
            weight: 12,
            response_key: 'pagamento'
        },

        // Intenções de diferenciais
        pergunta_diferenciais: {
            patterns: [
                'diferencial', 'por que voces', 'por que escolher', 'vantagem',
                'melhor que', 'diferente de', 'o que voces tem', 'beneficio',
                'comparado a', 'concorrencia', 'destaque'
            ],
            regex: [
                /qual\s+(o\s+)?diferencial/i,
                /por\s*que\s+(voces|devo|escolher)/i,
                /(vantagem|beneficio)\s+(de|em)\s+(contratar|escolher)/i,
                /(melhor|diferente)\s+(que|d[oae])\s+(concorr|outr)/i,
                /o\s+que\s+voces\s+tem\s+de\s+(especial|diferente)/i
            ],
            negativePatterns: [],
            weight: 12,
            response_key: 'diferenciais'
        },

        // Intenções de suporte
        pergunta_suporte: {
            patterns: [
                'suporte', 'ajuda depois', 'manutencao', 'atualizacao',
                'se precisar de ajuda', 'assistencia', 'pos venda',
                'depois de pronto', 'hospedagem'
            ],
            regex: [
                /(tem|como\s+funciona)\s+(o\s+)?suporte/i,
                /(ajuda|assistencia)\s+(depois|tecnica|pos)/i,
                /(manutencao|atualizacao)\s+(inclus[ao]|do\s+sistema)/i,
                /se\s+(eu\s+)?precisar\s+de\s+ajuda/i,
                /(pos|apos)\s*venda/i,
                /hospedagem\s+(inclus[ao]|do\s+app)/i
            ],
            negativePatterns: [],
            weight: 10,
            response_key: 'suporte'
        },

        // Intenção de criar/fazer app
        criar_app: {
            patterns: [
                'quero criar', 'quero fazer', 'preciso de um app', 'desenvolver',
                'construir um', 'montar um', 'fazer um aplicativo',
                'criar um sistema', 'desenvolver uma plataforma'
            ],
            regex: [
                /(quero|preciso|gostaria)\s+(de\s+)?(criar|fazer|desenvolver)/i,
                /(criar|fazer|desenvolver|construir|montar)\s+(um\s+)?(app|aplicativo|sistema)/i,
                /preciso\s+de\s+(um\s+)?(app|aplicativo|sistema)/i,
                /(tenho\s+uma?\s+)?ideia\s+(de|para)\s+(app|aplicativo)/i
            ],
            negativePatterns: [
                'nao quero criar',
                'nao preciso de app'
            ],
            weight: 10,
            response_key: 'criar'
        },

        // Intenção de falar com humano
        falar_humano: {
            patterns: [
                'falar com alguem', 'atendente', 'humano', 'pessoa real',
                'vendedor', 'consultor', 'especialista', 'whatsapp',
                'ligar', 'telefone', 'contato direto'
            ],
            regex: [
                /(quero|posso|preciso)\s+falar\s+com\s+(alguem|uma?\s+pessoa|atendente)/i,
                /(atendente|vendedor|consultor|especialista)\s+(humano|real|disponivel)/i,
                /(pessoa|atendimento)\s+(real|humano)/i,
                /(numero|telefone|whatsapp|zap)\s+(para|de)\s+(contato|falar)/i,
                /contato\s+direto/i,
                /(ligar|telefonar)\s+(para|pra)\s+(voces|empresa)/i
            ],
            negativePatterns: [
                'nao preciso falar com ninguem',
                'pode ser pelo chat mesmo'
            ],
            weight: 15,
            response_key: 'humano'
        },

        // Saudação
        saudacao: {
            patterns: [
                'oi', 'ola', 'bom dia', 'boa tarde', 'boa noite',
                'hey', 'eai', 'e ai', 'fala', 'salve', 'hello'
            ],
            regex: [
                /^(oi|ola|hey|eai|fala|salve|hello)\b/i,
                /^bo[am]\s+(dia|tarde|noite)/i,
                /^(e\s+ai|eae|iae)\b/i
            ],
            negativePatterns: [],
            weight: 5,
            response_key: 'saudacao'
        },

        // Despedida
        despedida: {
            patterns: [
                'tchau', 'ate mais', 'ate logo', 'flw', 'falou',
                'obrigado', 'valeu', 'brigado', 'thanks'
            ],
            regex: [
                /(tchau|adeus|bye|xau)/i,
                /ate\s+(mais|logo|breve|depois)/i,
                /(obrigad[oa]|valeu|brigad[oa]|thanks)/i,
                /^(flw|falou|vlw)\b/i
            ],
            negativePatterns: [],
            weight: 5,
            response_key: 'despedida'
        },

        // Confirmação
        confirmacao: {
            patterns: [
                'sim', 'isso', 'correto', 'exato', 'isso mesmo',
                'pode ser', 'ok', 'beleza', 'fechado', 'bora'
            ],
            regex: [
                /^(sim|s|yes|si)\b/i,
                /^(isso|correto|exato|certo)\s*(mesmo)?$/i,
                /^(ok|okay|blz|beleza|fechado|bora|vamos)\b/i,
                /(pode\s+ser|ta\s+bom|perfeito)/i
            ],
            negativePatterns: [],
            weight: 8,
            response_key: 'confirmacao'
        },

        // Negação
        negacao: {
            patterns: [
                'nao', 'nope', 'negativo', 'errado', 'nao e isso',
                'diferente', 'outro', 'outra coisa'
            ],
            regex: [
                /^(nao|n|no|nope)\b/i,
                /(negativo|errado|incorreto)/i,
                /nao\s+e\s+(isso|bem\s+isso)/i,
                /(outr[oa]|diferente)\s+(coisa)?/i
            ],
            negativePatterns: [],
            weight: 8,
            response_key: 'negacao'
        }
    };

    /**
     * Detecta intenções no texto (v3.0 - Enhanced)
     * Usa: patterns, regex, negative patterns, TF-IDF, learning, softmax
     */
    function detectIntents(text, conversationContext = null) {
        const expanded = expandAbbreviations(text);
        const normalized = normalizeText(expanded);
        let intents = [];

        for (const [intentName, intentData] of Object.entries(intentPatterns)) {
            let score = 0;
            let matchedPatterns = [];
            let matchType = null;

            // 1. Check negative patterns first (early rejection)
            let hasNegativeMatch = false;
            if (intentData.negativePatterns && intentData.negativePatterns.length > 0) {
                for (const negPattern of intentData.negativePatterns) {
                    if (normalized.includes(normalizeText(negPattern))) {
                        hasNegativeMatch = true;
                        break;
                    }
                }
            }

            // 2. Regex matching (highest priority)
            if (!hasNegativeMatch && intentData.regex) {
                for (const regex of intentData.regex) {
                    if (regex.test(text) || regex.test(expanded)) {
                        score += intentData.weight * CONFIG.REGEX_WEIGHT;
                        matchedPatterns.push(`regex:${regex.source}`);
                        matchType = 'regex';
                    }
                }
            }

            // 3. Pattern matching (string includes)
            if (!hasNegativeMatch) {
                for (const pattern of intentData.patterns) {
                    const normalizedPattern = normalizeText(pattern);

                    // Match exato
                    if (normalized.includes(normalizedPattern)) {
                        score += intentData.weight;
                        matchedPatterns.push(pattern);
                        if (!matchType) matchType = 'exact';
                    }
                    // Fuzzy match para padrões mais longos
                    else if (pattern.length > 5) {
                        const similarity = combinedSimilarity(
                            normalizedPattern,
                            normalized.substring(0, normalizedPattern.length + 10)
                        );
                        if (similarity > 0.8) {
                            score += intentData.weight * similarity;
                            matchedPatterns.push(`fuzzy:${pattern}`);
                            if (!matchType) matchType = 'fuzzy';
                        }
                    }
                }
            }

            // 4. TF-IDF score from corpus
            if (!hasNegativeMatch) {
                const tfidfScore = calculateIntentTFIDFScore(normalized, intentName);
                if (tfidfScore > 0) {
                    score += tfidfScore;
                    if (tfidfScore > 2) matchType = matchType || 'tfidf';
                }
            }

            // 5. Apply negative pattern penalty
            if (hasNegativeMatch && score > 0) {
                score *= CONFIG.NEGATIVE_PATTERN_PENALTY;
            }

            if (score > 0) {
                intents.push({
                    intent: intentName,
                    score: score,
                    confidence: 0, // Will be calibrated with softmax
                    response_key: intentData.response_key,
                    matchedPatterns: matchedPatterns,
                    matchType: matchType,
                    negativeMatch: hasNegativeMatch
                });
            }
        }

        // 6. Apply learned corrections
        intents = applyLearnedCorrections(text, intents);

        // 7. Apply context boost
        if (conversationContext) {
            intents = applyContextBoost(intents, conversationContext);
        }

        // 8. Softmax calibration for confidence
        intents = calibrateConfidenceWithSoftmax(intents);

        // 9. Sort by calibrated score
        intents.sort((a, b) => b.score - a.score);

        return {
            primary: intents[0] || null,
            secondary: intents[1] || null,
            all: intents
        };
    }

    /**
     * Calibra confiança usando Softmax
     */
    function calibrateConfidenceWithSoftmax(intents) {
        if (intents.length === 0) return [];

        const scores = intents.map(i => i.score);
        const maxScore = Math.max(...scores);

        // Softmax com temperatura
        const expScores = scores.map(s =>
            Math.exp((s - maxScore) / CONFIG.SOFTMAX_TEMPERATURE)
        );
        const sumExp = expScores.reduce((a, b) => a + b, 0);

        return intents.map((intent, idx) => ({
            ...intent,
            confidence: Math.round((expScores[idx] / sumExp) * 100),
            rawScore: intent.score
        }));
    }

    /**
     * Aplica boost baseado no contexto da conversa
     */
    function applyContextBoost(intents, context) {
        if (!context || !context.messageHistory || context.messageHistory.length === 0) {
            return intents;
        }

        const recentMessages = context.messageHistory.slice(-CONFIG.CONTEXT_WINDOW_SIZE);
        const relatedGroups = [
            ['pergunta_preco', 'pergunta_pagamento', 'pergunta_garantia'],
            ['pergunta_prazo', 'pergunta_features', 'criar_app'],
            ['confirmacao', 'criar_app', 'falar_humano'],
            ['saudacao', 'criar_app'],
            ['pergunta_diferenciais', 'pergunta_garantia', 'pergunta_suporte']
        ];

        return intents.map(intent => {
            let contextBoost = 0;

            recentMessages.forEach((msg, idx) => {
                if (!msg.intent) return;

                const recency = (idx + 1) / recentMessages.length; // 0.2 a 1.0

                // Boost para intent igual (continuação)
                if (msg.intent === intent.intent) {
                    contextBoost += 5 * recency;
                }

                // Boost para intents relacionados
                const isRelated = relatedGroups.some(group =>
                    group.includes(msg.intent) && group.includes(intent.intent)
                );
                if (isRelated) {
                    contextBoost += 3 * recency;
                }

                // Boost se última categoria == mesma área
                if (context.lastCategory && intent.intent.includes(context.lastCategory)) {
                    contextBoost += 2 * recency;
                }
            });

            return {
                ...intent,
                score: intent.score + contextBoost,
                contextBoost: contextBoost
            };
        });
    }

    // ============================================
    // SLOT FILLING
    // ============================================

    /**
     * Preenche slots com entidades extraídas
     */
    function fillIntentSlots(intent, entities, categoryDetected) {
        if (!intent) return intent;

        const slots = {};

        // Slot de categoria
        if (categoryDetected) {
            slots.category = categoryDetected;
        }

        // Slots de valores monetários
        if (entities.values && entities.values.length > 0) {
            slots.budget = entities.values[0];
        }

        // Slots de quantidades
        if (entities.quantities && entities.quantities.length > 0) {
            slots.quantity = entities.quantities[0];
        }

        // Slots de contato
        if (entities.phones && entities.phones.length > 0) {
            slots.phone = entities.phones[0];
        }
        if (entities.emails && entities.emails.length > 0) {
            slots.email = entities.emails[0];
        }

        // Boost de confiança quando slots são preenchidos
        const slotCount = Object.keys(slots).length;
        const slotBoost = slotCount > 0 ? CONFIG.SLOT_FILL_BOOST * Math.min(slotCount, 3) : 0;

        return {
            ...intent,
            slots: slots,
            slotCount: slotCount,
            score: intent.score + slotBoost,
            confidence: Math.min(100, intent.confidence + Math.round(slotBoost / 2))
        };
    }

    // ============================================
    // DISAMBIGUATION INTELIGENTE
    // ============================================

    /**
     * Gera pergunta de desambiguação inteligente
     */
    function generateDisambiguationQuestion(analysis) {
        const topIntents = analysis.intent.all.slice(0, 2);

        if (topIntents.length < 2) return null;

        const gap = topIntents[0].confidence - topIntents[1].confidence;

        // Se diferença muito pequena, precisa desambiguar
        if (gap < 20) {
            const intentQuestions = {
                'pergunta_preco+pergunta_prazo':
                    'Você quer saber sobre o **investimento** ou sobre o **prazo de entrega**?',
                'pergunta_prazo+pergunta_preco':
                    'Você quer saber sobre o **prazo de entrega** ou sobre o **investimento**?',
                'criar_app+pergunta_features':
                    'Você quer **criar um novo app** ou saber sobre as **funcionalidades**?',
                'pergunta_features+criar_app':
                    'Você quer saber sobre as **funcionalidades** ou **criar um novo app**?',
                'pergunta_garantia+pergunta_suporte':
                    'Você quer saber sobre a **garantia** ou sobre o **suporte técnico**?',
                'pergunta_pagamento+pergunta_preco':
                    'Você quer saber as **formas de pagamento** ou o **valor total**?',
                'falar_humano+pergunta_suporte':
                    'Você quer **falar com alguém agora** ou saber sobre nosso **suporte**?'
            };

            const key1 = `${topIntents[0].intent}+${topIntents[1].intent}`;
            const key2 = `${topIntents[1].intent}+${topIntents[0].intent}`;

            const question = intentQuestions[key1] || intentQuestions[key2];

            if (question) {
                return {
                    question: question,
                    options: [
                        { text: formatIntentName(topIntents[0].intent), intent: topIntents[0].intent },
                        { text: formatIntentName(topIntents[1].intent), intent: topIntents[1].intent }
                    ],
                    confidence: gap
                };
            }

            // Pergunta genérica
            return {
                question: `Não tenho certeza se entendi. Você quer saber sobre **${formatIntentName(topIntents[0].intent)}** ou **${formatIntentName(topIntents[1].intent)}**?`,
                options: [
                    { text: formatIntentName(topIntents[0].intent), intent: topIntents[0].intent },
                    { text: formatIntentName(topIntents[1].intent), intent: topIntents[1].intent }
                ],
                confidence: gap
            };
        }

        return null;
    }

    /**
     * Formata nome do intent para exibição
     */
    function formatIntentName(intent) {
        const names = {
            'pergunta_preco': 'Investimento/Preço',
            'pergunta_prazo': 'Prazo de Entrega',
            'pergunta_features': 'Funcionalidades',
            'pergunta_garantia': 'Garantia',
            'pergunta_pagamento': 'Formas de Pagamento',
            'pergunta_diferenciais': 'Diferenciais',
            'pergunta_suporte': 'Suporte Técnico',
            'criar_app': 'Criar um App',
            'falar_humano': 'Falar com Alguém',
            'saudacao': 'Saudação',
            'despedida': 'Despedida',
            'confirmacao': 'Confirmação',
            'negacao': 'Negação'
        };
        return names[intent] || intent;
    }

    // ============================================
    // CAMADA 6: CATEGORY DETECTION (ENHANCED)
    // ============================================

    const categoryKeywords = {
        delivery: {
            primary: ['delivery', 'entrega', 'ifood', 'rappi', 'motoboy', 'pedido', 'cardapio'],
            secondary: ['comida', 'restaurante', 'lanchonete', 'pizzaria', 'hamburgueria', 'marmita'],
            phrases: ['app de entrega', 'app de delivery', 'igual ifood', 'tipo rappi', 'entregar comida'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        ecommerce: {
            primary: ['ecommerce', 'e-commerce', 'loja', 'vender', 'produto', 'carrinho'],
            secondary: ['marketplace', 'catalogo', 'estoque', 'checkout', 'compra', 'varejo'],
            phrases: ['loja virtual', 'loja online', 'vender online', 'vender pela internet'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        educacao: {
            primary: ['educacao', 'curso', 'aula', 'ensino', 'ead', 'professor', 'aluno'],
            secondary: ['escola', 'treinamento', 'capacitacao', 'aprender', 'video aula', 'hotmart'],
            phrases: ['curso online', 'plataforma de ensino', 'aula online', 'ensino a distancia'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        saude: {
            primary: ['saude', 'medico', 'clinica', 'consulta', 'paciente', 'hospital'],
            secondary: ['telemedicina', 'prontuario', 'agendamento', 'receita', 'exame'],
            phrases: ['app de saude', 'agendamento de consulta', 'consulta online', 'telemedicina'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        fitness: {
            primary: ['fitness', 'academia', 'treino', 'exercicio', 'personal', 'musculacao'],
            secondary: ['yoga', 'crossfit', 'corrida', 'dieta', 'nutricao', 'wellness'],
            phrases: ['app de treino', 'treino personalizado', 'academia online', 'personal trainer'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        gestao: {
            primary: ['gestao', 'empresa', 'gerenciamento', 'controle', 'administracao'],
            secondary: ['crm', 'erp', 'financeiro', 'estoque', 'relatorio', 'dashboard'],
            phrases: ['gestao empresarial', 'controle financeiro', 'sistema de gestao'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        servicos: {
            primary: ['barbearia', 'salao', 'beleza', 'estetica', 'agendamento', 'servico'],
            secondary: ['manicure', 'cabelo', 'corte', 'massagem', 'spa', 'depilacao'],
            phrases: ['app de agendamento', 'sistema para barbearia', 'app para salao'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        pets: {
            primary: ['pet', 'petshop', 'veterinario', 'animal', 'cachorro', 'gato'],
            secondary: ['banho', 'tosa', 'racao', 'adestramento', 'hotel pet'],
            phrases: ['app para pet shop', 'sistema veterinario', 'app de pet'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        imobiliario: {
            primary: ['imobiliaria', 'imovel', 'aluguel', 'venda', 'corretor'],
            secondary: ['apartamento', 'casa', 'terreno', 'condominio', 'locacao'],
            phrases: ['app imobiliario', 'sistema para imobiliaria', 'app de imoveis'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        transporte: {
            primary: ['transporte', 'taxi', 'uber', 'motorista', 'viagem', 'carona'],
            secondary: ['frete', 'mudanca', 'logistica', 'entregador', 'rota'],
            phrases: ['app de transporte', 'app tipo uber', 'sistema de frete'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        financas: {
            primary: ['financeiro', 'banco', 'pagamento', 'dinheiro', 'investimento'],
            secondary: ['cartao', 'pix', 'boleto', 'emprestimo', 'conta'],
            phrases: ['app financeiro', 'controle financeiro', 'app de pagamento'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        social: {
            primary: ['social', 'rede social', 'comunidade', 'chat', 'mensagem'],
            secondary: ['grupo', 'post', 'feed', 'perfil', 'seguidor', 'amigo'],
            phrases: ['rede social', 'app social', 'app de comunidade'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        entretenimento: {
            primary: ['entretenimento', 'evento', 'ingresso', 'show', 'festa'],
            secondary: ['balada', 'teatro', 'cinema', 'musica', 'streaming'],
            phrases: ['app de eventos', 'venda de ingressos', 'app de entretenimento'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        },
        viagens: {
            primary: ['viagem', 'turismo', 'hotel', 'passagem', 'reserva'],
            secondary: ['hospedagem', 'pacote', 'destino', 'voo', 'booking'],
            phrases: ['app de viagem', 'reserva de hotel', 'app de turismo'],
            weight_primary: 10,
            weight_secondary: 6,
            weight_phrase: 15
        }
    };

    /**
     * Calcula score de categoria com todas as técnicas
     */
    function calculateCategoryScores(text, context = null) {
        const normalized = normalizeText(expandAbbreviations(text));
        const tokens = tokenize(normalized);
        const expandedTokens = expandSynonyms(tokens);
        const ngrams = extractAllNgrams(normalized);

        const scores = {};

        for (const [category, data] of Object.entries(categoryKeywords)) {
            let score = 0;

            // 1. Match de frases (maior peso)
            data.phrases.forEach(phrase => {
                const normalizedPhrase = normalizeText(phrase);
                if (normalized.includes(normalizedPhrase)) {
                    score += data.weight_phrase;
                }
                // Fuzzy match para frases
                ngrams.bigrams.concat(ngrams.trigrams).forEach(ngram => {
                    const similarity = combinedSimilarity(ngram, normalizedPhrase);
                    if (similarity > 0.85) {
                        score += data.weight_phrase * similarity;
                    }
                });
            });

            // 2. Match de keywords primárias
            data.primary.forEach(keyword => {
                const normalizedKeyword = normalizeText(keyword);

                // Match exato
                if (expandedTokens.includes(normalizedKeyword)) {
                    score += data.weight_primary;
                }
                // Fuzzy match
                else {
                    expandedTokens.forEach(token => {
                        const similarity = combinedSimilarity(token, normalizedKeyword);
                        if (similarity > CONFIG.FUZZY_THRESHOLD) {
                            score += data.weight_primary * similarity * (1 - CONFIG.TYPO_PENALTY);
                        }
                    });
                }
            });

            // 3. Match de keywords secundárias
            data.secondary.forEach(keyword => {
                const normalizedKeyword = normalizeText(keyword);

                if (expandedTokens.includes(normalizedKeyword)) {
                    score += data.weight_secondary;
                }
                else {
                    expandedTokens.forEach(token => {
                        const similarity = combinedSimilarity(token, normalizedKeyword);
                        if (similarity > CONFIG.FUZZY_THRESHOLD) {
                            score += data.weight_secondary * similarity * (1 - CONFIG.TYPO_PENALTY);
                        }
                    });
                }
            });

            // 4. Context boost
            if (context && context.lastCategory === category) {
                score *= CONFIG.CONTEXT_BOOST;
            }

            scores[category] = Math.round(score * 100) / 100;
        }

        return scores;
    }

    /**
     * Detecta categoria principal com confidence
     */
    function detectCategory(text, context = null) {
        const scores = calculateCategoryScores(text, context);

        // Ordenar scores
        const sortedCategories = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .filter(([, score]) => score > 0);

        if (sortedCategories.length === 0) {
            return {
                category: null,
                confidence: 0,
                needsDisambiguation: false,
                allScores: scores
            };
        }

        const [topCategory, topScore] = sortedCategories[0];
        const secondScore = sortedCategories[1] ? sortedCategories[1][1] : 0;

        // Calcular confidence baseado na diferença entre top 1 e top 2
        const gap = topScore - secondScore;
        const confidence = topScore > 0
            ? Math.min(100, Math.round((gap / topScore) * 50 + 50))
            : 0;

        return {
            category: topCategory,
            confidence: confidence,
            score: topScore,
            needsDisambiguation: confidence < CONFIG.DISAMBIGUATION_THRESHOLD,
            alternatives: sortedCategories.slice(1, 3).map(([cat, sc]) => ({ category: cat, score: sc })),
            allScores: scores
        };
    }

    // ============================================
    // CAMADA 7: ENTITY EXTRACTION
    // ============================================

    /**
     * Extrai entidades do texto (valores, datas, etc)
     */
    function extractEntities(text) {
        const entities = {
            values: [],
            dates: [],
            phones: [],
            emails: [],
            names: [],
            quantities: []
        };

        // Valores monetários
        const moneyRegex = /r\$\s*[\d.,]+|[\d.,]+\s*(mil|reais|real)/gi;
        const moneyMatches = text.match(moneyRegex);
        if (moneyMatches) {
            entities.values = moneyMatches.map(m => ({
                raw: m,
                normalized: parseMoneyValue(m)
            }));
        }

        // Telefones
        const phoneRegex = /\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}/g;
        const phoneMatches = text.match(phoneRegex);
        if (phoneMatches) {
            entities.phones = phoneMatches;
        }

        // Emails
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const emailMatches = text.match(emailRegex);
        if (emailMatches) {
            entities.emails = emailMatches;
        }

        // Quantidades/Números
        const quantityRegex = /\d+\s*(pedidos?|entregas?|clientes?|usuarios?|meses?|dias?|anos?|pessoas?)/gi;
        const quantityMatches = text.match(quantityRegex);
        if (quantityMatches) {
            entities.quantities = quantityMatches;
        }

        return entities;
    }

    function parseMoneyValue(str) {
        const cleaned = str.toLowerCase()
            .replace('r$', '')
            .replace(/\s/g, '')
            .replace(/\./g, '')
            .replace(',', '.');

        if (cleaned.includes('mil')) {
            return parseFloat(cleaned.replace('mil', '')) * 1000;
        }
        return parseFloat(cleaned) || 0;
    }

    // ============================================
    // CAMADA 8: SENTIMENT & URGENCY
    // ============================================

    const sentimentWords = {
        positive: ['bom', 'otimo', 'excelente', 'legal', 'top', 'perfeito', 'adorei', 'gostei', 'interessante', 'incrivel'],
        negative: ['ruim', 'pessimo', 'horrivel', 'caro', 'demorado', 'problema', 'dificil', 'complicado', 'nao gostei'],
        urgent: ['urgente', 'rapido', 'agora', 'ja', 'imediato', 'logo', 'correndo', 'pressao', 'deadline']
    };

    function analyzeSentiment(text) {
        const normalized = normalizeText(text);
        const tokens = tokenize(normalized);

        let positiveCount = 0;
        let negativeCount = 0;
        let urgentCount = 0;

        tokens.forEach(token => {
            if (sentimentWords.positive.some(w => combinedSimilarity(token, w) > 0.8)) {
                positiveCount++;
            }
            if (sentimentWords.negative.some(w => combinedSimilarity(token, w) > 0.8)) {
                negativeCount++;
            }
            if (sentimentWords.urgent.some(w => combinedSimilarity(token, w) > 0.8)) {
                urgentCount++;
            }
        });

        return {
            sentiment: positiveCount > negativeCount ? 'positive' :
                      negativeCount > positiveCount ? 'negative' : 'neutral',
            positiveScore: positiveCount,
            negativeScore: negativeCount,
            urgency: urgentCount > 0 ? 'high' : 'normal',
            urgencyScore: urgentCount
        };
    }

    // ============================================
    // FUNÇÃO PRINCIPAL: PROCESS MESSAGE (v3.0)
    // ============================================

    /**
     * Processa mensagem completa e retorna análise NLU
     * v3.0: Inclui slot filling, disambiguation, context-aware
     */
    function processMessage(message, conversationContext = null) {
        const startTime = performance.now();

        // 1. Pré-processamento
        const expanded = expandAbbreviations(message);
        const normalized = normalizeText(expanded);
        const tokens = tokenize(normalized);
        const expandedTokens = expandSynonyms(tokens);
        const ngrams = extractAllNgrams(normalized);

        // 2. Detecção de intenção (agora com contexto)
        const intents = detectIntents(message, conversationContext);

        // 3. Detecção de categoria
        const category = detectCategory(message, conversationContext);

        // 4. Extração de entidades
        const entities = extractEntities(message);

        // 5. Análise de sentimento
        const sentiment = analyzeSentiment(message);

        // 6. Slot Filling - conecta entidades com intent
        let primaryIntent = intents.primary;
        if (primaryIntent) {
            primaryIntent = fillIntentSlots(primaryIntent, entities, category.category);
        }

        // 7. Montar resultado inicial
        const result = {
            // Input original
            original: message,

            // Processamento
            processed: {
                expanded: expanded,
                normalized: normalized,
                tokens: tokens,
                expandedTokens: expandedTokens,
                ngrams: ngrams
            },

            // Intenção (com slots preenchidos)
            intent: {
                primary: primaryIntent,
                secondary: intents.secondary,
                all: intents.all
            },

            // Categoria
            category: {
                detected: category.category,
                confidence: category.confidence,
                score: category.score,
                needsDisambiguation: category.needsDisambiguation,
                alternatives: category.alternatives,
                allScores: category.allScores
            },

            // Entidades
            entities: entities,

            // Sentimento
            sentiment: sentiment,

            // Metadata
            meta: {
                processingTime: 0, // Will be calculated
                tokenCount: tokens.length,
                hasIntent: intents.primary !== null,
                hasCategory: category.category !== null,
                version: '3.0.0'
            }
        };

        // 8. Verificar se precisa de desambiguação de intent
        const disambiguation = generateDisambiguationQuestion(result);
        if (disambiguation) {
            result.disambiguation = disambiguation;
            result.needsIntentDisambiguation = true;
        } else {
            result.needsIntentDisambiguation = false;
        }

        // 9. Calcular confiança geral da análise
        result.overallConfidence = calculateOverallConfidence(result);

        // 10. Finalizar tempo de processamento
        result.meta.processingTime = Math.round(performance.now() - startTime);

        return result;
    }

    /**
     * Calcula confiança geral da análise
     */
    function calculateOverallConfidence(analysis) {
        const intentConf = analysis.intent.primary?.confidence || 0;
        const categoryConf = analysis.category.confidence || 0;
        const slotCount = analysis.intent.primary?.slotCount || 0;

        // Média ponderada
        let confidence = (intentConf * 0.4) + (categoryConf * 0.4);

        // Boost por slots preenchidos
        confidence += slotCount * 5;

        // Penalidade se precisa desambiguação
        if (analysis.needsIntentDisambiguation) {
            confidence *= 0.8;
        }
        if (analysis.category.needsDisambiguation) {
            confidence *= 0.85;
        }

        return Math.min(100, Math.round(confidence));
    }

    // ============================================
    // FUNÇÕES DE RESPOSTA INTELIGENTE
    // ============================================

    /**
     * Gera sugestões de resposta baseadas na análise
     */
    function generateSuggestions(analysis, conversationState) {
        const suggestions = [];

        // Se detectou categoria com alta confiança
        if (analysis.category.detected && analysis.category.confidence > 70) {
            const categoryEmojis = {
                delivery: '🚗',
                ecommerce: '🛒',
                educacao: '📚',
                saude: '💚',
                fitness: '💪',
                gestao: '💼',
                servicos: '✂️',
                pets: '🐾',
                imobiliario: '🏠',
                transporte: '🚗',
                financas: '💰',
                social: '👥',
                entretenimento: '🎬',
                viagens: '✈️'
            };

            const emoji = categoryEmojis[analysis.category.detected] || '🎯';
            suggestions.push({ text: `${emoji} Sim, é isso!`, action: 'confirm_category' });
            suggestions.push({ text: '🔄 Não é bem isso', action: 'reject_category' });
        }

        // Se detectou intenção de preço
        if (analysis.intent.primary && analysis.intent.primary.intent === 'pergunta_preco') {
            suggestions.push({ text: '💰 Ver investimento', action: 'show_price' });
            suggestions.push({ text: '📋 Ver pacotes', action: 'show_packages' });
        }

        // Se precisa de disambiguação
        if (analysis.category.needsDisambiguation && analysis.category.alternatives) {
            analysis.category.alternatives.forEach(alt => {
                const emoji = getCategoryEmoji(alt.category);
                suggestions.push({
                    text: `${emoji} ${formatCategoryName(alt.category)}`,
                    action: `select_category_${alt.category}`
                });
            });
        }

        return suggestions;
    }

    function getCategoryEmoji(category) {
        const emojis = {
            delivery: '🚗', ecommerce: '🛒', educacao: '📚', saude: '💚',
            fitness: '💪', gestao: '💼', servicos: '✂️', pets: '🐾',
            imobiliario: '🏠', transporte: '🚗', financas: '💰',
            social: '👥', entretenimento: '🎬', viagens: '✈️'
        };
        return emojis[category] || '🎯';
    }

    function formatCategoryName(category) {
        const names = {
            delivery: 'Delivery', ecommerce: 'E-commerce', educacao: 'Educação',
            saude: 'Saúde', fitness: 'Fitness', gestao: 'Gestão',
            servicos: 'Serviços', pets: 'Pets', imobiliario: 'Imobiliário',
            transporte: 'Transporte', financas: 'Finanças', social: 'Social',
            entretenimento: 'Entretenimento', viagens: 'Viagens'
        };
        return names[category] || category;
    }

    // ============================================
    // API PÚBLICA (v3.0)
    // ============================================

    return {
        // Configuração
        CONFIG: CONFIG,

        // Funções principais
        processMessage: processMessage,
        detectCategory: detectCategory,
        detectIntents: detectIntents,

        // Funções auxiliares
        normalizeText: normalizeText,
        tokenize: tokenize,
        expandAbbreviations: expandAbbreviations,
        expandSynonyms: expandSynonyms,
        extractEntities: extractEntities,
        analyzeSentiment: analyzeSentiment,

        // Fuzzy matching
        levenshteinDistance: levenshteinDistance,
        levenshteinSimilarity: levenshteinSimilarity,
        jaroWinklerSimilarity: jaroWinklerSimilarity,
        combinedSimilarity: combinedSimilarity,
        fuzzyMatch: fuzzyMatch,

        // N-grams
        extractNgrams: extractNgrams,
        extractAllNgrams: extractAllNgrams,

        // TF-IDF (v3.0)
        calculateTFIDF: calculateTFIDF,
        calculateIntentTFIDFScore: calculateIntentTFIDFScore,

        // Slot Filling (v3.0)
        fillIntentSlots: fillIntentSlots,

        // Disambiguation (v3.0)
        generateDisambiguationQuestion: generateDisambiguationQuestion,
        formatIntentName: formatIntentName,

        // Learning System (v3.0)
        learnFromCorrection: learnFromCorrection,
        getLearnedCorrections: () => Object.fromEntries(learnedCorrections),
        clearLearnedCorrections: () => {
            learnedCorrections.clear();
            saveLearnedCorrections();
        },

        // Context & Confidence (v3.0)
        applyContextBoost: applyContextBoost,
        calibrateConfidenceWithSoftmax: calibrateConfidenceWithSoftmax,
        calculateOverallConfidence: calculateOverallConfidence,

        // Respostas
        generateSuggestions: generateSuggestions,
        getCategoryEmoji: getCategoryEmoji,
        formatCategoryName: formatCategoryName,

        // Utilitários
        findMainTerm: findMainTerm,
        calculateCategoryScores: calculateCategoryScores,

        // Corpus (v3.0)
        getIntentCorpus: () => intentCorpus,
        getCorpusIDF: () => corpusIDF
    };
})();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.NLUEngine = NLUEngine;
}

// Exportar para Node.js (se necessário para testes)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NLUEngine;
}
