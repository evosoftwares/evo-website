// ================================
// DICIONÁRIO EXPANDIDO DE NICHOS - 12.000+ KEYWORDS
// Para classificação inteligente de tipos de negócio
// Inclui: variações, acentuação, gírias, regionalismos, erros de digitação
//
// CATEGORIAS BASE (~2.000):
// - Delivery & Food (200+)
// - E-commerce & Varejo (200+)
// - Educação & Cursos (200+)
// - Saúde & Bem-estar (200+)
// - Gestão & Serviços (200+)
// - Tecnologia & Software (150+)
// - Imobiliário (100+)
// - Eventos & Entretenimento (150+)
// - Transporte & Logística (120+)
// - Financeiro & Contábil (130+)
// - Construção & Reformas (100+)
// - Agricultura & Agronegócio (100+)
// - Comunicação & Marketing (120+)
// - Turismo & Hotelaria (100+)
// - Jurídico (80+)
// - Segurança (60+)
// - Religioso & Social (50+)
// - Indústria & Manufatura (80+)
// - Games & Esports (100+)
// - Moda & Vestuário (120+)
// - Artesanato & Handmade (80+)
// - Bebidas & Bartending (90+)
// - Fotografia & Vídeo (100+)
// - Esportes & Outdoor (120+)
// - Música & Áudio (100+)
// - Infantil & Maternidade (90+)
// - Cannabis & CBD (60+)
// - Energia & Sustentabilidade (80+)
// - Podcast & Streaming (60+)
// - Coworking & Escritório (50+)
// - Casamento & Noivas (80+)
// - Idiomas & Tradução (60+)
//
// MEGA EXPANSÕES (~10.000):
// - deliveryExpansao: erros digitação, gírias, comidas regionais (500+)
// - ecommerceExpansao: moda completa, eletrônicos, casa (600+)
// - saudeExpansao: especialidades, estética, psicologia (600+)
// - servicosExpansao: beleza, pet, automotivo (500+)
// - educacaoExpansao: profissionalizantes, idiomas (400+)
// - tecnologiaExpansao: desenvolvimento, data science, IA (500+)
// - construcaoExpansao: serviços, acabamentos (300+)
// - financeiroExpansao: bancos, investimentos, crédito (400+)
// - varejoExpansao: supermercado, farmácia, papelaria (300+)
// - alimentacaoExpansao: dietas, ingredientes (300+)
// ================================

const nichosExpandidos = {
    // ================================
    // DELIVERY & FOOD (200+ keywords)
    // ================================
    delivery: {
        // Tipos de estabelecimento
        restaurantes: ['restaurante', 'lanchonete', 'hamburgueria', 'pizzaria', 'churrascaria', 'rodizio', 'buffet', 'cantina', 'bistrô', 'bistro', 'boteco', 'bar', 'pub', 'espetaria', 'espetinho', 'tapiocaria', 'creperia', 'pastelaria', 'padaria', 'confeitaria', 'doceria', 'sorveteria', 'acaiteria', 'açaí', 'acai', 'cafeteria', 'café', 'cafe', 'food truck', 'foodtruck', 'trailer', 'quiosque', 'kiosk'],

        // Tipos de comida
        culinarias: ['japonesa', 'sushi', 'temaki', 'chinesa', 'tailandesa', 'indiana', 'mexicana', 'italiana', 'francesa', 'arabe', 'árabe', 'peruana', 'coreana', 'vietnamita', 'brasileira', 'nordestina', 'mineira', 'baiana', 'gaucha', 'gaúcha', 'vegetariana', 'vegana', 'fit', 'saudavel', 'saudável', 'lowcarb', 'low carb', 'sem gluten', 'sem glúten', 'organico', 'orgânico'],

        // Pratos específicos
        pratos: ['pizza', 'hamburger', 'hamburguer', 'burger', 'lanche', 'sanduiche', 'sanduíche', 'hot dog', 'hotdog', 'cachorro quente', 'pastel', 'coxinha', 'esfiha', 'esfirra', 'empada', 'torta', 'bolo', 'doce', 'sobremesa', 'salada', 'poke', 'bowl', 'wrap', 'tacos', 'burrito', 'yakisoba', 'ramen', 'lámen', 'macarrao', 'macarrão', 'massa', 'lasanha', 'nhoque', 'risoto', 'steak', 'costela', 'picanha', 'frango', 'peixe', 'camarao', 'camarão', 'marmita', 'marmitex', 'quentinha', 'pf', 'prato feito', 'executivo'],

        // Bebidas
        bebidas: ['bebida', 'drink', 'drinks', 'coquetel', 'chopp', 'chope', 'cerveja', 'vinho', 'suco', 'smoothie', 'milkshake', 'shake', 'refrigerante', 'agua', 'água', 'energetico', 'energético', 'cha', 'chá', 'mate', 'cafe', 'café', 'expresso'],

        // Termos de delivery
        entrega: ['delivery', 'entrega', 'entregar', 'pedido', 'pedidos', 'motoboy', 'motoqueiro', 'entregador', 'frete', 'taxa de entrega', 'rastreio', 'rastreamento', 'tracking', 'tempo de entrega', 'cardapio', 'cardápio', 'menu', 'comanda', 'garcom', 'garçom'],

        // Concorrentes
        concorrentes: ['ifood', 'rappi', 'uber eats', 'ubereats', '99food', 'aiqfome', 'zé delivery', 'ze delivery', 'james delivery', 'loggi', 'cornershop'],

        // Modelos de negócio
        modelos: ['dark kitchen', 'cloud kitchen', 'ghost kitchen', 'cozinha fantasma', 'cozinha virtual', 'delivery only', 'so delivery', 'só delivery', 'take away', 'takeaway', 'para viagem', 'drive thru', 'drive-thru']
    },

    // ================================
    // E-COMMERCE & VAREJO (200+ keywords)
    // ================================
    ecommerce: {
        // Tipos de loja
        lojas: ['loja', 'lojinha', 'boutique', 'outlet', 'brechó', 'brecho', 'atacado', 'atacarejo', 'varejo', 'distribuidora', 'importadora', 'revendedora', 'representante', 'franquia'],

        // Produtos - Moda
        moda: ['roupa', 'roupas', 'vestuario', 'vestuário', 'moda', 'fashion', 'camiseta', 'camisa', 'blusa', 'calca', 'calça', 'jeans', 'short', 'shorts', 'saia', 'vestido', 'casaco', 'jaqueta', 'moletom', 'lingerie', 'intima', 'íntima', 'cueca', 'calcinha', 'sutia', 'sutiã', 'pijama', 'meia', 'meias', 'sapato', 'tenis', 'tênis', 'sandalia', 'sandália', 'chinelo', 'bota', 'sapatilha', 'scarpin', 'bolsa', 'mochila', 'carteira', 'cinto', 'relogio', 'relógio', 'bijuteria', 'bijoux', 'joia', 'jóia', 'acessorio', 'acessório', 'oculos', 'óculos', 'chapeu', 'chapéu', 'bone', 'boné'],

        // Produtos - Casa
        casa: ['movel', 'móvel', 'moveis', 'móveis', 'decoracao', 'decoração', 'decor', 'sofa', 'sofá', 'cama', 'colchao', 'colchão', 'mesa', 'cadeira', 'armario', 'armário', 'estante', 'rack', 'tapete', 'cortina', 'almofada', 'travesseiro', 'lencol', 'lençol', 'edredom', 'coberta', 'toalha', 'utensilio', 'utensílio', 'panela', 'frigideira', 'prato', 'talher', 'copo', 'caneca', 'garrafa', 'eletrodomestico', 'eletrodoméstico', 'geladeira', 'fogao', 'fogão', 'microondas', 'liquidificador', 'batedeira', 'cafeteira', 'aspirador', 'ventilador', 'ar condicionado'],

        // Produtos - Eletrônicos
        eletronicos: ['eletronico', 'eletrônico', 'celular', 'smartphone', 'tablet', 'ipad', 'notebook', 'laptop', 'computador', 'pc', 'monitor', 'teclado', 'mouse', 'headset', 'fone', 'fones', 'caixa de som', 'speaker', 'tv', 'televisao', 'televisão', 'smart tv', 'videogame', 'playstation', 'xbox', 'nintendo', 'console', 'camera', 'câmera', 'drone', 'smartwatch', 'relogio inteligente', 'relógio inteligente', 'acessorio celular', 'capinha', 'pelicula', 'película', 'carregador', 'cabo', 'powerbank', 'adaptador'],

        // Produtos - Beleza
        beleza: ['cosmetico', 'cosmético', 'maquiagem', 'make', 'makeup', 'batom', 'base', 'po', 'pó', 'blush', 'rimel', 'mascara', 'máscara', 'sombra', 'delineador', 'lapis', 'lápis', 'esmalte', 'unha', 'perfume', 'fragancia', 'fragrância', 'hidratante', 'creme', 'protetor solar', 'shampoo', 'condicionador', 'mascara capilar', 'oleo', 'óleo', 'serum', 'sérum', 'skincare', 'skin care', 'dermatologico', 'dermatológico'],

        // Produtos - Infantil
        infantil: ['bebe', 'bebê', 'crianca', 'criança', 'infantil', 'kids', 'brinquedo', 'brinquedos', 'boneca', 'carrinho', 'lego', 'jogo', 'jogos', 'fralda', 'mamadeira', 'chupeta', 'berco', 'berço', 'carrinho de bebe', 'cadeirinha', 'roupa infantil', 'roupa de bebe'],

        // Produtos - Pet
        pet: ['pet', 'animal', 'cachorro', 'cao', 'cão', 'gato', 'racao', 'ração', 'petisco', 'brinquedo pet', 'coleira', 'guia', 'cama pet', 'casinha', 'arranhador', 'aquario', 'aquário', 'peixe', 'passaro', 'pássaro', 'hamster', 'coelho'],

        // Produtos - Outros
        outros: ['livro', 'livros', 'papelaria', 'material escolar', 'escritorio', 'escritório', 'presente', 'presentes', 'gift', 'artesanato', 'handmade', 'feito a mao', 'feito à mão', 'personalizado', 'customizado', 'sex shop', 'adulto', 'esportivo', 'fitness', 'suplemento', 'whey', 'vitamina', 'natural', 'organico', 'orgânico', 'vegano', 'sustentavel', 'sustentável', 'eco', 'ferramentas', 'construcao', 'construção', 'jardinagem', 'planta', 'flores', 'floricultura'],

        // Termos de e-commerce
        termos: ['vender', 'venda', 'vendas', 'comprar', 'compra', 'carrinho', 'checkout', 'pagamento', 'pix', 'cartao', 'cartão', 'boleto', 'parcelamento', 'frete', 'envio', 'correios', 'transportadora', 'estoque', 'inventario', 'inventário', 'catalogo', 'catálogo', 'vitrine', 'prateleira', 'promocao', 'promoção', 'desconto', 'cupom', 'cashback', 'programa de pontos', 'fidelidade', 'avaliacoes', 'avaliações', 'review', 'reviews', 'nota', 'estrelas'],

        // Marketplaces
        marketplaces: ['mercado livre', 'mercadolivre', 'shopee', 'amazon', 'magalu', 'magazine luiza', 'americanas', 'submarino', 'casas bahia', 'extra', 'carrefour', 'aliexpress', 'shein', 'wish', 'olx', 'enjoei', 'elo7', 'etsy'],

        // Plataformas
        plataformas: ['shopify', 'woocommerce', 'magento', 'vtex', 'tray', 'nuvemshop', 'loja integrada', 'wix', 'wordpress', 'opencart', 'prestashop']
    },

    // ================================
    // EDUCAÇÃO & CURSOS (200+ keywords)
    // ================================
    educacao: {
        // Tipos de instituição
        instituicoes: ['escola', 'colegio', 'colégio', 'faculdade', 'universidade', 'instituto', 'centro de ensino', 'academia', 'curso', 'cursos', 'cursinho', 'pre vestibular', 'pré-vestibular', 'reforco', 'reforço', 'particular', 'aulas particulares', 'explicador', 'tutor', 'tutoria', 'mentoria', 'coaching'],

        // Tipos de curso
        cursos: ['online', 'presencial', 'hibrido', 'híbrido', 'ao vivo', 'gravado', 'ead', 'a distancia', 'à distância', 'livre', 'tecnico', 'técnico', 'profissionalizante', 'graduacao', 'graduação', 'pos graduacao', 'pós-graduação', 'mba', 'mestrado', 'doutorado', 'especializacao', 'especialização', 'certificacao', 'certificação', 'workshop', 'bootcamp', 'imersao', 'imersão', 'intensivo', 'extensao', 'extensão'],

        // Áreas de conhecimento
        areas: ['informatica', 'informática', 'programacao', 'programação', 'tecnologia', 'ti', 'desenvolvimento', 'web', 'mobile', 'data science', 'inteligencia artificial', 'machine learning', 'design', 'ux', 'ui', 'marketing', 'digital', 'redes sociais', 'vendas', 'negocios', 'negócios', 'empreendedorismo', 'financas', 'finanças', 'contabilidade', 'administracao', 'administração', 'rh', 'recursos humanos', 'direito', 'medicina', 'enfermagem', 'psicologia', 'nutricao', 'nutrição', 'educacao fisica', 'educação física', 'idiomas', 'ingles', 'inglês', 'espanhol', 'frances', 'francês', 'alemao', 'alemão', 'italiano', 'libras', 'matematica', 'matemática', 'fisica', 'física', 'quimica', 'química', 'biologia', 'historia', 'história', 'geografia', 'portugues', 'português', 'redacao', 'redação', 'literatura', 'filosofia', 'sociologia', 'musica', 'música', 'instrumentos', 'violao', 'violão', 'guitarra', 'piano', 'teclado', 'bateria', 'canto', 'danca', 'dança', 'ballet', 'teatro', 'artes', 'pintura', 'desenho', 'fotografia', 'video', 'vídeo', 'edicao', 'edição', 'culinaria', 'culinária', 'gastronomia', 'confeitaria', 'costura', 'moda', 'beleza', 'maquiagem', 'cabelo', 'manicure', 'estetica', 'estética', 'massagem'],

        // Público-alvo
        publico: ['crianca', 'criança', 'infantil', 'kids', 'adolescente', 'jovem', 'adulto', 'idoso', 'terceira idade', 'iniciante', 'basico', 'básico', 'intermediario', 'intermediário', 'avancado', 'avançado', 'profissional', 'empresarial', 'corporativo', 'in company'],

        // Recursos educacionais
        recursos: ['video aula', 'videoaula', 'aula', 'aulas', 'apostila', 'material', 'ebook', 'e-book', 'livro', 'exercicio', 'exercício', 'simulado', 'prova', 'teste', 'quiz', 'avaliacao', 'avaliação', 'certificado', 'diploma', 'nota', 'boletim', 'frequencia', 'frequência', 'presenca', 'presença', 'tarefa', 'dever de casa', 'trabalho', 'projeto', 'tcc', 'monografia', 'dissertacao', 'dissertação', 'tese'],

        // Plataformas
        plataformas: ['hotmart', 'eduzz', 'monetizze', 'kiwify', 'udemy', 'coursera', 'linkedin learning', 'alura', 'origamid', 'rocketseat', 'domestika', 'skillshare', 'masterclass', 'khan academy', 'duolingo', 'babbel', 'google classroom', 'moodle', 'canvas', 'blackboard'],

        // Termos gerais
        termos: ['aprender', 'ensinar', 'estudar', 'professor', 'professora', 'instrutor', 'instrutora', 'aluno', 'aluna', 'estudante', 'turma', 'classe', 'sala', 'campus', 'biblioteca', 'laboratorio', 'laboratório', 'matricula', 'matrícula', 'mensalidade', 'bolsa', 'desconto', 'gratuito', 'gratis', 'grátis', 'pago', 'premium', 'assinatura', 'acesso vitalicio', 'acesso vitalício', 'comunidade', 'grupo', 'suporte', 'duvida', 'dúvida', 'pergunta', 'resposta', 'forum', 'fórum', 'chat', 'ao vivo', 'live', 'webinar', 'palestra', 'evento', 'congresso', 'seminario', 'seminário']
    },

    // ================================
    // SAÚDE & BEM-ESTAR (200+ keywords)
    // ================================
    saude: {
        // Profissionais de saúde
        profissionais: ['medico', 'médico', 'medica', 'médica', 'doutor', 'doutora', 'dr', 'dra', 'enfermeiro', 'enfermeira', 'tecnico enfermagem', 'técnico enfermagem', 'fisioterapeuta', 'fisio', 'nutricionista', 'nutri', 'psicologo', 'psicóloga', 'psiquiatra', 'terapeuta', 'fonoaudiologo', 'fonoaudióloga', 'fono', 'dentista', 'odontologista', 'ortodontista', 'dermatologista', 'dermato', 'cardiologista', 'cardio', 'ginecologista', 'gineco', 'obstetra', 'pediatra', 'geriatra', 'ortopedista', 'neurologista', 'neuro', 'oftalmologista', 'oftalmo', 'otorrino', 'urologista', 'endocrinologista', 'endocrino', 'oncologista', 'onco', 'cirurgiao', 'cirurgião', 'anestesista', 'radiologista', 'veterinario', 'veterinária', 'vet'],

        // Estabelecimentos
        estabelecimentos: ['hospital', 'clinica', 'clínica', 'consultorio', 'consultório', 'ambulatorio', 'ambulatório', 'upa', 'pronto socorro', 'emergencia', 'emergência', 'laboratorio', 'laboratório', 'farmacia', 'farmácia', 'drogaria', 'otica', 'ótica', 'spa', 'centro medico', 'centro médico', 'posto de saude', 'posto de saúde', 'unidade de saude', 'unidade de saúde'],

        // Especialidades fitness
        fitness: ['academia', 'gym', 'personal', 'personal trainer', 'educador fisico', 'educador físico', 'profissional de educacao fisica', 'treinador', 'coach', 'crossfit', 'musculacao', 'musculação', 'aerobica', 'aeróbica', 'cardio', 'funcional', 'treino funcional', 'pilates', 'yoga', 'ioga', 'alongamento', 'stretching', 'spinning', 'bike', 'natacao', 'natação', 'hidroginastica', 'hidroginástica', 'corrida', 'running', 'caminhada', 'walking', 'danca', 'dança', 'zumba', 'jump', 'luta', 'artes marciais', 'boxe', 'muay thai', 'jiu jitsu', 'karate', 'taekwondo', 'judo', 'judô', 'capoeira', 'mma'],

        // Bem-estar e terapias
        bemestar: ['massagem', 'massoterapia', 'quiropraxia', 'acupuntura', 'reiki', 'aromaterapia', 'reflexologia', 'shiatsu', 'ayurveda', 'terapia holistica', 'terapia holística', 'meditacao', 'meditação', 'mindfulness', 'relaxamento', 'spa', 'day spa', 'estetica', 'estética', 'esteticista', 'depilacao', 'depilação', 'bronzeamento', 'tratamento facial', 'limpeza de pele', 'peeling', 'botox', 'preenchimento', 'harmonizacao', 'harmonização', 'procedimento estetico', 'procedimento estético'],

        // Nutrição
        nutricao: ['dieta', 'reeducacao alimentar', 'reeducação alimentar', 'emagrecimento', 'perda de peso', 'ganho de massa', 'hipertrofia', 'definicao', 'definição', 'bulking', 'cutting', 'jejum', 'intermitente', 'lowcarb', 'low carb', 'cetogenica', 'cetogênica', 'keto', 'vegetariana', 'vegana', 'plant based', 'sem gluten', 'sem glúten', 'sem lactose', 'intolerancia', 'intolerância', 'alergia', 'suplemento', 'suplementacao', 'suplementação', 'whey', 'proteina', 'proteína', 'creatina', 'bcaa', 'pre treino', 'pré-treino', 'termogenico', 'termogênico', 'vitamina', 'mineral', 'omega', 'ômega', 'colageno', 'colágeno'],

        // Saúde mental
        mental: ['psicologia', 'psicoterapia', 'terapia', 'psicologo', 'psicóloga', 'psiquiatra', 'saude mental', 'saúde mental', 'ansiedade', 'depressao', 'depressão', 'estresse', 'stress', 'burnout', 'panico', 'pânico', 'fobia', 'trauma', 'autoestima', 'autoconhecimento', 'inteligencia emocional', 'inteligência emocional', 'coaching', 'mentoria', 'desenvolvimento pessoal', 'crescimento pessoal'],

        // Termos médicos
        termos: ['consulta', 'atendimento', 'agendamento', 'agenda', 'horario', 'horário', 'paciente', 'prontuario', 'prontuário', 'receita', 'prescricao', 'prescrição', 'exame', 'diagnostico', 'diagnóstico', 'tratamento', 'procedimento', 'cirurgia', 'internacao', 'internação', 'alta', 'retorno', 'acompanhamento', 'plano de saude', 'plano de saúde', 'convenio', 'convênio', 'particular', 'sus', 'telemedicina', 'teleconsulta', 'video consulta', 'online', 'presencial']
    },

    // ================================
    // GESTÃO & SERVIÇOS (200+ keywords)
    // ================================
    gestao: {
        // Tipos de negócio - Beleza
        beleza: ['barbearia', 'barbeiro', 'barber', 'barber shop', 'salao', 'salão', 'salao de beleza', 'salão de beleza', 'cabeleireiro', 'cabeleireira', 'hair', 'cabelo', 'corte', 'coloracao', 'coloração', 'tintura', 'escova', 'progressiva', 'botox capilar', 'hidratacao', 'hidratação', 'tratamento capilar', 'manicure', 'pedicure', 'unha', 'nail', 'designer de sobrancelha', 'sobrancelha', 'cilios', 'cílios', 'lash', 'maquiagem', 'maquiadora', 'makeup', 'make', 'estetica', 'estética', 'esteticista', 'spa', 'day spa', 'massagem', 'depilacao', 'depilação', 'bronzeamento'],

        // Tipos de negócio - Pet
        pet: ['pet shop', 'petshop', 'pet', 'veterinario', 'veterinária', 'vet', 'clinica veterinaria', 'clínica veterinária', 'banho', 'tosa', 'banho e tosa', 'grooming', 'hotel pet', 'hospedagem pet', 'creche pet', 'daycare', 'adestramento', 'adestrador', 'dog walker', 'passeador', 'taxi pet', 'táxi pet', 'transporte pet'],

        // Tipos de negócio - Automotivo
        automotivo: ['oficina', 'mecanica', 'mecânica', 'mecanico', 'mecânico', 'auto center', 'autocenter', 'funilaria', 'pintura', 'lanternagem', 'eletrica automotiva', 'elétrica automotiva', 'ar condicionado automotivo', 'troca de oleo', 'troca de óleo', 'alinhamento', 'balanceamento', 'pneu', 'borracharia', 'lava rapido', 'lava rápido', 'lava jato', 'lavagem', 'polimento', 'vitrificacao', 'vitrificação', 'higienizacao', 'higienização', 'estacionamento', 'valet', 'guincho', 'reboque', 'socorro', 'automovel', 'automóvel', 'carro', 'moto', 'motocicleta', 'caminhao', 'caminhão', 'veiculo', 'veículo'],

        // Tipos de negócio - Casa e Serviços
        casa: ['lavanderia', 'laundry', 'tinturaria', 'passadoria', 'costura', 'alfaiate', 'costureira', 'sapataria', 'sapateiro', 'chaveiro', 'relojoaria', 'relojoeiro', 'joalheria', 'conserto', 'reparo', 'assistencia tecnica', 'assistência técnica', 'manutencao', 'manutenção', 'eletricista', 'encanador', 'pedreiro', 'pintor', 'marceneiro', 'serralheiro', 'vidraceiro', 'jardineiro', 'paisagista', 'piscina', 'piscineiro', 'dedetizacao', 'dedetização', 'limpeza', 'diarista', 'faxineira', 'domestica', 'doméstica', 'cuidador', 'babá', 'baba', 'motorista', 'seguranca', 'segurança', 'porteiro', 'zelador', 'sindico', 'síndico', 'condominio', 'condomínio'],

        // Tipos de negócio - Profissionais liberais
        profissionais: ['advogado', 'advogada', 'escritorio', 'escritório', 'advocacia', 'juridico', 'jurídico', 'contador', 'contadora', 'contabilidade', 'assessoria', 'consultoria', 'consultor', 'consultora', 'arquiteto', 'arquiteta', 'engenheiro', 'engenheira', 'designer', 'fotografo', 'fotógrafa', 'fotografa', 'videomaker', 'cinegrafista', 'editor', 'redator', 'tradutor', 'interprete', 'intérprete', 'corretor', 'imobiliaria', 'imobiliária', 'despachante', 'cartorio', 'cartório'],

        // Gestão empresarial
        empresarial: ['empresa', 'negocio', 'negócio', 'comercio', 'comércio', 'industria', 'indústria', 'fabrica', 'fábrica', 'startup', 'microempresa', 'mei', 'pme', 'pequena empresa', 'media empresa', 'média empresa', 'grande empresa', 'corporacao', 'corporação', 'holding', 'filial', 'matriz', 'franquia', 'franqueado', 'licenciado', 'representante', 'distribuidora', 'atacado', 'varejo'],

        // Sistemas de gestão
        sistemas: ['erp', 'crm', 'pdv', 'ponto de venda', 'caixa', 'financeiro', 'fiscal', 'contabil', 'contábil', 'rh', 'recursos humanos', 'folha de pagamento', 'ponto', 'controle de ponto', 'estoque', 'inventario', 'inventário', 'compras', 'vendas', 'orcamento', 'orçamento', 'faturamento', 'cobranca', 'cobrança', 'nota fiscal', 'nfe', 'nf-e', 'boleto', 'conciliacao', 'conciliação', 'fluxo de caixa', 'dre', 'balanco', 'balanço', 'relatorio', 'relatório', 'dashboard', 'bi', 'indicador', 'kpi', 'meta', 'comissao', 'comissão'],

        // Agendamento
        agendamento: ['agenda', 'agendamento', 'agendar', 'horario', 'horário', 'reserva', 'reservar', 'booking', 'marcacao', 'marcação', 'marcar', 'calendario', 'calendário', 'disponibilidade', 'vaga', 'slot', 'confirmacao', 'confirmação', 'lembrete', 'notificacao', 'notificação', 'cancelamento', 'reagendamento', 'lista de espera', 'fila'],

        // Termos gerais
        termos: ['cliente', 'clientes', 'fornecedor', 'parceiro', 'funcionario', 'funcionário', 'colaborador', 'equipe', 'time', 'gestor', 'gerente', 'supervisor', 'coordenador', 'diretor', 'dono', 'proprietario', 'proprietário', 'socio', 'sócio', 'atendimento', 'servico', 'serviço', 'produto', 'preco', 'preço', 'tabela', 'promocao', 'promoção', 'desconto', 'pacote', 'plano', 'assinatura', 'mensalidade', 'pagamento', 'recebimento', 'cartao', 'cartão', 'pix', 'dinheiro', 'cheque', 'credito', 'crédito', 'debito', 'débito', 'parcelamento']
    },

    // ================================
    // TECNOLOGIA & SOFTWARE (150+ keywords)
    // ================================
    tecnologia: {
        // Desenvolvimento de software
        desenvolvimento: ['software', 'sistema', 'aplicativo', 'app', 'aplicacao', 'aplicação', 'programa', 'plataforma', 'saas', 'paas', 'iaas', 'cloud', 'nuvem', 'api', 'integracao', 'integração', 'webhook', 'microservices', 'microserviços', 'backend', 'frontend', 'fullstack', 'full stack', 'devops', 'mlops', 'dataops', 'agile', 'scrum', 'kanban', 'sprint', 'deploy', 'release', 'versao', 'versão', 'update', 'atualizacao', 'atualização', 'patch', 'bug', 'fix', 'hotfix', 'debug', 'teste', 'qa', 'qualidade'],

        // Linguagens e frameworks
        linguagens: ['javascript', 'typescript', 'python', 'java', 'csharp', 'c#', 'php', 'ruby', 'go', 'golang', 'rust', 'swift', 'kotlin', 'dart', 'flutter', 'react', 'reactjs', 'react native', 'angular', 'vue', 'vuejs', 'nodejs', 'node', 'express', 'nestjs', 'django', 'flask', 'fastapi', 'spring', 'laravel', 'rails', 'dotnet', '.net', 'nextjs', 'nuxt', 'svelte', 'tailwind', 'bootstrap', 'jquery', 'wordpress', 'drupal', 'joomla'],

        // Banco de dados
        bancodados: ['banco de dados', 'database', 'sql', 'mysql', 'postgresql', 'postgres', 'mongodb', 'redis', 'elasticsearch', 'dynamodb', 'firebase', 'supabase', 'oracle', 'sqlserver', 'mariadb', 'sqlite', 'cassandra', 'neo4j', 'graphql', 'prisma', 'sequelize', 'typeorm', 'mongoose'],

        // Infraestrutura
        infraestrutura: ['servidor', 'server', 'hosting', 'hospedagem', 'dominio', 'domínio', 'dns', 'ssl', 'https', 'cdn', 'load balancer', 'kubernetes', 'k8s', 'docker', 'container', 'vm', 'maquina virtual', 'máquina virtual', 'aws', 'amazon web services', 'azure', 'gcp', 'google cloud', 'digital ocean', 'heroku', 'vercel', 'netlify', 'railway', 'render', 'linux', 'ubuntu', 'centos', 'debian', 'windows server'],

        // Inteligência Artificial
        ia: ['inteligencia artificial', 'inteligência artificial', 'ia', 'ai', 'machine learning', 'ml', 'deep learning', 'neural network', 'rede neural', 'nlp', 'processamento de linguagem', 'chatbot', 'bot', 'automacao', 'automação', 'rpa', 'computer vision', 'visao computacional', 'visão computacional', 'opencv', 'tensorflow', 'pytorch', 'keras', 'scikit', 'pandas', 'numpy', 'gpt', 'llm', 'modelo de linguagem', 'prompt', 'fine tuning', 'embeddings', 'vector database', 'langchain', 'huggingface'],

        // Segurança
        seguranca: ['seguranca', 'segurança', 'security', 'ciberseguranca', 'cibersegurança', 'cybersecurity', 'firewall', 'antivirus', 'antivírus', 'malware', 'ransomware', 'phishing', 'ddos', 'penetration test', 'pentest', 'vulnerabilidade', 'criptografia', 'encryption', 'hash', 'token', 'jwt', 'oauth', 'sso', 'mfa', '2fa', 'autenticacao', 'autenticação', 'autorizacao', 'autorização', 'lgpd', 'gdpr', 'compliance', 'auditoria'],

        // Serviços de TI
        servicos: ['suporte tecnico', 'suporte técnico', 'helpdesk', 'help desk', 'service desk', 'ti', 'informatica', 'informática', 'consultoria ti', 'outsourcing', 'terceirizacao', 'terceirização', 'manutencao', 'manutenção', 'instalacao', 'instalação', 'configuracao', 'configuração', 'migracao', 'migração', 'backup', 'recuperacao', 'recuperação', 'disaster recovery', 'monitoramento', 'monitoring', 'sla', 'ticket', 'chamado', 'incidente', 'problema']
    },

    // ================================
    // IMOBILIÁRIO (100+ keywords)
    // ================================
    imobiliario: {
        // Tipos de imóvel
        imoveis: ['imovel', 'imóvel', 'imoveis', 'imóveis', 'casa', 'apartamento', 'apto', 'apt', 'kitnet', 'kitinete', 'studio', 'loft', 'cobertura', 'duplex', 'triplex', 'penthouse', 'flat', 'sobrado', 'terreno', 'lote', 'chacara', 'chácara', 'sitio', 'sítio', 'fazenda', 'rancho', 'galpao', 'galpão', 'sala comercial', 'sala', 'loja', 'ponto comercial', 'escritorio', 'escritório', 'coworking', 'predio', 'prédio', 'edificio', 'edifício', 'condominio', 'condomínio'],

        // Transações
        transacoes: ['venda', 'vender', 'compra', 'comprar', 'aluguel', 'alugar', 'aluguer', 'locacao', 'locação', 'locador', 'locatario', 'locatário', 'inquilino', 'proprietario', 'proprietário', 'arrendamento', 'financiamento', 'hipoteca', 'consorcio', 'consórcio', 'permuta', 'troca', 'repasse', 'cessao', 'cessão', 'transferencia', 'transferência'],

        // Profissionais
        profissionais: ['corretor', 'corretora', 'imobiliaria', 'imobiliária', 'incorporadora', 'construtora', 'administradora', 'sindico', 'síndico', 'zelador', 'porteiro', 'avaliador', 'perito', 'vistoriador', 'arquiteto', 'engenheiro', 'designer de interiores', 'paisagista', 'decorador'],

        // Características
        caracteristicas: ['quarto', 'quartos', 'suite', 'suíte', 'banheiro', 'lavabo', 'sala', 'cozinha', 'area de servico', 'área de serviço', 'varanda', 'sacada', 'terraço', 'jardim', 'quintal', 'piscina', 'churrasqueira', 'garagem', 'vaga', 'elevador', 'portaria', 'seguranca', 'segurança', 'area de lazer', 'área de lazer', 'playground', 'academia', 'salao de festas', 'salão de festas', 'mobiliado', 'semi mobiliado', 'decorado'],

        // Plataformas
        plataformas: ['zap imoveis', 'zapimoveis', 'viva real', 'vivareal', 'olx', 'quintoandar', 'quinto andar', 'imovelweb', 'loft', 'emcasa', 'chaves na mao', 'chaves na mão', 'wimoveis', 'canal do credito', 'creditas', 'meulugar']
    },

    // ================================
    // EVENTOS & ENTRETENIMENTO (150+ keywords)
    // ================================
    eventos: {
        // Tipos de evento
        tipos: ['evento', 'festa', 'celebracao', 'celebração', 'comemoracao', 'comemoração', 'casamento', 'noivado', 'bodas', 'aniversario', 'aniversário', 'birthday', 'niver', 'debutante', '15 anos', 'quinze anos', 'formatura', 'colacao', 'colação', 'batizado', 'primeira comunhao', 'primeira comunhão', 'crisma', 'bar mitzvah', 'cha de bebe', 'chá de bebê', 'baby shower', 'cha revelacao', 'chá revelação', 'gender reveal', 'cha de panela', 'chá de panela', 'cha de cozinha', 'chá de cozinha', 'despedida de solteiro', 'despedida de solteira', 'confraternizacao', 'confraternização', 'happy hour', 'festa junina', 'festa julina', 'halloween', 'natal', 'ano novo', 'reveillon', 'carnaval', 'pascoa', 'páscoa'],

        // Eventos corporativos
        corporativos: ['congresso', 'conferencia', 'conferência', 'convencao', 'convenção', 'seminario', 'seminário', 'simposio', 'simpósio', 'workshop', 'treinamento', 'capacitacao', 'capacitação', 'palestra', 'talk', 'ted', 'tedx', 'meetup', 'networking', 'lancamento', 'lançamento', 'inauguracao', 'inauguração', 'abertura', 'coquetel', 'jantar empresarial', 'almoco', 'almoço', 'coffee break', 'team building', 'integracao', 'integração', 'premiacao', 'premiação', 'cerimonia', 'cerimônia', 'assembleia', 'reuniao', 'reunião'],

        // Entretenimento
        entretenimento: ['show', 'shows', 'concerto', 'musical', 'teatro', 'peca', 'peça', 'espetaculo', 'espetáculo', 'circo', 'cinema', 'filme', 'estreia', 'festival', 'fest', 'feira', 'exposicao', 'exposição', 'expo', 'galeria', 'vernissage', 'balada', 'boate', 'nightclub', 'club', 'rave', 'micareta', 'trio eletrico', 'trio elétrico', 'bloco', 'camarote', 'vip', 'open bar', 'open food', 'pista', 'area vip', 'área vip'],

        // Fornecedores
        fornecedores: ['buffet', 'catering', 'decoracao', 'decoração', 'decorador', 'florista', 'flores', 'arranjo', 'bolo', 'doce', 'salgado', 'drink', 'bartender', 'barman', 'garcom', 'garçom', 'cerimonialista', 'cerimonial', 'assessoria', 'producao', 'produção', 'produtor', 'organizador', 'promoter', 'dj', 'banda', 'musico', 'músico', 'cantor', 'cantora', 'mc', 'animador', 'recreador', 'magico', 'mágico', 'palhaço', 'palhaco', 'fotografo', 'fotógrafo', 'videomaker', 'cinegrafista', 'drone', 'cabine de fotos', 'photobooth', 'totem'],

        // Equipamentos
        equipamentos: ['som', 'sonorizacao', 'sonorização', 'iluminacao', 'iluminação', 'luz', 'led', 'laser', 'painel', 'telao', 'telão', 'projetor', 'datashow', 'palco', 'tablado', 'pista de danca', 'pista de dança', 'tenda', 'toldo', 'cobertura', 'estrutura', 'cadeira', 'mesa', 'toalha', 'louça', 'louca', 'talher', 'copo', 'taça', 'gerador', 'ar condicionado', 'climatizacao', 'climatização'],

        // Locais
        locais: ['salao', 'salão', 'espaco', 'espaço', 'casa de festas', 'casa de eventos', 'centro de convencoes', 'centro de convenções', 'hotel', 'resort', 'fazenda', 'sitio', 'sítio', 'chacara', 'chácara', 'praia', 'clube', 'associacao', 'associação', 'restaurante', 'rooftop', 'terraco', 'terraço', 'garden', 'jardim', 'ao ar livre', 'indoor', 'outdoor']
    },

    // ================================
    // TRANSPORTE & LOGÍSTICA (120+ keywords)
    // ================================
    transporte: {
        // Transporte de pessoas
        pessoas: ['taxi', 'táxi', 'uber', '99', 'cabify', 'indriver', 'motorista', 'chofer', 'transfer', 'translado', 'transporte executivo', 'carro executivo', 'van', 'micro onibus', 'micro ônibus', 'onibus', 'ônibus', 'fretamento', 'charter', 'escolar', 'transporte escolar', 'turismo', 'excursao', 'excursão', 'viagem', 'tour', 'city tour', 'passeio', 'receptivo', 'ambulancia', 'ambulância', 'remoção', 'remocao'],

        // Transporte de carga
        carga: ['frete', 'transporte', 'transportadora', 'logistica', 'logística', 'entrega', 'delivery', 'coleta', 'distribuicao', 'distribuição', 'armazem', 'armazém', 'galpao', 'galpão', 'cd', 'centro de distribuicao', 'centro de distribuição', 'cross docking', 'fulfillment', 'picking', 'packing', 'separacao', 'separação', 'expedicao', 'expedição', 'despacho', 'carga', 'descarga', 'movimentacao', 'movimentação'],

        // Tipos de veículo
        veiculos: ['carro', 'veiculo', 'veículo', 'moto', 'motocicleta', 'bicicleta', 'bike', 'patinete', 'van', 'furgao', 'furgão', 'sprinter', 'utilitario', 'utilitário', 'caminhao', 'caminhão', 'truck', 'carreta', 'bitrem', 'rodotrem', 'reboque', 'guincho', 'empilhadeira', 'paleteira', 'transpaleteira', 'drone'],

        // Serviços específicos
        servicos: ['mudanca', 'mudança', 'frete', 'carreto', 'montagem', 'desmontagem', 'embalagem', 'guarda moveis', 'guarda móveis', 'self storage', 'guincho', 'reboque', 'socorro', 'assistencia', 'assistência', 'manutencao', 'manutenção', 'oficina', 'mecanica', 'mecânica', 'borracharia', 'lavagem', 'limpeza'],

        // Correios e encomendas
        correios: ['correios', 'sedex', 'pac', 'carta', 'encomenda', 'pacote', 'caixa', 'envelope', 'malote', 'correspondencia', 'correspondência', 'notificacao', 'notificação', 'ar', 'mao propria', 'mão própria', 'rastreio', 'rastreamento', 'tracking', 'codigo', 'código', 'etiqueta', 'cep', 'endereco', 'endereço'],

        // Plataformas
        plataformas: ['melhor envio', 'jadlog', 'total express', 'azul cargo', 'latam cargo', 'gollog', 'jamef', 'tnt', 'fedex', 'dhl', 'ups', 'loggi', 'lalamove', 'rappi', 'ifood', 'uber flash', '99 entrega', 'kangu', 'mandae', 'envvias', 'frenet']
    },

    // ================================
    // FINANCEIRO & CONTÁBIL (130+ keywords)
    // ================================
    financeiro: {
        // Serviços bancários
        bancario: ['banco', 'conta', 'conta corrente', 'conta poupanca', 'conta poupança', 'conta digital', 'cartao', 'cartão', 'credito', 'crédito', 'debito', 'débito', 'saque', 'deposito', 'depósito', 'transferencia', 'transferência', 'ted', 'doc', 'pix', 'boleto', 'cheque', 'emprestimo', 'empréstimo', 'financiamento', 'consignado', 'antecipacao', 'antecipação', 'fgts', 'cdc', 'limite', 'fatura', 'anuidade', 'tarifa', 'taxa', 'juros', 'spread'],

        // Investimentos
        investimentos: ['investimento', 'aplicacao', 'aplicação', 'renda fixa', 'renda variavel', 'renda variável', 'tesouro direto', 'cdb', 'lci', 'lca', 'cri', 'cra', 'debenture', 'debênture', 'fundo', 'fundos', 'acao', 'ação', 'acoes', 'ações', 'bolsa', 'b3', 'ibovespa', 'nasdaq', 'nyse', 'etf', 'fii', 'fundo imobiliario', 'fundo imobiliário', 'bdr', 'cripto', 'criptomoeda', 'bitcoin', 'ethereum', 'altcoin', 'token', 'nft', 'defi', 'staking', 'yield', 'dividendo', 'provento', 'jcp', 'bonificacao', 'bonificação'],

        // Seguros
        seguros: ['seguro', 'seguradora', 'apolice', 'apólice', 'sinistro', 'indenizacao', 'indenização', 'cobertura', 'premio', 'prêmio', 'franquia', 'vida', 'saude', 'saúde', 'auto', 'residencial', 'empresarial', 'viagem', 'pet', 'responsabilidade civil', 'acidentes pessoais', 'prestamista', 'garantia estendida', 'previdencia', 'previdência', 'pgbl', 'vgbl', 'aposentadoria', 'pensao', 'pensão'],

        // Contabilidade
        contabil: ['contabilidade', 'contador', 'contadora', 'escritorio contabil', 'escritório contábil', 'balanco', 'balanço', 'balancete', 'dre', 'demonstrativo', 'lancamento', 'lançamento', 'conciliacao', 'conciliação', 'apuracao', 'apuração', 'fechamento', 'razao', 'razão', 'livro caixa', 'diario', 'diário', 'plano de contas', 'patrimonio', 'patrimônio', 'ativo', 'passivo', 'capital', 'receita', 'despesa', 'custo', 'lucro', 'prejuizo', 'prejuízo', 'margem', 'ebitda'],

        // Fiscal e tributário
        fiscal: ['imposto', 'tributo', 'taxa', 'contribuicao', 'contribuição', 'icms', 'ipi', 'pis', 'cofins', 'iss', 'irpj', 'csll', 'irrf', 'inss', 'fgts', 'simples nacional', 'simples', 'mei', 'lucro presumido', 'lucro real', 'nota fiscal', 'nfe', 'nf-e', 'nfse', 'nf-se', 'nfc-e', 'sped', 'dctf', 'efd', 'ecf', 'dirf', 'rais', 'caged', 'esocial', 'reinf', 'darf', 'das', 'gps', 'certidao', 'certidão', 'cnd', 'regularidade'],

        // Fintechs e meios de pagamento
        fintechs: ['nubank', 'inter', 'c6', 'next', 'neon', 'original', 'modalmais', 'btg', 'xp', 'rico', 'clear', 'easynvest', 'warren', 'mercado pago', 'pagseguro', 'stone', 'cielo', 'rede', 'getnet', 'sumup', 'ton', 'izettle', 'pagarme', 'stripe', 'paypal', 'picpay', 'ame', 'picpay', 'paypal']
    },

    // ================================
    // CONSTRUÇÃO & REFORMAS (100+ keywords)
    // ================================
    construcao: {
        // Serviços de construção
        servicos: ['construcao', 'construção', 'obra', 'edificacao', 'edificação', 'reforma', 'reformar', 'ampliacao', 'ampliação', 'demolição', 'demolicao', 'terraplanagem', 'fundacao', 'fundação', 'alvenaria', 'estrutura', 'laje', 'telhado', 'cobertura', 'impermeabilizacao', 'impermeabilização', 'acabamento', 'revestimento', 'pintura', 'gesso', 'drywall', 'forro', 'piso', 'azulejo', 'ceramica', 'cerâmica', 'porcelanato', 'granito', 'marmore', 'mármore'],

        // Instalações
        instalacoes: ['eletrica', 'elétrica', 'hidraulica', 'hidráulica', 'gas', 'gás', 'esgoto', 'agua', 'água', 'ar condicionado', 'ventilacao', 'ventilação', 'exaustao', 'exaustão', 'incendio', 'incêndio', 'alarme', 'cftv', 'camera', 'câmera', 'automacao', 'automação', 'domotica', 'domótica', 'energia solar', 'fotovoltaica', 'painel solar', 'aquecedor solar'],

        // Profissionais
        profissionais: ['engenheiro', 'engenheira', 'arquiteto', 'arquiteta', 'mestre de obras', 'pedreiro', 'servente', 'eletricista', 'encanador', 'bombeiro hidraulico', 'bombeiro hidráulico', 'pintor', 'gesseiro', 'azulejista', 'serralheiro', 'soldador', 'vidraceiro', 'marceneiro', 'carpinteiro', 'telhadista', 'impermeabilizador', 'paisagista', 'jardineiro'],

        // Materiais
        materiais: ['cimento', 'areia', 'brita', 'tijolo', 'bloco', 'ferro', 'aco', 'aço', 'concreto', 'argamassa', 'rejunte', 'tinta', 'verniz', 'massa corrida', 'selador', 'primer', 'madeira', 'compensado', 'mdf', 'vidro', 'esquadria', 'porta', 'janela', 'box', 'torneira', 'registro', 'chuveiro', 'vaso', 'pia', 'cuba', 'tanque', 'fio', 'cabo', 'disjuntor', 'tomada', 'interruptor'],

        // Lojas
        lojas: ['loja de construcao', 'loja de construção', 'material de construcao', 'material de construção', 'home center', 'leroy merlin', 'telhanorte', 'c&c', 'dicico', 'sodimac', 'tumelero', 'cassol', 'ferragista', 'ferragem', 'deposito', 'depósito', 'atacado']
    },

    // ================================
    // AGRICULTURA & AGRONEGÓCIO (100+ keywords)
    // ================================
    agricultura: {
        // Culturas
        culturas: ['agricultura', 'agronegocio', 'agronegócio', 'agro', 'fazenda', 'sitio', 'sítio', 'chacara', 'chácara', 'plantacao', 'plantação', 'lavoura', 'safra', 'colheita', 'soja', 'milho', 'trigo', 'arroz', 'feijao', 'feijão', 'cafe', 'café', 'cana', 'cana de acucar', 'cana de açúcar', 'algodao', 'algodão', 'laranja', 'citrus', 'frutas', 'hortalica', 'hortaliça', 'verdura', 'legume', 'tomate', 'batata', 'cebola', 'alho'],

        // Pecuária
        pecuaria: ['pecuaria', 'pecuária', 'gado', 'boi', 'vaca', 'bezerro', 'novilho', 'rebanho', 'corte', 'leite', 'leiteiro', 'confinamento', 'pasto', 'pastagem', 'curral', 'estabulo', 'estábulo', 'ordenha', 'inseminacao', 'inseminação', 'reproducao', 'reprodução', 'suino', 'suíno', 'porco', 'granja', 'avicultura', 'frango', 'galinha', 'ovo', 'ovino', 'ovelha', 'caprino', 'cabra', 'equino', 'cavalo', 'haras'],

        // Insumos
        insumos: ['semente', 'muda', 'adubo', 'fertilizante', 'defensivo', 'agrotoxico', 'agrotóxico', 'herbicida', 'fungicida', 'inseticida', 'racao', 'ração', 'farelo', 'concentrado', 'sal mineral', 'vacina', 'medicamento veterinario', 'medicamento veterinário'],

        // Equipamentos
        equipamentos: ['trator', 'colheitadeira', 'plantadeira', 'pulverizador', 'irrigacao', 'irrigação', 'pivô', 'pivo', 'gotejamento', 'aspersor', 'bomba', 'silo', 'armazem', 'armazém', 'secador', 'beneficiamento', 'processamento'],

        // Serviços
        servicos: ['agronomia', 'agronomo', 'agrônomo', 'consultoria agricola', 'consultoria agrícola', 'assistencia tecnica', 'assistência técnica', 'ater', 'extensao rural', 'extensão rural', 'credito rural', 'crédito rural', 'pronaf', 'seguro rural', 'certificacao', 'certificação', 'rastreabilidade', 'orgânicos', 'organicos', 'agroecologia', 'sustentabilidade']
    },

    // ================================
    // COMUNICAÇÃO & MARKETING (120+ keywords)
    // ================================
    comunicacao: {
        // Marketing digital
        digital: ['marketing', 'marketing digital', 'publicidade', 'propaganda', 'anuncio', 'anúncio', 'ads', 'google ads', 'facebook ads', 'instagram ads', 'tiktok ads', 'linkedin ads', 'midia paga', 'mídia paga', 'trafego pago', 'tráfego pago', 'performance', 'cpc', 'cpm', 'cpa', 'roi', 'roas', 'conversao', 'conversão', 'lead', 'funil', 'jornada', 'remarketing', 'retargeting', 'pixel', 'tag', 'gtm', 'analytics', 'ga4', 'dashboard'],

        // SEO e conteúdo
        seo: ['seo', 'otimizacao', 'otimização', 'busca', 'google', 'bing', 'ranking', 'posicao', 'posição', 'palavra chave', 'keyword', 'backlink', 'link building', 'autoridade', 'dominio', 'domínio', 'indexacao', 'indexação', 'rastreamento', 'sitemap', 'robots', 'schema', 'rich snippet', 'featured snippet', 'conteudo', 'conteúdo', 'blog', 'artigo', 'post', 'texto', 'copywriting', 'copy', 'headline', 'cta', 'call to action'],

        // Redes sociais
        social: ['rede social', 'redes sociais', 'social media', 'midia social', 'mídia social', 'instagram', 'insta', 'facebook', 'fb', 'tiktok', 'youtube', 'linkedin', 'twitter', 'x', 'pinterest', 'threads', 'whatsapp', 'telegram', 'discord', 'twitch', 'spotify', 'podcast', 'influencer', 'influenciador', 'creator', 'criador de conteudo', 'criador de conteúdo', 'feed', 'stories', 'reels', 'shorts', 'live', 'engajamento', 'seguidor', 'curtida', 'comentario', 'comentário', 'compartilhamento'],

        // Design e criação
        design: ['design', 'designer', 'grafico', 'gráfico', 'visual', 'identidade visual', 'branding', 'marca', 'logo', 'logotipo', 'logomarca', 'manual de marca', 'brandbook', 'papelaria', 'cartao de visita', 'cartão de visita', 'folder', 'flyer', 'panfleto', 'banner', 'outdoor', 'busdoor', 'totem', 'fachada', 'letreiro', 'adesivo', 'embalagem', 'rotulo', 'rótulo', 'catalogo', 'catálogo', 'apresentacao', 'apresentação', 'powerpoint', 'canva', 'photoshop', 'illustrator', 'figma', 'corel'],

        // Comunicação
        comunicacao: ['assessoria', 'assessor', 'imprensa', 'release', 'midia', 'mídia', 'jornalismo', 'redacao', 'redação', 'redator', 'revisor', 'correcao', 'correção', 'traducao', 'tradução', 'tradutor', 'locutor', 'locucao', 'locução', 'narracao', 'narração', 'dublagem', 'legenda', 'producao', 'produção', 'video', 'vídeo', 'foto', 'fotografia', 'edicao', 'edição', 'pos producao', 'pós-produção', 'animacao', 'animação', 'motion', '3d', 'render']
    },

    // ================================
    // TURISMO & HOTELARIA (100+ keywords)
    // ================================
    turismo: {
        // Hospedagem
        hospedagem: ['hotel', 'pousada', 'hostel', 'resort', 'flat', 'apart hotel', 'airbnb', 'aluguel de temporada', 'temporada', 'diaria', 'diária', 'pernoite', 'check in', 'check out', 'reserva', 'booking', 'quarto', 'suite', 'suíte', 'apartamento', 'chale', 'chalé', 'bangalo', 'bangalô', 'bungalow', 'camping', 'glamping', 'caravana', 'motorhome'],

        // Turismo
        turismo: ['turismo', 'turista', 'viagem', 'viajante', 'excursao', 'excursão', 'tour', 'passeio', 'city tour', 'receptivo', 'guia', 'guia turistico', 'guia turístico', 'roteiro', 'itinerario', 'itinerário', 'destino', 'atracao', 'atração', 'ponto turistico', 'ponto turístico', 'aventura', 'ecoturismo', 'turismo rural', 'agroturismo', 'turismo de luxo', 'mochilao', 'mochilão', 'backpacker'],

        // Agências
        agencias: ['agencia', 'agência', 'agencia de viagem', 'agência de viagem', 'operadora', 'cvc', 'decolar', 'hurb', '123 milhas', 'booking', 'expedia', 'kayak', 'trivago', 'skyscanner', 'passagem', 'bilhete', 'pacote', 'all inclusive', 'tudo incluido', 'tudo incluído', 'meia pensao', 'meia pensão', 'pensao completa', 'pensão completa'],

        // Transportes turísticos
        transportes: ['aereo', 'aéreo', 'aviao', 'avião', 'voo', 'companhia aerea', 'companhia aérea', 'latam', 'gol', 'azul', 'cruzeiro', 'navio', 'maritimo', 'marítimo', 'ferry', 'balsa', 'trem', 'ferrovia', 'onibus', 'ônibus', 'rodoviaria', 'rodoviária', 'aluguel de carro', 'rent a car', 'locadora', 'transfer'],

        // Documentos
        documentos: ['passaporte', 'visto', 'visa', 'vacina', 'seguro viagem', 'assist card', 'travel ace', 'alfandega', 'alfândega', 'duty free', 'free shop', 'cambio', 'câmbio', 'moeda', 'dolar', 'dólar', 'euro', 'travel money', 'cartao pre pago', 'cartão pré-pago']
    },

    // ================================
    // JURÍDICO (80+ keywords)
    // ================================
    juridico: {
        // Áreas do direito
        areas: ['direito', 'juridico', 'jurídico', 'advogado', 'advogada', 'advocacia', 'oab', 'civil', 'trabalhista', 'penal', 'criminal', 'tributario', 'tributário', 'empresarial', 'societario', 'societário', 'familiar', 'familia', 'família', 'divorcio', 'divórcio', 'pensao', 'pensão', 'guarda', 'inventario', 'inventário', 'heranca', 'herança', 'testamento', 'consumidor', 'imobiliario', 'imobiliário', 'ambiental', 'digital', 'startups', 'trabalhista', 'previdenciario', 'previdenciário', 'administrativo'],

        // Serviços
        servicos: ['processo', 'acao', 'ação', 'recurso', 'apelacao', 'apelação', 'agravo', 'embargo', 'contestacao', 'contestação', 'defesa', 'peticao', 'petição', 'contrato', 'acordo', 'mediacao', 'mediação', 'arbitragem', 'conciliacao', 'conciliação', 'audiencia', 'audiência', 'julgamento', 'sentenca', 'sentença', 'acordao', 'acórdão', 'execucao', 'execução', 'penhora', 'leilao', 'leilão', 'consulta', 'parecer', 'assessoria', 'consultoria'],

        // Órgãos
        orgaos: ['tribunal', 'justica', 'justiça', 'tjsp', 'trt', 'trf', 'stj', 'stf', 'tst', 'vara', 'juizado', 'forum', 'fórum', 'cartorio', 'cartório', 'notario', 'notário', 'tabeliao', 'tabelião', 'registrador', 'ministerio publico', 'ministério público', 'mp', 'defensoria', 'procuradoria', 'oab', 'ordem dos advogados'],

        // Documentos
        documentos: ['procuracao', 'procuração', 'escritura', 'certidao', 'certidão', 'atestado', 'declaracao', 'declaração', 'alvara', 'alvará', 'licenca', 'licença', 'autorizacao', 'autorização', 'reconhecimento de firma', 'autenticacao', 'autenticação', 'apostila de haia', 'traducao juramentada', 'tradução juramentada']
    },

    // ================================
    // SEGURANÇA (60+ keywords)
    // ================================
    segurancaPatrimonial: {
        // Serviços
        servicos: ['seguranca', 'segurança', 'vigilancia', 'vigilância', 'vigia', 'vigilante', 'portaria', 'porteiro', 'controle de acesso', 'ronda', 'patrulha', 'escolta', 'transporte de valores', 'seguranca armada', 'segurança armada', 'seguranca desarmada', 'segurança desarmada', 'seguranca patrimonial', 'segurança patrimonial', 'seguranca pessoal', 'segurança pessoal', 'seguranca eletronica', 'segurança eletrônica'],

        // Equipamentos
        equipamentos: ['alarme', 'cerca eletrica', 'cerca elétrica', 'concertina', 'sensor', 'detector', 'camera', 'câmera', 'cftv', 'dvr', 'nvr', 'monitoramento', 'central de monitoramento', 'controle de acesso', 'catraca', 'cancela', 'portao automatico', 'portão automático', 'biometria', 'facial', 'reconhecimento facial', 'interfone', 'video porteiro', 'vídeo porteiro'],

        // Empresas
        empresas: ['empresa de seguranca', 'empresa de segurança', 'terceirizacao', 'terceirização', 'prestadora', 'servicos terceirizados', 'serviços terceirizados', 'facilities', 'limpeza', 'manutencao', 'manutenção', 'jardinagem', 'recepcao', 'recepção', 'copeira', 'zelador']
    },

    // ================================
    // RELIGIOSO & SOCIAL (50+ keywords)
    // ================================
    religioso: {
        // Organizações
        organizacoes: ['igreja', 'templo', 'capela', 'catedral', 'basilica', 'basílica', 'sinagoga', 'mesquita', 'terreiro', 'centro espirita', 'centro espírita', 'comunidade', 'congregacao', 'congregação', 'paroquia', 'paróquia', 'diocese', 'ministerio', 'ministério', 'missao', 'missão', 'ong', 'organizacao', 'organização', 'associacao', 'associação', 'fundacao', 'fundação', 'instituto', 'entidade'],

        // Atividades
        atividades: ['culto', 'missa', 'celebracao', 'celebração', 'cerimonia', 'cerimônia', 'batismo', 'batizado', 'casamento', 'funeral', 'velorio', 'velório', 'enterro', 'cremacao', 'cremação', 'retiro', 'encontro', 'congresso', 'conferencia', 'conferência', 'estudo biblico', 'estudo bíblico', 'grupo de oracao', 'grupo de oração', 'coral', 'louvor', 'adoracao', 'adoração'],

        // Social
        social: ['assistencia social', 'assistência social', 'caridade', 'doacao', 'doação', 'voluntario', 'voluntário', 'voluntariado', 'projeto social', 'acao social', 'ação social', 'campanha', 'arrecadacao', 'arrecadação', 'bazaar', 'bazar', 'rifa', 'bingo', 'festa beneficente', 'leilao beneficente', 'leilão beneficente']
    },

    // ================================
    // INDÚSTRIA & MANUFATURA (80+ keywords)
    // ================================
    industria: {
        // Setores
        setores: ['industria', 'indústria', 'fabrica', 'fábrica', 'manufatura', 'producao', 'produção', 'fabricacao', 'fabricação', 'metalurgica', 'metalúrgica', 'siderurgica', 'siderúrgica', 'quimica', 'química', 'petroquimica', 'petroquímica', 'farmaceutica', 'farmacêutica', 'alimenticia', 'alimentícia', 'textil', 'têxtil', 'calcadista', 'calçadista', 'moveleira', 'automotiva', 'autopeças', 'autopecas', 'eletronica', 'eletrônica', 'plastica', 'plástica', 'papel e celulose', 'grafica', 'gráfica', 'embalagem'],

        // Processos
        processos: ['usinagem', 'tornearia', 'fresagem', 'corte', 'solda', 'soldagem', 'fundicao', 'fundição', 'forjaria', 'estamparia', 'injecao', 'injeção', 'extrusao', 'extrusão', 'moldagem', 'montagem', 'linha de montagem', 'assembly', 'acabamento', 'pintura industrial', 'tratamento superficial', 'galvanizacao', 'galvanização', 'cromagem', 'anodizacao', 'anodização'],

        // Gestão industrial
        gestao: ['lean', 'lean manufacturing', 'kaizen', '5s', 'tpm', 'seis sigma', 'six sigma', 'pdca', 'kanban', 'just in time', 'jit', 'oee', 'setup', 'refugo', 'retrabalho', 'nao conformidade', 'não conformidade', 'qualidade', 'iso 9001', 'iso 14001', 'iso 45001', 'iatf', 'ts', 'auditoria', 'certificacao', 'certificação', 'rastreabilidade', 'lote', 'serie', 'série'],

        // Equipamentos
        equipamentos: ['maquina', 'máquina', 'equipamento', 'ferramenta', 'dispositivo', 'gabarito', 'molde', 'matriz', 'estampo', 'cnc', 'torno', 'fresa', 'furadeira', 'retifica', 'retífica', 'prensa', 'dobradeira', 'guilhotina', 'laser', 'plasma', 'robo', 'robô', 'automacao industrial', 'automação industrial', 'clp', 'plc', 'ihm', 'scada', 'industria 4.0', 'indústria 4.0', 'iot', 'internet das coisas']
    },

    // ================================
    // GAMES & ESPORTS (100+ keywords)
    // ================================
    games: {
        // Plataformas
        plataformas: ['playstation', 'ps4', 'ps5', 'xbox', 'xbox one', 'xbox series', 'nintendo', 'switch', 'pc gamer', 'steam', 'epic games', 'origin', 'uplay', 'battle.net', 'gog', 'mobile gaming', 'android', 'ios', 'cloud gaming', 'geforce now', 'xcloud', 'stadia', 'console', 'portatil', 'portátil', 'handheld', 'gamepad', 'controle', 'joystick', 'teclado gamer', 'mouse gamer', 'headset gamer'],

        // Tipos de jogo
        generos: ['fps', 'shooter', 'tiro', 'rpg', 'mmorpg', 'moba', 'battle royale', 'estrategia', 'estratégia', 'rts', 'simulador', 'simulacao', 'simulação', 'corrida', 'racing', 'esporte', 'sports', 'luta', 'fighting', 'aventura', 'plataforma', 'puzzle', 'quebra cabeca', 'quebra-cabeça', 'terror', 'horror', 'survival', 'sobrevivencia', 'sobrevivência', 'sandbox', 'indie', 'casual', 'card game', 'cartas', 'roguelike', 'metroidvania', 'souls like', 'hack and slash', 'stealth', 'open world', 'mundo aberto'],

        // Esports
        esports: ['esports', 'e-sports', 'competitivo', 'campeonato', 'torneio', 'liga', 'time', 'equipe', 'pro player', 'jogador profissional', 'streamer', 'streaming', 'live', 'twitch', 'youtube gaming', 'booyah', 'kick', 'discord', 'comunidade', 'clan', 'guild', 'guilda', 'rank', 'ranking', 'elo', 'tier', 'divisao', 'divisão', 'partida', 'match', 'matchmaking', 'scrim', 'treino'],

        // Jogos populares
        jogos: ['lol', 'league of legends', 'valorant', 'cs', 'counter strike', 'cs2', 'csgo', 'dota', 'dota 2', 'fortnite', 'pubg', 'free fire', 'cod', 'call of duty', 'warzone', 'fifa', 'ea fc', 'pes', 'efootball', 'gta', 'grand theft auto', 'minecraft', 'roblox', 'apex legends', 'overwatch', 'rocket league', 'rainbow six', 'r6', 'world of warcraft', 'wow', 'final fantasy', 'zelda', 'pokemon', 'pokémon', 'mario', 'sonic', 'god of war', 'elden ring', 'dark souls', 'resident evil', 'the last of us', 'horizon'],

        // Serviços e produtos
        servicos: ['lan house', 'cyber cafe', 'arena gamer', 'coaching', 'coach', 'elo boost', 'boost', 'conta', 'skin', 'item', 'loot box', 'passe de batalha', 'battle pass', 'assinatura', 'gold', 'ps plus', 'game pass', 'prime gaming', 'v-bucks', 'robux', 'diamantes', 'moeda virtual', 'gift card', 'cartao presente', 'cartão presente']
    },

    // ================================
    // MODA & VESTUÁRIO (120+ keywords)
    // ================================
    moda: {
        // Estilos
        estilos: ['moda', 'fashion', 'estilo', 'tendencia', 'tendência', 'trend', 'trendy', 'vintage', 'retro', 'classico', 'clássico', 'casual', 'esportivo', 'streetwear', 'street', 'urbano', 'boho', 'bohemio', 'bohêmio', 'romantico', 'romântico', 'minimalista', 'maximalista', 'grunge', 'punk', 'rock', 'gotico', 'gótico', 'preppy', 'country', 'sertanejo', 'praia', 'beach', 'athleisure', 'sportswear', 'workwear', 'cottagecore', 'dark academia', 'old money', 'quiet luxury', 'y2k'],

        // Roupas femininas
        feminino: ['vestido', 'saia', 'blusa', 'top', 'cropped', 'body', 'macacao', 'macacão', 'jardineira', 'conjunto', 'tailleur', 'blazer', 'cardigan', 'kimono', 'quimono', 'legging', 'calça', 'calca', 'shorts', 'bermuda', 'maiô', 'maio', 'biquini', 'biquíni', 'bikini', 'saida de praia', 'saída de praia', 'lingerie', 'sutia', 'sutiã', 'calcinha', 'cinta', 'modelador', 'camisola', 'robe', 'pijama', 'chemise', 'slip dress', 'midi', 'longo', 'curto', 'tomara que caia', 'decote', 'manga', 'regata', 'alcinha'],

        // Roupas masculinas
        masculino: ['camisa', 'camiseta', 'polo', 'regata', 'terno', 'paleto', 'paletó', 'blazer', 'colete', 'jaqueta', 'casaco', 'moletom', 'sueter', 'suéter', 'cardigan', 'calca', 'calça', 'jeans', 'chino', 'sarja', 'shorts', 'bermuda', 'cueca', 'boxer', 'slip', 'pijama', 'social', 'esporte fino', 'casual', 'slim', 'regular', 'oversized', 'cropped', 'henley', 'gola v', 'gola careca', 'gola polo'],

        // Calçados
        calcados: ['sapato', 'tenis', 'tênis', 'sneaker', 'bota', 'botina', 'coturno', 'sapatenis', 'sapatênis', 'mocassim', 'oxford', 'derby', 'brogue', 'loafer', 'driver', 'docksider', 'sandalia', 'sandália', 'chinelo', 'rasteirinha', 'tamanco', 'plataforma', 'salto', 'scarpin', 'peep toe', 'mule', 'sapatilha', 'alpargata', 'espadrille', 'slip on', 'chunky', 'dad sneaker', 'flatform', 'anabela', 'stiletto', 'kitten heel', 'block heel'],

        // Acessórios
        acessorios: ['bolsa', 'mochila', 'clutch', 'pochete', 'necessaire', 'carteira', 'porta cartao', 'porta cartão', 'cinto', 'suspensorio', 'suspensório', 'gravata', 'gravata borboleta', 'lenco', 'lenço', 'cachecol', 'echarpe', 'chapeu', 'chapéu', 'bone', 'boné', 'bucket', 'gorro', 'touca', 'boina', 'viseira', 'oculos', 'óculos', 'relogio', 'relógio', 'pulseira', 'bracelete', 'anel', 'alianca', 'aliança', 'colar', 'corrente', 'pingente', 'brinco', 'argola', 'piercing', 'tornozeleira', 'tiara', 'faixa', 'presilha', 'scrunchie'],

        // Marcas e lojas
        marcas: ['zara', 'h&m', 'forever 21', 'renner', 'riachuelo', 'c&a', 'marisa', 'hering', 'reserva', 'osklen', 'farm', 'animale', 'shoulder', 'le lis blanc', 'maria filo', 'maria filó', 'mob', 'colcci', 'triton', 'ellus', 'john john', 'carmim', 'schutz', 'arezzo', 'luiza barcelos', 'melissa', 'havaianas', 'olympikus', 'nike', 'adidas', 'puma', 'vans', 'converse', 'new balance', 'fila', 'lacoste', 'tommy hilfiger', 'calvin klein', 'ralph lauren', 'guess', 'diesel', 'levis', 'wrangler']
    },

    // ================================
    // ARTESANATO & HANDMADE (80+ keywords)
    // ================================
    artesanato: {
        // Técnicas
        tecnicas: ['artesanato', 'handmade', 'feito a mao', 'feito à mão', 'artesanal', 'craft', 'diy', 'faca voce mesmo', 'faça você mesmo', 'croche', 'crochê', 'trico', 'tricô', 'macrame', 'macramê', 'bordado', 'ponto cruz', 'patch', 'patchwork', 'costura criativa', 'quilting', 'feltro', 'eva', 'biscuit', 'porcelana fria', 'ceramica', 'cerâmica', 'argila', 'olaria', 'pintura', 'decoupage', 'découpage', 'scrapbook', 'scrapbooking', 'paper craft', 'origami', 'kirigami', 'cartonagem', 'encadernacao', 'encadernação', 'tecelagem', 'tear', 'tapeçaria', 'tapecaria', 'cestaria', 'vime', 'junco', 'palha', 'couro', 'marroquinaria'],

        // Produtos
        produtos: ['amigurumi', 'boneca', 'boneco', 'pelucia', 'pelúcia', 'almofada', 'naninha', 'mobile', 'decoracao', 'decoração', 'enfeite', 'quadro', 'tela', 'vela', 'sabonete', 'aromatizador', 'sachet', 'sachê', 'bolsa artesanal', 'ecobag', 'necessaire', 'porta celular', 'porta oculos', 'porta óculos', 'chaveiro', 'bijuteria', 'acessorio', 'acessório', 'presilha', 'laço', 'laco', 'tiara', 'turbante', 'scrunchie', 'porta retrato', 'caixa decorada', 'organizador', 'porta joias', 'porta jóias', 'peso de porta', 'sousplat', 'jogo americano', 'toalha de mesa', 'guardanapo', 'pano de prato', 'puxa saco'],

        // Materiais
        materiais: ['linha', 'la', 'lã', 'barbante', 'fio', 'tecido', 'feltro', 'eva', 'papel', 'cartao', 'cartão', 'cola', 'tinta', 'resina', 'epoxi', 'epóxi', 'madeira mdf', 'mdf', 'compensado', 'pedra', 'missanga', 'miçanga', 'conta', 'pedraria', 'strass', 'botao', 'botão', 'fita', 'renda', 'guipir', 'passamanaria', 'aviamento', 'agulha', 'alfinete', 'tesoura', 'estilete', 'base de corte', 'furador', 'carimbeira', 'carimbo', 'stencil', 'matriz de corte'],

        // Plataformas e eventos
        plataformas: ['elo7', 'etsy', 'shopee', 'mercado livre', 'instagram', 'pinterest', 'whatsapp', 'feira', 'bazar', 'feirinha', 'mercado de artesanato', 'artesanato solidario', 'artesanato solidário', 'economia criativa', 'empreendedorismo feminino', 'maeempreendedora', 'mãeempreendedora']
    },

    // ================================
    // BEBIDAS & BARTENDING (90+ keywords)
    // ================================
    bebidas: {
        // Bebidas alcoólicas
        alcoolicas: ['bebida', 'alcool', 'álcool', 'destilado', 'fermentado', 'cerveja', 'beer', 'craft beer', 'cerveja artesanal', 'chopp', 'chope', 'draft', 'pilsen', 'lager', 'ale', 'ipa', 'stout', 'porter', 'weiss', 'trigo', 'vinho', 'wine', 'tinto', 'branco', 'rose', 'rosé', 'espumante', 'champagne', 'prosecco', 'cava', 'brut', 'demi sec', 'vodka', 'vodca', 'gin', 'rum', 'cachaca', 'cachaça', 'pinga', 'whisky', 'whiskey', 'uisque', 'bourbon', 'scotch', 'single malt', 'blended', 'tequila', 'mezcal', 'sake', 'saquê', 'soju', 'licor', 'aperol', 'campari', 'vermute', 'vermouth', 'absinto', 'conhaque', 'cognac', 'brandy', 'grappa', 'amaretto', 'baileys', 'jagermeister', 'jägermeister'],

        // Bebidas não alcoólicas
        naoalcoolicas: ['suco', 'juice', 'smoothie', 'vitamina', 'refrigerante', 'agua', 'água', 'agua mineral', 'água mineral', 'agua com gas', 'água com gás', 'tonica', 'tônica', 'energetico', 'energético', 'isotônico', 'isotonico', 'cha', 'chá', 'cha gelado', 'chá gelado', 'ice tea', 'mate', 'chimarrao', 'chimarrão', 'terere', 'tereré', 'cafe', 'café', 'expresso', 'espresso', 'capuccino', 'cappuccino', 'latte', 'mocha', 'macchiato', 'americano', 'ristretto', 'cold brew', 'chocolate quente', 'achocolatado', 'milkshake', 'frappe', 'frappuccino', 'kombucha', 'kefir'],

        // Bartending e coquetéis
        bartending: ['bartender', 'barman', 'barmaid', 'mixologista', 'mixologia', 'coquetel', 'cocktail', 'drink', 'drinks', 'drinque', 'caipirinha', 'caipiroska', 'caipifruta', 'mojito', 'cuba libre', 'margarita', 'cosmopolitan', 'sex on the beach', 'pina colada', 'piña colada', 'blue lagoon', 'tequila sunrise', 'negroni', 'americano', 'dry martini', 'manhattan', 'old fashioned', 'whisky sour', 'moscow mule', 'gin tonica', 'gin tônica', 'aperol spritz', 'sangria', 'quentao', 'quentão', 'clericot', 'mimosa', 'bellini', 'kir', 'kir royal', 'shot', 'dose', 'long drink', 'highball', 'lowball'],

        // Equipamentos
        equipamentos: ['coqueteleira', 'shaker', 'boston shaker', 'dosador', 'jigger', 'balde de gelo', 'ice bucket', 'pegador', 'colher bailarina', 'bar spoon', 'muddler', 'socador', 'pilão', 'abridor', 'saca rolhas', 'saca-rolhas', 'decanter', 'aerador', 'taca', 'taça', 'copo', 'caneca', 'growler', 'garrafeira', 'adega', 'climatizador', 'chopeira', 'torneira de chopp', 'barril', 'keg', 'kit bar', 'bar movel', 'bar móvel'],

        // Estabelecimentos
        estabelecimentos: ['bar', 'pub', 'boteco', 'botequim', 'lounge', 'rooftop', 'speakeasy', 'wine bar', 'beer garden', 'choperia', 'cervejaria', 'brewery', 'destilaria', 'distillery', 'vinicola', 'vinícola', 'winery', 'adega', 'distribuidora', 'emporio', 'empório', 'casa de bebidas', 'off license', 'drink store']
    },

    // ================================
    // FOTOGRAFIA & VÍDEO (100+ keywords)
    // ================================
    fotovideo: {
        // Tipos de fotografia
        fotografia: ['fotografia', 'foto', 'fotografo', 'fotógrafo', 'fotografa', 'fotógrafa', 'ensaio', 'ensaio fotografico', 'ensaio fotográfico', 'book', 'retrato', 'portrait', 'casamento', 'wedding', 'newborn', 'gestante', 'gravida', 'grávida', 'smash the cake', 'acompanhamento', 'familia', 'família', 'infantil', 'kids', 'aniversario', 'aniversário', 'formatura', 'debutante', '15 anos', 'corporativo', 'headshot', 'linkedin', 'produto', 'still', 'still life', 'gastronomia', 'food photography', 'imobiliario', 'imobiliário', 'arquitetura', 'interiores', 'paisagem', 'landscape', 'natureza', 'wildlife', 'vida selvagem', 'macro', 'moda', 'fashion', 'editorial', 'lookbook', 'campanha', 'publicitario', 'publicitário', 'documental', 'jornalismo', 'fotojornalismo', 'street', 'urbano', 'fine art', 'conceitual', 'boudoir', 'sensual', 'pet', 'animal'],

        // Vídeo
        video: ['video', 'vídeo', 'videomaker', 'videomaker', 'cinegrafista', 'cineasta', 'filmmaker', 'producao', 'produção', 'producao audiovisual', 'produção audiovisual', 'filme', 'curta', 'curta metragem', 'longa', 'documentario', 'documentário', 'comercial', 'propaganda', 'institucional', 'corporativo', 'clipe', 'videoclipe', 'music video', 'mv', 'lyric video', 'casamento', 'save the date', 'same day edit', 'sde', 'evento', 'cobertura', 'live', 'transmissao', 'transmissão', 'streaming', 'webinar', 'youtube', 'youtuber', 'vlog', 'vlogger', 'reels', 'tiktok', 'shorts', 'stories', 'conteudo', 'conteúdo', 'content creator', 'influencer'],

        // Equipamentos
        equipamentos: ['camera', 'câmera', 'dslr', 'mirrorless', 'full frame', 'apsc', 'aps-c', 'micro four thirds', 'mft', 'lente', 'objetiva', 'zoom', 'prime', 'fixa', 'grande angular', 'wide', 'ultra wide', 'teleobjetiva', 'telephoto', 'macro', 'fisheye', 'olho de peixe', 'tilt shift', 'anamórfica', 'anamorfic', 'tripe', 'tripé', 'monope', 'monopé', 'gimbal', 'estabilizador', 'steadicam', 'slider', 'dolly', 'crane', 'jib', 'drone', 'dji', 'mavic', 'phantom', 'action cam', 'gopro', 'flash', 'speedlight', 'strobe', 'softbox', 'umbrella', 'sombrinha', 'octabox', 'beauty dish', 'rebatedor', 'difusor', 'gelatina', 'filtro', 'nd', 'polarizador', 'fundo', 'backdrop', 'ciclorama', 'chroma key', 'green screen', 'tela verde'],

        // Edição e pós-produção
        edicao: ['edicao', 'edição', 'tratamento', 'retoque', 'retouch', 'pos producao', 'pós-produção', 'pos', 'pós', 'cor', 'coloracao', 'coloração', 'color grading', 'color correction', 'lut', 'preset', 'filtro', 'lightroom', 'photoshop', 'capture one', 'bridge', 'camera raw', 'premiere', 'premiere pro', 'final cut', 'final cut pro', 'fcpx', 'davinci', 'davinci resolve', 'after effects', 'ae', 'motion graphics', 'motion', 'vfx', 'efeitos visuais', 'composicao', 'composição', 'rotoscopia', 'tracking', 'keying', '3d', 'render', 'export', 'entrega', 'galeria', 'prova', 'selecao', 'seleção', 'album', 'álbum', 'fotolivro']
    },

    // ================================
    // ESPORTES & ATIVIDADES OUTDOOR (120+ keywords)
    // ================================
    esportes: {
        // Esportes coletivos
        coletivos: ['futebol', 'soccer', 'futsal', 'society', 'pelada', 'rachao', 'rachão', 'volei', 'vôlei', 'volleyball', 'volei de praia', 'vôlei de praia', 'beach volley', 'basquete', 'basketball', 'basquete 3x3', 'streetball', 'handebol', 'handball', 'rugby', 'futebol americano', 'american football', 'flag football', 'hockey', 'hóquei', 'hockey de grama', 'hóquei no gelo', 'polo aquatico', 'polo aquático', 'water polo', 'beisebol', 'baseball', 'softball', 'cricket', 'lacrosse', 'ultimate frisbee', 'futevolei', 'futevôlei'],

        // Esportes individuais
        individuais: ['tenis', 'tênis', 'tennis', 'badminton', 'squash', 'padel', 'beach tennis', 'frescobol', 'golfe', 'golf', 'sinuca', 'bilhar', 'snooker', 'ping pong', 'tenis de mesa', 'tênis de mesa', 'boliche', 'bowling', 'xadrez', 'chess', 'dama', 'gamao', 'gamão', 'backgammon', 'atletismo', 'athletics', 'corrida', 'running', 'maratona', 'marathon', 'meia maratona', 'half marathon', '5k', '10k', '21k', '42k', 'ultra', 'ultramaratona', 'triathlon', 'triatlo', 'ironman', 'ciclismo', 'cycling', 'mtb', 'mountain bike', 'speed', 'gravel', 'bmx', 'natacao', 'natação', 'swimming', 'ginastica', 'ginástica', 'gymnastics', 'ginastica artistica', 'ginástica artística', 'ginastica ritmica', 'ginástica rítmica'],

        // Artes marciais e lutas
        lutas: ['luta', 'arte marcial', 'artes marciais', 'martial arts', 'boxe', 'boxing', 'muay thai', 'kickboxing', 'full contact', 'k1', 'mma', 'mixed martial arts', 'ufc', 'jiu jitsu', 'bjj', 'brazilian jiu jitsu', 'no gi', 'submission', 'judo', 'judô', 'karate', 'karatê', 'shotokan', 'kyokushin', 'taekwondo', 'tkd', 'kung fu', 'wushu', 'wing chun', 'capoeira', 'esgrima', 'fencing', 'wrestling', 'luta livre', 'luta olimpica', 'luta olímpica', 'greco romana', 'krav maga', 'aikido', 'hapkido', 'sambo', 'jeet kune do', 'kali', 'systema', 'silat'],

        // Esportes aquáticos
        aquaticos: ['surf', 'surfing', 'surfista', 'prancha', 'bodyboard', 'stand up', 'sup', 'stand up paddle', 'paddle', 'remada', 'wakeboard', 'wakeskate', 'wakesurf', 'ski aquatico', 'ski aquático', 'kitesurf', 'kiteboarding', 'windsurf', 'jet ski', 'moto aquatica', 'moto aquática', 'caiaque', 'kayak', 'canoagem', 'canoa', 'remo', 'rowing', 'vela', 'sailing', 'regata', 'iatismo', 'mergulho', 'diving', 'scuba', 'snorkel', 'snorkeling', 'apneia', 'freediving', 'nado sincronizado', 'saltos ornamentais'],

        // Esportes de aventura e radicais
        aventura: ['aventura', 'radical', 'extreme', 'adrenalina', 'escalada', 'climbing', 'boulder', 'bouldering', 'via ferrata', 'rapel', 'rappel', 'trekking', 'trilha', 'hiking', 'caminhada', 'montanhismo', 'alpinismo', 'mountaineering', 'alta montanha', 'expedição', 'expedicao', 'bungee jump', 'paraquedismo', 'skydiving', 'salto tandem', 'base jump', 'asa delta', 'hang gliding', 'parapente', 'paragliding', 'voo livre', 'tirolesa', 'zipline', 'arvorismo', 'canopy', 'slackline', 'highline', 'rafting', 'boia cross', 'canyoning', 'rapel em cachoeira', 'parkour', 'freerunning', 'skate', 'skateboard', 'street', 'park', 'vert', 'patins', 'roller', 'inline', 'patinacao', 'patinação', 'ice skating', 'longboard', 'downhill', 'freeride', 'motocross', 'enduro', 'rally', 'offroad', 'off road', '4x4', 'jeep', 'trilheiro'],

        // Locais e eventos
        locais: ['estadio', 'estádio', 'arena', 'ginasio', 'ginásio', 'quadra', 'campo', 'gramado', 'sintético', 'sintetico', 'piscina', 'pista', 'ciclovía', 'ciclovia', 'velódromo', 'velodromo', 'autodromo', 'autódromo', 'kartodromo', 'kartódromo', 'skatepark', 'pista de skate', 'parque', 'praca', 'praça', 'praia', 'montanha', 'serra', 'trilha', 'cachoeira', 'rio', 'lago', 'represa', 'mar', 'oceano', 'campeonato', 'torneio', 'copa', 'liga', 'olimpiada', 'olimpíada', 'jogos', 'federacao', 'federação', 'confederacao', 'confederação', 'cbf', 'cob']
    },

    // ================================
    // MÚSICA & ÁUDIO (100+ keywords)
    // ================================
    musica: {
        // Gêneros musicais
        generos: ['musica', 'música', 'music', 'rock', 'pop', 'mpb', 'bossa nova', 'samba', 'pagode', 'chorinho', 'sertanejo', 'sertanejo universitario', 'sertanejo universitário', 'sertanejo raiz', 'modao', 'modão', 'funk', 'funk carioca', 'funk paulista', 'funk melody', 'proibidao', 'proibidão', 'pagode', 'samba de roda', 'forro', 'forró', 'forro pe de serra', 'forró pé de serra', 'forro eletronico', 'forró eletrônico', 'axe', 'axé', 'arrocha', 'brega', 'piseiro', 'pisadinha', 'vaquejada', 'gospel', 'religioso', 'louvor', 'adoracao', 'adoração', 'catolica', 'católica', 'evangelica', 'evangélica', 'jazz', 'bebop', 'cool jazz', 'fusion', 'blues', 'soul', 'r&b', 'rhythm and blues', 'neo soul', 'hip hop', 'rap', 'trap', 'drill', 'lo fi', 'boom bap', 'eletronica', 'eletrônica', 'edm', 'house', 'deep house', 'tech house', 'techno', 'trance', 'psytrance', 'dubstep', 'drum and bass', 'dnb', 'jungle', 'garage', 'uk garage', 'reggae', 'reggaeton', 'dancehall', 'ska', 'metal', 'heavy metal', 'thrash', 'death metal', 'black metal', 'nu metal', 'metalcore', 'hard rock', 'punk', 'hardcore', 'indie', 'alternativo', 'grunge', 'emo', 'classica', 'clássica', 'erudita', 'opera', 'ópera', 'instrumental', 'orquestral', 'country', 'folk', 'world music'],

        // Instrumentos
        instrumentos: ['instrumento', 'musical', 'violao', 'violão', 'acoustic guitar', 'guitarra', 'electric guitar', 'baixo', 'bass', 'contrabaixo', 'bateria', 'drums', 'percussão', 'percussao', 'piano', 'piano de cauda', 'piano digital', 'teclado', 'keyboard', 'sintetizador', 'synth', 'orgao', 'órgão', 'acordeon', 'acordeão', 'sanfona', 'violino', 'violin', 'viola', 'viola caipira', 'violoncelo', 'cello', 'harpa', 'harp', 'flauta', 'flute', 'flauta doce', 'flauta transversal', 'saxofone', 'sax', 'alto sax', 'tenor sax', 'soprano sax', 'trompete', 'trumpet', 'trombone', 'tuba', 'clarinete', 'clarinet', 'obo', 'oboé', 'oboe', 'fagote', 'bassoon', 'gaita', 'harmonica', 'harmônica', 'blues harp', 'ukulele', 'cavaquinho', 'bandolim', 'mandolin', 'banjo', 'pandeiro', 'tamborim', 'surdo', 'repique', 'caixa', 'zabumba', 'triangulo', 'triângulo', 'agogo', 'agogô', 'atabaque', 'conga', 'bongo', 'djembe', 'djembê', 'cajon', 'cajón', 'hang drum', 'kalimba', 'berimbau', 'marimba', 'xilofone'],

        // Produção musical
        producao: ['producao musical', 'produção musical', 'produtor', 'producer', 'beatmaker', 'beat', 'instrumental', 'backing track', 'playback', 'sample', 'sampling', 'loop', 'midi', 'vst', 'vsti', 'plugin', 'plug-in', 'daw', 'digital audio workstation', 'ableton', 'ableton live', 'fl studio', 'fruity loops', 'logic', 'logic pro', 'pro tools', 'cubase', 'studio one', 'reaper', 'reason', 'bitwig', 'gravacao', 'gravação', 'recording', 'estudio', 'estúdio', 'studio', 'home studio', 'projeto acustico', 'projeto acústico', 'tratamento acustico', 'tratamento acústico', 'isolamento', 'mixagem', 'mix', 'mixing', 'masterizacao', 'masterização', 'mastering', 'audio', 'áudio', 'som', 'engenheiro de som', 'tecnico de som', 'técnico de som'],

        // Serviços musicais
        servicos: ['aula de musica', 'aula de música', 'professor de musica', 'professor de música', 'escola de musica', 'escola de música', 'conservatorio', 'conservatório', 'banda', 'grupo', 'musico', 'músico', 'instrumentista', 'cantor', 'cantora', 'vocalista', 'backing vocal', 'coral', 'coro', 'orquestra', 'quarteto', 'quinteto', 'duo', 'trio', 'cover', 'tributo', 'repertorio', 'repertório', 'setlist', 'show', 'apresentacao', 'apresentação', 'pocket show', 'acustico', 'acústico', 'voz e violao', 'voz e violão', 'evento', 'casamento', 'festa', 'animacao', 'animação', 'dj', 'disc jockey', 'discotecagem', 'pickup', 'vitrola', 'toca discos', 'mixer', 'controladora']
    },

    // ================================
    // INFANTIL & MATERNIDADE (90+ keywords)
    // ================================
    infantil: {
        // Maternidade e gestação
        maternidade: ['mae', 'mãe', 'mamae', 'mamãe', 'maternidade', 'gestante', 'gravida', 'grávida', 'gravidez', 'gestacao', 'gestação', 'trimestre', 'prenatal', 'pré-natal', 'ultrassom', 'ecografia', 'obstetra', 'ginecologista', 'parto', 'cesarea', 'cesárea', 'cesariana', 'parto normal', 'parto humanizado', 'parto na agua', 'parto na água', 'doula', 'parteira', 'puerpério', 'puerperio', 'pos parto', 'pós-parto', 'resguardo', 'amamentacao', 'amamentação', 'aleitamento', 'leite materno', 'banco de leite', 'bomba de leite', 'extrator', 'mamadeira', 'bico', 'chupeta', 'enxoval', 'cha de bebe', 'chá de bebê', 'cha de fraldas', 'chá de fraldas', 'cha revelacao', 'chá revelação', 'gender reveal', 'maternidade real', 'mae solo', 'mãe solo'],

        // Bebê
        bebe: ['bebe', 'bebê', 'baby', 'recem nascido', 'recém-nascido', 'newborn', 'nenem', 'nenê', 'berco', 'berço', 'bercinho', 'mini berco', 'mini berço', 'moises', 'moisés', 'carrinho', 'carrinho de bebe', 'carrinho de bebê', 'trio', 'travel system', 'bebe conforto', 'bebê conforto', 'cadeirinha', 'cadeira auto', 'canguru', 'sling', 'wrap', 'canguru ergonômico', 'canguru ergonomico', 'trocador', 'banheira', 'banheira com suporte', 'andador', 'cercadinho', 'chiqueirinho', 'babá eletronica', 'babá eletrônica', 'baba', 'fralda', 'fralda descartavel', 'fralda descartável', 'fralda de pano', 'ecologica', 'ecológica', 'pomada', 'assadura', 'lenco umedecido', 'lenço umedecido', 'toalhinha'],

        // Criança
        crianca: ['crianca', 'criança', 'kids', 'infantil', 'infancia', 'infância', 'filho', 'filha', 'menino', 'menina', 'brinquedo', 'toy', 'toys', 'brincadeira', 'parquinho', 'playground', 'escorregador', 'balanco', 'balanço', 'gangorra', 'casinha', 'piscina de bolinha', 'boneca', 'boneco', 'carrinho', 'miniatura', 'bicicleta', 'triciclo', 'patinete', 'velotrol', 'lego', 'bloco', 'montessori', 'massinha', 'play doh', 'slime', 'jogo', 'tabuleiro', 'quebra cabeca', 'quebra-cabeça', 'puzzle', 'fantasia', 'figurino', 'festa infantil', 'buffet infantil', 'animador', 'recreador', 'palhaço', 'palhaco', 'magico', 'mágico', 'personagem', 'personagem vivo'],

        // Educação infantil
        educacao: ['escola', 'escolinha', 'creche', 'bercario', 'berçário', 'maternal', 'pre escola', 'pré-escola', 'jardim', 'jardim de infancia', 'jardim de infância', 'educacao infantil', 'educação infantil', 'alfabetizacao', 'alfabetização', 'letramento', 'educador', 'pedagogo', 'pedagoga', 'pedagogia', 'ludico', 'lúdico', 'ludoteca', 'recreacao', 'recreação', 'psicomotricidade', 'desenvolvimento infantil', 'primeira infancia', 'primeira infância', 'estimulacao', 'estimulação', 'estimulacao precoce', 'estimulação precoce', 'fonoaudiologia infantil', 'fono', 'terapia ocupacional', 'to', 'psicopedagogia', 'psicopedagoga', 'neuropsicologia'],

        // Serviços para crianças
        servicos: ['pediatra', 'neuropediatra', 'gastropediatra', 'odontopediatra', 'dentista infantil', 'fisioterapia infantil', 'baba', 'babá', 'nanny', 'au pair', 'cuidador', 'acompanhante', 'transporte escolar', 'van escolar', 'reforco escolar', 'reforço escolar', 'explicadora', 'aulas particulares', 'natacao infantil', 'natação infantil', 'ballet infantil', 'judô infantil', 'judo infantil', 'futebol infantil', 'escolinha de futebol', 'aula de musica infantil', 'aula de música infantil', 'ingles para criancas', 'inglês para crianças']
    },

    // ================================
    // CANNABIS MEDICINAL & CBD (60+ keywords)
    // ================================
    cannabis: {
        // Produtos derivados
        produtos: ['cannabis', 'canabis', 'cbd', 'cannabidiol', 'canabidiol', 'canabinoide', 'cannabinoide', 'thc', 'tetrahidrocanabinol', 'hemp', 'canhamo', 'cânhamo', 'oleo cbd', 'óleo cbd', 'oleo de cannabis', 'óleo de cannabis', 'oleo full spectrum', 'óleo full spectrum', 'tintura', 'capsula', 'cápsula', 'softgel', 'comestivel', 'comestível', 'gummy', 'goma', 'bala', 'chocolate', 'brownie', 'cosmético', 'cosmetico', 'creme', 'pomada', 'balsamo', 'bálsamo', 'gel', 'roll on', 'vaporizador', 'vape', 'vaper', 'cartucho', 'flower', 'flor', 'extrato', 'concentrado', 'isolado', 'isolate', 'full spectrum', 'broad spectrum', 'distilado', 'distillate', 'hash', 'rosin', 'wax', 'shatter', 'crumble'],

        // Uso medicinal e terapêutico
        medicinal: ['medicinal', 'medicina', 'terapeutico', 'terapêutico', 'tratamento', 'prescricao', 'prescrição', 'receita', 'medico', 'médico', 'neurologista', 'psiquiatra', 'ansiedade', 'depressao', 'depressão', 'dor cronica', 'dor crônica', 'dor neuropatica', 'dor neuropática', 'epilepsia', 'convulsao', 'convulsão', 'insonia', 'insônia', 'disturbio do sono', 'distúrbio do sono', 'autismo', 'tea', 'tdah', 'parkinson', 'alzheimer', 'esclerose multipla', 'esclerose múltipla', 'fibromialgia', 'artrite', 'artrose', 'cancer', 'câncer', 'quimioterapia', 'nausea', 'náusea', 'vomito', 'vômito', 'apetite', 'ptsd', 'estresse pos traumatico', 'estresse pós-traumático'],

        // Regulamentação e acesso
        regulamentacao: ['anvisa', 'rdc', 'importacao', 'importação', 'autorizacao', 'autorização', 'habeas corpus', 'judicial', 'cultivo', 'autocultivo', 'associacao', 'associação', 'abrace', 'apepi', 'santa cannabis', 'laboratorio', 'laboratório', 'farmacia magistral', 'farmácia magistral', 'manipulacao', 'manipulação', 'magistral', 'farmacia viva', 'farmácia viva'],

        // Bem-estar e wellness
        bemestar: ['wellness', 'bem estar', 'bem-estar', 'relaxamento', 'calma', 'sono', 'sleep', 'stress', 'estresse', 'recuperacao', 'recuperação', 'recovery', 'performance', 'esportivo', 'atleta', 'pet', 'animal', 'cachorro', 'gato', 'veterinario', 'veterinário', 'ansiedade pet', 'convulsão pet']
    },

    // ================================
    // ENERGIA & SUSTENTABILIDADE (80+ keywords)
    // ================================
    energia: {
        // Energia solar
        solar: ['energia solar', 'solar', 'fotovoltaica', 'fotovoltaico', 'painel solar', 'modulo solar', 'módulo solar', 'placa solar', 'inversor', 'microinversor', 'string box', 'estrutura solar', 'on grid', 'off grid', 'hibrido', 'híbrido', 'geracao distribuida', 'geração distribuída', 'autoconsumo', 'compensacao', 'compensação', 'credito de energia', 'crédito de energia', 'usina solar', 'fazenda solar', 'carport solar', 'aquecedor solar', 'aquecimento solar', 'boiler'],

        // Outras energias renováveis
        renovaveis: ['energia renovavel', 'energia renovável', 'eolica', 'eólica', 'energia eolica', 'energia eólica', 'aerogerador', 'turbina eolica', 'turbina eólica', 'biomassa', 'biogas', 'biogás', 'biodigestor', 'hidroeletrica', 'hidrelétrica', 'pch', 'cgh', 'geotermica', 'geotérmica', 'maremotriz', 'hidrogenio verde', 'hidrogênio verde', 'h2v'],

        // Eficiência energética
        eficiencia: ['eficiencia energetica', 'eficiência energética', 'economia de energia', 'reducao de consumo', 'redução de consumo', 'led', 'iluminacao led', 'iluminação led', 'lampada', 'lâmpada', 'automacao', 'automação', 'sensor de presenca', 'sensor de presença', 'timer', 'dimerizacao', 'dimerização', 'ar condicionado inverter', 'selo procel', 'etiqueta energetica', 'etiqueta energética', 'classe a', 'retrofit', 'modernizacao', 'modernização'],

        // Sustentabilidade
        sustentabilidade: ['sustentabilidade', 'sustentavel', 'sustentável', 'ecologico', 'ecológico', 'verde', 'green', 'eco', 'eco friendly', 'carbono neutro', 'neutralizacao', 'neutralização', 'credito de carbono', 'crédito de carbono', 'esg', 'governanca ambiental', 'governança ambiental', 'ods', 'agenda 2030', 'economia circular', 'reciclagem', 'reuso', 'upcycling', 'compostagem', 'residuo zero', 'resíduo zero', 'zero waste', 'lixo zero', 'biodegradavel', 'biodegradável', 'compostavel', 'compostável', 'organico', 'orgânico', 'agroecologia', 'permacultura', 'horta urbana', 'telhado verde', 'cisterna', 'reuso de agua', 'reuso de água', 'captacao de agua', 'captação de água'],

        // Serviços e empresas
        servicos: ['instalador', 'instalacao', 'instalação', 'projeto', 'dimensionamento', 'homologacao', 'homologação', 'manutencao', 'manutenção', 'limpeza de paineis', 'limpeza de painéis', 'monitoramento', 'consultoria', 'assessoria', 'financiamento solar', 'consorcio solar', 'consórcio solar', 'locacao de usina', 'locação de usina', 'assinatura solar', 'cooperativa solar']
    },

    // ================================
    // PODCAST & STREAMING (60+ keywords)
    // ================================
    podcast: {
        // Produção de podcast
        producao: ['podcast', 'podcaster', 'apresentador', 'host', 'co host', 'entrevista', 'episodio', 'episódio', 'temporada', 'season', 'serie', 'série', 'programa', 'audio', 'áudio', 'gravacao', 'gravação', 'edicao', 'edição', 'pos producao', 'pós-produção', 'roteiro', 'pauta', 'script', 'introducao', 'introdução', 'encerramento', 'vinheta', 'jingle', 'trilha', 'sonoplastia', 'sound design'],

        // Equipamentos
        equipamentos: ['microfone', 'mic', 'condensador', 'dinamico', 'dinâmico', 'usb', 'xlr', 'interface de audio', 'interface de áudio', 'mesa de som', 'mixer', 'fone de ouvido', 'headphone', 'pop filter', 'anti pop', 'braco articulado', 'braço articulado', 'shock mount', 'aranha', 'tratamento acustico', 'tratamento acústico', 'espuma acustica', 'espuma acústica', 'painel acustico', 'painel acústico', 'cabine', 'booth'],

        // Plataformas
        plataformas: ['spotify', 'apple podcasts', 'google podcasts', 'amazon music', 'deezer', 'youtube', 'youtube music', 'anchor', 'buzzsprout', 'podbean', 'libsyn', 'spreaker', 'soundcloud', 'stitcher', 'pocket casts', 'overcast', 'castbox', 'rss', 'feed'],

        // Streaming de vídeo
        streaming: ['stream', 'streaming', 'streamer', 'live', 'ao vivo', 'transmissao', 'transmissão', 'broadcast', 'twitch', 'youtube live', 'facebook live', 'instagram live', 'tiktok live', 'kick', 'rumble', 'obs', 'streamlabs', 'overlay', 'cena', 'scene', 'alerta', 'donation', 'doacao', 'doação', 'subscriber', 'sub', 'inscrito', 'chat', 'moderador', 'mod', 'emote', 'bits', 'cheers'],

        // Monetização
        monetizacao: ['monetizacao', 'monetização', 'patrocinio', 'patrocínio', 'sponsor', 'publi', 'publicidade', 'anuncio', 'anúncio', 'merchã', 'merch', 'produto', 'curso', 'comunidade', 'membership', 'assinatura', 'patreon', 'apoia se', 'apoia.se', 'catarse', 'financiamento coletivo', 'crowdfunding']
    },

    // ================================
    // COWORKING & ESCRITÓRIO (50+ keywords)
    // ================================
    coworking: {
        // Espaços
        espacos: ['coworking', 'co working', 'espaco compartilhado', 'espaço compartilhado', 'escritorio compartilhado', 'escritório compartilhado', 'sala comercial', 'sala privativa', 'sala de reuniao', 'sala de reunião', 'meeting room', 'auditório', 'auditorio', 'espaco de eventos', 'espaço de eventos', 'estacao de trabalho', 'estação de trabalho', 'hot desk', 'mesa rotativa', 'flex desk', 'mesa fixa', 'dedicated desk', 'endereco fiscal', 'endereço fiscal', 'endereco comercial', 'endereço comercial', 'virtual office', 'escritorio virtual', 'escritório virtual'],

        // Serviços
        servicos: ['recepcao', 'recepção', 'atendimento', 'secretaria', 'correspondencia', 'correspondência', 'malote', 'impressao', 'impressão', 'scanner', 'xerox', 'copa', 'cozinha', 'cafe', 'café', 'internet', 'wifi', 'wi-fi', 'fibra', 'telefone', 'ramal', 'voip', 'estacionamento', 'bicicletario', 'bicicletário', 'vestiario', 'vestiário', 'armario', 'armário', 'locker'],

        // Modelos
        modelos: ['plano', 'pacote', 'diaria', 'diária', 'mensal', 'hora avulsa', 'credito', 'crédito', 'pacote de horas', 'all inclusive', 'tudo incluso', 'startup', 'freelancer', 'autonomo', 'autônomo', 'remoto', 'hibrido', 'híbrido', 'nomade digital', 'nômade digital', 'digital nomad', 'home office'],

        // Marcas
        marcas: ['wework', 'regus', 'spaces', 'ihub', 'cubo', 'google campus', 'nex coworking', 'berrini', 'faria lima', 'paulista']
    },

    // ================================
    // CASAMENTO & NOIVAS (80+ keywords)
    // ================================
    casamento: {
        // Cerimônia
        cerimonia: ['casamento', 'wedding', 'noiva', 'noivo', 'bride', 'groom', 'cerimonia', 'cerimônia', 'civil', 'religioso', 'ecumenico', 'ecumênico', 'ao ar livre', 'destination wedding', 'elopement', 'mini wedding', 'micro wedding', 'renovacao de votos', 'renovação de votos', 'bodas', 'bodas de prata', 'bodas de ouro', 'union', 'casamento homoafetivo', 'casamento igualitario', 'casamento igualitário'],

        // Fornecedores
        fornecedores: ['cerimonialista', 'cerimonial', 'assessoria', 'assessor', 'wedding planner', 'organizador', 'organizadora', 'buffet', 'catering', 'gastronomia', 'chef', 'decoracao', 'decoração', 'decorador', 'florista', 'flores', 'arranjo', 'buque', 'buquê', 'boutonnière', 'boutonniere', 'lapela', 'fotografo', 'fotógrafo', 'videomaker', 'filmagem', 'filme de casamento', 'making of', 'dj', 'banda', 'musica ao vivo', 'música ao vivo', 'som', 'iluminacao', 'iluminação'],

        // Vestimenta
        vestimenta: ['vestido de noiva', 'wedding dress', 'vestido', 'veu', 'véu', 'grinalda', 'tiara', 'coroa', 'sapato de noiva', 'sandalia de noiva', 'sandália de noiva', 'terno', 'smoking', 'costume', 'gravata', 'suspensório', 'suspensorio', 'abotoaduras', 'alianca', 'aliança', 'anel de noivado', 'joias', 'jóias', 'brinco', 'colar', 'pulseira', 'acessorios', 'acessórios'],

        // Beleza
        beleza: ['make', 'makeup', 'maquiagem', 'maquiador', 'maquiadora', 'penteado', 'hair', 'cabelo', 'cabeleireiro', 'cabeleireira', 'dia da noiva', 'spa day', 'unhas', 'manicure', 'alongamento', 'bronzeamento', 'skin care', 'tratamento facial', 'drenagem', 'massagem', 'prova de make', 'prova de penteado'],

        // Local e decoração
        local: ['espaco', 'espaço', 'venue', 'salao', 'salão', 'casa de festas', 'sitio', 'sítio', 'fazenda', 'praia', 'hotel', 'resort', 'castelo', 'igreja', 'capela', 'cartorio', 'cartório', 'altar', 'tapete', 'passarela', 'arco', 'pergolado', 'gazebo', 'tenda', 'toldo', 'mesa dos noivos', 'mesa de doces', 'mesa de bolo'],

        // Papelaria e convites
        papelaria: ['convite', 'save the date', 'rsvp', 'confirmacao', 'confirmação', 'papelaria', 'envelope', 'lacre', 'monograma', 'brasao', 'brasão', 'identidade visual', 'menu', 'cardapio', 'cardápio', 'marcador de lugar', 'placa', 'sinalização', 'sinalizacao', 'adesivo', 'tag', 'etiqueta', 'lembrancinha', 'bem casado', 'bem vivido', 'presente']
    },

    // ================================
    // IDIOMAS & TRADUÇÃO (60+ keywords)
    // ================================
    idiomas: {
        // Idiomas principais
        linguas: ['idioma', 'lingua', 'língua', 'language', 'ingles', 'inglês', 'english', 'espanhol', 'spanish', 'frances', 'francês', 'french', 'alemao', 'alemão', 'german', 'italiano', 'italian', 'portugues', 'português', 'portuguese', 'japones', 'japonês', 'japanese', 'chines', 'chinês', 'mandarin', 'coreano', 'korean', 'russo', 'russian', 'arabe', 'árabe', 'arabic', 'hebraico', 'hebrew', 'holandês', 'holandes', 'dutch', 'sueco', 'swedish', 'noruegues', 'norueguês', 'dinamarquês', 'dinamarques', 'polones', 'polonês', 'turco', 'grego', 'hindi', 'libras', 'linguagem de sinais', 'lingua de sinais', 'língua de sinais', 'latim', 'latin'],

        // Ensino
        ensino: ['curso de idiomas', 'escola de idiomas', 'aula', 'professor', 'professora', 'teacher', 'instrutor', 'nativo', 'native speaker', 'conversacao', 'conversação', 'conversation', 'speaking', 'listening', 'reading', 'writing', 'gramatica', 'gramática', 'grammar', 'vocabulario', 'vocabulário', 'vocabulary', 'pronuncia', 'pronúncia', 'pronunciation', 'sotaque', 'accent', 'fluencia', 'fluência', 'fluency', 'basico', 'básico', 'beginner', 'intermediario', 'intermediário', 'intermediate', 'avancado', 'avançado', 'advanced', 'proficiente', 'proficient'],

        // Exames e certificações
        certificacoes: ['certificacao', 'certificação', 'certificado', 'certificate', 'toefl', 'ielts', 'cambridge', 'toeic', 'dele', 'delf', 'dalf', 'goethe', 'jlpt', 'hsk', 'celpe bras', 'proficiencia', 'proficiência', 'proficiency', 'prova', 'exame', 'exam', 'test', 'preparatorio', 'preparatório', 'prep course'],

        // Tradução e interpretação
        traducao: ['traducao', 'tradução', 'translation', 'tradutor', 'translator', 'interpretacao', 'interpretação', 'interpretation', 'interprete', 'intérprete', 'interpreter', 'juramentada', 'sworn', 'tecnica', 'técnica', 'technical', 'literaria', 'literária', 'literary', 'simultanea', 'simultânea', 'simultaneous', 'consecutiva', 'consecutive', 'legendagem', 'subtitle', 'localizacao', 'localização', 'localization', 'transcricao', 'transcrição', 'transcription', 'revisao', 'revisão', 'proofreading'],

        // Plataformas
        plataformas: ['duolingo', 'babbel', 'busuu', 'rosetta stone', 'pimsleur', 'italki', 'preply', 'cambly', 'verbling', 'tandem', 'hellotalk', 'anki', 'memrise', 'lingq', 'coursera', 'udemy', 'youtube', 'netflix', 'imersao', 'imersão', 'intercambio', 'intercâmbio', 'exchange', 'au pair', 'work and travel']
    },

    // ================================
    // EXPANSÃO MEGA - VARIACÕES DELIVERY (500+)
    // Erros digitação, gírias, regionalismos
    // ================================
    deliveryExpansao: {
        // Erros de digitação comuns
        errosDigitacao: ['restauarnte', 'restaurnate', 'restarante', 'resturante', 'restauante', 'hamburguer', 'hamburgre', 'hambuger', 'hamburguer', 'hamburgue', 'hambuerguer', 'lanchonte', 'lanchonette', 'lanchoente', 'pizzeria', 'pizaria', 'pizarra', 'pizzarria', 'pizeria', 'churasqueira', 'churrascaria', 'churrasqueria', 'xurrasco', 'xurras', 'açai', 'açaí', 'asai', 'assai', 'acaí', 'acai', 'açaii', 'sorvetria', 'soverteria', 'survete', 'sorveti', 'cafetria', 'cafeteira', 'cafetaria', 'coffe', 'cofe', 'cofee', 'caffe', 'cafe', 'café', 'caféé', 'padaria', 'padarai', 'paderia', 'panificadora', 'panficadora', 'confetaria', 'confeitaria', 'comfeitaria', 'doceira', 'doceria', 'doceira', 'doseria'],

        // Gírias e termos coloquiais
        girias: ['rango', 'boia', 'comida', 'janta', 'almoco', 'almoço', 'cafe da manha', 'café da manhã', 'desjejum', 'merenda', 'lanche', 'lanchinho', 'tira gosto', 'petisco', 'aperitivo', 'entrada', 'prato principal', 'sobremesa', 'docinho', 'salgadinho', 'besteira', 'guloseima', 'gostosura', 'quitute', 'quitanda', 'cozinha caseira', 'comida de vó', 'comida de vo', 'caseiro', 'caseira', 'artesanal', 'feito em casa', 'receita de familia', 'receita de família', 'tradicional', 'original', 'autentico', 'autêntico'],

        // Tipos de comida expandidos
        comidasBrasileiras: ['feijoada', 'feijão tropeiro', 'feijao tropeiro', 'tutu de feijão', 'tutu de feijao', 'virado a paulista', 'virado à paulista', 'baião de dois', 'baiao de dois', 'arroz carreteiro', 'galinhada', 'frango caipira', 'frango com quiabo', 'vaca atolada', 'carne de sol', 'carne seca', 'charque', 'jabá', 'jaba', 'buchada', 'sarapatel', 'mocotó', 'mocoto', 'rabada', 'dobradinha', 'feijoada', 'acarajé', 'acaraje', 'abará', 'abara', 'vatapá', 'vatapa', 'caruru', 'moqueca', 'bobó de camarão', 'bobo de camarao', 'xinxim de galinha', 'xinxim', 'efó', 'efo', 'tacacá', 'tacaca', 'pato no tucupi', 'maniçoba', 'manicoba', 'pirarucu', 'tambaqui', 'tucunaré', 'tucunare', 'jaraqui', 'costela no bafo', 'costela fogo de chão', 'costela fogo de chao', 'churrasco gaucho', 'churrasco gaúcho', 'picanha', 'maminha', 'fraldinha', 'cupim', 'alcatra', 'contrafilé', 'contrafile', 'entrecôte', 'entrecote', 'baby beef', 'bife ancho', 'prime rib', 'tomahawk', 't-bone', 'tbone', 'porterhouse'],

        // Fast food e lanches
        fastFood: ['hamburguer', 'hambúrguer', 'burger', 'smash burger', 'smash', 'smashburger', 'artesanal', 'gourmet', 'double', 'triplo', 'triple', 'bacon', 'cheddar', 'queijo', 'salada', 'onion rings', 'anéis de cebola', 'aneis de cebola', 'batata frita', 'french fries', 'fritas', 'batata rústica', 'batata rustica', 'batata canoa', 'batata wedges', 'batata smile', 'nuggets', 'nugget', 'chicken', 'frango frito', 'fried chicken', 'hot dog', 'cachorro quente', 'dogao', 'dogão', 'dog', 'prensado', 'sanduiche', 'sanduíche', 'sandwich', 'sub', 'wrap', 'burrito', 'taco', 'tacos', 'nachos', 'guacamole', 'quesadilla', 'chimichanga', 'enchilada', 'fajita', 'churros', 'crepe', 'crepes', 'tapioca', 'cuscuz', 'cuscuz paulista', 'cuscuz nordestino', 'pamonha', 'curau', 'canjica', 'milho verde', 'espiga'],

        // Comidas internacionais
        comidasInternacionais: ['sushi', 'sashimi', 'temaki', 'uramaki', 'hot roll', 'hotroll', 'hot philadelphia', 'jow', 'joy', 'niguiri', 'nigiri', 'gunkan', 'hossomaki', 'hosomaki', 'futomaki', 'kappamaki', 'california roll', 'dragon roll', 'yakisoba', 'yakimeshi', 'guioza', 'gyoza', 'harumaki', 'tempura', 'tonkatsu', 'ramen', 'lamen', 'lámen', 'udon', 'soba', 'miso', 'missoshiru', 'edamame', 'wasabi', 'gengibre', 'shoyu', 'tarê', 'tare', 'teriyaki', 'karê', 'kare', 'curry', 'pad thai', 'phở', 'pho', 'bao', 'banh mi', 'spring roll', 'dim sum', 'xiao long bao', 'char siu', 'pequim', 'peking duck', 'chop suey', 'chow mein', 'lo mein', 'kung pao', 'mapo tofu', 'szechuan', 'sichuan', 'cantonês', 'cantones', 'mandarim'],

        // Comida italiana expandida
        italiana: ['pizza', 'pizzas', 'pizza artesanal', 'pizza napolitana', 'pizza romana', 'pizza siciliana', 'calzone', 'calzoni', 'focaccia', 'bruschetta', 'antepasto', 'antipasto', 'carpaccio', 'vitello tonnato', 'massa', 'pasta', 'espaguete', 'spaghetti', 'penne', 'rigatoni', 'fusilli', 'farfalle', 'fettuccine', 'tagliatelle', 'pappardelle', 'linguine', 'bucatini', 'orecchiette', 'gnocchi', 'nhoque', 'ravioli', 'ravióli', 'tortellini', 'cappelletti', 'lasanha', 'lasagna', 'cannelloni', 'manicotti', 'carbonara', 'amatriciana', 'cacio e pepe', 'aglio e olio', 'puttanesca', 'arrabbiata', 'bolonhesa', 'bolognese', 'alfredo', 'pesto', 'pomodoro', 'marinara', 'primavera', 'frutti di mare', 'vongole', 'risotto', 'risoto', 'ossobuco', 'saltimbocca', 'piccata', 'parmigiana', 'parmegiana', 'milanesa', 'milanese', 'tiramisu', 'tiramisù', 'panna cotta', 'cannoli', 'gelato', 'gelatto', 'affogato', 'espresso', 'cappuccino', 'macchiato', 'latte'],

        // Bebidas expandidas
        bebidasCompletas: ['agua', 'água', 'agua mineral', 'água mineral', 'agua com gas', 'água com gás', 'agua sem gas', 'água sem gás', 'refrigerante', 'refri', 'coca', 'coca cola', 'coca-cola', 'pepsi', 'guarana', 'guaraná', 'guarana antarctica', 'guaraná antarctica', 'fanta', 'sprite', 'schweppes', 'tonica', 'tônica', 'kuat', 'dolly', 'convenção', 'tubaina', 'tubaína', 'soda', 'soda limonada', 'limonada', 'laranjada', 'refresco', 'suco', 'suco natural', 'suco de laranja', 'suco de limão', 'suco de limao', 'suco de maracuja', 'suco de maracujá', 'suco de abacaxi', 'suco de manga', 'suco de morango', 'suco de uva', 'suco de goiaba', 'suco de caju', 'suco de acerola', 'suco verde', 'suco detox', 'smoothie', 'vitamina', 'vitamina de banana', 'vitamina de morango', 'açaí', 'acai', 'açai na tigela', 'acai na tigela', 'milkshake', 'milk shake', 'shake', 'batida', 'frappe', 'frappuccino', 'cha', 'chá', 'cha gelado', 'chá gelado', 'ice tea', 'iced tea', 'mate', 'chimarrao', 'chimarrão', 'terere', 'tereré', 'cafe', 'café', 'cafezinho', 'expresso', 'espresso', 'pingado', 'media', 'média', 'cappuccino', 'capuccino', 'mocha', 'latte', 'macchiato', 'americano', 'coado', 'filtrado', 'prensa francesa', 'french press', 'cold brew', 'nitro', 'chocolate quente', 'chocolate gelado', 'toddy', 'nescau', 'ovomaltine', 'achocolatado', 'leite', 'leite integral', 'leite desnatado', 'leite sem lactose', 'leite de soja', 'leite de amêndoas', 'leite de amendoas', 'leite de aveia', 'leite de coco', 'iogurte', 'yakult', 'kefir', 'kombucha'],

        // Plataformas e apps
        plataformasDelivery: ['ifood', 'i food', 'ifoood', 'ifod', 'rappi', 'rapi', 'rappii', 'uber eats', 'ubereats', 'uber eat', 'ubereat', '99 food', '99food', 'ninety nine food', 'aiqfome', 'aiq fome', 'ai q fome', 'zé delivery', 'ze delivery', 'zé', 'ze', 'james', 'james delivery', 'cornershop', 'corner shop', 'shopper', 'mercado livre', 'mercadolivre', 'magalu', 'magazine luiza', 'americanas', 'submarino', 'extra', 'carrefour', 'pao de acucar', 'pão de açúcar', 'pão de açucar', 'pao de açúcar', 'hortifruti', 'sacolao', 'sacolão', 'feira', 'feirinha', 'quitanda', 'mercearia', 'armazem', 'armazém', 'emporio', 'empório', 'conveniencia', 'conveniência', 'loja de conveniencia', 'loja de conveniência', 'am pm', 'ampm', 'select', 'br mania', 'ale', 'shell select'],

        // Termos de entrega
        termosEntrega: ['entrega', 'entregar', 'entregador', 'entregadora', 'motoboy', 'motoqueiro', 'motogirl', 'bike', 'bicicleta', 'ciclista', 'delivery', 'deliveryman', 'frete', 'frete gratis', 'frete grátis', 'sem frete', 'taxa de entrega', 'taxa', 'tempo de entrega', 'previsão', 'previsao', 'rastreio', 'rastreamento', 'rastrear', 'tracking', 'pedido', 'pedidos', 'realizar pedido', 'fazer pedido', 'pedir', 'encomendar', 'encomenda', 'reserva', 'reservar', 'agendamento', 'agendar', 'programar', 'retirada', 'retirar', 'take away', 'takeaway', 'para viagem', 'pra viagem', 'levar', 'buscar', 'drive thru', 'drive-thru', 'drive through', 'pegue e leve', 'to go', 'pickup', 'curbside']
    },

    // ================================
    // EXPANSÃO MEGA - VARIACÕES E-COMMERCE (600+)
    // ================================
    ecommerceExpansao: {
        // Moda feminina expandida
        modaFemininaCompleta: ['vestido longo', 'vestido curto', 'vestido midi', 'vestido festa', 'vestido casual', 'vestido trabalho', 'vestido praia', 'vestido verao', 'vestido verão', 'vestido inverno', 'vestido primavera', 'vestido outono', 'vestido noite', 'vestido dia', 'vestido floral', 'vestido estampado', 'vestido liso', 'vestido preto', 'vestido branco', 'vestido vermelho', 'vestido azul', 'vestido rosa', 'vestido verde', 'vestido amarelo', 'vestido laranja', 'vestido nude', 'vestido bege', 'vestido marrom', 'vestido cinza', 'vestido vinho', 'vestido marsala', 'vestido coral', 'vestido salmon', 'vestido salmão', 'vestido dourado', 'vestido prata', 'vestido brilho', 'vestido paete', 'vestido paetê', 'vestido renda', 'vestido tule', 'vestido chiffon', 'vestido seda', 'vestido cetim', 'vestido veludo', 'vestido tricot', 'vestido tricô', 'vestido malha', 'vestido jeans', 'vestido couro', 'vestido plus size', 'vestido gestante', 'vestido amamentacao', 'vestido amamentação'],

        // Moda masculina expandida
        modaMasculinaCompleta: ['camisa social', 'camisa casual', 'camisa manga curta', 'camisa manga longa', 'camisa slim', 'camisa regular', 'camisa oversized', 'camisa xadrez', 'camisa listrada', 'camisa lisa', 'camisa estampada', 'camisa floral', 'camisa polo', 'camisa gola padre', 'camisa gola v', 'camisa henley', 'camisa jeans', 'camisa linho', 'camisa algodao', 'camisa algodão', 'camisa oxford', 'camisa chambray', 'camisa flanela', 'camiseta basica', 'camiseta básica', 'camiseta lisa', 'camiseta estampada', 'camiseta banda', 'camiseta filme', 'camiseta serie', 'camiseta série', 'camiseta geek', 'camiseta nerd', 'camiseta game', 'camiseta futebol', 'camiseta time', 'camiseta selecao', 'camiseta seleção', 'camiseta retro', 'camiseta vintage', 'camiseta longline', 'camiseta oversized', 'camiseta slim', 'camiseta regata', 'camiseta cavada', 'camiseta machao', 'camiseta machão', 'camiseta dry fit', 'camiseta uv', 'camiseta termica', 'camiseta térmica', 'camiseta compressao', 'camiseta compressão'],

        // Calçados completos
        calcadosCompletos: ['tenis casual', 'tênis casual', 'tenis corrida', 'tênis corrida', 'tenis academia', 'tênis academia', 'tenis crossfit', 'tênis crossfit', 'tenis treino', 'tênis treino', 'tenis caminhada', 'tênis caminhada', 'tenis skatista', 'tênis skatista', 'tenis basquete', 'tênis basquete', 'tenis futsal', 'tênis futsal', 'tenis society', 'tênis society', 'chuteira campo', 'chuteira society', 'chuteira futsal', 'chuteira trava', 'chuteira profissional', 'tenis nike', 'tênis nike', 'nike air', 'air max', 'air force', 'air jordan', 'jordan', 'tenis adidas', 'tênis adidas', 'ultraboost', 'nmd', 'stan smith', 'superstar', 'gazelle', 'samba', 'forum', 'tenis puma', 'tênis puma', 'tenis new balance', 'tênis new balance', 'tenis asics', 'tênis asics', 'tenis mizuno', 'tênis mizuno', 'tenis fila', 'tênis fila', 'tenis olympikus', 'tênis olympikus', 'tenis vans', 'tênis vans', 'old skool', 'sk8 hi', 'era', 'authentic', 'tenis converse', 'tênis converse', 'all star', 'chuck taylor', 'tenis reebok', 'tênis reebok', 'classic leather', 'club c', 'tenis under armour', 'tênis under armour', 'tenis skechers', 'tênis skechers', 'sapatenis', 'sapatênis', 'mocassim', 'loafer', 'dockside', 'driver', 'sapato social', 'oxford', 'derby', 'brogue', 'monk strap', 'chelsea boot', 'bota masculina', 'bota feminina', 'coturno', 'bota cano curto', 'bota cano longo', 'over the knee', 'ankle boot', 'bota montaria', 'bota cowboy', 'bota country', 'sandalia masculina', 'sandália masculina', 'sandalia feminina', 'sandália feminina', 'chinelo', 'havaianas', 'ipanema', 'rider', 'kenner', 'cartago', 'chinelo slide', 'slide', 'birkenstock', 'crocs', 'tamanco', 'rasteirinha', 'sandalia salto', 'sandália salto', 'salto alto', 'salto baixo', 'salto medio', 'salto médio', 'salto bloco', 'salto fino', 'stiletto', 'scarpin', 'peep toe', 'mule', 'sapatilha', 'bailarina', 'alpargata', 'espadrille', 'flatform', 'plataforma', 'anabela'],

        // Eletrônicos expandidos
        eletronicosCompletos: ['celular', 'smartphone', 'iphone', 'iphone 15', 'iphone 14', 'iphone 13', 'iphone 12', 'iphone 11', 'iphone se', 'iphone pro', 'iphone pro max', 'samsung', 'samsung galaxy', 'galaxy s', 'galaxy a', 'galaxy m', 'galaxy z', 'galaxy fold', 'galaxy flip', 'motorola', 'moto g', 'moto e', 'moto edge', 'xiaomi', 'redmi', 'poco', 'mi', 'realme', 'oppo', 'vivo', 'oneplus', 'huawei', 'honor', 'asus', 'asus rog', 'rog phone', 'google pixel', 'pixel', 'nokia', 'lg', 'sony xperia', 'tcl', 'alcatel', 'positivo', 'multilaser', 'tablet', 'ipad', 'ipad pro', 'ipad air', 'ipad mini', 'tablet samsung', 'galaxy tab', 'tablet lenovo', 'tablet amazon', 'fire tablet', 'kindle', 'kindle paperwhite', 'e-reader', 'leitor digital', 'notebook', 'laptop', 'macbook', 'macbook pro', 'macbook air', 'imac', 'mac mini', 'mac studio', 'mac pro', 'notebook dell', 'dell inspiron', 'dell xps', 'dell alienware', 'alienware', 'notebook hp', 'hp pavilion', 'hp envy', 'hp omen', 'hp victus', 'notebook lenovo', 'lenovo ideapad', 'lenovo thinkpad', 'thinkpad', 'lenovo legion', 'legion', 'notebook acer', 'acer aspire', 'acer nitro', 'acer predator', 'predator', 'notebook asus', 'asus vivobook', 'asus zenbook', 'asus tuf', 'tuf gaming', 'asus rog', 'notebook samsung', 'samsung book', 'notebook positivo', 'notebook multilaser', 'chromebook', 'ultrabook', 'notebook gamer', 'pc gamer', 'computador gamer', 'desktop', 'pc desktop', 'all in one', 'aio', 'mini pc', 'workstation'],

        // Eletrodomésticos
        eletrodomesticos: ['geladeira', 'refrigerador', 'freezer', 'geladeira frost free', 'geladeira duplex', 'geladeira inverse', 'geladeira side by side', 'geladeira french door', 'frigobar', 'adega', 'climatizador de vinho', 'fogao', 'fogão', 'fogao 4 bocas', 'fogão 4 bocas', 'fogao 5 bocas', 'fogão 5 bocas', 'fogao 6 bocas', 'fogão 6 bocas', 'fogao industrial', 'fogão industrial', 'cooktop', 'cooktop gas', 'cooktop gás', 'cooktop eletrico', 'cooktop elétrico', 'cooktop inducao', 'cooktop indução', 'forno', 'forno eletrico', 'forno elétrico', 'forno embutir', 'forno de embutir', 'forno a gas', 'forno a gás', 'forno combinado', 'forno micro ondas', 'microondas', 'micro ondas', 'microondas embutir', 'air fryer', 'airfryer', 'fritadeira', 'fritadeira eletrica', 'fritadeira elétrica', 'fritadeira sem oleo', 'fritadeira sem óleo', 'panela eletrica', 'panela elétrica', 'panela de pressao', 'panela de pressão', 'panela de pressao eletrica', 'panela de pressão elétrica', 'multicooker', 'slow cooker', 'rice cooker', 'panela de arroz', 'lava loucas', 'lava louças', 'maquina de lavar louca', 'máquina de lavar louça', 'lavadora de loucas', 'lavadora de louças', 'lava e seca', 'lava e seca roupa', 'lavadora', 'lavadora de roupas', 'maquina de lavar', 'máquina de lavar', 'maquina de lavar roupa', 'máquina de lavar roupa', 'secadora', 'secadora de roupas', 'centrifuga', 'centrífuga', 'tanquinho', 'tanque de lavar', 'aspirador', 'aspirador de po', 'aspirador de pó', 'aspirador robo', 'aspirador robô', 'robo aspirador', 'robô aspirador', 'roomba', 'ilife', 'xiaomi aspirador', 'aspirador vertical', 'aspirador portatil', 'aspirador portátil', 'aspirador agua e po', 'aspirador água e pó', 'vaporizador', 'mop', 'mop spray', 'esfregao', 'esfregão', 'vassoura eletrica', 'vassoura elétrica', 'ventilador', 'ventilador de teto', 'ventilador de mesa', 'ventilador de coluna', 'ventilador de parede', 'circulador de ar', 'climatizador', 'climatizador de ar', 'ar condicionado', 'ar condicionado split', 'ar condicionado portatil', 'ar condicionado portátil', 'ar condicionado inverter', 'ar condicionado janela', 'aquecedor', 'aquecedor eletrico', 'aquecedor elétrico', 'aquecedor a gas', 'aquecedor a gás', 'aquecedor de ambiente', 'lareira', 'lareira eletrica', 'lareira elétrica', 'umidificador', 'desumidificador', 'purificador de ar', 'ozonizador'],

        // Casa e decoração
        casaDecoracao: ['sofa', 'sofá', 'sofa 2 lugares', 'sofá 2 lugares', 'sofa 3 lugares', 'sofá 3 lugares', 'sofa 4 lugares', 'sofá 4 lugares', 'sofa canto', 'sofá canto', 'sofa em l', 'sofá em l', 'sofa retratil', 'sofá retrátil', 'sofa reclinavel', 'sofá reclinável', 'sofa cama', 'sofá cama', 'puff', 'pufe', 'poltrona', 'poltrona decorativa', 'poltrona de amamentacao', 'poltrona de amamentação', 'cadeira', 'cadeira escritorio', 'cadeira escritório', 'cadeira gamer', 'cadeira ergonomica', 'cadeira ergonômica', 'cadeira giratoria', 'cadeira giratória', 'cadeira de jantar', 'cadeira de cozinha', 'banco', 'banqueta', 'banco bar', 'banqueta cozinha', 'mesa', 'mesa de jantar', 'mesa de centro', 'mesa lateral', 'mesa de canto', 'mesa de apoio', 'mesa de cabeceira', 'criado mudo', 'rack', 'rack tv', 'painel tv', 'painel para tv', 'estante', 'estante de livros', 'prateleira', 'nicho', 'armario', 'armário', 'guarda roupa', 'guarda-roupa', 'closet', 'arara', 'cabideiro', 'sapateira', 'comoda', 'cômoda', 'penteadeira', 'escrivaninha', 'mesa escritorio', 'mesa escritório', 'home office', 'cama', 'cama casal', 'cama solteiro', 'cama queen', 'cama king', 'cama box', 'base box', 'box baú', 'box bau', 'bicama', 'beliche', 'treliche', 'berco', 'berço', 'mini cama', 'colchao', 'colchão', 'colchao mola', 'colchão mola', 'colchao espuma', 'colchão espuma', 'colchao latex', 'colchão látex', 'colchao ortopedico', 'colchão ortopédico', 'travesseiro', 'almofada', 'lencol', 'lençol', 'jogo de cama', 'roupa de cama', 'edredom', 'cobertor', 'manta', 'colcha', 'cortina', 'persiana', 'blackout', 'cortina blackout', 'tapete', 'capacho', 'passadeira', 'toalha', 'toalha de banho', 'toalha de rosto', 'jogo de toalhas', 'roupao', 'roupão', 'espelho', 'espelho decorativo', 'espelho grande', 'espelho corpo inteiro', 'quadro', 'quadro decorativo', 'poster', 'moldura', 'relogio de parede', 'relógio de parede', 'vaso', 'vaso decorativo', 'vaso de planta', 'cachepot', 'planta artificial', 'arranjo flores', 'arranjo artificial', 'luminaria', 'luminária', 'abajur', 'pendente', 'lustre', 'plafon', 'spot', 'fita led', 'led', 'lampada', 'lâmpada', 'lampada led', 'lâmpada led', 'lampada smart', 'lâmpada smart', 'smart home', 'casa inteligente', 'alexa', 'echo', 'google home', 'google nest', 'hub', 'tomada inteligente', 'interruptor inteligente'],

        // Marketplace e termos
        marketplacesTermos: ['comprar', 'compra', 'vender', 'venda', 'loja', 'loja online', 'loja virtual', 'e-commerce', 'ecommerce', 'marketplace', 'shopping', 'shopping online', 'shopping virtual', 'outlet', 'promocao', 'promoção', 'promo', 'desconto', 'oferta', 'liquidacao', 'liquidação', 'queima de estoque', 'black friday', 'black', 'cyber monday', 'prime day', 'cupom', 'cupom de desconto', 'codigo', 'código', 'codigo promocional', 'código promocional', 'voucher', 'vale', 'vale compras', 'cashback', 'pontos', 'programa de pontos', 'fidelidade', 'frete gratis', 'frete grátis', 'entrega gratis', 'entrega grátis', 'frete fixo', 'frete barato', 'entrega rapida', 'entrega rápida', 'entrega expressa', 'same day', 'no mesmo dia', 'next day', 'dia seguinte', 'correios', 'sedex', 'pac', 'jadlog', 'total express', 'azul cargo', 'transportadora', 'rastreio', 'rastreamento', 'tracking', 'onde esta meu pedido', 'onde está meu pedido', 'prazo de entrega', 'previsao de entrega', 'previsão de entrega', 'parcelamento', 'parcela', 'parcelas', 'em ate 12x', 'em até 12x', 'sem juros', 'com juros', 'cartao de credito', 'cartão de crédito', 'cartao', 'cartão', 'debito', 'débito', 'pix', 'boleto', 'boleto bancario', 'boleto bancário', 'transferencia', 'transferência', 'picpay', 'mercado pago', 'pagseguro', 'paypal', 'ame', 'nubank', 'inter', 'c6', 'garantia', 'garantia estendida', 'troca', 'devolucao', 'devolução', 'reembolso', 'estorno', 'arrependimento', 'cdc', 'codigo de defesa do consumidor', 'código de defesa do consumidor', 'procon', 'reclame aqui', 'avaliacao', 'avaliação', 'review', 'nota', 'estrelas', 'comentario', 'comentário', 'opiniao', 'opinião', 'recomendacao', 'recomendação']
    },

    // ================================
    // EXPANSÃO MEGA - SAÚDE & BELEZA (600+)
    // ================================
    saudeExpansao: {
        // Especialidades médicas completas
        especialidadesMedicas: ['clinico geral', 'clínico geral', 'clinica geral', 'clínica geral', 'medicina geral', 'generalista', 'cardiologista', 'cardio', 'cardiologia', 'coracao', 'coração', 'arritmia', 'infarto', 'eletrocardiograma', 'ecocardiograma', 'cateterismo', 'angioplastia', 'marca passo', 'marca-passo', 'dermatologista', 'dermato', 'dermatologia', 'pele', 'acne', 'espinha', 'manchas', 'melasma', 'vitiligo', 'psoríase', 'psoriase', 'eczema', 'dermatite', 'alergia de pele', 'botox', 'preenchimento', 'peeling', 'laser', 'depilação a laser', 'depilacao a laser', 'endocrinologista', 'endocrino', 'endocrinologia', 'hormonio', 'hormônio', 'tireoide', 'tiroide', 'diabetes', 'diabete', 'insulina', 'obesidade', 'sobrepeso', 'emagrecimento', 'metabolismo', 'gastroenterologista', 'gastro', 'gastroenterologia', 'estomago', 'estômago', 'intestino', 'figado', 'fígado', 'vesicula', 'vesícula', 'pancreas', 'pâncreas', 'endoscopia', 'colonoscopia', 'refluxo', 'gastrite', 'ulcera', 'úlcera', 'h pylori', 'ginecologista', 'gineco', 'ginecologia', 'obstetra', 'obstetricia', 'obstetrícia', 'gravidez', 'pre natal', 'pré-natal', 'parto', 'cesarea', 'cesárea', 'menstruacao', 'menstruação', 'menopausa', 'anticoncepcional', 'diu', 'papanicolau', 'mamografia', 'colposcopia', 'histeroscopia', 'laparoscopia', 'mioma', 'endometriose', 'ovario', 'ovário', 'cisto', 'neurologista', 'neuro', 'neurologia', 'cerebro', 'cérebro', 'cabeca', 'cabeça', 'dor de cabeca', 'dor de cabeça', 'enxaqueca', 'cefaleia', 'epilepsia', 'convulsao', 'convulsão', 'parkinson', 'alzheimer', 'demencia', 'demência', 'avc', 'derrame', 'neuropatia', 'formigamento', 'dormencia', 'dormência', 'oftalmologista', 'oftalmo', 'oftalmologia', 'olho', 'olhos', 'vista', 'visao', 'visão', 'oculos', 'óculos', 'lentes', 'lentes de contato', 'miopia', 'astigmatismo', 'hipermetropia', 'presbiopia', 'catarata', 'glaucoma', 'retina', 'conjuntivite', 'terçol', 'tercol', 'otorrinolaringologista', 'otorrino', 'otorrinolaringologia', 'ouvido', 'nariz', 'garganta', 'surdez', 'zumbido', 'tontura', 'labirintite', 'sinusite', 'rinite', 'desvio de septo', 'ronco', 'apneia', 'amigdala', 'amígdala', 'adenoide', 'ortopedista', 'orto', 'ortopedia', 'osso', 'ossos', 'articulacao', 'articulação', 'coluna', 'lombar', 'cervical', 'hernia de disco', 'hérnia de disco', 'joelho', 'ombro', 'quadril', 'pe', 'pé', 'mao', 'mão', 'tornozelo', 'cotovelo', 'fratura', 'luxacao', 'luxação', 'entorse', 'tendinite', 'bursite', 'artrite', 'artrose', 'osteoporose', 'escoliose', 'lordose', 'cifose', 'pediatra', 'pediátrico', 'pediatrico', 'pediatria', 'bebe', 'bebê', 'crianca', 'criança', 'infancia', 'infância', 'vacina', 'vacinacao', 'vacinação', 'calendario vacinal', 'calendário vacinal', 'crescimento', 'desenvolvimento', 'amamentacao', 'amamentação', 'psiquiatra', 'psiquiatria', 'saude mental', 'saúde mental', 'depressao', 'depressão', 'ansiedade', 'panico', 'pânico', 'fobia', 'toc', 'bipolar', 'esquizofrenia', 'tdah', 'deficit de atencao', 'déficit de atenção', 'hiperatividade', 'insonia', 'insônia', 'medicamento controlado', 'receita azul', 'receita amarela', 'urologista', 'uro', 'urologia', 'rim', 'rins', 'bexiga', 'prostata', 'próstata', 'psa', 'calculo renal', 'cálculo renal', 'pedra no rim', 'infeccao urinaria', 'infecção urinária', 'incontinencia', 'incontinência', 'disfuncao eretil', 'disfunção erétil', 'impotencia', 'impotência', 'vasectomia', 'pneumologista', 'pneumo', 'pneumologia', 'pulmao', 'pulmão', 'respiratorio', 'respiratório', 'tosse', 'falta de ar', 'dispneia', 'asma', 'bronquite', 'pneumonia', 'tuberculose', 'covid', 'coronavirus', 'coronavírus', 'gripe', 'resfriado', 'reumatologista', 'reumato', 'reumatologia', 'reumatismo', 'lupus', 'lúpus', 'fibromialgia', 'gota', 'angiologista', 'vascular', 'cirurgiao vascular', 'cirurgião vascular', 'varizes', 'vasos', 'trombose', 'embolia', 'aneurisma'],

        // Tratamentos estéticos
        estetica: ['estetica', 'estética', 'esteticista', 'clinica de estetica', 'clínica de estética', 'centro de estetica', 'centro de estética', 'procedimento estetico', 'procedimento estético', 'botox', 'toxina botulinica', 'toxina botulínica', 'botulínica', 'botulinica', 'preenchimento', 'acido hialuronico', 'ácido hialurônico', 'bioestimulador', 'sculptra', 'radiesse', 'fios de pdo', 'fios de sustentacao', 'fios de sustentação', 'harmonizacao facial', 'harmonização facial', 'harmonizacao', 'harmonização', 'bichectomia', 'lipo de papada', 'lipoenzimática', 'lipoenzimatica', 'enzimas', 'deoxicolico', 'deoxicólico', 'criolipolise', 'criolipólise', 'coolsculpting', 'lipoaspiração', 'lipoaspiracao', 'lipo', 'abdominoplastia', 'plástica de barriga', 'plastica de barriga', 'rinoplastia', 'plástica de nariz', 'plastica de nariz', 'blefaroplastia', 'plástica de pálpebra', 'plastica de palpebra', 'lifting', 'lifting facial', 'ritidoplastia', 'mamoplastia', 'silicone', 'prótese de mama', 'protese de mama', 'implante', 'reducao de mama', 'redução de mama', 'mastopexia', 'gluteoplastia', 'protese gluteo', 'prótese glúteo', 'lipo lad', 'definicao abdominal', 'definição abdominal', 'tanquinho', 'peeling', 'peeling quimico', 'peeling químico', 'peeling de fenol', 'microagulhamento', 'dermapen', 'laser co2', 'laser fracionado', 'ipl', 'luz intensa pulsada', 'radiofrequencia', 'radiofrequência', 'ultrassom microfocado', 'ultraformer', 'focalizada', 'carboxiterapia', 'intradermoterapia', 'mesoterapia', 'skinbooster', 'profhilo', 'limpeza de pele', 'extração', 'extracao', 'hidratação facial', 'hidratacao facial', 'mascara facial', 'máscara facial', 'peeling de diamante', 'microdermoabrasao', 'microdermoabrasão', 'jato de plasma', 'jato plasma', 'drenagem linfatica', 'drenagem linfática', 'drenagem', 'massagem modeladora', 'massagem redutora', 'manthus', 'heccus', 'lipocavitacao', 'lipocavitação', 'ultracavitacao', 'ultracavitação', 'corrente russa', 'eletroestimulacao', 'eletroestimulação', 'endermologia', 'bambuterapia', 'pedras quentes', 'ventosaterapia', 'ventosa', 'depilação', 'depilacao', 'cera', 'cera quente', 'cera fria', 'roll on', 'linha', 'depilação a laser', 'depilacao a laser', 'laser diodo', 'alexandrite', 'nd yag', 'fotodepilacao', 'fotodepilação', 'luz pulsada', 'eletrólise', 'eletrolise', 'depilação definitiva', 'depilacao definitiva'],

        // Psicologia e terapias
        psicologia: ['psicologo', 'psicóloga', 'psicologa', 'psicólogo', 'psicologia', 'psicoterapia', 'terapia', 'terapeuta', 'atendimento psicologico', 'atendimento psicológico', 'consulta psicologica', 'consulta psicológica', 'sessao de terapia', 'sessão de terapia', 'terapia online', 'terapia presencial', 'terapia individual', 'terapia de casal', 'terapia familiar', 'terapia em grupo', 'grupo terapeutico', 'grupo terapêutico', 'terapia cognitivo comportamental', 'tcc', 'psicanálise', 'psicanalise', 'psicanalista', 'gestalt', 'humanista', 'sistemica', 'sistêmica', 'comportamental', 'analise do comportamento', 'análise do comportamento', 'aba', 'neuropsicologia', 'neuropsicologo', 'neuropsicóloga', 'avaliacao neuropsicologica', 'avaliação neuropsicológica', 'teste psicologico', 'teste psicológico', 'psicodiagnóstico', 'psicodiagnostico', 'orientacao profissional', 'orientação profissional', 'coaching', 'coach', 'mentoria', 'desenvolvimento pessoal', 'autoconhecimento', 'autoestima', 'inteligencia emocional', 'inteligência emocional', 'mindfulness', 'meditacao', 'meditação', 'atencao plena', 'atenção plena', 'relaxamento', 'hipnose', 'hipnoterapia', 'emdr', 'dessensibilização', 'dessensibilizacao', 'trauma', 'stress', 'estresse', 'burnout', 'sindrome de burnout', 'síndrome de burnout', 'esgotamento', 'ansiedade', 'transtorno de ansiedade', 'tag', 'ansiedade generalizada', 'fobia', 'fobia social', 'agorafobia', 'claustrofobia', 'pânico', 'panico', 'sindrome do panico', 'síndrome do pânico', 'ataque de panico', 'ataque de pânico', 'depressao', 'depressão', 'tristeza', 'luto', 'perda', 'separacao', 'separação', 'divorcio', 'divórcio', 'relacionamento', 'conflito', 'comunicacao', 'comunicação', 'assertividade', 'raiva', 'controle emocional', 'regulacao emocional', 'regulação emocional', 'compulsao', 'compulsão', 'vicio', 'vício', 'dependencia', 'dependência', 'alcoolismo', 'drogas', 'tabagismo', 'jogo', 'compras', 'comida', 'transtorno alimentar', 'anorexia', 'bulimia', 'compulsao alimentar', 'compulsão alimentar', 'obesidade emocional', 'comer emocional'],

        // Odontologia
        odontologia: ['dentista', 'odontologista', 'odontologia', 'consultorio odontologico', 'consultório odontológico', 'clinica odontologica', 'clínica odontológica', 'dente', 'dentes', 'boca', 'sorriso', 'limpeza dental', 'profilaxia', 'raspagem', 'tartaro', 'tártaro', 'placa bacteriana', 'gengivite', 'periodontite', 'doenca periodontal', 'doença periodontal', 'periodontia', 'periodontista', 'gengiva', 'sangramento gengival', 'retração gengival', 'retracao gengival', 'enxerto de gengiva', 'carie', 'cárie', 'restauracao', 'restauração', 'obturacao', 'obturação', 'amalgama', 'resina', 'porcelana', 'ceramica', 'cerâmica', 'canal', 'tratamento de canal', 'endodontia', 'endodontista', 'desvitalização', 'desvitalizacao', 'extracao', 'extração', 'arrancar dente', 'dente do siso', 'siso', 'terceiro molar', 'dente incluso', 'cirurgia oral', 'cirurgiao dentista', 'cirurgião dentista', 'buco maxilo', 'bucomaxilo', 'maxilofacial', 'implante', 'implante dentario', 'implante dentário', 'implantodontia', 'implantodontista', 'protese', 'prótese', 'protese dentaria', 'prótese dentária', 'dentadura', 'ponte', 'ponte fixa', 'coroa', 'faceta', 'lente de contato dental', 'lente dental', 'clareamento', 'clareamento dental', 'branqueamento', 'dentes brancos', 'gel clareador', 'moldeira', 'clareamento a laser', 'ortodontia', 'ortodontista', 'aparelho', 'aparelho ortodontico', 'aparelho ortodôntico', 'aparelho fixo', 'aparelho movel', 'aparelho móvel', 'aparelho transparente', 'invisalign', 'alinhador', 'alinhador invisivel', 'alinhador invisível', 'bracket', 'braquete', 'fio ortodontico', 'fio ortodôntico', 'elástico', 'elastico', 'contenção', 'contencao', 'mordida', 'oclusão', 'oclusao', 'má oclusão', 'ma oclusao', 'dentes tortos', 'diastema', 'espacamento', 'espaçamento', 'apinhamento', 'dentes encavalados', 'sobremordida', 'prognatismo', 'odontopediatria', 'odontopediatra', 'dentista infantil', 'dentista para criança', 'dentista para crianca', 'fluor', 'flúor', 'selante', 'dente de leite', 'troca de dente', 'odontogeriatria', 'idoso', 'dentista para idoso']
    },

    // ================================
    // EXPANSÃO MEGA - SERVIÇOS PROFISSIONAIS (500+)
    // ================================
    servicosExpansao: {
        // Beleza e estética pessoal
        belezaPessoal: ['salao', 'salão', 'salao de beleza', 'salão de beleza', 'beauty', 'beauty salon', 'cabeleireiro', 'cabeleireira', 'hair stylist', 'hairstylist', 'hair designer', 'cabelo', 'corte', 'corte de cabelo', 'corte feminino', 'corte masculino', 'corte infantil', 'corte degradê', 'corte degrade', 'fade', 'low fade', 'mid fade', 'high fade', 'undercut', 'pompadour', 'man bun', 'coque', 'rabo de cavalo', 'trança', 'tranca', 'tranças', 'trancas', 'box braids', 'twist', 'dread', 'dreadlock', 'dreads', 'mega hair', 'mega', 'alongamento de cabelo', 'aplique', 'peruca', 'wig', 'lace', 'front lace', 'full lace', 'escova', 'escova progressiva', 'progressiva', 'alisamento', 'relaxamento', 'permanente', 'ondulado', 'cachos', 'cacho', 'cacheado', 'crespo', 'liso', 'chapinha', 'prancha', 'baby liss', 'babyliss', 'modelador', 'hidratação', 'hidratacao', 'nutrição', 'nutricao', 'reconstrução', 'reconstrucao', 'tratamento capilar', 'cronograma capilar', 'botox capilar', 'velaterapia', 'cauterização', 'cauterizacao', 'selagem', 'nanoplastia', 'coloração', 'coloracao', 'tintura', 'tinta', 'retoque de raiz', 'cobertura de brancos', 'mechas', 'luzes', 'highlights', 'lowlights', 'balayage', 'ombré', 'ombre', 'morena iluminada', 'californiana', 'platinado', 'descoloração', 'descoloracao', 'decapagem', 'tonalizante', 'matizador', 'banho de brilho', 'reflexo', 'manicure', 'manicura', 'unha', 'unhas', 'nail', 'nails', 'nail designer', 'pedicure', 'pedicura', 'cutícula', 'cuticula', 'esmaltação', 'esmaltacao', 'esmalte', 'francesinha', 'inglesinha', 'filha única', 'filha unica', 'nail art', 'decoração de unha', 'decoracao de unha', 'adesivo de unha', 'carimbo', 'película', 'pelicula', 'gel', 'unha de gel', 'unhas de gel', 'fibra de vidro', 'fibra', 'acrigel', 'acrílico', 'acrilico', 'porcelana', 'alongamento de unha', 'unha postiça', 'unha postica', 'tips', 'molde', 'cabine', 'led', 'uv'],

        // Barbearia
        barbearia: ['barbearia', 'barber', 'barber shop', 'barbeiro', 'barbershop', 'barba', 'bigode', 'cavanhaque', 'pelos faciais', 'navalha', 'navalhete', 'gilete', 'lamina', 'lâmina', 'maquina', 'máquina', 'maquina de corte', 'máquina de corte', 'clipper', 'trimmer', 'acabamento', 'pezinho', 'contorno', 'sobrancelha masculina', 'design de sobrancelha masculino', 'depilação facial', 'depilacao facial', 'cera quente', 'linha', 'toalha quente', 'pós barba', 'pos barba', 'after shave', 'loção', 'locao', 'óleo para barba', 'oleo para barba', 'balm', 'pomada', 'cera', 'gel', 'spray', 'shampoo para barba', 'condicionador para barba', 'pente', 'escova para barba', 'hot towel', 'relaxamento de barba', 'progressiva de barba', 'tintura de barba', 'barba cerrada', 'barba rala', 'falhas na barba', 'minoxidil', 'crescimento de barba'],

        // Pet shop e veterinária
        petCompleto: ['pet shop', 'petshop', 'pet', 'loja de pet', 'loja pet', 'loja de animais', 'loja de bichos', 'veterinario', 'veterinária', 'veterinário', 'vet', 'clinica veterinaria', 'clínica veterinária', 'hospital veterinario', 'hospital veterinário', 'consultorio veterinario', 'consultório veterinário', 'animal', 'animais', 'bicho', 'bichos', 'cachorro', 'cão', 'cao', 'dog', 'canino', 'cadela', 'filhote', 'filhote de cachorro', 'puppy', 'gato', 'gata', 'felino', 'cat', 'gatinho', 'kitten', 'filhote de gato', 'hamster', 'porquinho da india', 'porquinho da índia', 'guinea pig', 'coelho', 'bunny', 'rabbit', 'chinchila', 'furão', 'furao', 'ferret', 'rato', 'camundongo', 'gerbil', 'esquilo', 'passaro', 'pássaro', 'ave', 'aves', 'bird', 'papagaio', 'periquito', 'calopsita', 'canario', 'canário', 'agapornis', 'cacatua', 'arara', 'pomba', 'peixe', 'fish', 'aquario', 'aquário', 'aquarismo', 'peixe ornamental', 'betta', 'kinguio', 'koi', 'neon', 'guppy', 'oscar', 'acara', 'disco', 'tartaruga', 'jabuti', 'cagado', 'cágado', 'iguana', 'lagarto', 'cobra', 'serpente', 'gecko', 'leopard gecko', 'banho e tosa', 'banho', 'tosa', 'tosa higienica', 'tosa higiênica', 'tosa na tesoura', 'tosa na maquina', 'tosa na máquina', 'grooming', 'pet grooming', 'groomer', 'tosador', 'banhista', 'secagem', 'escovação', 'escovacao', 'desembaraçar', 'desembaracar', 'hidratação pet', 'hidratacao pet', 'spa pet', 'dia de spa', 'ozônio', 'ozonio', 'terapia', 'hotel pet', 'hotel para cachorro', 'hotel para gato', 'hospedagem pet', 'hospedagem de animais', 'creche pet', 'creche para cachorro', 'daycare', 'day care', 'pensão', 'pensao', 'adestramento', 'adestrador', 'treinamento', 'treinador', 'comportamento animal', 'comportamentalista', 'dog walker', 'passeador', 'passeio', 'passeio com cachorro', 'taxi pet', 'táxi pet', 'transporte pet', 'transporte de animais', 'racao', 'ração', 'pet food', 'comida de cachorro', 'comida de gato', 'ração premium', 'ração super premium', 'ração natural', 'alimentação natural', 'alimentacao natural', 'an', 'barf', 'comida caseira', 'petisco', 'snack', 'biscoito', 'osso', 'brinquedo pet', 'brinquedo para cachorro', 'brinquedo para gato', 'bolinha', 'mordedor', 'corda', 'pelúcia', 'pelucia', 'arranhador', 'poste', 'torre para gato', 'cama pet', 'caminha', 'colchão pet', 'colchao pet', 'casinha', 'toca', 'iglu', 'coleira', 'guia', 'peitoral', 'enforcador', 'halti', 'focinheira', 'roupa pet', 'roupa de cachorro', 'fantasia pet', 'laço', 'laco', 'gravata', 'bandana'],

        // Automotivo completo
        automotivoCompleto: ['oficina', 'oficina mecanica', 'oficina mecânica', 'mecanico', 'mecânico', 'mecanica', 'mecânica', 'auto center', 'autocenter', 'centro automotivo', 'garagem', 'reparos', 'conserto', 'manutenção', 'manutencao', 'revisao', 'revisão', 'check up', 'checkup', 'diagnostico', 'diagnóstico', 'scanner', 'injeção eletronica', 'injecao eletronica', 'motor', 'cabeçote', 'cabecote', 'junta', 'retifica', 'retífica', 'retifica de motor', 'cambio', 'câmbio', 'transmissao', 'transmissão', 'embreagem', 'diferencial', 'cardã', 'cardan', 'eixo', 'semi eixo', 'suspensao', 'suspensão', 'amortecedor', 'mola', 'batente', 'coifa', 'pivô', 'pivo', 'bandeja', 'barra estabilizadora', 'barra de torção', 'barra de torcao', 'terminal', 'freio', 'disco de freio', 'pastilha', 'lona', 'tambor', 'flexivel', 'flexível', 'fluido de freio', 'sangria', 'abs', 'direção', 'direcao', 'direcao hidraulica', 'direção hidráulica', 'direcao eletrica', 'direção elétrica', 'caixa de direcao', 'caixa de direção', 'bomba', 'cremalheira', 'coluna de direcao', 'coluna de direção', 'pneu', 'pneus', 'calibragem', 'balanceamento', 'alinhamento', 'geometria', 'rodízio', 'rodizio', 'rodas', 'roda', 'aro', 'calota', 'borracharia', 'borracheiro', 'vulcanização', 'vulcanizacao', 'remendo', 'eletrica', 'elétrica', 'eletrica automotiva', 'elétrica automotiva', 'eletricista automotivo', 'bateria', 'alternador', 'motor de arranque', 'partida', 'vela', 'cabo de vela', 'bobina', 'sensor', 'fusível', 'fusivel', 'relé', 'rele', 'farol', 'lanterna', 'lampada', 'lâmpada', 'led', 'xenon', 'bi xenon', 'super branca', 'insulfilm', 'insul film', 'pelicula', 'película', 'fumê', 'fume', 'ar condicionado', 'ar', 'higienização', 'higienizacao', 'filtro de ar', 'filtro de cabine', 'filtro de polen', 'filtro de pólen', 'carga de gas', 'carga de gás', 'regas', 'compressor', 'condensador', 'evaporador', 'funilaria', 'funileiro', 'lanternagem', 'lanterneiro', 'lataria', 'latoaria', 'chapeação', 'chapeacao', 'pintura', 'pintor', 'pintura automotiva', 'polimento', 'cristalização', 'cristalizacao', 'vitrificação', 'vitrificacao', 'enceramento', 'cera', 'lava rapido', 'lava rápido', 'lava jato', 'lavagem', 'lavagem simples', 'lavagem completa', 'lavagem de motor', 'lavagem de chassi', 'higienização interna', 'higienizacao interna', 'limpeza de estofado', 'limpeza de banco', 'impermeabilização', 'impermeabilizacao', 'estacionamento', 'valet', 'manobrista', 'guincho', 'reboque', 'socorro', 'socorro mecanico', 'socorro mecânico', 'assistência 24h', 'assistencia 24h']
    },

    // ================================
    // EXPANSÃO MEGA - EDUCAÇÃO (400+)
    // ================================
    educacaoExpansao: {
        // Cursos profissionalizantes
        cursosProfissionalizantes: ['curso profissionalizante', 'curso tecnico', 'curso técnico', 'formacao profissional', 'formação profissional', 'qualificacao', 'qualificação', 'capacitacao', 'capacitação', 'reciclagem', 'atualizacao', 'atualização', 'aperfeicoamento', 'aperfeiçoamento', 'especializacao', 'especialização', 'administração', 'administracao', 'secretariado', 'assistente administrativo', 'auxiliar administrativo', 'recepcionista', 'telefonista', 'atendente', 'operador de caixa', 'operador de telemarketing', 'call center', 'sac', 'vendedor', 'vendas', 'tecnicas de vendas', 'técnicas de vendas', 'negociação', 'negociacao', 'prospecção', 'prospeccao', 'fechamento', 'pós venda', 'pos venda', 'marketing', 'marketing digital', 'social media', 'gestor de tráfego', 'gestor de trafego', 'trafego pago', 'tráfego pago', 'google ads', 'facebook ads', 'instagram ads', 'seo', 'copywriting', 'copy', 'redação', 'redacao', 'conteúdo', 'conteudo', 'design gráfico', 'design grafico', 'designer', 'photoshop', 'illustrator', 'corel draw', 'coreldraw', 'canva', 'figma', 'ui', 'ux', 'ui/ux', 'web design', 'webdesign', 'programação', 'programacao', 'desenvolvimento', 'dev', 'desenvolvedor', 'developer', 'frontend', 'front end', 'front-end', 'backend', 'back end', 'back-end', 'fullstack', 'full stack', 'html', 'css', 'javascript', 'js', 'react', 'angular', 'vue', 'node', 'nodejs', 'python', 'java', 'php', 'c#', 'c sharp', '.net', 'dotnet', 'ruby', 'go', 'golang', 'swift', 'kotlin', 'flutter', 'react native', 'mobile', 'app', 'aplicativo', 'banco de dados', 'database', 'sql', 'mysql', 'postgresql', 'mongodb', 'excel', 'planilhas', 'power bi', 'powerbi', 'tableau', 'data science', 'ciência de dados', 'ciencia de dados', 'analise de dados', 'análise de dados', 'big data', 'machine learning', 'inteligência artificial', 'inteligencia artificial', 'ia', 'ai', 'deep learning', 'redes neurais', 'contabilidade', 'contador', 'auxiliar contabil', 'auxiliar contábil', 'departamento pessoal', 'dp', 'rh', 'recursos humanos', 'folha de pagamento', 'rescisao', 'rescisão', 'ferias', 'férias', '13o', 'décimo terceiro', 'decimo terceiro', 'fgts', 'inss', 'imposto de renda', 'irpf', 'irpj', 'nota fiscal', 'nf', 'nfe', 'nf-e', 'sped', 'eSocial', 'esocial', 'dctf', 'logistica', 'logística', 'estoque', 'almoxarife', 'almoxarifado', 'compras', 'suprimentos', 'supply chain', 'importação', 'importacao', 'exportação', 'exportacao', 'comex', 'comercio exterior', 'comércio exterior', 'despachante aduaneiro', 'câmbio', 'cambio'],

        // Idiomas expandido
        idiomasExpandido: ['curso de ingles', 'curso de inglês', 'ingles', 'inglês', 'english', 'english course', 'aula de ingles', 'aula de inglês', 'professor de ingles', 'professor de inglês', 'ingles basico', 'inglês básico', 'ingles intermediario', 'inglês intermediário', 'ingles avancado', 'inglês avançado', 'ingles fluente', 'inglês fluente', 'fluencia', 'fluência', 'conversacao', 'conversação', 'conversation', 'speaking', 'listening', 'reading', 'writing', 'gramatica', 'gramática', 'grammar', 'vocabulario', 'vocabulário', 'vocabulary', 'pronuncia', 'pronúncia', 'pronunciation', 'sotaque', 'accent', 'americano', 'britanico', 'britânico', 'australian', 'canadian', 'ingles para negocios', 'inglês para negócios', 'business english', 'ingles tecnico', 'inglês técnico', 'ingles para viagem', 'inglês para viagem', 'travel english', 'toefl', 'ielts', 'cambridge', 'toeic', 'curso de espanhol', 'espanhol', 'spanish', 'español', 'castellano', 'espanol basico', 'espanhol básico', 'espanhol intermediario', 'espanhol intermediário', 'espanhol avancado', 'espanhol avançado', 'dele', 'espanhol para negocios', 'espanhol para negócios', 'curso de frances', 'curso de francês', 'frances', 'francês', 'french', 'français', 'delf', 'dalf', 'curso de alemao', 'curso de alemão', 'alemao', 'alemão', 'german', 'deutsch', 'goethe', 'curso de italiano', 'italiano', 'italian', 'curso de japones', 'curso de japonês', 'japones', 'japonês', 'japanese', 'nihongo', 'jlpt', 'hiragana', 'katakana', 'kanji', 'curso de chines', 'curso de chinês', 'chines', 'chinês', 'chinese', 'mandarin', 'mandarim', 'hsk', 'hanzi', 'pinyin', 'curso de coreano', 'coreano', 'korean', 'hangul', 'topik', 'kpop', 'curso de russo', 'russo', 'russian', 'curso de arabe', 'curso de árabe', 'arabe', 'árabe', 'arabic', 'curso de portugues', 'curso de português', 'portugues para estrangeiros', 'português para estrangeiros', 'portuguese', 'celpe bras', 'libras', 'lingua de sinais', 'língua de sinais', 'linguagem de sinais', 'surdo', 'inclusão', 'inclusao', 'acessibilidade'],

        // Preparatório e reforço
        preparatorio: ['vestibular', 'vest', 'enem', 'exame nacional', 'fuvest', 'unicamp', 'vunesp', 'unesp', 'comvest', 'fgv', 'puc', 'unip', 'mackenzie', 'anhembi', 'uninove', 'cursinho', 'pre vestibular', 'pré-vestibular', 'intensivo', 'extensivo', 'semi extensivo', 'semiextensivo', 'revisao', 'revisão', 'simulado', 'redacao', 'redação', 'dissertação', 'dissertacao', 'argumentativa', 'tese', 'argumento', 'coesao', 'coesão', 'coerencia', 'coerência', 'nota 1000', 'reforço', 'reforco', 'reforço escolar', 'reforco escolar', 'aula particular', 'aulas particulares', 'explicador', 'explicadora', 'monitor', 'monitoria', 'plantao de duvidas', 'plantão de dúvidas', 'tutoria', 'tutor', 'matematica', 'matemática', 'math', 'aritmetica', 'aritmética', 'algebra', 'álgebra', 'geometria', 'trigonometria', 'calculo', 'cálculo', 'estatistica', 'estatística', 'probabilidade', 'fisica', 'física', 'physics', 'mecanica', 'mecânica', 'termodinamica', 'termodinâmica', 'optica', 'óptica', 'eletricidade', 'magnetismo', 'eletromagnetismo', 'ondas', 'quimica', 'química', 'chemistry', 'quimica organica', 'química orgânica', 'quimica inorganica', 'química inorgânica', 'fisico quimica', 'físico-química', 'estequiometria', 'biologia', 'biology', 'botanica', 'botânica', 'zoologia', 'genetica', 'genética', 'citologia', 'ecologia', 'evolucao', 'evolução', 'fisiologia', 'anatomia', 'historia', 'história', 'history', 'historia do brasil', 'história do brasil', 'historia geral', 'história geral', 'antiguidade', 'idade media', 'idade média', 'moderna', 'contemporanea', 'contemporânea', 'geografia', 'geography', 'geopolitica', 'geopolítica', 'cartografia', 'climatologia', 'hidrografia', 'portugues', 'português', 'portuguese', 'gramatica', 'gramática', 'literatura', 'interpretacao de texto', 'interpretação de texto', 'filosofia', 'philosophy', 'sociologia', 'sociology', 'atualidades', 'geopolitica', 'geopolítica', 'politica', 'política', 'economia']
    },

    // ================================
    // EXPANSÃO MEGA - TECNOLOGIA (500+)
    // ================================
    tecnologiaExpansao: {
        // Desenvolvimento completo
        desenvolvimentoCompleto: ['programador', 'programadora', 'desenvolvedor', 'desenvolvedora', 'developer', 'dev', 'coder', 'software', 'sistema', 'sistemas', 'aplicação', 'aplicacao', 'aplicativo', 'app', 'mobile', 'web', 'desktop', 'frontend', 'front end', 'front-end', 'backend', 'back end', 'back-end', 'fullstack', 'full stack', 'full-stack', 'devops', 'sre', 'site reliability', 'mlops', 'dataops', 'gitops', 'devsecops', 'html', 'html5', 'css', 'css3', 'sass', 'scss', 'less', 'tailwind', 'tailwindcss', 'bootstrap', 'bulma', 'materialize', 'semantic ui', 'foundation', 'javascript', 'js', 'ecmascript', 'es6', 'es7', 'typescript', 'ts', 'react', 'reactjs', 'react.js', 'react native', 'next', 'nextjs', 'next.js', 'gatsby', 'remix', 'angular', 'angularjs', 'vue', 'vuejs', 'vue.js', 'nuxt', 'nuxtjs', 'svelte', 'sveltekit', 'solid', 'solidjs', 'qwik', 'astro', 'jquery', 'node', 'nodejs', 'node.js', 'express', 'expressjs', 'fastify', 'nest', 'nestjs', 'koa', 'hapi', 'deno', 'bun', 'python', 'django', 'flask', 'fastapi', 'pyramid', 'tornado', 'aiohttp', 'java', 'spring', 'spring boot', 'springboot', 'hibernate', 'quarkus', 'micronaut', 'kotlin', 'scala', 'groovy', 'clojure', 'php', 'laravel', 'symfony', 'codeigniter', 'yii', 'cakephp', 'wordpress', 'drupal', 'magento', 'prestashop', 'opencart', 'ruby', 'rails', 'ruby on rails', 'ror', 'sinatra', 'hanami', 'go', 'golang', 'gin', 'echo', 'fiber', 'rust', 'actix', 'rocket', 'axum', 'c', 'c++', 'cpp', 'c#', 'csharp', '.net', 'dotnet', 'asp.net', 'blazor', 'xamarin', 'maui', 'unity', 'unreal', 'swift', 'swiftui', 'objective-c', 'ios', 'iphone', 'ipad', 'watchos', 'tvos', 'flutter', 'dart', 'android', 'jetpack compose', 'compose', 'kotlin multiplatform', 'kmm', 'react native', 'expo', 'ionic', 'cordova', 'capacitor', 'nativescript', 'xamarin', 'electron', 'tauri', 'sql', 'mysql', 'mariadb', 'postgresql', 'postgres', 'sqlite', 'oracle', 'sqlserver', 'mssql', 'mongodb', 'mongoose', 'redis', 'memcached', 'elasticsearch', 'elastic', 'opensearch', 'solr', 'neo4j', 'cassandra', 'couchdb', 'dynamodb', 'firestore', 'firebase', 'supabase', 'planetscale', 'cockroachdb', 'timescaledb', 'influxdb', 'graphql', 'apollo', 'hasura', 'prisma', 'typeorm', 'sequelize', 'knex', 'drizzle', 'git', 'github', 'gitlab', 'bitbucket', 'azure devops', 'svn', 'mercurial', 'version control', 'controle de versao', 'controle de versão', 'docker', 'container', 'containerização', 'containerizacao', 'kubernetes', 'k8s', 'openshift', 'rancher', 'docker swarm', 'podman', 'aws', 'amazon web services', 'ec2', 's3', 'lambda', 'cloudfront', 'route53', 'rds', 'dynamodb', 'sqs', 'sns', 'kinesis', 'azure', 'microsoft azure', 'azure functions', 'azure devops', 'gcp', 'google cloud', 'google cloud platform', 'compute engine', 'cloud run', 'cloud functions', 'bigquery', 'vercel', 'netlify', 'railway', 'render', 'heroku', 'digital ocean', 'linode', 'vultr', 'cloudflare', 'fastly', 'akamai'],

        // Ciência de dados e IA
        dataScienceIA: ['data science', 'ciência de dados', 'ciencia de dados', 'cientista de dados', 'data scientist', 'analytics', 'analise de dados', 'análise de dados', 'data analysis', 'data analyst', 'analista de dados', 'business intelligence', 'bi', 'power bi', 'powerbi', 'tableau', 'looker', 'metabase', 'superset', 'qlik', 'qlikview', 'qliksense', 'dashboard', 'painel', 'visualização', 'visualizacao', 'data visualization', 'dataviz', 'relatorio', 'relatório', 'report', 'reporting', 'kpi', 'indicador', 'métrica', 'metrica', 'etl', 'extract transform load', 'pipeline', 'data pipeline', 'airflow', 'luigi', 'prefect', 'dagster', 'data warehouse', 'data lake', 'data lakehouse', 'snowflake', 'redshift', 'bigquery', 'databricks', 'spark', 'pyspark', 'hadoop', 'hive', 'presto', 'trino', 'dbt', 'data build tool', 'fivetran', 'airbyte', 'stitch', 'machine learning', 'ml', 'aprendizado de maquina', 'aprendizado de máquina', 'modelo', 'model', 'treinamento', 'training', 'inferencia', 'inferência', 'inference', 'previsao', 'previsão', 'prediction', 'classificacao', 'classificação', 'classification', 'regressao', 'regressão', 'regression', 'clustering', 'agrupamento', 'clusterizacao', 'clusterização', 'reducao de dimensionalidade', 'redução de dimensionalidade', 'pca', 'scikit-learn', 'sklearn', 'xgboost', 'lightgbm', 'catboost', 'random forest', 'decision tree', 'arvore de decisao', 'árvore de decisão', 'svm', 'support vector machine', 'knn', 'k-nearest neighbors', 'naive bayes', 'ensemble', 'boosting', 'bagging', 'deep learning', 'aprendizado profundo', 'rede neural', 'redes neurais', 'neural network', 'tensorflow', 'tf', 'keras', 'pytorch', 'torch', 'jax', 'flax', 'mxnet', 'cnn', 'convolutional neural network', 'rede convolucional', 'rnn', 'recurrent neural network', 'rede recorrente', 'lstm', 'gru', 'transformer', 'attention', 'atenção', 'atencao', 'bert', 'gpt', 'chatgpt', 'openai', 'llm', 'large language model', 'modelo de linguagem', 'nlp', 'natural language processing', 'processamento de linguagem natural', 'pln', 'tokenizacao', 'tokenização', 'tokenization', 'embedding', 'embeddings', 'word2vec', 'glove', 'fasttext', 'sentimento', 'sentiment analysis', 'analise de sentimento', 'análise de sentimento', 'ner', 'named entity recognition', 'reconhecimento de entidades', 'chatbot', 'bot', 'assistente virtual', 'conversational ai', 'ia conversacional', 'computer vision', 'visao computacional', 'visão computacional', 'opencv', 'yolo', 'object detection', 'detecção de objetos', 'deteccao de objetos', 'image classification', 'classificação de imagens', 'classificacao de imagens', 'segmentation', 'segmentação', 'segmentacao', 'face recognition', 'reconhecimento facial', 'ocr', 'optical character recognition', 'reconhecimento de texto', 'generative ai', 'ia generativa', 'gen ai', 'stable diffusion', 'midjourney', 'dall-e', 'dalle', 'text to image', 'image to image', 'langchain', 'llamaindex', 'vector database', 'banco vetorial', 'pinecone', 'weaviate', 'milvus', 'chroma', 'qdrant', 'rag', 'retrieval augmented generation', 'fine tuning', 'ajuste fino', 'prompt engineering', 'engenharia de prompt']
    },

    // ================================
    // EXPANSÃO MEGA - CONSTRUÇÃO (300+)
    // ================================
    construcaoExpansao: {
        // Serviços de construção
        servicosConstrucao: ['construcao', 'construção', 'construir', 'obra', 'obras', 'edificacao', 'edificação', 'edificar', 'predio', 'prédio', 'predial', 'residencial', 'residencia', 'residência', 'casa', 'casas', 'apartamento', 'apt', 'apto', 'comercial', 'loja', 'galpao', 'galpão', 'industrial', 'fabrica', 'fábrica', 'escritorio', 'escritório', 'sala comercial', 'sobrado', 'edicula', 'edícula', 'barracão', 'barracao', 'pavilhao', 'pavilhão', 'condominio', 'condomínio', 'loteamento', 'terreno', 'lote', 'incorporacao', 'incorporação', 'incorporadora', 'construtora', 'empreiteira', 'empreiteiro', 'empreita', 'empreitada', 'projeto', 'planta', 'planta baixa', 'projeto arquitetonico', 'projeto arquitetônico', 'projeto estrutural', 'projeto eletrico', 'projeto elétrico', 'projeto hidraulico', 'projeto hidráulico', 'projeto de incendio', 'projeto de incêndio', 'aprovacao', 'aprovação', 'alvara', 'alvará', 'habite-se', 'habitese', 'averbacao', 'averbação', 'matricula', 'matrícula', 'registro', 'cartorio', 'cartório', 'crea', 'cau', 'art', 'rrt', 'responsavel tecnico', 'responsável técnico', 'rt', 'fiscalizacao', 'fiscalização', 'fiscal de obra', 'encarregado', 'mestre de obras', 'pedreiro', 'servente', 'ajudante', 'oficial', 'meio oficial', 'fundacao', 'fundação', 'sapata', 'radier', 'estaca', 'broca', 'tubulão', 'tubulao', 'baldrame', 'viga', 'pilar', 'laje', 'laje macica', 'laje maciça', 'laje nervurada', 'laje pre moldada', 'laje pré-moldada', 'laje treliçada', 'laje trelicada', 'alvenaria', 'tijolo', 'bloco', 'bloco ceramico', 'bloco cerâmico', 'bloco de concreto', 'drywall', 'gesso acartonado', 'steel frame', 'wood frame', 'light steel frame', 'lsf', 'container', 'conteiner', 'modular', 'pre fabricado', 'pré-fabricado', 'pre moldado', 'pré-moldado', 'telhado', 'cobertura', 'telha', 'telha ceramica', 'telha cerâmica', 'telha de barro', 'telha de concreto', 'telha metalica', 'telha metálica', 'telha sanduiche', 'telha sanduíche', 'telha de fibrocimento', 'telha ecologica', 'telha ecológica', 'telha shingle', 'calha', 'rufo', 'estrutura metalica', 'estrutura metálica', 'estrutura de madeira', 'tesoura', 'caibro', 'ripa', 'forro', 'forro de gesso', 'forro de pvc', 'forro de madeira', 'forro mineral', 'sanca', 'tabica', 'rodateto', 'impermeabilizacao', 'impermeabilização', 'manta', 'manta asfaltica', 'manta asfáltica', 'manta liquida', 'manta líquida', 'argamassa polimerica', 'argamassa polimérica', 'veda', 'vedacao', 'vedação', 'vedante', 'selante', 'silicone', 'poliuretano', 'pu'],

        // Acabamentos
        acabamentos: ['acabamento', 'acabamentos', 'revestimento', 'revestimentos', 'piso', 'pisos', 'ceramica', 'cerâmica', 'porcelanato', 'porcelanatos', 'piso vinilico', 'piso vinílico', 'vinil', 'laminado', 'piso laminado', 'tacão', 'tacao', 'taco', 'tacos', 'parquet', 'parquete', 'madeira', 'deck', 'deck de madeira', 'deck sintetico', 'deck sintético', 'wpc', 'piso elevado', 'piso industrial', 'concreto polido', 'marmorite', 'granilite', 'epóxi', 'epoxi', 'poliuretano', 'pu', 'cimento queimado', 'cimento', 'ardósia', 'ardosia', 'pedra', 'pedra natural', 'marmore', 'mármore', 'granito', 'quartzito', 'limestone', 'travertino', 'pedra são tomé', 'pedra sao tome', 'miracema', 'petit pavé', 'petit pave', 'mosaico', 'pastilha', 'azulejo', 'azulejos', 'subway tile', 'metro', 'revestimento 3d', 'tijolinho', 'tijolo aparente', 'tijolo de demolição', 'tijolo de demolicao', 'rustico', 'rústico', 'parede', 'paredes', 'pintura', 'tinta', 'latex', 'látex', 'acrílica', 'acrilica', 'esmalte', 'textura', 'grafiato', 'textura projetada', 'massa corrida', 'massa acrílica', 'massa acrilica', 'gesso', 'reboco', 'emboço', 'emboco', 'chapisco', 'selador', 'primer', 'fundo preparador', 'verniz', 'stain', 'impermeabilizante', 'hidrofugante', 'papel de parede', 'adesivo', 'revestimento de parede', '3d', 'porta', 'portas', 'porta de madeira', 'porta de aluminio', 'porta de alumínio', 'porta de vidro', 'porta de correr', 'porta pivotante', 'porta camarão', 'porta camarao', 'porta sanfonada', 'porta acústica', 'porta acustica', 'porta corta fogo', 'porta blindada', 'janela', 'janelas', 'janela de aluminio', 'janela de alumínio', 'janela de madeira', 'janela de pvc', 'esquadria', 'esquadrias', 'vidro', 'vidros', 'vidro temperado', 'vidro laminado', 'vidro insulado', 'box', 'box de vidro', 'espelho', 'fechadura', 'maçaneta', 'macaneta', 'dobradiça', 'dobradica', 'trinco', 'fechadura digital', 'fechadura eletronica', 'fechadura eletrônica', 'corrimão', 'corrimao', 'guarda corpo', 'guarda-corpo', 'escada', 'escadas', 'escada de madeira', 'escada de concreto', 'escada metalica', 'escada metálica', 'escada caracol', 'degrau']
    },

    // ================================
    // EXPANSÃO MEGA - FINANCEIRO (400+)
    // ================================
    financeiroExpansao: {
        // Bancos e contas
        bancosContas: ['banco', 'bancos', 'agência', 'agencia', 'caixa', 'caixa eletronico', 'caixa eletrônico', 'atm', 'terminal', 'autoatendimento', 'internet banking', 'mobile banking', 'app banco', 'aplicativo banco', 'conta', 'conta corrente', 'conta poupança', 'conta poupanca', 'poupança', 'poupanca', 'conta salário', 'conta salario', 'conta digital', 'conta universitária', 'conta universitaria', 'conta jurídica', 'conta juridica', 'conta pj', 'conta empresarial', 'abertura de conta', 'encerramento de conta', 'portabilidade', 'portabilidade de conta', 'portabilidade de salário', 'portabilidade de salario', 'tarifa', 'tarifas', 'pacote de serviços', 'pacote de servicos', 'isenção de tarifa', 'isencao de tarifa', 'extrato', 'saldo', 'consulta', 'comprovante', 'depósito', 'deposito', 'saque', 'transferência', 'transferencia', 'ted', 'doc', 'pix', 'pix saque', 'pix troco', 'pix agendado', 'pix parcelado', 'chave pix', 'cpf', 'email', 'telefone', 'aleatória', 'aleatoria', 'qr code', 'copia e cola', 'boleto', 'boleto bancário', 'boleto bancario', 'pagamento de boleto', 'código de barras', 'codigo de barras', 'débito automático', 'debito automatico', 'agendamento', 'pagamento agendado', 'cartão', 'cartao', 'cartão de débito', 'cartao de debito', 'cartão de crédito', 'cartao de credito', 'cartão múltiplo', 'cartao multiplo', 'cartão virtual', 'cartao virtual', 'cartão adicional', 'cartao adicional', 'anuidade', 'limite', 'limite de crédito', 'limite de credito', 'aumento de limite', 'fatura', 'pagamento mínimo', 'pagamento minimo', 'pagamento total', 'parcelamento de fatura', 'rotativo', 'juros rotativo', 'crédito rotativo', 'credito rotativo', 'saque no crédito', 'saque no credito', 'cashback', 'pontos', 'milhas', 'programa de pontos', 'programa de milhas', 'livelo', 'smiles', 'tudoazul', 'multiplus', 'dotz'],

        // Investimentos completos
        investimentosCompletos: ['investimento', 'investir', 'investidor', 'aplicação', 'aplicacao', 'aplicar', 'rendimento', 'rentabilidade', 'retorno', 'roi', 'return on investment', 'renda fixa', 'renda variável', 'renda variavel', 'tesouro direto', 'tesouro selic', 'tesouro prefixado', 'tesouro ipca', 'tesouro nacional', 'título público', 'titulo publico', 'cdb', 'certificado de depósito', 'certificado de deposito', 'cdi', 'lci', 'letra de crédito imobiliário', 'letra de credito imobiliario', 'lca', 'letra de crédito do agronegócio', 'letra de credito do agronegocio', 'lc', 'letra de câmbio', 'letra de cambio', 'cri', 'certificado de recebíveis imobiliários', 'certificado de recebiveis imobiliarios', 'cra', 'certificado de recebíveis do agronegócio', 'certificado de recebiveis do agronegocio', 'debenture', 'debênture', 'debêntures', 'debentures', 'commercial paper', 'nota promissória', 'nota promissoria', 'fundo de investimento', 'fundo', 'fundos', 'fundo di', 'fundo rf', 'fundo renda fixa', 'fundo multimercado', 'fundo de ações', 'fundo de acoes', 'fundo cambial', 'fundo imobiliário', 'fundo imobiliario', 'fii', 'fiis', 'fundo de papel', 'fundo de tijolo', 'fundo de fundo', 'fof', 'etf', 'exchange traded fund', 'índice', 'indice', 'ibovespa', 'ibrx', 'small caps', 'small cap', 'dividendos', 'ações', 'acoes', 'ação', 'acao', 'bolsa', 'bolsa de valores', 'b3', 'bovespa', 'bm&fbovespa', 'pregão', 'pregao', 'home broker', 'corretora', 'corretor', 'assessor de investimentos', 'agente autônomo', 'agente autonomo', 'aai', 'compra', 'venda', 'ordem', 'ordem de compra', 'ordem de venda', 'ordem limitada', 'ordem a mercado', 'stop', 'stop loss', 'stop gain', 'day trade', 'daytrade', 'swing trade', 'position', 'buy and hold', 'trade', 'trader', 'trading', 'análise técnica', 'analise tecnica', 'análise fundamentalista', 'analise fundamentalista', 'gráfico', 'grafico', 'candlestick', 'candle', 'suporte', 'resistência', 'resistencia', 'tendência', 'tendencia', 'alta', 'baixa', 'lateral', 'indicador', 'indicadores', 'médias móveis', 'medias moveis', 'macd', 'rsi', 'ifr', 'bandas de bollinger', 'fibonacci', 'volume', 'fluxo', 'book', 'book de ofertas', 'liquidez', 'volatilidade', 'beta', 'alfa', 'sharpe', 'drawdown', 'cotação', 'cotacao', 'preço', 'preco', 'valuation', 'múltiplos', 'multiplos', 'p/l', 'p/vp', 'dividend yield', 'dy', 'payout', 'roe', 'roa', 'margem', 'ebitda', 'lucro', 'prejuízo', 'prejuizo', 'receita', 'balanço', 'balanco', 'dre', 'demonstrativo'],

        // Crédito e financiamento
        creditoFinanciamento: ['crédito', 'credito', 'empréstimo', 'emprestimo', 'financiamento', 'consignado', 'empréstimo consignado', 'emprestimo consignado', 'crédito consignado', 'credito consignado', 'margem consignável', 'margem consignavel', 'desconto em folha', 'inss', 'aposentado', 'pensionista', 'servidor público', 'servidor publico', 'funcionário público', 'funcionario publico', 'crédito pessoal', 'credito pessoal', 'empréstimo pessoal', 'emprestimo pessoal', 'cdc', 'crédito direto ao consumidor', 'credito direto ao consumidor', 'financiamento de veículo', 'financiamento de veiculo', 'financiamento de carro', 'financiamento de moto', 'alienação fiduciária', 'alienacao fiduciaria', 'entrada', 'parcela', 'prestação', 'prestacao', 'carnê', 'carne', 'crediário', 'crediario', 'financiamento imobiliário', 'financiamento imobiliario', 'casa própria', 'casa propria', 'minha casa minha vida', 'mcmv', 'casa verde amarela', 'sfi', 'sfh', 'sistema financeiro de habitação', 'sistema financeiro de habitacao', 'cet', 'custo efetivo total', 'taxa de juros', 'juros', 'juros ao mês', 'juros ao mes', 'juros ao ano', 'juros compostos', 'juros simples', 'amortização', 'amortizacao', 'sac', 'price', 'tabela sac', 'tabela price', 'prazo', 'carência', 'carencia', 'score', 'score de crédito', 'score de credito', 'serasa', 'spc', 'boa vista', 'quod', 'cadastro positivo', 'negativado', 'nome sujo', 'nome limpo', 'limpar nome', 'renegociação', 'renegociacao', 'acordo', 'parcelamento de dívida', 'parcelamento de divida', 'feirão', 'feirao', 'feirão limpa nome', 'feirao limpa nome', 'consórcio', 'consorcio', 'cota', 'carta de crédito', 'carta de credito', 'lance', 'contemplação', 'contemplacao', 'sorteio', 'administradora', 'grupo']
    },

    // ================================
    // EXPANSÃO MEGA - VAREJO & SUPERMERCADOS (300+)
    // ================================
    varejoExpansao: {
        // Supermercado e mercearia
        supermercado: ['supermercado', 'mercado', 'mercadinho', 'minimercado', 'mini mercado', 'hipermercado', 'hiper', 'super', 'atacado', 'atacadao', 'atacadão', 'atacarejo', 'cash and carry', 'autoservico', 'autosserviço', 'varejo', 'varejo alimentar', 'grocery', 'grocer', 'mercearia', 'armazem', 'armazém', 'emporio', 'empório', 'conveniencia', 'conveniência', 'loja de conveniencia', 'loja de conveniência', 'posto', 'am pm', 'ampm', 'select', 'br mania', 'ale', 'shell select', 'extra', 'pao de acucar', 'pão de açúcar', 'carrefour', 'walmart', 'big', 'maxxi', 'sam club', 'sams club', 'assai', 'assaí', 'atacadao', 'atacadão', 'makro', 'tenda', 'dia', 'dia%', 'minuto', 'minuto pao de acucar', 'minuto pão de açúcar', 'hirota', 'sonda', 'mambo', 'st marche', 'oba', 'emporio santa maria', 'empório santa maria', 'hortifruti', 'hortifrutti', 'natural da terra', 'zona sul', 'zona cerealista', 'ceasa', 'sacolao', 'sacolão', 'feira', 'feira livre', 'feirinha', 'feirante', 'barraca', 'banca', 'quitanda', 'verdureiro', 'fruteiro', 'acougue', 'açougue', 'acougueiro', 'açougueiro', 'carne', 'carnes', 'corte', 'cortes', 'bovina', 'suina', 'suína', 'frango', 'ave', 'peixe', 'frutos do mar', 'peixaria', 'padaria', 'panificadora', 'padeiro', 'confeitaria', 'confeiteiro', 'doçaria', 'docaria', 'doceira', 'salgaderia', 'rotisseria', 'rotisserie', 'frios', 'embutidos', 'queijaria', 'queijos', 'laticínios', 'laticinios', 'leite', 'iogurte', 'manteiga', 'margarina', 'ovo', 'ovos', 'granja', 'cerveja', 'bebida', 'bebidas', 'adega', 'destilados', 'vinho', 'vinhos', 'whisky', 'vodka', 'gin', 'licor', 'agua', 'água', 'refrigerante', 'suco', 'energetico', 'energético', 'isotônico', 'isotonico'],

        // Farmácia e drogaria
        farmacia: ['farmacia', 'farmácia', 'drogaria', 'droga', 'farma', 'botica', 'manipulacao', 'manipulação', 'farmacia de manipulacao', 'farmácia de manipulação', 'magistral', 'formula', 'fórmula', 'medicamento', 'remedio', 'remédio', 'droga', 'principio ativo', 'princípio ativo', 'generico', 'genérico', 'similar', 'referencia', 'referência', 'receita', 'prescrição', 'prescricao', 'receita medica', 'receita médica', 'receita simples', 'receita branca', 'receita azul', 'receita amarela', 'controlado', 'tarja preta', 'tarja vermelha', 'antibiotico', 'antibiótico', 'antiinflamatorio', 'anti-inflamatório', 'analgesico', 'analgésico', 'antipiretico', 'antipirético', 'antialergico', 'antialérgico', 'anti histaminico', 'anti-histamínico', 'descongestionante', 'xarope', 'comprimido', 'capsula', 'cápsula', 'dragea', 'drágea', 'pomada', 'creme', 'gel', 'loção', 'locao', 'spray', 'gotas', 'colírio', 'colirio', 'injeção', 'injecao', 'ampola', 'seringa', 'agulha', 'vitamina', 'suplemento', 'polivitaminico', 'polivitamínico', 'calcio', 'cálcio', 'ferro', 'zinco', 'magnesio', 'magnésio', 'omega', 'ômega', 'omega 3', 'colageno', 'colágeno', 'probiotico', 'probiótico', 'drogasil', 'droga raia', 'raia', 'drogaria sao paulo', 'drogaria são paulo', 'pacheco', 'drogaria pacheco', 'pague menos', 'extrafarma', 'panvel', 'nissei', 'araujo', 'araújo', 'ultrafarma', 'onofre', 'venancio', 'venâncio', 'coop', 'indiana', 'farmacia popular', 'farmácia popular', 'programa farmacia popular', 'programa farmácia popular', 'desconto', 'convenio', 'convênio', 'pbm', 'programa de benefício', 'programa de beneficio', 'funcional card', 'golden farma', 'vidalink', 'epharma', 'dermocosmetico', 'dermocosmético', 'cosmetico', 'cosmético', 'perfumaria', 'higiene', 'higiene pessoal', 'absorvente', 'fralda', 'fralda geriátrica', 'fralda geriatrica', 'fralda infantil', 'lenco umedecido', 'lenço umedecido'],

        // Papelaria e material
        papelaria: ['papelaria', 'livraria', 'livreiro', 'papeleiro', 'material escolar', 'volta as aulas', 'volta às aulas', 'lista escolar', 'lista de material', 'caderno', 'cadernos', 'caderno universitario', 'caderno universitário', 'caderno brochura', 'caderno espiral', 'caderno argolado', 'fichario', 'fichário', 'pasta', 'pasta catalogo', 'pasta catálogo', 'pasta sanfonada', 'envelope', 'papel', 'papel sulfite', 'sulfite', 'papel a4', 'papel carta', 'papel oficio', 'papel ofício', 'papel colorido', 'cartolina', 'papel cartao', 'papel cartão', 'eva', 'feltro', 'papel crepom', 'papel de seda', 'papel contact', 'papel kraft', 'lapis', 'lápis', 'lapis de cor', 'lápis de cor', 'giz de cera', 'canetinha', 'caneta', 'caneta esferografica', 'caneta esferográfica', 'caneta hidrografica', 'caneta hidrográfica', 'caneta marcador', 'marcador de texto', 'marca texto', 'pilot', 'bic', 'faber castell', 'stabilo', 'borracha', 'apontador', 'régua', 'regua', 'esquadro', 'compasso', 'transferidor', 'calculadora', 'corretivo', 'cola', 'cola branca', 'cola bastao', 'cola bastão', 'cola colorida', 'cola glitter', 'fita', 'fita adesiva', 'durex', 'fita crepe', 'fita dupla face', 'tesoura', 'estilete', 'grampeador', 'grampo', 'clips', 'clipe', 'percevejos', 'alfinete', 'elastico', 'elástico', 'barbante', 'organizador', 'porta lapis', 'porta lápis', 'porta caneta', 'agenda', 'planner', 'calendario', 'calendário', 'mural', 'quadro', 'quadro branco', 'lousa', 'giz', 'apagador', 'mochila', 'mochila escolar', 'estojo', 'lancheira', 'garrafa', 'squeeze', 'kalunga', 'leitura', 'staples', 'saraiva', 'fnac', 'cultura', 'curitiba', 'nobel', 'travessa']
    },

    // ================================
    // EXPANSÃO MEGA - ALIMENTAÇÃO ESPECÍFICA (300+)
    // ================================
    alimentacaoExpansao: {
        // Dietas e restrições
        dietasRestricoes: ['dieta', 'regime', 'reeducação alimentar', 'reeducacao alimentar', 'emagrecimento', 'emagrecer', 'perder peso', 'perda de peso', 'secar', 'definição', 'definicao', 'definir', 'cutting', 'bulk', 'bulking', 'ganho de massa', 'ganhar massa', 'hipertrofia', 'musculação', 'musculacao', 'fitness', 'fit', 'healthy', 'saudável', 'saudavel', 'low carb', 'lowcarb', 'low carbo', 'cetogenica', 'cetogênica', 'keto', 'cetose', 'paleo', 'paleolítica', 'paleolitica', 'whole30', 'whole 30', 'mediterranea', 'mediterrânea', 'dash', 'flexitariana', 'plant based', 'vegetariana', 'vegetariano', 'vegetarianismo', 'vegana', 'vegano', 'veganismo', 'ovolacto', 'ovo lacto', 'lactovegetariano', 'ovovegetariano', 'crudivoro', 'crudívoro', 'raw', 'raw food', 'crudivorismo', 'macrobiotica', 'macrobiótica', 'ayurveda', 'ayurvédica', 'ayurvedica', 'jejum', 'jejum intermitente', 'intermitente', 'fasting', 'protocolo', '16/8', '18/6', '20/4', 'omad', 'one meal a day', 'detox', 'desintoxicação', 'desintoxicacao', 'juice', 'suco verde', 'smoothie', 'sem gluten', 'sem glúten', 'gluten free', 'celíaco', 'celiaco', 'celíaca', 'celiaca', 'doença celíaca', 'doenca celiaca', 'intolerância ao glúten', 'intolerancia ao gluten', 'sensibilidade ao glúten', 'sensibilidade ao gluten', 'sem lactose', 'lactose free', 'intolerância a lactose', 'intolerancia a lactose', 'sem leite', 'sem derivados de leite', 'alergia alimentar', 'alergia a leite', 'aplv', 'alergia a proteína do leite', 'alergia a proteina do leite', 'alergia a ovo', 'alergia a amendoim', 'alergia a castanha', 'alergia a soja', 'alergia a trigo', 'sem açúcar', 'sem acucar', 'sugar free', 'zero açúcar', 'zero acucar', 'zero sugar', 'diabético', 'diabetico', 'diabetes', 'índice glicêmico', 'indice glicemico', 'carga glicêmica', 'carga glicemica', 'sem sal', 'hiposódico', 'hiposodico', 'hipertenso', 'hipertensão', 'hipertensao', 'sem gordura', 'fat free', 'low fat', 'orgânico', 'organico', 'organic', 'natural', 'sem conservantes', 'sem aditivos', 'sem corantes', 'integral', 'light', 'diet', 'zero', 'funcional', 'alimento funcional', 'superalimento', 'superfood'],

        // Ingredientes e produtos
        ingredientes: ['ingrediente', 'ingredientes', 'produto', 'produtos', 'alimento', 'alimentos', 'comida', 'grao', 'grão', 'graos', 'grãos', 'cereal', 'cereais', 'aveia', 'granola', 'muesli', 'quinoa', 'quinua', 'chia', 'linhaça', 'linhaca', 'gergelim', 'sesamo', 'sésamo', 'girassol', 'semente de girassol', 'semente de abobora', 'semente de abóbora', 'pepita', 'arroz', 'arroz branco', 'arroz integral', 'arroz negro', 'arroz vermelho', 'arroz selvagem', 'arroz parboilizado', 'feijão', 'feijao', 'feijão preto', 'feijao preto', 'feijão carioca', 'feijao carioca', 'feijão branco', 'feijao branco', 'feijão vermelho', 'feijao vermelho', 'feijão fradinho', 'feijao fradinho', 'feijão de corda', 'feijao de corda', 'lentilha', 'grao de bico', 'grão de bico', 'ervilha', 'soja', 'edamame', 'tofu', 'tempeh', 'proteina de soja', 'proteína de soja', 'pea protein', 'proteina de ervilha', 'proteína de ervilha', 'farinha', 'farinha de trigo', 'farinha integral', 'farinha de arroz', 'farinha de aveia', 'farinha de amendoas', 'farinha de amêndoas', 'farinha de coco', 'farinha de mandioca', 'tapioca', 'polvilho', 'polvilho doce', 'polvilho azedo', 'fecula', 'fécula', 'amido', 'amido de milho', 'maizena', 'maisena', 'oleo', 'óleo', 'oleo de soja', 'óleo de soja', 'oleo de canola', 'óleo de canola', 'oleo de milho', 'óleo de milho', 'oleo de girassol', 'óleo de girassol', 'azeite', 'azeite de oliva', 'azeite extra virgem', 'oleo de coco', 'óleo de coco', 'manteiga', 'manteiga ghee', 'ghee', 'margarina', 'banha', 'gordura', 'gordura vegetal', 'gordura hidrogenada', 'acucar', 'açúcar', 'acucar branco', 'açúcar branco', 'acucar mascavo', 'açúcar mascavo', 'acucar demerara', 'açúcar demerara', 'acucar de coco', 'açúcar de coco', 'mel', 'melado', 'melaço', 'melaco', 'xarope de bordo', 'maple syrup', 'agave', 'xarope de agave', 'stevia', 'stévia', 'eritritol', 'xilitol', 'adoçante', 'adocante', 'adocante natural', 'adoçante natural', 'sal', 'sal refinado', 'sal grosso', 'sal marinho', 'sal rosa', 'sal do himalaia', 'flor de sal', 'tempero', 'temperos', 'especiaria', 'especiarias', 'erva', 'ervas', 'pimenta', 'pimenta do reino', 'pimenta preta', 'pimenta branca', 'pimenta rosa', 'pimenta caiena', 'pimenta calabresa', 'paprica', 'páprica', 'cominho', 'curcuma', 'cúrcuma', 'açafrão', 'acafrao', 'açafrão da terra', 'gengibre', 'canela', 'cravo', 'noz moscada', 'cardamomo', 'anis', 'erva doce', 'funcho', 'oregano', 'orégano', 'manjericao', 'manjericão', 'alecrim', 'tomilho', 'salsa', 'salsinha', 'cebolinha', 'coentro', 'louro', 'hortela', 'hortelã', 'menta']
    }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.nichosExpandidos = nichosExpandidos;
}
