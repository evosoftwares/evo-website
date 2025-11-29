// ==========================================
// CHAT CONTROLLER
// Lógica principal do chat e interface
// ==========================================

// Helper para ícones Material
const getIcon = (name) => `<span class="material-icons icon-inline">${name}</span>`;

// Estado da conversa
let conversationState = {
    stage: 1,
    messageCount: 0,
    userName: null,
    userInfo: {
        appType: null,
        appTypeKey: null,
        detectedNiche: null,
        nicheSubcategory: null,
        features: [],
        selectedFeatures: [],
        functionPoints: 0,
        packageType: null,
        budget: null,
        timeline: null,
        objective: null,
        differentials: [],
        businessContext: null,
        whatsapp: null,
        roiData: null
    },
    messages: [],
    outroTipoAttempts: 0,
    waitingForOutroTipoDescription: false,
    lastSuggestedCategory: null,
    conversationStep: 'app_type'
};

// ================================
// SISTEMA DE PONTOS DE FUNÇÃO
// ================================
const featuresCatalog = {
    delivery: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Autenticação de usuários' },
            { id: 'menu', name: 'Cardápio/Catálogo digital', points: 13, description: 'Exibição de produtos' },
            { id: 'cart', name: 'Carrinho de compras', points: 10, description: 'Adicionar/remover itens' },
            { id: 'checkout', name: 'Finalização de pedido', points: 15, description: 'Checkout e pagamento' },
            { id: 'tracking', name: 'Rastreamento em tempo real', points: 21, description: 'Acompanhar pedido no mapa' },
            { id: 'notifications', name: 'Notificações push', points: 8, description: 'Alertas de pedido' }
        ],
        intermediate: [
            { id: 'multi_payment', name: 'Múltiplas formas de pagamento', points: 13, description: 'PIX, cartão, dinheiro' },
            { id: 'ratings', name: 'Avaliações e comentários', points: 10, description: 'Review de pedidos' },
            { id: 'chat', name: 'Chat cliente-entregador', points: 13, description: 'Comunicação em tempo real' },
            { id: 'schedule', name: 'Agendamento de pedido', points: 10, description: 'Pedir para depois' },
            { id: 'promo', name: 'Sistema de cupons/promoções', points: 13, description: 'Descontos e ofertas' },
            { id: 'history', name: 'Histórico de pedidos', points: 8, description: 'Ver pedidos anteriores' }
        ],
        advanced: [
            { id: 'loyalty', name: 'Programa de fidelidade', points: 13, description: 'Pontos e recompensas' },
            { id: 'ai_recommendations', name: 'Recomendações por IA', points: 21, description: 'Sugestões personalizadas' },
            { id: 'multi_restaurant', name: 'Multi-restaurantes', points: 21, description: 'Marketplace completo' },
            { id: 'driver_app', name: 'App do entregador separado', points: 34, description: 'Sistema completo de delivery' },
            { id: 'admin_panel', name: 'Painel administrativo', points: 21, description: 'Dashboard de gestão' },
            { id: 'analytics', name: 'Analytics avançado', points: 13, description: 'Relatórios e métricas' }
        ]
    },
    ecommerce: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Autenticação de usuários' },
            { id: 'catalog', name: 'Catálogo de produtos', points: 13, description: 'Listagem com filtros' },
            { id: 'product_detail', name: 'Detalhes do produto', points: 8, description: 'Fotos, descrição, preço' },
            { id: 'cart', name: 'Carrinho de compras', points: 10, description: 'Gerenciar itens' },
            { id: 'checkout', name: 'Checkout', points: 15, description: 'Finalização de compra' },
            { id: 'orders', name: 'Gestão de pedidos', points: 13, description: 'Acompanhar status' }
        ],
        intermediate: [
            { id: 'search', name: 'Busca avançada', points: 10, description: 'Filtros e ordenação' },
            { id: 'wishlist', name: 'Lista de desejos', points: 8, description: 'Favoritar produtos' },
            { id: 'reviews', name: 'Reviews de produtos', points: 10, description: 'Avaliações de clientes' },
            { id: 'shipping', name: 'Cálculo de frete', points: 13, description: 'Integração Correios' },
            { id: 'coupons', name: 'Cupons de desconto', points: 10, description: 'Sistema de promoções' },
            { id: 'variations', name: 'Variações de produto', points: 13, description: 'Cores, tamanhos, etc' }
        ],
        advanced: [
            { id: 'marketplace', name: 'Marketplace multi-vendedor', points: 34, description: 'Vários sellers' },
            { id: 'inventory', name: 'Controle de estoque', points: 13, description: 'Gestão de inventário' },
            { id: 'crm', name: 'CRM integrado', points: 21, description: 'Gestão de clientes' },
            { id: 'recommendations', name: 'Recomendações IA', points: 21, description: 'Produtos sugeridos' },
            { id: 'admin', name: 'Painel administrativo', points: 21, description: 'Dashboard completo' },
            { id: 'erp_integration', name: 'Integração com ERP', points: 21, description: 'Sincronização de dados' }
        ]
    },
    educacao: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Alunos e professores' },
            { id: 'courses', name: 'Biblioteca de cursos', points: 13, description: 'Catálogo de cursos' },
            { id: 'video_player', name: 'Player de vídeo', points: 13, description: 'Assistir aulas' },
            { id: 'progress', name: 'Progresso do aluno', points: 10, description: 'Acompanhar evolução' },
            { id: 'certificates', name: 'Certificados', points: 8, description: 'Emissão automática' },
            { id: 'enrollment', name: 'Sistema de matrícula', points: 13, description: 'Inscrição em cursos' }
        ],
        intermediate: [
            { id: 'live_classes', name: 'Aulas ao vivo', points: 21, description: 'Streaming de vídeo' },
            { id: 'quiz', name: 'Quizzes e avaliações', points: 13, description: 'Testes e provas' },
            { id: 'forum', name: 'Fórum de discussão', points: 13, description: 'Comunidade de alunos' },
            { id: 'assignments', name: 'Tarefas e entregas', points: 13, description: 'Envio de trabalhos' },
            { id: 'schedule', name: 'Calendário de aulas', points: 10, description: 'Agenda de eventos' },
            { id: 'chat', name: 'Chat professor-aluno', points: 13, description: 'Comunicação direta' }
        ],
        advanced: [
            { id: 'ai_tutor', name: 'Tutor IA', points: 34, description: 'Assistente virtual' },
            { id: 'analytics', name: 'Analytics de aprendizado', points: 21, description: 'Métricas de performance' },
            { id: 'marketplace', name: 'Marketplace de cursos', points: 21, description: 'Múltiplos instrutores' },
            { id: 'gamification', name: 'Gamificação', points: 21, description: 'Pontos, badges, ranking' },
            { id: 'mobile_offline', name: 'Modo offline', points: 13, description: 'Download de aulas' },
            { id: 'integration', name: 'Integração LMS', points: 21, description: 'Moodle, Canvas, etc' }
        ]
    },
    saude: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Pacientes e profissionais' },
            { id: 'scheduling', name: 'Agendamento de consultas', points: 13, description: 'Marcar horários' },
            { id: 'calendar', name: 'Calendário médico', points: 10, description: 'Disponibilidade' },
            { id: 'medical_records', name: 'Prontuário eletrônico', points: 21, description: 'Histórico médico' },
            { id: 'prescriptions', name: 'Prescrições digitais', points: 13, description: 'Receitas médicas' },
            { id: 'notifications', name: 'Lembretes de consulta', points: 8, description: 'Notificações' }
        ],
        intermediate: [
            { id: 'telemedicine', name: 'Telemedicina', points: 21, description: 'Consultas por vídeo' },
            { id: 'payments', name: 'Pagamentos online', points: 13, description: 'Cobranças integradas' },
            { id: 'exams', name: 'Gestão de exames', points: 13, description: 'Upload de resultados' },
            { id: 'chat', name: 'Chat médico-paciente', points: 13, description: 'Comunicação segura' },
            { id: 'ratings', name: 'Avaliações', points: 8, description: 'Review de profissionais' },
            { id: 'health_tracking', name: 'Acompanhamento de saúde', points: 13, description: 'Monitorar sinais vitais' }
        ],
        advanced: [
            { id: 'ai_diagnosis', name: 'IA para diagnóstico', points: 34, description: 'Sugestões inteligentes' },
            { id: 'integration', name: 'Integração com hospitais', points: 21, description: 'Sistemas externos' },
            { id: 'iot', name: 'Integração IoT', points: 21, description: 'Wearables e sensores' },
            { id: 'analytics', name: 'Analytics de saúde', points: 21, description: 'Dashboards médicos' },
            { id: 'multi_clinic', name: 'Multi-clínicas', points: 21, description: 'Rede de atendimento' },
            { id: 'lgpd_compliance', name: 'Conformidade LGPD/HIPAA', points: 13, description: 'Segurança máxima' }
        ]
    },
    gestao: {
        essential: [
            { id: 'auth', name: 'Login e controle de acesso', points: 8, description: 'Usuários e permissões' },
            { id: 'dashboard', name: 'Dashboard principal', points: 13, description: 'Visão geral do negócio' },
            { id: 'financial', name: 'Controle financeiro', points: 21, description: 'Receitas e despesas' },
            { id: 'reports', name: 'Relatórios básicos', points: 13, description: 'Exportação de dados' },
            { id: 'clients', name: 'Cadastro de clientes', points: 10, description: 'CRM básico' },
            { id: 'products', name: 'Cadastro de produtos/serviços', points: 10, description: 'Inventário' }
        ],
        intermediate: [
            { id: 'invoicing', name: 'Emissão de NF-e', points: 21, description: 'Notas fiscais' },
            { id: 'inventory', name: 'Gestão de estoque', points: 13, description: 'Controle de inventário' },
            { id: 'sales', name: 'Funil de vendas', points: 13, description: 'Pipeline CRM' },
            { id: 'employees', name: 'Gestão de funcionários', points: 13, description: 'RH básico' },
            { id: 'projects', name: 'Gestão de projetos', points: 13, description: 'Tarefas e prazos' },
            { id: 'integrations', name: 'Integrações bancárias', points: 13, description: 'API bancária' }
        ],
        advanced: [
            { id: 'erp_complete', name: 'ERP completo', points: 34, description: 'Sistema integrado' },
            { id: 'bi', name: 'Business Intelligence', points: 21, description: 'Analytics avançado' },
            { id: 'automation', name: 'Automações', points: 21, description: 'Workflows automáticos' },
            { id: 'multi_company', name: 'Multi-empresas', points: 21, description: 'Gestão de filiais' },
            { id: 'api', name: 'API para integrações', points: 13, description: 'Conectar sistemas' },
            { id: 'mobile', name: 'App mobile nativo', points: 21, description: 'iOS e Android' }
        ]
    },
    fitness: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Alunos e personal trainers' },
            { id: 'workouts', name: 'Biblioteca de treinos', points: 13, description: 'Exercícios por categoria' },
            { id: 'workout_tracking', name: 'Registro de treino', points: 13, description: 'Acompanhar séries e repetições' },
            { id: 'progress', name: 'Progresso físico', points: 10, description: 'Medidas e fotos de evolução' },
            { id: 'calendar', name: 'Agenda de treinos', points: 10, description: 'Planejamento semanal' },
            { id: 'notifications', name: 'Lembretes de treino', points: 8, description: 'Notificações motivacionais' }
        ],
        intermediate: [
            { id: 'video_exercises', name: 'Vídeos de exercícios', points: 13, description: 'Demonstração de movimentos' },
            { id: 'nutrition', name: 'Diário alimentar', points: 13, description: 'Controle de calorias' },
            { id: 'personal_trainer', name: 'Conexão com personal', points: 13, description: 'Chat com treinador' },
            { id: 'challenges', name: 'Desafios fitness', points: 10, description: 'Competições motivacionais' },
            { id: 'classes', name: 'Aulas em grupo', points: 13, description: 'Agendamento de aulas' },
            { id: 'payments', name: 'Pagamentos e planos', points: 13, description: 'Assinaturas recorrentes' }
        ],
        advanced: [
            { id: 'ai_trainer', name: 'Personal trainer IA', points: 34, description: 'Treinos personalizados por IA' },
            { id: 'wearables', name: 'Integração wearables', points: 21, description: 'Apple Watch, Garmin, etc' },
            { id: 'live_classes', name: 'Aulas ao vivo', points: 21, description: 'Streaming de treinos' },
            { id: 'gamification', name: 'Gamificação', points: 13, description: 'Pontos e conquistas' },
            { id: 'community', name: 'Comunidade social', points: 13, description: 'Feed e interação' },
            { id: 'analytics', name: 'Analytics de performance', points: 21, description: 'Métricas avançadas' }
        ]
    },
    imobiliario: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Corretores e clientes' },
            { id: 'listings', name: 'Listagem de imóveis', points: 13, description: 'Catálogo com filtros' },
            { id: 'property_detail', name: 'Detalhes do imóvel', points: 10, description: 'Fotos, descrição, preço' },
            { id: 'search', name: 'Busca avançada', points: 13, description: 'Por região, preço, tipo' },
            { id: 'contact', name: 'Contato com corretor', points: 8, description: 'Formulário de interesse' },
            { id: 'favorites', name: 'Imóveis favoritos', points: 8, description: 'Salvar para depois' }
        ],
        intermediate: [
            { id: 'virtual_tour', name: 'Tour virtual 360°', points: 21, description: 'Visita online' },
            { id: 'scheduling', name: 'Agendamento de visitas', points: 13, description: 'Marcar visitas presenciais' },
            { id: 'chat', name: 'Chat corretor-cliente', points: 13, description: 'Comunicação em tempo real' },
            { id: 'financing', name: 'Simulador de financiamento', points: 13, description: 'Cálculo de parcelas' },
            { id: 'alerts', name: 'Alertas de novos imóveis', points: 10, description: 'Notificações personalizadas' },
            { id: 'comparison', name: 'Comparador de imóveis', points: 10, description: 'Comparar propriedades' }
        ],
        advanced: [
            { id: 'crm', name: 'CRM imobiliário', points: 21, description: 'Gestão de leads e clientes' },
            { id: 'ai_recommendations', name: 'Recomendações por IA', points: 21, description: 'Imóveis sugeridos' },
            { id: 'contracts', name: 'Gestão de contratos', points: 21, description: 'Documentação digital' },
            { id: 'analytics', name: 'Analytics de mercado', points: 21, description: 'Tendências e preços' },
            { id: 'multi_agency', name: 'Multi-imobiliárias', points: 21, description: 'Marketplace imobiliário' },
            { id: 'admin', name: 'Painel administrativo', points: 13, description: 'Dashboard de gestão' }
        ]
    },
    servicos: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Clientes e profissionais' },
            { id: 'services', name: 'Catálogo de serviços', points: 10, description: 'Lista de serviços oferecidos' },
            { id: 'scheduling', name: 'Agendamento online', points: 13, description: 'Marcar horários' },
            { id: 'calendar', name: 'Calendário de disponibilidade', points: 10, description: 'Horários livres' },
            { id: 'reminders', name: 'Lembretes automáticos', points: 8, description: 'Notificações de agendamento' },
            { id: 'profile', name: 'Perfil do profissional', points: 8, description: 'Portfólio e especialidades' }
        ],
        intermediate: [
            { id: 'payments', name: 'Pagamentos online', points: 13, description: 'PIX, cartão, etc' },
            { id: 'reviews', name: 'Avaliações', points: 10, description: 'Review de clientes' },
            { id: 'chat', name: 'Chat cliente-profissional', points: 13, description: 'Comunicação direta' },
            { id: 'loyalty', name: 'Programa de fidelidade', points: 13, description: 'Pontos e descontos' },
            { id: 'packages', name: 'Pacotes de serviços', points: 10, description: 'Combos e assinaturas' },
            { id: 'history', name: 'Histórico de atendimentos', points: 8, description: 'Registro de serviços' }
        ],
        advanced: [
            { id: 'multi_location', name: 'Multi-unidades', points: 21, description: 'Várias filiais' },
            { id: 'team_management', name: 'Gestão de equipe', points: 13, description: 'Funcionários e comissões' },
            { id: 'inventory', name: 'Controle de estoque', points: 13, description: 'Produtos e insumos' },
            { id: 'crm', name: 'CRM de clientes', points: 21, description: 'Histórico e preferências' },
            { id: 'analytics', name: 'Analytics de negócio', points: 21, description: 'Relatórios e métricas' },
            { id: 'admin', name: 'Painel administrativo', points: 13, description: 'Dashboard completo' }
        ]
    },
    financas: {
        essential: [
            { id: 'auth', name: 'Login seguro', points: 10, description: 'Autenticação 2FA' },
            { id: 'accounts', name: 'Contas e carteiras', points: 13, description: 'Gestão de contas' },
            { id: 'transactions', name: 'Registro de transações', points: 13, description: 'Receitas e despesas' },
            { id: 'categories', name: 'Categorização automática', points: 10, description: 'Organizar gastos' },
            { id: 'budget', name: 'Orçamento mensal', points: 13, description: 'Planejamento financeiro' },
            { id: 'reports', name: 'Relatórios básicos', points: 10, description: 'Visão geral das finanças' }
        ],
        intermediate: [
            { id: 'bank_sync', name: 'Sincronização bancária', points: 21, description: 'Importar transações' },
            { id: 'goals', name: 'Metas financeiras', points: 13, description: 'Objetivos de economia' },
            { id: 'bills', name: 'Gestão de contas a pagar', points: 13, description: 'Lembretes de vencimento' },
            { id: 'investments', name: 'Acompanhamento de investimentos', points: 13, description: 'Carteira de ativos' },
            { id: 'alerts', name: 'Alertas de gastos', points: 10, description: 'Notificações de limite' },
            { id: 'export', name: 'Exportação de dados', points: 8, description: 'PDF, Excel, etc' }
        ],
        advanced: [
            { id: 'ai_insights', name: 'Insights por IA', points: 34, description: 'Recomendações financeiras' },
            { id: 'invoicing', name: 'Emissão de boletos/NF', points: 21, description: 'Cobranças automatizadas' },
            { id: 'multi_currency', name: 'Multi-moedas', points: 13, description: 'Câmbio e cripto' },
            { id: 'analytics', name: 'Analytics avançado', points: 21, description: 'Dashboards financeiros' },
            { id: 'pix_integration', name: 'Integração PIX', points: 21, description: 'Pagamentos instantâneos' },
            { id: 'security', name: 'Segurança avançada', points: 13, description: 'Criptografia e audit trail' }
        ]
    },
    social: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Criação de perfil' },
            { id: 'profiles', name: 'Perfis de usuário', points: 10, description: 'Foto, bio, informações' },
            { id: 'feed', name: 'Feed de publicações', points: 13, description: 'Timeline de posts' },
            { id: 'posts', name: 'Criar publicações', points: 10, description: 'Texto, fotos, vídeos' },
            { id: 'likes', name: 'Curtidas e reações', points: 8, description: 'Interação com posts' },
            { id: 'comments', name: 'Comentários', points: 10, description: 'Discussões em posts' }
        ],
        intermediate: [
            { id: 'followers', name: 'Sistema de seguidores', points: 13, description: 'Seguir usuários' },
            { id: 'messaging', name: 'Mensagens privadas', points: 13, description: 'Chat direto' },
            { id: 'groups', name: 'Grupos e comunidades', points: 13, description: 'Criar e participar' },
            { id: 'notifications', name: 'Notificações', points: 10, description: 'Alertas de interação' },
            { id: 'search', name: 'Busca de usuários', points: 10, description: 'Encontrar pessoas' },
            { id: 'hashtags', name: 'Hashtags e trending', points: 10, description: 'Descobrir conteúdo' }
        ],
        advanced: [
            { id: 'stories', name: 'Stories/Status', points: 21, description: 'Conteúdo temporário' },
            { id: 'live', name: 'Lives e streaming', points: 21, description: 'Transmissões ao vivo' },
            { id: 'ai_moderation', name: 'Moderação por IA', points: 21, description: 'Filtro de conteúdo' },
            { id: 'analytics', name: 'Analytics de engajamento', points: 13, description: 'Métricas de alcance' },
            { id: 'monetization', name: 'Monetização', points: 21, description: 'Assinaturas e gorjetas' },
            { id: 'recommendations', name: 'Recomendações IA', points: 21, description: 'Conteúdo sugerido' }
        ]
    },
    transporte: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Passageiros e motoristas' },
            { id: 'booking', name: 'Solicitar corrida', points: 13, description: 'Pedir transporte' },
            { id: 'tracking', name: 'Rastreamento em tempo real', points: 21, description: 'Ver motorista no mapa' },
            { id: 'pricing', name: 'Cálculo de preço', points: 13, description: 'Estimativa de tarifa' },
            { id: 'payment', name: 'Pagamento integrado', points: 13, description: 'PIX, cartão, dinheiro' },
            { id: 'ratings', name: 'Avaliações', points: 8, description: 'Notas de motoristas' }
        ],
        intermediate: [
            { id: 'driver_app', name: 'App do motorista', points: 21, description: 'Aceitar corridas' },
            { id: 'history', name: 'Histórico de corridas', points: 8, description: 'Viagens anteriores' },
            { id: 'favorites', name: 'Endereços favoritos', points: 8, description: 'Casa, trabalho, etc' },
            { id: 'schedule', name: 'Agendamento de corridas', points: 13, description: 'Reservar para depois' },
            { id: 'chat', name: 'Chat passageiro-motorista', points: 13, description: 'Comunicação direta' },
            { id: 'promotions', name: 'Cupons e promoções', points: 10, description: 'Descontos' }
        ],
        advanced: [
            { id: 'carpool', name: 'Carona compartilhada', points: 21, description: 'Dividir corridas' },
            { id: 'fleet', name: 'Gestão de frota', points: 21, description: 'Empresas e frotas' },
            { id: 'ai_routing', name: 'Rotas otimizadas por IA', points: 21, description: 'Melhor caminho' },
            { id: 'analytics', name: 'Analytics de operação', points: 21, description: 'Métricas de negócio' },
            { id: 'surge', name: 'Preço dinâmico', points: 13, description: 'Ajuste por demanda' },
            { id: 'admin', name: 'Painel administrativo', points: 13, description: 'Dashboard de gestão' }
        ]
    },
    pets: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Donos e pet shops' },
            { id: 'catalog', name: 'Catálogo de produtos', points: 13, description: 'Ração, acessórios, etc' },
            { id: 'cart', name: 'Carrinho de compras', points: 10, description: 'Adicionar produtos' },
            { id: 'checkout', name: 'Checkout', points: 15, description: 'Finalização de compra' },
            { id: 'pet_profile', name: 'Perfil do pet', points: 10, description: 'Dados do animal' },
            { id: 'orders', name: 'Histórico de pedidos', points: 8, description: 'Pedidos anteriores' }
        ],
        intermediate: [
            { id: 'scheduling', name: 'Agendamento banho/tosa', points: 13, description: 'Marcar serviços' },
            { id: 'veterinary', name: 'Consultas veterinárias', points: 13, description: 'Agendar consultas' },
            { id: 'vaccines', name: 'Carteira de vacinação', points: 10, description: 'Controle de vacinas' },
            { id: 'delivery', name: 'Delivery de produtos', points: 13, description: 'Entrega em casa' },
            { id: 'reminders', name: 'Lembretes automáticos', points: 8, description: 'Vacinas, banho, etc' },
            { id: 'reviews', name: 'Avaliações', points: 8, description: 'Reviews de produtos' }
        ],
        advanced: [
            { id: 'telemedicine', name: 'Telemedicina veterinária', points: 21, description: 'Consultas online' },
            { id: 'subscription', name: 'Assinaturas/Clube', points: 13, description: 'Entrega recorrente' },
            { id: 'marketplace', name: 'Marketplace multi-lojas', points: 21, description: 'Vários pet shops' },
            { id: 'ai_recommendations', name: 'Recomendações IA', points: 21, description: 'Produtos sugeridos' },
            { id: 'analytics', name: 'Analytics', points: 13, description: 'Métricas de vendas' },
            { id: 'admin', name: 'Painel administrativo', points: 13, description: 'Dashboard completo' }
        ]
    },
    entretenimento: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Usuários e assinantes' },
            { id: 'catalog', name: 'Catálogo de conteúdo', points: 13, description: 'Filmes, séries, músicas' },
            { id: 'player', name: 'Player de mídia', points: 21, description: 'Reprodução de vídeo/áudio' },
            { id: 'search', name: 'Busca e filtros', points: 10, description: 'Encontrar conteúdo' },
            { id: 'favorites', name: 'Lista de favoritos', points: 8, description: 'Salvar conteúdo' },
            { id: 'history', name: 'Histórico', points: 8, description: 'Continuar assistindo' }
        ],
        intermediate: [
            { id: 'subscription', name: 'Sistema de assinatura', points: 13, description: 'Planos e pagamentos' },
            { id: 'download', name: 'Download offline', points: 13, description: 'Assistir sem internet' },
            { id: 'profiles', name: 'Múltiplos perfis', points: 10, description: 'Perfis por usuário' },
            { id: 'recommendations', name: 'Recomendações', points: 13, description: 'Conteúdo sugerido' },
            { id: 'ratings', name: 'Avaliações', points: 8, description: 'Notas e reviews' },
            { id: 'notifications', name: 'Notificações', points: 8, description: 'Novos lançamentos' }
        ],
        advanced: [
            { id: 'live_streaming', name: 'Live streaming', points: 34, description: 'Transmissões ao vivo' },
            { id: 'ai_recommendations', name: 'IA para recomendações', points: 21, description: 'Algoritmo personalizado' },
            { id: 'social', name: 'Recursos sociais', points: 13, description: 'Comentários, compartilhar' },
            { id: 'analytics', name: 'Analytics de consumo', points: 21, description: 'Métricas de audiência' },
            { id: 'drm', name: 'Proteção de conteúdo', points: 21, description: 'DRM e segurança' },
            { id: 'admin', name: 'CMS completo', points: 21, description: 'Gestão de conteúdo' }
        ]
    },
    viagens: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Viajantes e agências' },
            { id: 'search', name: 'Busca de destinos', points: 13, description: 'Hotéis, voos, pacotes' },
            { id: 'listings', name: 'Listagem de ofertas', points: 13, description: 'Resultados de busca' },
            { id: 'booking', name: 'Sistema de reservas', points: 15, description: 'Fazer reservas' },
            { id: 'payment', name: 'Pagamento integrado', points: 13, description: 'PIX, cartão, etc' },
            { id: 'confirmation', name: 'Confirmação e voucher', points: 8, description: 'E-tickets e vouchers' }
        ],
        intermediate: [
            { id: 'comparison', name: 'Comparador de preços', points: 13, description: 'Melhores ofertas' },
            { id: 'reviews', name: 'Avaliações', points: 10, description: 'Reviews de destinos' },
            { id: 'itinerary', name: 'Roteiro de viagem', points: 13, description: 'Planejar viagem' },
            { id: 'alerts', name: 'Alertas de preço', points: 10, description: 'Notificações de promoção' },
            { id: 'maps', name: 'Mapas integrados', points: 10, description: 'Localização e rotas' },
            { id: 'offline', name: 'Modo offline', points: 10, description: 'Acesso sem internet' }
        ],
        advanced: [
            { id: 'ai_recommendations', name: 'Recomendações IA', points: 21, description: 'Destinos sugeridos' },
            { id: 'marketplace', name: 'Marketplace de agências', points: 21, description: 'Multi-operadoras' },
            { id: 'loyalty', name: 'Programa de fidelidade', points: 13, description: 'Pontos e milhas' },
            { id: 'concierge', name: 'Concierge virtual', points: 21, description: 'Assistente de viagem' },
            { id: 'analytics', name: 'Analytics', points: 13, description: 'Métricas de vendas' },
            { id: 'admin', name: 'Painel administrativo', points: 13, description: 'Dashboard completo' }
        ]
    },
    beleza: {
        essential: [
            { id: 'auth', name: 'Login e cadastro', points: 8, description: 'Clientes e profissionais' },
            { id: 'services', name: 'Catálogo de serviços', points: 10, description: 'Tratamentos disponíveis' },
            { id: 'scheduling', name: 'Agendamento online', points: 13, description: 'Marcar horários' },
            { id: 'calendar', name: 'Calendário', points: 10, description: 'Disponibilidade' },
            { id: 'reminders', name: 'Lembretes', points: 8, description: 'Notificações de agendamento' },
            { id: 'profile', name: 'Perfil do profissional', points: 8, description: 'Portfólio e especialidades' }
        ],
        intermediate: [
            { id: 'payments', name: 'Pagamentos online', points: 13, description: 'PIX, cartão, etc' },
            { id: 'reviews', name: 'Avaliações', points: 10, description: 'Review de clientes' },
            { id: 'gallery', name: 'Galeria de trabalhos', points: 10, description: 'Antes e depois' },
            { id: 'loyalty', name: 'Programa de fidelidade', points: 13, description: 'Pontos e descontos' },
            { id: 'products', name: 'Venda de produtos', points: 13, description: 'E-commerce integrado' },
            { id: 'chat', name: 'Chat', points: 10, description: 'Comunicação direta' }
        ],
        advanced: [
            { id: 'multi_location', name: 'Multi-unidades', points: 21, description: 'Rede de salões' },
            { id: 'team_management', name: 'Gestão de equipe', points: 13, description: 'Funcionários e comissões' },
            { id: 'ai_beauty', name: 'IA para beleza', points: 21, description: 'Simulador de visual' },
            { id: 'crm', name: 'CRM de clientes', points: 21, description: 'Histórico e preferências' },
            { id: 'analytics', name: 'Analytics', points: 13, description: 'Relatórios e métricas' },
            { id: 'admin', name: 'Painel administrativo', points: 13, description: 'Dashboard completo' }
        ]
    }
};

// ================================
// CONFIGURAÇÃO E UTILITÁRIOS
// ================================

// Calcular preço baseado em pontos de função
function calculatePrice(functionPoints) {
    const pricePerPoint = 175;
    const basePrice = functionPoints * pricePerPoint;
    let discount = 0;
    if (functionPoints >= 100) discount = 0.15;
    else if (functionPoints >= 50) discount = 0.10;
    const finalPrice = basePrice * (1 - discount);
    return { basePrice, discount, finalPrice, pricePerPoint };
}

// Formatar moeda
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// Calcular tempo de digitação (mais humano)
function getHumanTypingTime(message) {
    const baseTime = 800;
    const charTime = 15;
    const randomVariation = Math.random() * 500;
    return baseTime + (message.length * charTime) + randomVariation;
}

// ================================
// INICIALIZAÇÃO
// ================================

window.addEventListener('DOMContentLoaded', function() {
    restoreSettings(); // Restaurar API Key se existir
    const savedConversation = localStorage.getItem('evoChat');
    if (savedConversation) {
        showReturnModal();
    } else {
        askUserName();
    }

    // Auto-resize textarea
    const chatInput = document.getElementById('chatInput');
    if(chatInput) {
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }
});

// ================================
// SETTINGS (NOVO)
// ================================

function showSettings() {
    const modal = document.createElement('div');
    modal.className = 'settings-modal';
    modal.id = 'settingsModal';

    const savedKey = localStorage.getItem('groqApiKey') || '';

    modal.innerHTML = `
        <div class="settings-content">
            <div class="settings-header">
                <h3>${getIcon('settings')} Configurações</h3>
                <button class="settings-close" onclick="closeSettings()">${getIcon('close')}</button>
            </div>

            <div class="settings-form-group">
                <label class="settings-label" for="apiKeyInput">Groq API Key (Opcional)</label>
                <input type="password" id="apiKeyInput" class="settings-input"
                       placeholder="gsk_..." value="${savedKey}">
                <p style="font-size: 11px; color: #666; margin-top: 4px;">
                    Sua chave é salva apenas no seu navegador. Necessária para IA generativa avançada.
                </p>
            </div>

            <div class="settings-actions">
                <button class="cta-secondary" onclick="closeSettings()" style="padding: 8px 16px;">Cancelar</button>
                <button class="cta-button" onclick="saveSettings()" style="padding: 8px 16px; width: auto;">Salvar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeSettings() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.remove();
}

function saveSettings() {
    const key = document.getElementById('apiKeyInput').value.trim();
    if (key) {
        localStorage.setItem('groqApiKey', key);
        if (window.GroqIntegration) {
            window.GroqIntegration.setApiKey(key);
        }
        alert('Configurações salvas!');
    } else {
        localStorage.removeItem('groqApiKey');
    }
    closeSettings();
}

function restoreSettings() {
    const key = localStorage.getItem('groqApiKey');
    if (key && window.GroqIntegration) {
        window.GroqIntegration.setApiKey(key);
        console.log('Groq API Key restaurada das configurações.');
    }
}

// ================================
// LÓGICA DO CHAT
// ================================

function saveConversation() {
    localStorage.setItem('evoChat', JSON.stringify(conversationState));
}

function restoreConversation() {
    const saved = localStorage.getItem('evoChat');
    if (saved) {
        conversationState = JSON.parse(saved);
        conversationState.messages.forEach(msg => {
            if (msg.type === 'user') addUserMessage(msg.text, false);
            else addAIResponseDirect(msg.text, msg.suggestions, false);
        });
        updateProgress(conversationState.stage, `Etapa ${conversationState.stage} de 3`);
    }
}

function clearConversation() {
    localStorage.removeItem('evoChat');
    location.reload();
}

function showReturnModal() {
    const modal = document.createElement('div');
    modal.className = 'return-modal';
    modal.innerHTML = `
        <div class="return-modal-content">
            <h3>Bem-vindo de volta! ${getIcon('waving_hand')}</h3>
            <p>Encontramos uma conversa anterior. Quer continuar de onde parou?</p>
            <div class="return-modal-buttons">
                <button class="cta-button cta-secondary" onclick="clearConversation()">Começar nova</button>
                <button class="cta-button" onclick="continueConversation()">Continuar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function continueConversation() {
    document.querySelector('.return-modal').remove();
    restoreConversation();
}

function askUserName() {
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML = '';
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `
        <div class="message-ai">
            <div class="message-content">
                <div class="message-bubble">
                    Olá! Sou o assistente da Evo ${getIcon('sentiment_satisfied')}<br><br>Antes de começarmos, como posso te chamar?
                </div>
                <div class="suggestions">
                    <input type="text" id="nameInput" class="chat-input" placeholder="Digite seu nome..." style="margin-top: 12px;" />
                </div>
            </div>
        </div>
    `;
    messagesContainer.appendChild(welcomeDiv);

    setTimeout(() => {
        const nameInput = document.getElementById('nameInput');
        if(nameInput) {
            nameInput.focus();
            nameInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const name = this.value.trim();
                    if (name) {
                        conversationState.userName = name;
                        saveConversation();
                        startConversation();
                    }
                }
            });
        }
    }, 300);
}

function startConversation() {
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML = '';
    addAIResponseDirect(
        `Prazer em te conhecer, ${conversationState.userName}! ${getIcon('celebration')}<br><br>Estou aqui para ajudar você a transformar sua ideia em realidade. Que tipo de aplicativo você está pensando em criar?`,
        [
            { text: 'Delivery', icon: 'local_pizza' },
            { text: 'E-commerce', icon: 'shopping_cart' },
            { text: 'Educação', icon: 'school' },
            { text: 'Saúde', icon: 'health_and_safety' },
            { text: 'Gestão', icon: 'business_center' },
            { text: 'Fitness', icon: 'fitness_center' },
            { text: 'Imobiliário', icon: 'home' },
            { text: 'Serviços', icon: 'content_cut' },
            { text: 'Finanças', icon: 'attach_money' },
            { text: 'Social', icon: 'groups' },
            { text: 'Transporte', icon: 'directions_car' },
            { text: 'Pets', icon: 'pets' },
            { text: 'Entretenimento', icon: 'movie' },
            { text: 'Viagens', icon: 'flight' },
            { text: 'Beleza', icon: 'brush' },
            { text: 'Outro', icon: 'track_changes' }
        ],
        true
    );
}

function talkToHuman() {
    const message = `Olá! Meu nome é ${conversationState.userName || 'Visitante'}. Gostaria de falar sobre desenvolvimento de app.`;
    const whatsappUrl = `https://wa.me/5511983362246?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function updateProgress(stage, text) {
    conversationState.stage = stage;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    if(progressFill && progressText) {
        const percentage = (stage / 5) * 100;
        progressFill.style.width = percentage + '%';
        progressText.textContent = text;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message === '') return;

    conversationState.messageCount++;
    addUserMessage(message);
    input.value = '';
    input.style.height = 'auto';
    input.placeholder = 'Digite sua mensagem aqui...';

    if (conversationState.waitingForOutroTipoDescription) {
        processOutroTipoDescription(message);
        return;
    }

    processMessageWithAI(message);
}

async function processMessageWithAI(message) {
    try {
        if (!window.NLUIntegration || !window.NLUEngine) {
            fallbackToContextualResponse(message);
            return;
        }

        const useHybrid = window.NLUIntegration.isGroqAvailable();
        if (useHybrid) {
        // Passar contexto do usuário para o LLM
        const result = await window.NLUIntegration.processMessageHybrid(message, {
            forceGroq: false,
            userInfo: conversationState.userInfo
        });
            if (result.type === 'groq_response' && result.message) {
                const typingTime = getHumanTypingTime(result.message);
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    addGroqResponse(result.message, result.groqData);
                }, typingTime);
                return;
            }
        }

        const result = window.NLUIntegration.processMessageWithDisambiguation(message);
        if (result.type === 'disambiguation_needed') {
            const suggestions = result.options.map(opt => ({ text: opt.text, value: opt.intent, isDisambiguation: true }));
            showTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                addDisambiguationMessage(result.question, suggestions);
            }, 500);
            return;
        }

        const analysis = result.analysis || result;
        if (analysis && window.NLUIntegration.shouldInterruptFlow(analysis)) {
            const userName = conversationState.userName || 'você';
            const intentResponse = window.NLUIntegration.generateResponse(analysis, userName);
            if (intentResponse && intentResponse.message) {
                const typingTime = getHumanTypingTime(intentResponse.message);
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    addAIResponseDirect(intentResponse.message, intentResponse.suggestions || [], true);
                }, typingTime);
                return;
            }
        }

        fallbackToContextualResponse(message);
    } catch (error) {
        console.warn('AI Error (fallback):', error);
        fallbackToContextualResponse(message);
    }
}

function fallbackToContextualResponse(message) {
    const response = generateContextualResponse(message);
    const typingTime = getHumanTypingTime(response.message);
    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        addAIResponseDirect(response.message, response.suggestions, true);
    }, typingTime);
}

function addGroqResponse(message, groqData = {}) {
    // Processar tags de ação do LLM
    let finalMessage = message;
    let actionToTrigger = null;

    if (message.includes('{{SHOW_ROI}}')) {
        finalMessage = message.replace('{{SHOW_ROI}}', '');
        actionToTrigger = () => showROICalculator(conversationState.userInfo.appTypeKey);
    } else if (message.includes('{{SHOW_PACKAGES}}')) {
        finalMessage = message.replace('{{SHOW_PACKAGES}}', '');
        actionToTrigger = () => showPackages(conversationState.userInfo.appTypeKey || 'delivery');
    } else if (message.includes('{{COLLECT_WHATSAPP}}')) {
        finalMessage = message.replace('{{COLLECT_WHATSAPP}}', '');
        actionToTrigger = () => collectWhatsAppNumber();
    }

    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-ai groq-response';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-bubble">
                ${formatGroqMessage(finalMessage)}
                ${groqData.cached ? '<span class="groq-cached" title="Resposta em cache">⚡</span>' : ''}
            </div>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
    conversationState.messages.push({ type: 'ai', text: message, source: 'groq', groqData });
    saveConversation();

    // Executar ação após delay curto
    if (actionToTrigger) {
        setTimeout(actionToTrigger, 800);
    }
}

function formatGroqMessage(message) {
    return message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\n/g, '<br>');
}

function addUserMessage(message, save = true) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-user';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-bubble">${message}</div>
            <div class="message-confirmed">Enviado</div>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
    if (save) {
        conversationState.messages.push({ type: 'user', text: message });
        saveConversation();
    }
}

function addAIResponseDirect(message, suggestions = [], save = true) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-ai';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-bubble">${message}</div>
            ${suggestions && suggestions.length > 0 ? `
                <div class="suggestions">
                    ${suggestions.map(s => {
                        // Se o objeto tem propriedade icon, renderiza com ícone e usa data-value
                        // Se não, verifica se é texto puro ou objeto antigo
                        const text = typeof s === 'string' ? s : s.text;
                        const icon = s.icon;
                        const label = icon ? `${getIcon(icon)} ${text}` : text;
                        // Armazena o texto limpo no data-value
                        return `<button class="suggestion-chip" onclick="selectSuggestion(this)" data-value="${text}">${label}</button>`;
                    }).join('')}
                </div>
            ` : ''}
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
    if (save) {
        conversationState.messages.push({ type: 'ai', text: message, suggestions });
        saveConversation();
    }
}

function addDisambiguationMessage(message, options = []) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-ai disambiguation-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-bubble disambiguation-bubble">
                <span class="disambiguation-icon">${getIcon('help')}</span>${message}
            </div>
            <div class="disambiguation-options">
                ${options.map((opt, index) => `
                    <button class="disambiguation-chip" data-value="${opt.value || opt.text}" onclick="selectDisambiguationOption(this)">${opt.text}</button>
                `).join('')}
            </div>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

function selectDisambiguationOption(button) {
    const value = button.getAttribute('data-value');
    const text = button.textContent.trim();
    document.querySelectorAll('.disambiguation-chip').forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
    });
    button.classList.add('selected');
    addUserMessage(text);

    if (window.NLUIntegration && window.NLUIntegration.resolveDisambiguation) {
        const resolved = window.NLUIntegration.resolveDisambiguation(value);
        if (resolved && resolved.resolved) {
            const userName = conversationState.userName || 'você';
            const intentResponse = window.NLUIntegration.generateResponse({ intent: { primary: { intent: resolved.intent, confidence: 100 } }, category: { detected: null }, entities: {} }, userName);
            if (intentResponse && intentResponse.message) {
                const typingTime = getHumanTypingTime(intentResponse.message);
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    addAIResponseDirect(intentResponse.message, intentResponse.suggestions || [], true);
                }, typingTime);
                return;
            }
        }
    }
    fallbackToContextualResponse(text);
}

// Lógica de Geração Contextual
function generateContextualResponse(message) {
    const userName = conversationState.userName || 'você';
    const step = conversationState.conversationStep;

    // Se NLUIntegration estiver disponível, usamos as funções auxiliares dele
    if (window.NLUIntegration) {
        if(step === 'app_type') {
            const detection = window.NLUIntegration.detectCategory(message);
            if (detection.category) {
                conversationState.userInfo.appType = window.NLUEngine.formatCategoryName(detection.category);
                conversationState.userInfo.appTypeKey = detection.category;
                conversationState.conversationStep = 'niche_detail';
                updateProgress(1, 'Etapa 1 de 5: Conhecendo seu negócio');
                return {
                    message: `Legal, ${userName}! Apps de ${conversationState.userInfo.appType} são excelentes. Me conta mais sobre seu negócio?`,
                    suggestions: [{ text: 'Estou começando agora', icon: 'new_releases' }, { text: 'Já tenho um negócio', icon: 'trending_up' }]
                };
            }
        }
    }

    // Passos subsequentes
    if (step === 'niche_detail') {
        conversationState.conversationStep = 'objective';
        updateProgress(2, 'Etapa 2 de 5: Objetivo');
        return {
            message: `Entendi! E qual seu principal objetivo com o app?`,
            suggestions: [{ text: 'Crescer vendas', icon: 'rocket_launch' }, { text: 'Fidelizar clientes', icon: 'favorite' }]
        };
    }
    if (step === 'objective') {
        conversationState.conversationStep = 'timeline';
        updateProgress(3, 'Etapa 3 de 5: Prazo');
        return {
            message: `Perfeito. Pra quando você precisa do app pronto?`,
            suggestions: [{ text: 'O mais rápido possível', icon: 'bolt' }, { text: '1 a 2 meses', icon: 'calendar_today' }]
        };
    }
    if (step === 'timeline') {
        conversationState.userInfo.timeline = message;
        conversationState.conversationStep = 'budget';
        updateProgress(4, 'Etapa 4 de 5: Orçamento');
        return {
            message: `Anotado. E quanto você pensa em investir?`,
            // Para orçamento, podemos repetir o ícone para dar ideia de escala
            suggestions: [
                { text: 'Até R$ 15 mil', icon: 'attach_money' },
                { text: 'R$ 15 a 30 mil', icon: 'savings' },
                { text: 'Mais de R$ 30 mil', icon: 'account_balance' }
            ]
        };
    }
    if (step === 'budget') {
        conversationState.userInfo.budget = message;
        conversationState.conversationStep = 'packages';
        updateProgress(5, 'Finalizando...');
        setTimeout(() => showPackages(conversationState.userInfo.appTypeKey || 'delivery'), 1000);
        return { message: `Certo! Separei algumas opções para você:`, suggestions: [] };
    }

    return {
        message: `Entendi, ${userName}. Pode me dar mais detalhes?`,
        suggestions: []
    };
}

function selectSuggestion(button) {
    // Prefer data-value if available to get clean text without icon HTML
    const text = button.getAttribute('data-value') || button.innerText.trim();

    if (text.includes('Calcular ROI')) {
        addUserMessage(text);
        showROICalculator();
        return;
    }

    // NEW
    if (text.includes('Personalizar')) {
        addUserMessage(text);
        customizePackage();
        return;
    }
    if (text.includes('Prosseguir')) {
        addUserMessage(text);
        finishPackageSelection();
        return;
    }
    // END NEW

    if (text.includes('WhatsApp') || text.includes('Falar')) {
        talkToHuman();
        return;
    }
    sendMessageWithText(text);
}

function sendMessageWithText(text) {
    const input = document.getElementById('chatInput');
    // Para o input, queremos apenas texto ou emoji, mas material icons são HTML.
    // Então, ao clicar na sugestão, enviaremos o texto direto.
    // Vamos limpar o HTML do texto antes de colocar no input
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    input.value = tempDiv.innerText.trim();
    sendMessage();
}

function processOutroTipoDescription(description) {
    conversationState.waitingForOutroTipoDescription = false;
    addAIResponseDirect(`Entendi! Vamos analisar seu projeto personalizado.`, [{text: 'Continuar'}]);
    conversationState.conversationStep = 'objective';
}

// ================================
// PACOTES E ROI
// ================================

const packageDefinitions = {
    delivery: {
        starter: { name: 'Starter', goal: 'Validar', capacity: '100 pedidos', timeline: '15 dias' },
        growth: { name: 'Growth', goal: 'Crescer', capacity: '500 pedidos', timeline: '30 dias' },
        scale: { name: 'Scale', goal: 'Dominar', capacity: 'Ilimitado', timeline: '45 dias' }
    },
    ecommerce: {
        starter: { name: 'Starter', goal: 'Vendas iniciais', capacity: '50 produtos', timeline: '15 dias' },
        growth: { name: 'Professional', goal: 'Expansão', capacity: '500 produtos', timeline: '25 dias' },
        scale: { name: 'Enterprise', goal: 'Liderança', capacity: 'Ilimitado', timeline: '40 dias' }
    },
    educacao: {
        starter: { name: 'Curso Básico', goal: 'Lançamento', capacity: '100 alunos', timeline: '20 dias' },
        growth: { name: 'Escola Online', goal: 'Escalar', capacity: '1000 alunos', timeline: '35 dias' },
        scale: { name: 'Universidade', goal: 'Dominar', capacity: 'Ilimitado', timeline: '50 dias' }
    },
    saude: {
        starter: { name: 'Consultório', goal: 'Digitalizar', capacity: 'Agendamento simples', timeline: '15 dias' },
        growth: { name: 'Clínica', goal: 'Gestão completa', capacity: 'Prontuário + Financeiro', timeline: '30 dias' },
        scale: { name: 'Rede', goal: 'Expansão', capacity: 'Multi-unidades', timeline: '45 dias' }
    },
    // Fallback genérico para outros tipos
    gestao: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    fitness: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    imobiliario: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    servicos: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    financas: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    social: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    transporte: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    pets: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    entretenimento: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    viagens: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } },
    beleza: { starter: { name: 'Básico', goal: 'Organizar', capacity: '-', timeline: '20 dias' }, growth: { name: 'Pro', goal: 'Crescer', capacity: '-', timeline: '30 dias' }, scale: { name: 'Enterprise', goal: 'Escalar', capacity: '-', timeline: '45 dias' } }
};

function showPackages(appTypeKey) {
    const packages = packageDefinitions[appTypeKey] || packageDefinitions['delivery'];
    const messagesContainer = document.getElementById('chatMessages');
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="message-ai">
            <div class="message-content" style="max-width: 100%">
                <div class="message-bubble">Aqui estão as opções para seu app:</div>
                <div style="display:flex; gap:10px; overflow-x:auto; padding:10px 0;">
                    <div style="border:2px solid #0055cc; padding:15px; border-radius:10px; min-width:200px; background: white;">
                        <h4 style="color: #0055cc;">${packages.starter.name}</h4>
                        <p style="font-size: 13px; color: #666;">${packages.starter.goal}</p>
                        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
                        <p style="font-size: 12px;">${getIcon('bar_chart')} ${packages.starter.capacity}</p>
                        <p style="font-size: 12px;">${getIcon('timer')} ${packages.starter.timeline}</p>
                        <button class="cta-button" onclick="selectPackage('starter', '${appTypeKey}')" style="margin-top: 10px;">Escolher</button>
                    </div>
                    <div style="border:2px solid #ff9500; padding:15px; border-radius:10px; min-width:200px; background: #fffbf0; transform: scale(1.05);">
                        <div style="background: #ff9500; color: white; padding: 2px 8px; border-radius: 10px; font-size: 10px; display: inline-block; margin-bottom: 5px;">${getIcon('star')} RECOMENDADO</div>
                        <h4 style="color: #e68a00;">${packages.growth.name}</h4>
                        <p style="font-size: 13px; color: #666;">${packages.growth.goal}</p>
                        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ffdec2;">
                        <p style="font-size: 12px;">${getIcon('bar_chart')} ${packages.growth.capacity}</p>
                        <p style="font-size: 12px;">${getIcon('timer')} ${packages.growth.timeline}</p>
                        <button class="cta-button" onclick="selectPackage('growth', '${appTypeKey}')" style="margin-top: 10px; background: #ff9500;">Escolher</button>
                    </div>
                    <div style="border:2px solid #8b5cf6; padding:15px; border-radius:10px; min-width:200px; background: white;">
                        <h4 style="color: #8b5cf6;">${packages.scale.name}</h4>
                        <p style="font-size: 13px; color: #666;">${packages.scale.goal}</p>
                        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
                        <p style="font-size: 12px;">${getIcon('bar_chart')} ${packages.scale.capacity}</p>
                        <p style="font-size: 12px;">${getIcon('timer')} ${packages.scale.timeline}</p>
                        <button class="cta-button" onclick="selectPackage('scale', '${appTypeKey}')" style="margin-top: 10px; background: #8b5cf6;">Escolher</button>
                    </div>
                </div>
                <div class="suggestions">
                    <button class="suggestion-chip" onclick="showROICalculator('${appTypeKey}')">${getIcon('attach_money')} Calcular ROI estimado</button>
                </div>
            </div>
        </div>
    `;
    messagesContainer.appendChild(div);
    scrollToBottom();
}

function selectPackage(type, appTypeKey) {
    conversationState.userInfo.packageType = type;
    if (appTypeKey) conversationState.userInfo.appTypeKey = appTypeKey;

    const appType = conversationState.userInfo.appTypeKey || 'delivery';
    const pkg = packageDefinitions[appType][type];

    addAIResponseDirect(
        `Você selecionou o pacote <strong>${pkg.name}</strong>. ${getIcon('check_circle')}<br><br>` +
        `Este pacote inclui uma série de funcionalidades padrões. ` +
        `Você gostaria de personalizar os recursos (adicionar/remover itens) ou prosseguir com a configuração padrão?`,
        [
            { text: 'Personalizar', icon: 'build' },
            { text: 'Prosseguir', icon: 'rocket_launch' }
        ]
    );
}

function collectWhatsAppNumber() {
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="message-ai">
            <div class="message-content">
                <div class="message-bubble">Para finalizar, qual seu WhatsApp para enviarmos a proposta?</div>
                <div style="margin-top:10px;">
                    <input type="tel" id="whatsappInput" class="roi-input" placeholder="(11) 99999-9999" onkeypress="handleWhatsAppKeyPress(event)">
                    <button class="cta-button" onclick="submitWhatsApp()" style="margin-top:10px;">Enviar</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('chatMessages').appendChild(div);
    scrollToBottom();
    setTimeout(() => {
        const input = document.getElementById('whatsappInput');
        if(input) {
            input.focus();
            applyPhoneMask(input);
        }
    }, 100);
}

function applyPhoneMask(input) {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 0) value = '(' + value;
        if (value.length > 3) value = value.slice(0, 3) + ') ' + value.slice(3);
        if (value.length > 10) value = value.slice(0, 10) + '-' + value.slice(10);
        e.target.value = value;
    });
}

function submitWhatsApp() {
    const val = document.getElementById('whatsappInput').value;
    if(val && val.length >= 14) {
        conversationState.userInfo.whatsapp = val;
        addUserMessage(val);
        showFinalConfirmation();
    } else {
        alert('Por favor, digite um número válido.');
    }
}

function handleWhatsAppKeyPress(e) {
    if(e.key === 'Enter') submitWhatsApp();
}

function showFinalConfirmation() {
    const messagesContainer = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="message-ai">
            <div class="message-content">
                <div class="message-bubble">
                    Obrigado! ${getIcon('celebration')}<br><br>
                    Um consultor entrará em contato em breve no número <strong>${conversationState.userInfo.whatsapp}</strong> com sua proposta personalizada.
                </div>
            </div>
        </div>
        <div class="summary-box">
            <h3>Solicitação Enviada!</h3>
            <p>Seu projeto de <strong>${conversationState.userInfo.appType}</strong> foi registrado.</p>
            <button class="cta-button" onclick="window.location.reload()">Começar Novo</button>
        </div>
    `;
    messagesContainer.appendChild(div);
    scrollToBottom();
    // Limpar estado para não restaurar na próxima vez se o usuário quiser
    localStorage.removeItem('evoChat');
}

// ROI Calculator Restored
function showROICalculator(appTypeKey) {
    const appKey = appTypeKey || conversationState.userInfo.appTypeKey || 'delivery';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="message-ai">
            <div class="message-content" style="max-width: 90%;">
                <div class="message-bubble">Vamos calcular o retorno sobre o investimento (ROI)!</div>
                <div class="roi-calculator">
                    <h4>${getIcon('calculate')} Calculadora de ROI</h4>
                    <div class="roi-question">
                        <label>Vendas/Pedidos por mês estimados:</label>
                        <input type="number" id="roi_q1" class="roi-input" placeholder="Ex: 100">
                    </div>
                    <div class="roi-question">
                        <label>Ticket Médio (R$):</label>
                        <input type="number" id="roi_q2" class="roi-input" placeholder="Ex: 50.00">
                    </div>
                    <button class="cta-button" onclick="calculateROI()">Calcular</button>
                    <div id="roi-results-container"></div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('chatMessages').appendChild(div);
    scrollToBottom();
}

function calculateROI() {
    const q1 = parseFloat(document.getElementById('roi_q1').value) || 0;
    const q2 = parseFloat(document.getElementById('roi_q2').value) || 0;

    if(q1 === 0 || q2 === 0) {
        alert('Preencha os valores!');
        return;
    }

    const mensal = q1 * q2;
    const anual = mensal * 12;
    const investimento = 15000; // Valor médio estimado
    const roi = ((anual - investimento) / investimento) * 100;

    const container = document.getElementById('roi-results-container');
    container.innerHTML = `
        <div class="roi-results">
            <div class="roi-metric">
                <span>Faturamento Mensal:</span>
                <span class="roi-metric-value">${formatCurrency(mensal)}</span>
            </div>
            <div class="roi-metric">
                <span>Faturamento Anual:</span>
                <span class="roi-metric-value">${formatCurrency(anual)}</span>
            </div>
            <div class="roi-highlight-box">
                <p>${getIcon('rocket_launch')} ROI estimado de <strong>${roi.toFixed(0)}%</strong> no primeiro ano!</p>
            </div>
        </div>
    `;
    scrollToBottom();
}

function showTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'typing-indicator';
    div.id = 'typingIndicator';
    div.innerHTML = '<div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    document.getElementById('chatMessages').appendChild(div);
    scrollToBottom();
}

function removeTypingIndicator() {
    const el = document.getElementById('typingIndicator');
    if(el) el.remove();
}

function scrollToBottom() {
    const container = document.getElementById('chatMessages');
    container.scrollTop = container.scrollHeight;
}

// ================================
// CUSTOMIZATION FUNCTIONS
// ================================

function customizePackage() {
    const appType = conversationState.userInfo.appTypeKey || 'delivery';
    const pkgType = conversationState.userInfo.packageType || 'starter';
    const features = featuresCatalog[appType] || featuresCatalog['delivery'];

    // Determine initial selection if not already set
    if (!conversationState.userInfo.selectedFeatures || conversationState.userInfo.selectedFeatures.length === 0) {
        let initialSelection = [];
        // Starter: Essential
        if (features.essential) initialSelection = [...initialSelection, ...features.essential.map(f => f.id)];

        // Growth: + Intermediate
        if (pkgType === 'growth' || pkgType === 'scale') {
            if (features.intermediate) initialSelection = [...initialSelection, ...features.intermediate.map(f => f.id)];
        }

        // Scale: + Advanced
        if (pkgType === 'scale') {
            if (features.advanced) initialSelection = [...initialSelection, ...features.advanced.map(f => f.id)];
        }
        conversationState.userInfo.selectedFeatures = initialSelection;
    }

    showFeatureSelector(appType, features);
}

function showFeatureSelector(appType, features) {
    const container = document.createElement('div');
    container.className = 'message-ai';

    let html = `
        <div class="message-content" style="max-width: 100%; width: 100%;">
            <div class="message-bubble">
                <h4>${getIcon('build')} Personalize seu App</h4>
                <p>Marque as funcionalidades que você precisa:</p>
                <div class="features-list" id="featuresList">
    `;

    // Helper to render group
    const renderGroup = (title, list, color) => {
        if (!list || list.length === 0) return '';
        let groupHtml = `<div class="feature-group" style="margin-top: 15px;">
            <h5 style="color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 5px; margin-bottom: 10px;">${title}</h5>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px;">`;

        list.forEach(f => {
            const isChecked = conversationState.userInfo.selectedFeatures.includes(f.id) ? 'checked' : '';
            groupHtml += `
                <label class="feature-item" style="display: flex; align-items: center; padding: 8px; background: #f8f9fa; border-radius: 6px; cursor: pointer; font-size: 13px;">
                    <input type="checkbox" value="${f.id}" data-points="${f.points}" ${isChecked}
                        onchange="toggleFeature(this)" style="margin-right: 8px;">
                    <div>
                        <strong>${f.name}</strong>
                        <div style="font-size: 10px; color: #666;">${f.description}</div>
                    </div>
                </label>
            `;
        });
        groupHtml += `</div></div>`;
        return groupHtml;
    };

    html += renderGroup('Essencial', features.essential, '#0055cc');
    html += renderGroup('Intermediário', features.intermediate, '#ff9500');
    html += renderGroup('Avançado', features.advanced, '#8b5cf6');

    html += `
                </div>
                <div class="price-summary" style="margin-top: 20px; background: #eef2f6; padding: 15px; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>Pontos de Função:</span>
                        <strong id="totalPoints">0</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 1.2em; margin-top: 10px; color: #0055cc;">
                        <span>Investimento Estimado:</span>
                        <strong id="totalPrice">R$ 0,00</strong>
                    </div>
                    <div style="font-size: 11px; color: #888; margin-top: 5px;">*Valor aproximado para desenvolvimento MVP</div>
                </div>
                <button class="cta-button" onclick="confirmCustomPackage()" style="margin-top: 15px; width: 100%;">Confirmar Personalização</button>
            </div>
        </div>
    `;

    container.innerHTML = html;
    document.getElementById('chatMessages').appendChild(container);
    scrollToBottom();

    // Initial calc
    updateCustomPrice();
}

function toggleFeature(checkbox) {
    const id = checkbox.value;
    if (checkbox.checked) {
        if (!conversationState.userInfo.selectedFeatures.includes(id)) {
            conversationState.userInfo.selectedFeatures.push(id);
        }
    } else {
        conversationState.userInfo.selectedFeatures = conversationState.userInfo.selectedFeatures.filter(f => f !== id);
    }
    updateCustomPrice();
}

function updateCustomPrice() {
    const appType = conversationState.userInfo.appTypeKey || 'delivery';
    const features = featuresCatalog[appType] || featuresCatalog['delivery'];
    const allFeatures = [...(features.essential||[]), ...(features.intermediate||[]), ...(features.advanced||[])];

    let totalPoints = 0;
    conversationState.userInfo.selectedFeatures.forEach(id => {
        const feat = allFeatures.find(f => f.id === id);
        if (feat) totalPoints += feat.points;
    });

    const pricing = calculatePrice(totalPoints);

    const elPoints = document.getElementById('totalPoints');
    const elPrice = document.getElementById('totalPrice');

    if (elPoints) elPoints.textContent = totalPoints;
    if (elPrice) elPrice.textContent = formatCurrency(pricing.finalPrice);

    conversationState.userInfo.functionPoints = totalPoints;
}

function finishPackageSelection() {
    // If proceeding without customization, we need to set default features
    if (!conversationState.userInfo.selectedFeatures || conversationState.userInfo.selectedFeatures.length === 0) {
         const appType = conversationState.userInfo.appTypeKey || 'delivery';
         const pkgType = conversationState.userInfo.packageType || 'starter';
         const features = featuresCatalog[appType] || featuresCatalog['delivery'];

         let initialSelection = [];
         if (features.essential) initialSelection = [...initialSelection, ...features.essential.map(f => f.id)];
         if (pkgType === 'growth' || pkgType === 'scale') {
             if (features.intermediate) initialSelection = [...initialSelection, ...features.intermediate.map(f => f.id)];
         }
         if (pkgType === 'scale') {
             if (features.advanced) initialSelection = [...initialSelection, ...features.advanced.map(f => f.id)];
         }
         conversationState.userInfo.selectedFeatures = initialSelection;
    }

    collectWhatsAppNumber();
}

function confirmCustomPackage() {
    addUserMessage('Confirmo essa configuração de funcionalidades.');
    setTimeout(() => {
        collectWhatsAppNumber();
    }, 500);
}
