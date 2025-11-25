/**
 * KEYWORDS EXPANDIDAS PARA CHAT INTELIGENTE - EVO
 * 500+ variações por categoria para detecção de intenções
 * Inclui: erros de digitação, gírias, regionalismos, variações gramaticais
 */

const chatKeywords = {

    // ============================================
    // 1. DIFERENCIAIS DA EVO (500+ variações)
    // ============================================
    diferenciais: [
        // Perguntas diretas
        'qual o diferencial', 'qual é o diferencial', 'quais os diferenciais', 'quais são os diferenciais',
        'qual a diferença', 'qual é a diferença', 'quais as diferenças', 'o que diferencia',
        'o que te diferencia', 'o que vocês tem de diferente', 'o que vcs tem de diferente',
        'diferencial de vocês', 'diferencial de vcs', 'seu diferencial', 'seus diferenciais',

        // Por que escolher
        'por que escolher vocês', 'por que escolher vcs', 'porque escolher vocês', 'pq escolher vocês',
        'por que a evo', 'porque a evo', 'pq a evo', 'por que contratar vocês', 'pq contratar vcs',
        'por que devo escolher', 'porque devo escolher', 'pq devo escolher',
        'motivo pra escolher', 'motivo para escolher', 'razão para escolher', 'razao pra escolher',

        // Vantagens
        'qual a vantagem', 'quais as vantagens', 'vantagem de vocês', 'vantagens de vcs',
        'tem vantagem', 'tem alguma vantagem', 'vantagem competitiva', 'vantagens competitivas',
        'benefício', 'beneficios', 'benefícios', 'quais benefícios', 'quais os beneficios',

        // Comparação
        'melhor que', 'melhor do que', 'são melhores', 'vocês são melhores', 'vcs são melhores',
        'comparado a', 'comparando com', 'em comparação', 'diferente de', 'diferente dos outros',
        'concorrência', 'concorrencia', 'vs concorrência', 'versus outros', 'contra outros',
        'o que vocês fazem melhor', 'o que vcs fazem melhor', 'fazem melhor que',

        // O que vocês têm/fazem
        'o que vocês tem', 'o que vcs tem', 'o que vocês oferecem', 'o que vcs oferecem',
        'o que a evo oferece', 'o que a evo tem', 'o que tem de bom', 'o que é bom em vocês',
        'qual seu ponto forte', 'pontos fortes', 'ponto forte de vocês',

        // Variações informais
        'pq vcs', 'pq vocês', 'qual é a de vocês', 'qual é a de vcs', 'qual o lance de vocês',
        'qual o diferencial ae', 'qual diferencial aí', 'me convence', 'me convença',
        'convence eu', 'porque eu deveria', 'pq eu deveria', 'por que eu deveria',

        // Erros comuns de digitação
        'diferencial', 'difrencial', 'diferncial', 'diferencal', 'difernecial',
        'diferenca', 'diferença', 'difernça', 'diferensa', 'difrença',
        'vantagen', 'vantage', 'vantagm', 'vantajens', 'vantajem',

        // Regionalismos
        'qual é a boa', 'qual a boa de vocês', 'o que cês tem', 'oq cês tem',
        'qual o bizu', 'qual o diferencial aê', 'me fala o diferencial',

        // Perguntas elaboradas
        'por que devo confiar em vocês', 'por que confiar na evo', 'posso confiar em vocês',
        'o que faz vocês serem diferentes', 'o que torna vocês diferentes',
        'vocês são confiáveis', 'a evo é confiável', 'evo é boa',
        'vale a pena contratar vocês', 'vale contratar a evo',

        // Específicos do mercado
        'diferente de outras empresas', 'diferente de outras agências', 'diferente de outros devs',
        'melhor que outras empresas', 'melhor que agências', 'melhor que freelancer',
        'o que vocês tem que outros não tem', 'o que vcs tem que outros nao tem',

        // Curiosidade geral
        'quero saber mais sobre vocês', 'me conta sobre a evo', 'fala sobre vocês',
        'conta mais sobre a empresa', 'quem é a evo', 'o que é a evo',
        'sobre a empresa', 'sobre vocês', 'sobre a evo', 'conhecer vocês',
        'quero conhecer', 'gostaria de conhecer', 'interessado em conhecer'
    ],

    // ============================================
    // 2. FEATURES / FUNCIONALIDADES (500+ variações)
    // ============================================
    features: [
        // Adicionar
        'adicionar feature', 'adicionar funcionalidade', 'adicionar função', 'adicionar recurso',
        'quero adicionar', 'gostaria de adicionar', 'preciso adicionar', 'posso adicionar',
        'dá pra adicionar', 'da pra adicionar', 'tem como adicionar', 'consigo adicionar',
        'é possível adicionar', 'e possivel adicionar', 'seria possível adicionar',
        'adicionar mais', 'adicionar outras', 'add feature', 'add funcionalidade',

        // Incluir
        'incluir', 'incluindo', 'tem como incluir', 'dá pra incluir', 'da pra incluir',
        'posso incluir', 'quero incluir', 'gostaria de incluir', 'preciso incluir',
        'incluir funcionalidade', 'incluir feature', 'incluir função', 'incluir recurso',

        // O que tem/inclui
        'o que inclui', 'o que está incluído', 'o que ta incluido', 'o que vem incluído',
        'o que vem', 'o que tem', 'o que o app tem', 'o que o aplicativo tem',
        'o que está incluso', 'o que ta incluso', 'incluso no app', 'incluído no app',
        'já vem com', 'ja vem com', 'vem com o que', 'traz o que',

        // Funcionalidades
        'funcionalidade', 'funcionalidades', 'funcionalidade do app', 'funcionalidades do app',
        'quais funcionalidades', 'que funcionalidades', 'lista de funcionalidades',
        'todas funcionalidades', 'principais funcionalidades', 'funcionalidades básicas',
        'funcionalidades avançadas', 'funcionalidades completas', 'funcionalidades extras',

        // Features
        'feature', 'features', 'quais features', 'que features', 'lista de features',
        'principais features', 'features básicas', 'features avançadas', 'features extras',
        'novas features', 'features adicionais', 'features opcionais',

        // Recursos
        'recurso', 'recursos', 'quais recursos', 'que recursos', 'lista de recursos',
        'recursos do app', 'recursos disponíveis', 'recursos incluídos', 'recursos extras',

        // Funções
        'função', 'funções', 'quais funções', 'que funções', 'funcoes',
        'funções do app', 'funções disponíveis', 'funções principais',

        // Personalização
        'personalizar', 'personalização', 'personalizacao', 'customizar', 'customização',
        'customizacao', 'customizado', 'personalizado', 'sob medida', 'sob encomenda',
        'do meu jeito', 'como eu quero', 'do jeito que eu quiser', 'adaptar',
        'adaptar o app', 'modificar', 'modificar o app', 'mudar', 'alterar',

        // Perguntas específicas
        'o que o app faz', 'o que o aplicativo faz', 'o app faz o que',
        'o que dá pra fazer', 'o que da pra fazer', 'o que posso fazer',
        'o que consigo fazer', 'fazer o que no app', 'funciona como',

        // Exemplos de funcionalidades
        'tem chat', 'tem notificação', 'tem notificacao', 'tem push', 'tem pagamento',
        'tem carrinho', 'tem login', 'tem cadastro', 'tem painel', 'tem dashboard',
        'tem relatório', 'tem relatorio', 'tem integração', 'tem integracao',

        // Variações informais
        'oq tem', 'oq inclui', 'oq vem', 'q funcionalidades', 'q features',
        'mó feature', 'feature dahora', 'feature maneira', 'funções legais',

        // Erros de digitação
        'funcionalidade', 'funcionaldiade', 'funcioanlidade', 'funcionalidde',
        'feture', 'fetaure', 'feautre', 'featuer', 'feeature',
        'personalisar', 'personalziar', 'personaliazr', 'customisar',

        // Específico
        'preciso de', 'necessito de', 'é necessário', 'quero que tenha',
        'tem que ter', 'precisa ter', 'deve ter', 'obrigatório ter',
        'essencial ter', 'importante ter', 'gostaria que tivesse',

        // Perguntas elaboradas
        'quais são todas as funcionalidades disponíveis',
        'me lista as funcionalidades', 'lista de tudo que tem',
        'tudo que o app pode fazer', 'todas as possibilidades',
        'o que mais posso adicionar', 'funcionalidades além das básicas',
        'funcionalidades premium', 'funcionalidades pro', 'funcionalidades enterprise'
    ],

    // ============================================
    // 3. GARANTIA / SEGURANÇA (500+ variações)
    // ============================================
    garantia: [
        // Garantia direta
        'garantia', 'garantias', 'tem garantia', 'tem alguma garantia', 'qual a garantia',
        'qual é a garantia', 'quanto tempo de garantia', 'garantia de quanto tempo',
        'garantia do app', 'garantia do serviço', 'garantia do trabalho',
        'vocês dão garantia', 'vcs dao garantia', 'oferecem garantia', 'tem garantia mesmo',

        // Arrependimento/Devolução
        'arrependimento', 'direito de arrependimento', 'posso me arrepender',
        'se eu me arrepender', 'e se eu me arrepender', 'se arrepender',
        'devolução', 'devoluçao', 'devolucao', 'devolver', 'posso devolver',
        'tem devolução', 'aceita devolução', 'política de devolução',
        'devolver o dinheiro', 'dinheiro de volta', 'reembolso', 'reembolsar',
        'tem reembolso', 'posso pedir reembolso', 'quero reembolso',

        // Não gostar
        'se eu não gostar', 'se eu nao gostar', 'e se eu não gostar', 'e se eu nao gostar',
        'não gostar do app', 'nao gostar do app', 'se não ficar bom', 'se nao ficar bom',
        'se ficar ruim', 'se não curtir', 'se nao curtir', 'não curtir',
        'se eu não aprovar', 'se eu nao aprovar', 'se reprovar',

        // Confiança
        'confiar', 'confiança', 'confianca', 'posso confiar', 'dá pra confiar',
        'da pra confiar', 'é confiável', 'e confiavel', 'confiável', 'confiavel',
        'vocês são confiáveis', 'vcs sao confiaveis', 'empresa confiável',
        'posso confiar em vocês', 'confio em vocês', 'confiança em vocês',

        // Segurança
        'seguro', 'segurança', 'seguranca', 'é seguro', 'e seguro',
        'é seguro contratar', 'seguro fazer', 'seguro pagar', 'segurança do pagamento',
        'meu dinheiro tá seguro', 'dinheiro seguro', 'investimento seguro',

        // Risco
        'risco', 'riscos', 'tem risco', 'qual o risco', 'quais os riscos',
        'sem risco', 'corro risco', 'vou correr risco', 'risco de perder',
        'risco de dar errado', 'risco zero', 'baixo risco', 'alto risco',

        // Problemas
        'se der problema', 'se tiver problema', 'se acontecer problema',
        'e se der errado', 'se der errado', 'se não funcionar', 'se nao funcionar',
        'se quebrar', 'se parar', 'se bugar', 'se der bug',

        // Proteção
        'proteção', 'protecao', 'protegido', 'estou protegido', 'to protegido',
        'me protege', 'contrato protege', 'lei protege',

        // Contrato
        'contrato', 'tem contrato', 'assinamos contrato', 'contrato formal',
        'contrato de garantia', 'cláusulas', 'clausulas', 'termos',
        'termos de serviço', 'termos e condições',

        // Satisfação
        'satisfação', 'satisfacao', 'garantia de satisfação', 'satisfação garantida',
        'satisfeito', 'insatisfeito', 'se não ficar satisfeito', 'se ficar insatisfeito',

        // Variações informais
        'é cilada', 'cilada', 'furada', 'é furada', 'golpe', 'é golpe',
        'picaretagem', 'vou cair em golpe', 'medo de golpe', 'medo de cilada',
        'tô com medo', 'estou com medo', 'tenho medo', 'receio', 'tenho receio',

        // Erros de digitação
        'garantia', 'garantai', 'garatia', 'garanti', 'garantiia',
        'seguranca', 'seguransa', 'segurnça', 'segurança', 'seguranc',
        'confianca', 'confiansa', 'confinaça', 'confiaça',

        // Perguntas elaboradas
        'qual a política de garantia de vocês', 'como funciona a garantia',
        'o que acontece se eu não gostar', 'tenho alguma garantia legal',
        'estou protegido pela lei', 'código de defesa do consumidor',
        'vocês seguem o cdc', 'direitos do consumidor',

        // Comprovação
        'prova', 'provar', 'como provo', 'comprovação', 'comprovar',
        'evidência', 'evidencia', 'me garante', 'garante que'
    ],

    // ============================================
    // 4. PAGAMENTO / PARCELAMENTO (500+ variações)
    // ============================================
    pagamento: [
        // Parcelamento
        'parcelar', 'parcela', 'parcelas', 'parcelamento', 'parcelado',
        'em quantas vezes', 'quantas parcelas', 'quantas vezes', 'quanto de parcela',
        'valor da parcela', 'parcela de quanto', 'parcela fica quanto',
        'posso parcelar', 'dá pra parcelar', 'da pra parcelar', 'tem parcelamento',
        'parcela em quantas', 'divide em quantas', 'dividir em quantas',
        '12x', '10x', '6x', '3x', 'sem juros', 'com juros', 'juros',

        // Formas de pagamento
        'forma de pagamento', 'formas de pagamento', 'meios de pagamento',
        'como pagar', 'como pago', 'como faço pra pagar', 'como eu pago',
        'pago como', 'de que forma pago', 'que formas aceita', 'aceita o que',
        'quais formas de pagamento', 'opções de pagamento', 'opcoes de pagamento',

        // Cartão
        'cartão', 'cartao', 'aceita cartão', 'aceita cartao', 'pago no cartão',
        'cartão de crédito', 'cartao de credito', 'crédito', 'credito',
        'cartão de débito', 'cartao de debito', 'débito', 'debito',
        'bandeira', 'visa', 'mastercard', 'elo', 'american express', 'amex',
        'hipercard', 'diners', 'nubank', 'inter', 'c6', 'itau', 'bradesco',

        // PIX
        'pix', 'aceita pix', 'pago via pix', 'pago no pix', 'por pix',
        'chave pix', 'desconto no pix', 'pix tem desconto',

        // Boleto
        'boleto', 'aceita boleto', 'pago no boleto', 'boleto bancário',
        'boleto bancario', 'gerar boleto', 'emitir boleto',

        // Transferência
        'transferência', 'transferencia', 'ted', 'doc', 'aceita transferência',
        'transferência bancária', 'transferencia bancaria',

        // Desconto
        'desconto', 'descontos', 'tem desconto', 'faz desconto', 'da desconto',
        'dá desconto', 'quanto de desconto', 'desconto de quanto', 'desconto à vista',
        'desconto a vista', 'desconto no pix', 'desconto no boleto',
        'desconto pra pagar', 'desconto se pagar', 'promoção', 'promocao',
        'cupom', 'código de desconto', 'codigo desconto',

        // À vista
        'à vista', 'a vista', 'pagar à vista', 'pagar a vista', 'pagamento à vista',
        'valor à vista', 'quanto à vista', 'preço à vista', 'preco a vista',

        // Entrada
        'entrada', 'precisa de entrada', 'tem entrada', 'valor de entrada',
        'quanto de entrada', 'entrada de quanto', 'pago entrada',
        'sinal', 'pagar sinal', 'quanto de sinal',

        // Financiamento
        'financiar', 'financiamento', 'financia', 'tem financiamento',
        'faz financiamento', 'como financiar', 'financeira',

        // Por etapas
        'pagar por etapas', 'pagamento por etapas', 'pagar conforme entrega',
        'pagar durante', 'pagar parcelado na entrega', 'milestone',
        'dividir o pagamento', 'fracionar', 'fracionado',

        // Variações informais
        'como q paga', 'como é q paga', 'paga como memo', 'pago como ae',
        'aceita oq', 'aceita o q', 'da pra dividir', 'divide ae',

        // Erros de digitação
        'parcelamneto', 'parcleamento', 'parcelameto', 'parcelamnto',
        'cartao', 'carato', 'cratao', 'cartaõ',
        'desocnto', 'descoto', 'descnoto', 'descotnto',

        // Perguntas elaboradas
        'qual a melhor forma de pagamento', 'como funciona o pagamento',
        'vocês aceitam quais formas de pagamento', 'posso pagar de que forma',
        'tem alguma facilidade de pagamento', 'facilidades de pagamento',
        'condições de pagamento', 'condicoes de pagamento', 'negociar pagamento',
        'negociar valor', 'flexibilidade no pagamento', 'pagamento flexível'
    ],

    // ============================================
    // 5. PUBLICAÇÃO NAS LOJAS (500+ variações)
    // ============================================
    publicacao: [
        // Publicar
        'publicar', 'publicação', 'publicacao', 'publicar o app', 'publicar app',
        'publicar na loja', 'publicar nas lojas', 'publicação do app',
        'como publica', 'vocês publicam', 'vcs publicam', 'quem publica',
        'eu publico', 'vocês que publicam', 'a evo publica',

        // Lojas
        'loja', 'lojas', 'na loja', 'nas lojas', 'loja de app', 'lojas de app',
        'store', 'stores', 'loja de aplicativo', 'lojas de aplicativos',

        // App Store
        'app store', 'appstore', 'apple store', 'apple', 'ios store',
        'loja da apple', 'loja do iphone', 'publicar na app store',
        'subir na app store', 'colocar na app store',

        // Google Play
        'google play', 'play store', 'playstore', 'google', 'android store',
        'loja do google', 'loja do android', 'publicar no google play',
        'subir no google play', 'colocar no google play',

        // Aparecer/Ficar
        'aparece na loja', 'aparece nas lojas', 'vai aparecer', 'fica na loja',
        'fica nas lojas', 'vai ficar na loja', 'está na loja', 'ta na loja',
        'encontro na loja', 'acho na loja', 'baixar na loja',

        // Conta de desenvolvedor
        'conta de desenvolvedor', 'conta developer', 'developer account',
        'conta da apple', 'conta do google', 'apple developer', 'google developer',
        'preciso de conta', 'criar conta', 'vocês criam a conta',

        // Processo
        'processo de publicação', 'como funciona a publicação',
        'etapas da publicação', 'quanto tempo pra publicar',
        'demora pra publicar', 'aprovação', 'aprovação da loja',
        'review', 'revisão da loja', 'loja aprova', 'se a loja reprovar',

        // Custos
        'custo de publicação', 'taxa da loja', 'taxa da apple', 'taxa do google',
        'pagar pra publicar', 'publicação é paga', 'valor da publicação',

        // Atualizações
        'atualizar na loja', 'subir atualização', 'nova versão', 'nova versao',
        'publicar atualização', 'atualizar o app na loja',

        // Variações informais
        'como coloca na loja', 'como bota na loja', 'como poe na loja',
        'vai pra loja', 'vai pro play store', 'vai pra app store',
        'sobe na loja', 'joga na loja',

        // Erros de digitação
        'publicaçao', 'publicasao', 'publicacao', 'pubilcação',
        'app sotre', 'appsotre', 'apstore', 'applestore',
        'gogle play', 'googel play', 'google paly', 'playsotre',

        // Perguntas elaboradas
        'o app vai estar disponível pra download',
        'onde as pessoas vão baixar o app',
        'meus clientes vão encontrar na loja',
        'vai estar disponível pra todo mundo',
        'qualquer pessoa pode baixar',
        'como faço pra disponibilizar o app',
        'vocês cuidam de toda a publicação',
        'preciso me preocupar com a publicação'
    ],

    // ============================================
    // 6. MANUTENÇÃO / ATUALIZAÇÕES (500+ variações)
    // ============================================
    manutencao: [
        // Manutenção
        'manutenção', 'manutençao', 'manutencao', 'manter', 'mantém', 'mantem',
        'manutenção do app', 'manutenção do aplicativo', 'manutenção técnica',
        'quem faz manutenção', 'como funciona a manutenção', 'tem manutenção',
        'preciso de manutenção', 'manutenção inclusa', 'manutenção incluída',

        // Atualização
        'atualização', 'atualizacao', 'atualizar', 'atualizações', 'atualizacoes',
        'atualizar o app', 'atualização do app', 'atualizações do sistema',
        'atualizar ios', 'atualizar android', 'nova atualização',
        'precisa atualizar', 'vocês atualizam', 'quem atualiza',

        // Suporte técnico
        'suporte técnico', 'suporte tecnico', 'suporte', 'assistência', 'assistencia',
        'tem suporte', 'vocês dão suporte', 'como funciona o suporte',
        'suporte 24h', 'suporte por telefone', 'suporte por whatsapp',
        'suporte por email', 'suporte online', 'suporte presencial',

        // Após entrega
        'depois que fica pronto', 'depois da entrega', 'após a entrega', 'apos a entrega',
        'depois que terminar', 'quando terminar', 'pós-entrega', 'pos-entrega',
        'depois de pronto', 'app pronto', 'entregou e depois',

        // Problemas
        'se der problema', 'se tiver problema', 'quando der problema',
        'se acontecer problema', 'problema no app', 'problemas técnicos',
        'se der erro', 'se tiver erro', 'erro no app', 'erros',
        'bug', 'bugs', 'se bugar', 'se der bug', 'corrigir bug',
        'corrigir erro', 'correção', 'correcao', 'consertar',

        // Funcionamento
        'parar de funcionar', 'se parar', 'se não funcionar', 'se nao funcionar',
        'se quebrar', 'se travar', 'se ficar lento', 'se crashar', 'crash',
        'tela branca', 'não abre', 'nao abre', 'não carrega', 'nao carrega',

        // Hospedagem
        'hospedagem', 'servidor', 'servidores', 'cloud', 'nuvem',
        'hospedagem do app', 'onde fica hospedado', 'servidor do app',
        'custo de hospedagem', 'hospedagem inclusa',

        // Correções
        'correção', 'correcao', 'corrigir', 'consertar', 'arrumar',
        'resolver problema', 'solucionar', 'fix', 'hotfix', 'patch',

        // Tempo
        'quanto tempo de suporte', 'suporte por quanto tempo',
        'quantos anos de suporte', 'suporte vitalício', 'suporte eterno',
        'suporte pra sempre', 'suporte sem prazo',

        // Variações informais
        'e se der ruim', 'se der merda', 'se der pau', 'se pifar',
        'se zoar', 'se ferrar', 'se estragar', 'deu ruim',
        'vcs arrumam', 'vocês consertam', 'vcs resolvem',

        // Erros de digitação
        'manutenção', 'manutençao', 'manutençao', 'manutensao', 'manutencao',
        'atualizaçao', 'atualizasao', 'atalizacao', 'atualizção',
        'suprote', 'supote', 'suporet', 'suprotee',

        // Perguntas elaboradas
        'o que acontece se o app parar de funcionar',
        'vocês vão continuar dando suporte depois',
        'tenho suporte pra sempre', 'suporte é vitalício',
        'e se o ios atualizar', 'e se o android atualizar',
        'compatibilidade com novas versões',
        'vocês mantém o app atualizado'
    ],

    // ============================================
    // 7. PROCESSO / COMO FUNCIONA (500+ variações)
    // ============================================
    processo: [
        // Como funciona
        'como funciona', 'como que funciona', 'como é que funciona', 'funciona como',
        'como funciona o processo', 'como é o processo', 'qual o processo',
        'funcionamento', 'como é o funcionamento', 'me explica como funciona',
        'explica o processo', 'detalha o processo',

        // Etapas
        'etapas', 'quais etapas', 'quantas etapas', 'etapas do projeto',
        'etapas do desenvolvimento', 'passo a passo', 'passo-a-passo',
        'step by step', 'fases', 'quais fases', 'fases do projeto',

        // Próximos passos
        'próximos passos', 'proximos passos', 'próximo passo', 'proximo passo',
        'qual o próximo passo', 'o que acontece agora', 'e agora',
        'o que fazer agora', 'como prosseguir', 'como seguir',

        // Começo
        'como começa', 'como comeca', 'como começar', 'como começamos',
        'por onde começa', 'por onde começar', 'início', 'inicio',
        'como é o início', 'primeiro passo', 'primeiros passos',
        'o que preciso pra começar', 'pra começar',

        // Metodologia
        'metodologia', 'método', 'metodo', 'qual metodologia', 'qual método',
        'vocês usam que metodologia', 'scrum', 'agile', 'ágil', 'waterfall',
        'kanban', 'sprint', 'sprints',

        // Fluxo
        'fluxo', 'fluxo de trabalho', 'workflow', 'como é o fluxo',
        'qual o fluxo', 'fluxo do projeto', 'cronograma', 'timeline',

        // Desenvolvimento
        'como desenvolvem', 'como vocês desenvolvem', 'processo de desenvolvimento',
        'como é feito', 'como fazem', 'como vocês fazem', 'como vcs fazem',
        'como constroem', 'como criam', 'como produzem',

        // Acompanhamento
        'acompanhar', 'acompanhamento', 'posso acompanhar', 'como acompanho',
        'vou poder acompanhar', 'acompanhar o desenvolvimento',
        'ver o progresso', 'acompanhar progresso', 'status', 'status do projeto',

        // Entrega
        'como é a entrega', 'como funciona a entrega', 'entrega',
        'quando entrega', 'prazo de entrega', 'entrega em quanto tempo',
        'entrega parcelada', 'entregas parciais', 'entrega final',

        // Variações informais
        'como é a parada', 'como funciona o esquema', 'qual é o esquema',
        'como rola', 'como q rola', 'como é isso aí', 'me explica ae',
        'bota pra mim entender', 'desenrola aí',

        // Erros de digitação
        'processo', 'proceesso', 'prosesso', 'proseco', 'porcesso',
        'funciona', 'funcioan', 'funcionaa', 'funcoina',
        'etapas', 'etaaps', 'etapss', 'etapsa',

        // Perguntas elaboradas
        'me explica todo o processo do início ao fim',
        'quero entender como funciona do começo ao fim',
        'vocês podem me explicar as etapas',
        'qual o passo a passo completo',
        'como funciona desde a contratação até a entrega',
        'o que acontece depois que eu contratar',
        'como vai ser o desenvolvimento do meu app'
    ],

    // ============================================
    // 8. MIGRAÇÃO / JÁ TENHO APP (500+ variações)
    // ============================================
    migracao: [
        // Já tenho
        'já tenho', 'ja tenho', 'tenho um app', 'tenho app', 'tenho aplicativo',
        'possuo um app', 'possuo app', 'tenho um aplicativo',
        'já tenho um app', 'ja tenho um app', 'já existe', 'ja existe',
        'app existente', 'aplicativo existente', 'meu app atual',

        // Migrar
        'migrar', 'migração', 'migracao', 'fazer migração', 'migrar dados',
        'migrar app', 'migrar aplicativo', 'migrar sistema', 'migrar plataforma',
        'quero migrar', 'preciso migrar', 'como migrar',

        // Trocar/Mudar
        'trocar', 'trocar de app', 'trocar de plataforma', 'mudar',
        'mudar de', 'mudar de app', 'mudar de sistema', 'mudança',
        'quero trocar', 'preciso trocar', 'quero mudar',

        // Substituir
        'substituir', 'substituição', 'substituir o app', 'substituir meu app',
        'app substituto', 'em substituição', 'no lugar do',

        // Atualizar existente
        'atualizar meu app', 'atualizar app existente', 'melhorar meu app',
        'melhorar app atual', 'upgrade', 'upgrade do app', 'fazer upgrade',
        'evoluir o app', 'evoluir meu app',

        // Refazer
        'refazer', 're-fazer', 'fazer de novo', 'criar de novo',
        'refazer o app', 'refazer do zero', 'do zero', 'começar do zero',
        'reconstruir', 'reconstruir o app', 'rebuildar',

        // Redesenhar
        'redesenhar', 'redesign', 'novo design', 'mudar o design',
        'mudar visual', 'mudar a cara', 'cara nova', 'visual novo',
        'modernizar', 'modernizar o app', 'deixar moderno',

        // Problemas com app atual
        'meu app está desatualizado', 'app desatualizado', 'app antigo',
        'meu app está lento', 'app lento', 'app travando',
        'app com problemas', 'app bugado', 'app ruim',
        'não gosto do meu app', 'nao gosto do meu app',

        // Plataformas
        'sair do wix', 'sair do wordpress', 'sair da plataforma',
        'trocar de plataforma', 'mudar de plataforma',
        'quero sair de', 'quero largar', 'abandonar plataforma',

        // Desenvolvedor anterior
        'outro desenvolvedor', 'outra empresa', 'desenvolvedor anterior',
        'empresa anterior', 'quem fez antes', 'antigo desenvolvedor',
        'briguei com desenvolvedor', 'problemas com desenvolvedor',

        // Variações informais
        'ja tenho um bagulho', 'tenho um trem', 'tenho uma parada',
        'meu app ta zoado', 'ta uma merda', 'ta ruim demais',
        'quero jogar fora', 'quero largar mão',

        // Erros de digitação
        'migraçao', 'migrasao', 'migraacao', 'migrassao',
        'substituir', 'substiuir', 'substituier', 'subtituir',
        'refazer', 'refaser', 'refazeer', 're fazer',

        // Perguntas elaboradas
        'vocês conseguem pegar um app existente e melhorar',
        'dá pra vocês continuarem um projeto',
        'vocês aceitam projetos em andamento',
        'posso trazer meu app pra vocês',
        'vocês pegam projeto de outro desenvolvedor',
        'consigo migrar meu app atual pra vocês'
    ],

    // ============================================
    // 9. PORTFÓLIO / CASES (500+ variações)
    // ============================================
    portfolio: [
        // Exemplo
        'exemplo', 'exemplos', 'um exemplo', 'alguns exemplos', 'me dá exemplo',
        'me da exemplo', 'mostra exemplo', 'mostrar exemplo', 'exemplo de app',
        'exemplo de aplicativo', 'exemplo do trabalho', 'exemplos de apps',

        // Case
        'case', 'cases', 'case de sucesso', 'cases de sucesso',
        'histórias de sucesso', 'historias de sucesso', 'sucesso',
        'caso de sucesso', 'casos de sucesso', 'resultados',

        // Portfólio
        'portfolio', 'portfólio', 'ver portfólio', 'ver portfolio',
        'mostrar portfólio', 'mostrar portfolio', 'portfólio de vocês',
        'portfolio de vcs', 'trabalhos anteriores', 'projetos anteriores',

        // Já fizeram
        'já fizeram', 'ja fizeram', 'vocês já fizeram', 'vcs ja fizeram',
        'o que já fizeram', 'o que vocês já fizeram', 'apps que fizeram',
        'aplicativos que fizeram', 'projetos que fizeram',

        // Clientes
        'clientes', 'quem são os clientes', 'clientes de vocês',
        'clientes da evo', 'empresas que usam', 'quem usa',
        'quem já usou', 'quem ja usou', 'empresas atendidas',

        // Mostrar
        'mostrar', 'mostra', 'mostra aí', 'mostra ae', 'me mostra',
        'pode mostrar', 'quero ver', 'deixa eu ver', 'ver exemplos',
        'ver apps', 'ver projetos', 'ver trabalhos',

        // Apps prontos
        'apps prontos', 'aplicativos prontos', 'apps feitos',
        'aplicativos feitos', 'apps entregues', 'projetos entregues',

        // Referência
        'referência', 'referencia', 'referências', 'referencias',
        'alguma referência', 'tem referência', 'modelo', 'modelos',

        // Demonstração
        'demonstração', 'demonstracao', 'demo', 'ver demo',
        'demonstrar', 'apresentação', 'apresentacao',

        // Depoimentos
        'depoimento', 'depoimentos', 'avaliação', 'avaliações',
        'avaliacoes', 'review', 'reviews', 'feedback', 'feedbacks',
        'o que os clientes dizem', 'opinião dos clientes',

        // Variações informais
        'mostra uns app ae', 'tem uns app pra mostrar', 'bota uns exemplo',
        'deixa eu ver uns trabalho', 'mostra o que vcs fazem',

        // Erros de digitação
        'portifolio', 'portfoilio', 'portfloio', 'portfollio',
        'exemplo', 'exmplo', 'exemlpo', 'exmeplo',
        'referencia', 'refernecia', 'referncia', 'referecia',

        // Perguntas elaboradas
        'vocês podem me mostrar alguns apps que já fizeram',
        'tem como ver exemplos de trabalhos anteriores',
        'quero ver o que vocês já produziram',
        'tem algum app que eu possa baixar e testar',
        'posso ver apps na loja que vocês fizeram',
        'tem cliente que eu possa conversar'
    ],

    // ============================================
    // 10. CONCORRENTES / MARKETPLACES (500+ variações)
    // ============================================
    concorrentes: [
        // iFood e delivery
        'ifood', 'i-food', 'i food', 'rappi', 'uber eats', 'ubereats', 'uber eat',
        '99food', '99 food', 'aiqfome', 'james', 'james delivery',
        'sair do ifood', 'largar ifood', 'fugir do ifood', 'abandonar ifood',
        'taxa do ifood', 'taxas do ifood', 'comissão do ifood', 'ifood cobra',

        // Hotmart e infoprodutos
        'hotmart', 'hot mart', 'eduzz', 'monetizze', 'kiwify', 'braip',
        'sair da hotmart', 'largar hotmart', 'fugir da hotmart',
        'taxa da hotmart', 'taxas da hotmart', 'comissão da hotmart',
        'plataforma de cursos', 'plataforma de infoprodutos',

        // Marketplaces
        'mercado livre', 'mercadolivre', 'ml', 'shopee', 'amazon',
        'magazine luiza', 'magalu', 'americanas', 'submarino',
        'marketplace', 'marketplaces', 'sair do marketplace',
        'taxa do marketplace', 'comissão do marketplace',

        // Taxas
        'taxa', 'taxas', 'comissão', 'comissao', 'porcentagem',
        'quanto paga de taxa', 'taxa de quanto', 'pagar taxa',
        'sem taxa', 'livre de taxa', 'fugir da taxa', 'evitar taxa',
        '30%', '27%', '25%', '20%', 'trinta porcento', 'vinte porcento',

        // Plataformas
        'plataforma', 'plataformas', 'sair da plataforma', 'largar plataforma',
        'dependência de plataforma', 'dependente de plataforma',
        'preso na plataforma', 'refém da plataforma',

        // Independência
        'ser independente', 'independência', 'independencia', 'liberdade',
        'ter controle', 'controle total', 'dono do negócio', 'meu próprio',
        'próprio app', 'proprio app', 'meu app', 'app próprio',

        // Economia
        'economizar', 'economia', 'quanto economizo', 'vou economizar',
        'economiza quanto', 'parar de pagar', 'não pagar mais',
        'deixar de pagar', 'gastar menos', 'reduzir custos',

        // Lucro
        'ficar com lucro', 'lucro todo meu', '100% do lucro', 'cem porcento',
        'margem', 'margem de lucro', 'aumentar margem', 'melhorar margem',

        // Variações informais
        'to cansado do ifood', 'ifood ta me matando', 'ifood ta comendo meu lucro',
        'hotmart cobra demais', 'essas plataforma rouba', 'taxa abusiva',
        'exploração', 'sendo explorado', 'sugando meu dinheiro',

        // Erros de digitação
        'ifod', 'ifodd', 'iFood', 'iFod', 'rapii', 'rapi',
        'hotmrat', 'hotamrt', 'homart', 'hitmart',
        'comisao', 'comissao', 'comição', 'comisão',

        // Perguntas elaboradas
        'quanto vou economizar saindo do ifood',
        'vale a pena sair da hotmart',
        'como faço pra parar de pagar taxa',
        'vocês me ajudam a sair do marketplace',
        'quero ter meu próprio canal de vendas',
        'cansei de pagar comissão pra essas plataformas'
    ],

    // ============================================
    // 11. TECNOLOGIA (500+ variações)
    // ============================================
    tecnologia: [
        // Tecnologia geral
        'tecnologia', 'tecnologias', 'qual tecnologia', 'que tecnologia',
        'tecnologia usada', 'tecnologias usadas', 'stack', 'tech stack',
        'stack tecnológica', 'stack tecnologica',

        // Linguagens
        'linguagem', 'linguagens', 'linguagem de programação', 'programação',
        'programacao', 'qual linguagem', 'que linguagem', 'em que linguagem',
        'código', 'codigo', 'codificação', 'codificacao',

        // Frameworks mobile
        'react native', 'reactnative', 'flutter', 'ionic', 'xamarin',
        'cordova', 'phonegap', 'kotlin', 'swift', 'java', 'objective-c',

        // Nativo vs híbrido
        'nativo', 'nativos', 'app nativo', 'aplicativo nativo', '100% nativo',
        'híbrido', 'hibrido', 'app híbrido', 'aplicativo híbrido',
        'cross platform', 'cross-platform', 'multiplataforma',
        'diferença nativo híbrido', 'nativo ou híbrido', 'qual melhor',

        // PWA
        'pwa', 'progressive web app', 'web app', 'webapp',
        'app web', 'aplicativo web', 'site app',

        // Backend
        'backend', 'back-end', 'back end', 'servidor', 'servidores',
        'node', 'nodejs', 'node.js', 'python', 'php', 'java', 'ruby',
        'django', 'laravel', 'express', 'fastapi', 'spring',

        // Cloud
        'cloud', 'nuvem', 'aws', 'amazon web services', 'google cloud',
        'gcp', 'azure', 'microsoft azure', 'heroku', 'digital ocean',
        'infraestrutura', 'infra', 'devops',

        // Banco de dados
        'banco de dados', 'banco', 'database', 'db', 'base de dados',
        'postgresql', 'postgres', 'mysql', 'mongodb', 'mongo',
        'firebase', 'firestore', 'sql', 'nosql', 'redis',

        // APIs
        'api', 'apis', 'rest', 'restful', 'graphql', 'soap',
        'integração', 'integracao', 'integrações', 'integracoes',
        'webservice', 'web service', 'microserviços', 'microservicos',

        // Performance
        'performance', 'desempenho', 'velocidade', 'rápido', 'rapido',
        'lento', 'otimização', 'otimizacao', 'otimizado',

        // Variações informais
        'como é feito', 'feito em que', 'usa o que', 'programado em que',
        'que linguagem usa', 'vcs usam react', 'vocês usam flutter',

        // Erros de digitação
        'tecnolgia', 'tecnologa', 'tecnlogia', 'tcnologia',
        'fluter', 'fluuter', 'fluttter', 'fltter',
        'react natvie', 'react nativ', 'reactnativ',

        // Perguntas elaboradas
        'vocês usam que tecnologia pra desenvolver',
        'o app é feito em react native ou nativo',
        'qual a diferença entre nativo e híbrido',
        'por que vocês fazem nativo e não flutter',
        'é melhor fazer em flutter ou nativo',
        'vocês trabalham com firebase'
    ],

    // ============================================
    // 12. EQUIPE / EMPRESA (500+ variações)
    // ============================================
    equipe: [
        // Quem são
        'quem são vocês', 'quem sao voces', 'quem são', 'quem sao',
        'vocês são quem', 'vcs sao quem', 'quem é vocês', 'quem é a evo',
        'sobre vocês', 'sobre a evo', 'sobre a empresa',

        // Equipe
        'equipe', 'time', 'team', 'funcionários', 'funcionarios',
        'colaboradores', 'desenvolvedores', 'devs', 'programadores',
        'quantas pessoas', 'quantos funcionários', 'tamanho da equipe',
        'tamanho do time', 'equipe de quantos',

        // Empresa
        'empresa', 'a empresa', 'sobre a empresa', 'conhecer empresa',
        'empresa de vocês', 'empresa de vcs', 'evo é o que',
        'o que é a evo', 'o que é evo', 'evo significa',

        // Localização
        'onde fica', 'onde ficam', 'localização', 'localizacao', 'local',
        'endereço', 'endereco', 'sede', 'escritório', 'escritorio',
        'cidade', 'estado', 'país', 'pais', 'brasil',
        'ficam aonde', 'trabalham de onde', 'vocês são de onde',

        // CNPJ / Formalização
        'cnpj', 'tem cnpj', 'qual o cnpj', 'empresa registrada',
        'empresa formal', 'empresa real', 'existe mesmo', 'é real',
        'fantasia', 'razão social', 'razao social',

        // Experiência
        'experiência', 'experiencia', 'tempo de mercado', 'quantos anos',
        'há quanto tempo', 'ha quanto tempo', 'desde quando',
        'anos de experiência', 'anos no mercado', 'fundação', 'fundacao',

        // Especialização
        'especialização', 'especializacao', 'especialidade', 'especialistas',
        'especializam em que', 'foco', 'nicho', 'área de atuação',
        'o que fazem', 'fazem o que',

        // Variações informais
        'vocês são gente de onde', 'vcs são de qual cidade', 'firma',
        'estabelecimento', 'cês são quem', 'quem é vocês memo',

        // Erros de digitação
        'equpe', 'euqipe', 'eqipe', 'equipee',
        'empresa', 'empesa', 'enpresa', 'emrpesa',
        'localizaçao', 'localizasao', 'localizaacao',

        // Perguntas elaboradas
        'vocês são uma empresa real ou freelancers',
        'quantos desenvolvedores vocês tem',
        'posso visitar o escritório de vocês',
        'vocês atendem em que região',
        'a evo existe há quanto tempo',
        'vocês tem estrutura pra um projeto grande'
    ],

    // ============================================
    // 13. SAUDAÇÕES (variações)
    // ============================================
    saudacoes: [
        // Básicas
        'oi', 'olá', 'ola', 'oie', 'oii', 'oiii', 'oooi', 'oieee',
        'oi oi', 'oi oi oi', 'eai', 'e ai', 'e aí', 'eae', 'eaee',

        // Bom dia/tarde/noite
        'bom dia', 'bomdia', 'bom diaa', 'bom diaaa', 'dia', 'diaa',
        'boa tarde', 'boatarde', 'boa tardee', 'tarde', 'tardee',
        'boa noite', 'boanoite', 'boa noitee', 'noite', 'noitee',

        // Informais
        'fala', 'falaa', 'falaaa', 'fala aí', 'fala ae', 'fala ai',
        'salve', 'salvee', 'salveee', 'slv', 'slvv',
        'e aí beleza', 'eai blz', 'eae blz', 'tudo bem', 'tudo bom',
        'td bem', 'td bom', 'blz', 'beleza', 'suave',

        // Inglês
        'hello', 'hi', 'hey', 'hii', 'hiii', 'heey', 'heeey',
        'whats up', 'wassup', 'sup', 'yo',

        // Regionais
        'opa', 'opaa', 'opaaa', 'ô', 'ôpa', 'eita', 'êita',
        'uai', 'po', 'pô', 'mano', 'cara', 'véi', 'vei',

        // Cumprimentos elaborados
        'oi tudo bem', 'ola como vai', 'oi como voce ta',
        'oi tudo certo', 'bom dia tudo bem', 'boa tarde como vai'
    ],

    // ============================================
    // 14. AGRADECIMENTOS (variações)
    // ============================================
    agradecimentos: [
        // Obrigado
        'obrigado', 'obrigada', 'obrigadoo', 'obrigadaa', 'obg', 'obgg',
        'muito obrigado', 'muito obrigada', 'mt obrigado', 'mt obrigada',
        'muitíssimo obrigado', 'muitissimo obrigado',

        // Variações
        'valeu', 'valeuu', 'valeuuu', 'vlw', 'vlww', 'vlwww',
        'thanks', 'thank you', 'thx', 'ty',
        'brigado', 'brigada', 'brigadoo', 'brigadaa',

        // Agradecimento
        'agradeço', 'agradeco', 'agradecido', 'agradecida', 'grato', 'grata',
        'sou grato', 'sou grata', 'fico grato', 'fico grata',

        // Expressões
        'tmj', 'é nóis', 'e nois', 'show', 'top', 'massa', 'dahora',
        'maneiro', 'muito bom', 'excelente', 'perfeito', 'ótimo', 'otimo'
    ],

    // ============================================
    // 15. DÚVIDAS GERAIS (variações)
    // ============================================
    duvidas: [
        // Dúvida
        'dúvida', 'duvida', 'duvidas', 'dúvidas', 'tenho dúvida', 'tenho duvida',
        'tenho uma dúvida', 'tenho uma duvida', 'surgiu uma dúvida',
        'me surgiu uma dúvida', 'algumas dúvidas', 'várias dúvidas',

        // Perguntar
        'posso perguntar', 'uma pergunta', 'perguntinha', 'perguntar algo',
        'quero perguntar', 'preciso perguntar', 'deixa eu perguntar',

        // Saber
        'queria saber', 'gostaria de saber', 'quero saber', 'preciso saber',
        'me diz', 'me fala', 'me conta', 'me explica',
        'pode me explicar', 'pode me falar', 'pode me dizer',

        // Entender
        'não entendi', 'nao entendi', 'não entendo', 'nao entendo',
        'não compreendi', 'nao compreendi', 'confuso', 'confusa',
        'ficou confuso', 'não ficou claro', 'nao ficou claro',
        'pode explicar melhor', 'explica melhor', 'mais detalhes'
    ],

    // ============================================
    // 16. CONTATO DIRETO (variações)
    // ============================================
    contato: [
        // Falar com humano
        'falar com humano', 'falar com pessoa', 'pessoa real', 'humano',
        'quero falar com alguém', 'falar com alguem', 'falar com gente',
        'atendente', 'atendimento humano', 'atendimento real',
        'suporte humano', 'vendedor', 'consultor',

        // Ligar
        'ligar', 'me liga', 'me ligue', 'pode ligar', 'quer ligar',
        'telefone', 'número de telefone', 'numero de telefone',
        'celular', 'chamada', 'ligação', 'ligacao',

        // WhatsApp
        'whatsapp', 'whats', 'wpp', 'zap', 'zapzap', 'zap zap',
        'número do whats', 'numero do whats', 'whatsapp de vocês',
        'chamar no whats', 'mandar whats', 'falar no whats',

        // Email
        'email', 'e-mail', 'endereço de email', 'endereco de email',
        'mandar email', 'enviar email', 'email de vocês',

        // Contato
        'contato', 'contato direto', 'forma de contato', 'como contato',
        'como falo com vocês', 'como entro em contato', 'entrar em contato',
        'falar diretamente', 'contato telefônico', 'contato telefonico',

        // Reunião
        'reunião', 'reuniao', 'agendar reunião', 'marcar reunião',
        'call', 'videoconferência', 'videoconferencia', 'videochamada',
        'zoom', 'meet', 'google meet', 'teams'
    ],

    // ============================================
    // 17. NEGATIVAS (variações)
    // ============================================
    negativas: [
        // Não quero
        'não quero', 'nao quero', 'não preciso', 'nao preciso',
        'não tenho interesse', 'nao tenho interesse', 'sem interesse',
        'não me interessa', 'nao me interessa',

        // Desistir
        'desisto', 'desistir', 'vou desistir', 'quero desistir',
        'deixa pra lá', 'deixa pra la', 'esquece', 'esqueca',

        // Pensar
        'vou pensar', 'preciso pensar', 'deixa eu pensar',
        'depois eu volto', 'volto depois', 'mais tarde',
        'talvez depois', 'quem sabe depois', 'outro dia',

        // Não agora
        'não agora', 'nao agora', 'agora não', 'agora nao',
        'momento não', 'momento nao', 'não é o momento', 'nao e o momento',
        'ainda não', 'ainda nao', 'por enquanto não', 'por enquanto nao',

        // Caro
        'caro', 'muito caro', 'caro demais', 'fora do orçamento',
        'não tenho dinheiro', 'nao tenho dinheiro', 'sem grana',
        'não posso pagar', 'nao posso pagar'
    ],

    // ============================================
    // 18. CONFIRMAÇÕES POSITIVAS (variações)
    // ============================================
    positivas: [
        // Sim
        'sim', 'simm', 'simmm', 'ss', 'sss', 'yes', 'yess',
        'claro', 'claroo', 'clarooo', 'com certeza', 'certeza',
        'pode ser', 'pode', 'podee', 'podeee',

        // Bora
        'bora', 'boraa', 'boraaa', 'vamos', 'vamoss', 'vamosss',
        'vamo', 'vamoo', 'vamooo', 'partiu', 'partiuu',

        // OK
        'ok', 'okk', 'okkk', 'okay', 'okayy', 'okey',
        'beleza', 'blz', 'blzz', 'suave', 'suavee',

        // Fechado
        'fechado', 'fechadoo', 'combinado', 'combinadoo',
        'feito', 'feitoo', 'certo', 'certoo',

        // Positivo
        'perfeito', 'perfeitoo', 'show', 'showw', 'showww',
        'massa', 'massaa', 'top', 'topp', 'toppp',
        'legal', 'legall', 'ótimo', 'otimo', 'excelente',
        'maravilha', 'maravilhoso', 'sensacional',

        // Quero
        'quero', 'queroo', 'querooo', 'eu quero', 'quero sim',
        'quero muito', 'claro que quero', 'obvio que quero',
        'com certeza quero', 'pode fazer', 'faz aí', 'faz ae'
    ],

    // ============================================
    // 19. PRAZO / TEMPO DE ENTREGA (100+ variações)
    // ============================================
    prazo: [
        // Prazo direto
        'prazo', 'prazos', 'qual o prazo', 'qual é o prazo', 'prazo de entrega',
        'prazo pra entregar', 'prazo do projeto', 'prazo do app', 'prazo médio',
        'tempo de prazo', 'qual prazo', 'em quanto tempo', 'demora quanto',
        'quanto tempo demora', 'quanto tempo leva', 'leva quanto tempo',

        // Entrega
        'quando entrega', 'quando fica pronto', 'quando termina', 'data de entrega',
        'previsão de entrega', 'previsao de entrega', 'entrega quando', 'entrega em',
        'fica pronto quando', 'termina quando', 'previsão', 'previsao',

        // Tempo
        'tempo', 'tempo de desenvolvimento', 'tempo de criação', 'tempo de produção',
        'quanto tempo pro app', 'quanto tempo pra fazer', 'tempo estimado',
        'estimativa de tempo', 'estimativa', 'cronograma', 'timeline',

        // Dias/Semanas/Meses
        'quantos dias', 'quantas semanas', 'quantos meses', 'dias úteis',
        'semanas', 'meses', 'uns dias', 'algumas semanas', 'alguns meses',
        '30 dias', '60 dias', '90 dias', 'um mês', 'dois meses', 'três meses',

        // Urgência
        'urgente', 'urgência', 'urgencia', 'tenho pressa', 'preciso rápido',
        'preciso rapido', 'é urgente', 'e urgente', 'muito urgente', 'super urgente',
        'pra ontem', 'pra já', 'pra ja', 'o mais rápido', 'o mais rapido',
        'consegue fazer rápido', 'faz mais rápido', 'acelerar', 'acelera',

        // Express
        'express', 'expresso', 'modo express', 'entrega express', 'prazo express',
        'prazo reduzido', 'prazo curto', 'curto prazo', 'prazo apertado',

        // Variações informais
        'demora muito', 'demora mto', 'demora mt', 'é demorado', 'e demorado',
        'fica pronto logo', 'sai quando', 'qnd fica pronto', 'qnt tempo',
        'qt tempo', 'qto tempo demora', 'qtas semanas', 'qtos meses',

        // Erros de digitação
        'praoz', 'praz', 'prazoo', 'entrga', 'entrgea', 'urgnte', 'urjente',

        // Perguntas elaboradas
        'vocês conseguem entregar em quanto tempo', 'qual a previsão realista',
        'tem como fazer mais rápido pagando mais', 'dá pra acelerar o prazo',
        'preciso do app funcionando até tal data', 'tenho deadline'
    ],

    // ============================================
    // 20. ORÇAMENTO / PREÇO (100+ variações)
    // ============================================
    orcamento: [
        // Preço direto
        'preço', 'preco', 'precos', 'preços', 'qual o preço', 'qual é o preço',
        'quanto custa', 'custa quanto', 'quanto é', 'quanto e', 'quanto fica',
        'fica quanto', 'sai quanto', 'quanto sai', 'valor', 'valores',
        'qual o valor', 'qual é o valor', 'valor do app', 'valor do projeto',

        // Orçamento
        'orçamento', 'orcamento', 'fazer orçamento', 'pedir orçamento',
        'solicitar orçamento', 'orçamento grátis', 'orcamento gratis',
        'orçamento sem compromisso', 'quero orçamento', 'preciso de orçamento',
        'me passa orçamento', 'manda orçamento', 'envia orçamento',

        // Custo
        'custo', 'custos', 'qual o custo', 'custo total', 'custo do app',
        'custo de desenvolvimento', 'custo médio', 'custo aproximado',
        'investimento', 'quanto invisto', 'quanto preciso investir',

        // Tabela
        'tabela de preços', 'tabela de precos', 'tabela', 'lista de preços',
        'preços de vocês', 'precos de vcs', 'pricing', 'price',

        // Faixa de preço
        'faixa de preço', 'faixa de preco', 'range de preço', 'range',
        'a partir de quanto', 'começa em quanto', 'comeca em quanto',
        'preço mínimo', 'preco minimo', 'preço máximo', 'preco maximo',
        'mais barato', 'mais caro', 'opção mais barata', 'opcao mais barata',

        // Variações informais
        'qnt custa', 'qt custa', 'qto custa', 'qnto', 'custa caro',
        'é caro', 'e caro', 'sai caro', 'muito caro', 'barato', 'baratinho',
        'na faixa de quanto', 'mais ou menos quanto', '+ou- quanto',

        // Comparação
        'mais barato que', 'mais caro que', 'preço competitivo', 'preço justo',
        'preco justo', 'bom preço', 'preço bom', 'preço acessível', 'acessível',

        // Erros de digitação
        'preoc', 'preco', 'presço', 'orcamneto', 'orsamento', 'custo',

        // Perguntas elaboradas
        'vocês podem me passar um orçamento', 'quanto vocês cobram',
        'qual o investimento necessário', 'tem como dar uma ideia de valor',
        'preciso saber quanto vou gastar', 'qual o budget necessário'
    ],

    // ============================================
    // 21. TIPOS DE APP / NICHO (100+ variações)
    // ============================================
    tiposApp: [
        // Delivery
        'app de delivery', 'aplicativo de delivery', 'app de entrega',
        'delivery', 'app tipo ifood', 'igual ifood', 'parecido com ifood',
        'app de comida', 'app de restaurante', 'app de lanchonete',
        'app de pizzaria', 'cardápio digital', 'cardapio digital',

        // E-commerce
        'app de loja', 'loja virtual', 'e-commerce', 'ecommerce', 'commerce',
        'app de vendas', 'vender pelo app', 'loja online', 'marketplace próprio',
        'app tipo shopee', 'igual mercado livre', 'app de produtos',

        // Serviços
        'app de serviços', 'app de servicos', 'app de agendamento',
        'agendamento', 'agenda', 'marcar horário', 'app de salão',
        'app de barbearia', 'app de clínica', 'app de consultório',
        'app tipo uber', 'app de transporte', 'app de motorista',

        // Cursos/Educação
        'app de cursos', 'app educacional', 'app de ensino', 'edtech',
        'plataforma de cursos', 'app de aulas', 'app de treinamento',
        'app tipo hotmart', 'infoproduto', 'área de membros', 'area de membros',

        // Fitness
        'app de academia', 'app fitness', 'app de treino', 'app de exercícios',
        'app de personal', 'app de saúde', 'app de nutrição', 'app de dieta',

        // Financeiro
        'app financeiro', 'app de finanças', 'app de controle', 'controle financeiro',
        'app de investimentos', 'fintech', 'app de pagamentos',

        // Social
        'app social', 'rede social', 'app de comunidade', 'app de chat',
        'app de mensagens', 'app de relacionamento', 'app de namoro',

        // Outros nichos
        'app de imobiliária', 'app imobiliário', 'app de pets', 'app pet',
        'app de eventos', 'app de ingressos', 'app de turismo', 'app de viagem',
        'app de hotel', 'app de reservas', 'app interno', 'app corporativo',
        'app empresarial', 'app b2b', 'app b2c',

        // Genéricos
        'que tipo de app', 'vocês fazem que tipo', 'fazem app de',
        'desenvolvem app de', 'criam app de', 'quero um app de',
        'preciso de um app de', 'meu nicho é', 'meu segmento é'
    ],

    // ============================================
    // 22. DESIGN / UI/UX (100+ variações)
    // ============================================
    design: [
        // Design geral
        'design', 'designer', 'designs', 'design do app', 'design de app',
        'visual', 'visual do app', 'aparência', 'aparencia', 'estética', 'estetica',
        'layout', 'layouts', 'layout do app', 'interface', 'interfaces',

        // UI/UX
        'ui', 'ux', 'ui/ux', 'ui ux', 'user interface', 'user experience',
        'experiência do usuário', 'experiencia do usuario', 'usabilidade',
        'intuitivo', 'fácil de usar', 'facil de usar',

        // Personalização visual
        'personalizar visual', 'personalizar design', 'customizar visual',
        'cores', 'paleta de cores', 'cor do app', 'cores do app',
        'minha marca', 'identidade visual', 'branding', 'logo', 'logotipo',

        // Telas
        'telas', 'quantas telas', 'tela', 'telas do app', 'protótipo',
        'prototipo', 'wireframe', 'mockup', 'mock-up', 'mock up',

        // Bonito
        'bonito', 'app bonito', 'visual bonito', 'design bonito',
        'moderno', 'visual moderno', 'design moderno', 'atualizado',
        'clean', 'minimalista', 'elegante', 'profissional',

        // Referência
        'referência de design', 'referencia de design', 'inspiração',
        'inspiracao', 'tenho referência', 'tenho modelo', 'quero igual',
        'parecido com', 'estilo de', 'no estilo',

        // Quem faz
        'vocês fazem o design', 'vcs fazem design', 'design incluído',
        'design incluso', 'tem designer', 'equipe de design',
        'eu mando o design', 'já tenho design', 'ja tenho design',

        // Variações informais
        'cara do app', 'carinha do app', 'visual maneiro', 'design dahora',
        'app com cara de', 'visual tipo', 'quero q seja bonito',

        // Erros
        'dezign', 'desing', 'desingn', 'disign', 'layou', 'laiaute'
    ],

    // ============================================
    // 23. INTEGRAÇÕES (100+ variações)
    // ============================================
    integracoes: [
        // Integração geral
        'integração', 'integracao', 'integrações', 'integracoes', 'integrar',
        'integrar com', 'integrado com', 'conectar', 'conectar com',
        'conexão', 'conexao', 'conectado', 'sincronizar', 'sincronização',

        // Pagamento
        'integrar pagamento', 'gateway', 'gateway de pagamento',
        'mercado pago', 'mercadopago', 'pagseguro', 'pag seguro',
        'stripe', 'paypal', 'cielo', 'rede', 'getnet', 'stone',
        'pagar.me', 'pagarme', 'asaas', 'iugu', 'wirecard',

        // ERP/Gestão
        'erp', 'sistema de gestão', 'sistema de gestao', 'integrar erp',
        'totvs', 'sap', 'bling', 'tiny', 'omie', 'conta azul', 'contaazul',
        'nuvemshop', 'tray', 'vtex', 'linx',

        // CRM
        'crm', 'integrar crm', 'hubspot', 'salesforce', 'pipedrive',
        'rd station', 'rdstation', 'active campaign', 'mailchimp',

        // Redes sociais
        'facebook', 'instagram', 'whatsapp api', 'api do whatsapp',
        'whatsapp business', 'telegram', 'twitter', 'linkedin',
        'login social', 'login facebook', 'login google', 'oauth',

        // Mapas/Localização
        'google maps', 'maps', 'mapa', 'mapas', 'geolocalização',
        'geolocalizacao', 'gps', 'rastreamento', 'rastrear',

        // Notificações
        'push', 'notificação push', 'notificacao push', 'firebase',
        'onesignal', 'one signal', 'pusher',

        // Outros
        'api externa', 'apis externas', 'webhook', 'webhooks',
        'zapier', 'make', 'integromat', 'n8n', 'api própria', 'api propria',

        // Perguntas
        'integra com', 'dá pra integrar', 'da pra integrar', 'tem integração',
        'vocês integram', 'vcs integram', 'conecta com', 'funciona com'
    ],

    // ============================================
    // 24. SEGURANÇA DO APP (80+ variações)
    // ============================================
    segurancaApp: [
        // Segurança geral
        'segurança do app', 'seguranca do app', 'app seguro', 'é seguro',
        'segurança dos dados', 'seguranca dos dados', 'dados seguros',
        'proteção de dados', 'protecao de dados', 'privacidade',

        // LGPD
        'lgpd', 'lei geral', 'lei de proteção', 'compliance', 'conformidade',
        'adequação lgpd', 'adequacao lgpd', 'termos de uso', 'política de privacidade',
        'politica de privacidade', 'gdpr',

        // Criptografia
        'criptografia', 'criptografado', 'encriptado', 'ssl', 'https',
        'certificado', 'certificado ssl', 'dados criptografados',

        // Autenticação
        'autenticação', 'autenticacao', 'login seguro', '2fa',
        'autenticação de dois fatores', 'two factor', 'verificação',
        'verificacao', 'biometria', 'face id', 'touch id', 'digital',

        // Backup
        'backup', 'backups', 'backup dos dados', 'recuperação', 'recuperacao',
        'restaurar dados', 'perder dados', 'dados perdidos',

        // Ataques
        'hacker', 'hackers', 'invasão', 'invasao', 'ataque', 'ataques',
        'vulnerabilidade', 'vulnerabilidades', 'protegido contra',

        // Variações
        'meus dados tão seguros', 'dados do cliente', 'informações seguras',
        'informacoes seguras', 'vazamento', 'vazar dados', 'roubar dados'
    ],

    // ============================================
    // 25. ESCALABILIDADE (60+ variações)
    // ============================================
    escalabilidade: [
        // Escalar
        'escalar', 'escalabilidade', 'escalável', 'escalavel', 'escala',
        'crescer', 'crescimento', 'app cresce', 'aumentar', 'expandir',

        // Usuários
        'muitos usuários', 'muitos usuarios', 'milhares de usuários',
        'milhões de usuários', 'milhoes de usuarios', 'quantidade de usuários',
        'quantos usuários', 'quantos usuarios', 'limite de usuários',
        'usuários simultâneos', 'usuarios simultaneos', 'acessos simultâneos',

        // Performance
        'performance', 'desempenho', 'aguenta', 'suporta', 'aguentar',
        'dar conta', 'capacidade', 'limite', 'sem limite', 'ilimitado',

        // Carga
        'carga', 'alta carga', 'pico', 'picos de acesso', 'black friday',
        'muito acesso', 'tráfego', 'trafego', 'alto tráfego', 'alto trafego',

        // Variações
        'e se crescer muito', 'se o app bombar', 'se viralizar',
        'vai aguentar', 'vai dar conta', 'não vai cair', 'nao vai cair',
        'fica lento com muita gente', 'preparado pra crescer'
    ],

    // ============================================
    // 26. PLATAFORMAS (60+ variações)
    // ============================================
    plataformas: [
        // iOS
        'ios', 'iphone', 'apple', 'ipad', 'para iphone', 'pra iphone',
        'funciona no iphone', 'roda no iphone', 'app pra ios', 'app de ios',
        'versão ios', 'versao ios', 'só ios', 'so ios', 'apenas ios',

        // Android
        'android', 'samsung', 'motorola', 'xiaomi', 'para android',
        'pra android', 'funciona no android', 'roda no android',
        'app pra android', 'app de android', 'versão android', 'versao android',
        'só android', 'so android', 'apenas android',

        // Ambos
        'ios e android', 'android e ios', 'ambas plataformas', 'duas plataformas',
        'multiplataforma', 'multi plataforma', 'cross platform', 'pra todos',
        'universal', 'qualquer celular', 'qualquer smartphone',

        // Web
        'web', 'versão web', 'versao web', 'site', 'navegador', 'browser',
        'acessar pelo computador', 'pc', 'desktop', 'notebook',
        'responsivo', 'mobile web', 'web app',

        // Perguntas
        'pra qual plataforma', 'quais plataformas', 'funciona em qual',
        'roda em qual', 'disponível pra', 'disponivel pra', 'compatível com',
        'compativel com', 'tem pra ios', 'tem pra android'
    ],

    // ============================================
    // 27. MONETIZAÇÃO (80+ variações)
    // ============================================
    monetizacao: [
        // Monetizar
        'monetizar', 'monetização', 'monetizacao', 'ganhar dinheiro',
        'lucrar', 'lucro', 'faturar', 'faturamento', 'receita',
        'como ganho dinheiro', 'como faço dinheiro', 'rentabilizar',

        // Assinatura
        'assinatura', 'assinaturas', 'plano', 'planos', 'mensalidade',
        'mensal', 'anual', 'subscription', 'recorrente', 'recorrência',
        'cobrar mensalidade', 'cobrar assinatura', 'modelo de assinatura',

        // In-app purchase
        'compra no app', 'in-app', 'in app', 'purchase', 'compras internas',
        'vender dentro do app', 'loja interna', 'moedas virtuais',

        // Anúncios
        'anúncios', 'anuncios', 'ads', 'publicidade', 'propaganda',
        'admob', 'adsense', 'facebook ads', 'monetizar com anúncios',
        'banner', 'banners', 'interstitial',

        // Freemium
        'freemium', 'free', 'grátis', 'gratis', 'premium', 'pro',
        'versão gratuita', 'versao gratuita', 'versão paga', 'versao paga',
        'recursos premium', 'funcionalidades premium', 'upgrade',

        // Comissão
        'comissão', 'comissao', 'taxa por venda', 'porcentagem',
        'cobrar comissão', 'ganhar comissão', 'marketplace fee',

        // Perguntas
        'como vou ganhar', 'como monetizo', 'formas de monetizar',
        'modelo de negócio', 'modelo de negocio', 'business model'
    ],

    // ============================================
    // 28. TESTE / QA (60+ variações)
    // ============================================
    teste: [
        // Teste geral
        'teste', 'testes', 'testar', 'testado', 'testagem', 'testing',
        'vocês testam', 'vcs testam', 'quem testa', 'como testa',

        // QA
        'qa', 'quality assurance', 'qualidade', 'controle de qualidade',
        'garantia de qualidade', 'verificação', 'verificacao',

        // Beta
        'beta', 'versão beta', 'versao beta', 'beta teste', 'beta test',
        'testflight', 'test flight', 'teste beta', 'usuários beta',

        // Bugs
        'bug', 'bugs', 'sem bug', 'livre de bugs', 'correção de bugs',
        'correcao de bugs', 'debugar', 'debug', 'debugging',

        // Homologação
        'homologação', 'homologacao', 'homologar', 'ambiente de teste',
        'ambiente de homologação', 'staging', 'produção', 'producao',

        // Variações
        'posso testar antes', 'ver antes de lançar', 'preview',
        'demonstração', 'demonstracao', 'demo funcional', 'protótipo funcional'
    ],

    // ============================================
    // 29. CONTRATO / JURÍDICO (80+ variações)
    // ============================================
    contratual: [
        // Contrato
        'contrato', 'contratos', 'tem contrato', 'faz contrato',
        'assinamos contrato', 'assinar contrato', 'contrato formal',
        'contrato de prestação', 'prestação de serviço', 'contrato de serviço',

        // Propriedade
        'propriedade', 'dono do app', 'dono do código', 'dono do codigo',
        'código fonte', 'codigo fonte', 'source code', 'entregam o código',
        'o app é meu', 'o app e meu', 'fico com o app', 'direitos',
        'o app será meu', 'o app sera meu', 'app será meu', 'app sera meu',
        'será meu', 'sera meu', 'vai ser meu', 'é meu', 'e meu',
        'código fonte será meu', 'codigo fonte sera meu', 'o código será meu',
        'o codigo sera meu', 'vou ser dono', 'serei dono', 'fico dono',
        'direitos autorais', 'propriedade intelectual', 'ip',

        // Exclusividade
        'exclusivo', 'exclusividade', 'só meu', 'so meu', 'apenas meu',
        'ninguém mais usa', 'ninguem mais usa', 'template', 'não é template',
        'nao e template', 'do zero', 'único', 'unico',

        // NDA
        'nda', 'confidencialidade', 'sigilo', 'sigiloso', 'confidencial',
        'acordo de confidencialidade', 'não divulgar', 'nao divulgar',

        // Nota fiscal
        'nota fiscal', 'nf', 'nfe', 'nota', 'emite nota', 'emitem nota',
        'nota fiscal de serviço', 'nfs', 'recibo', 'comprovante',

        // Cancelamento
        'cancelar', 'cancelamento', 'rescindir', 'rescisão', 'rescisao',
        'quebra de contrato', 'multa', 'multa contratual',

        // Variações
        'é tudo documentado', 'e tudo documentado', 'juridicamente',
        'legalmente', 'amparo legal', 'proteção legal', 'protecao legal'
    ],

    // ============================================
    // 30. REVISÕES / ALTERAÇÕES (60+ variações)
    // ============================================
    revisoes: [
        // Revisão
        'revisão', 'revisao', 'revisões', 'revisoes', 'revisar',
        'quantas revisões', 'quantas revisoes', 'direito a revisão',
        'incluir revisões', 'revisões inclusas', 'revisões incluídas',

        // Alteração
        'alteração', 'alteracao', 'alterações', 'alteracoes', 'alterar',
        'mudar', 'mudança', 'mudanca', 'modificar', 'modificação', 'modificacao',
        'fazer alterações', 'pedir alterações', 'solicitar alterações',

        // Ajuste
        'ajuste', 'ajustes', 'ajustar', 'pequenos ajustes', 'ajuste fino',
        'correção', 'correcao', 'correções', 'correcoes', 'corrigir',

        // Feedback
        'feedback', 'dar feedback', 'meu feedback', 'opinar', 'opinião',
        'opiniao', 'aprovar', 'aprovação', 'aprovacao', 'reprovar',

        // Iteração
        'iteração', 'iteracao', 'rodada', 'rodadas', 'ciclo', 'ciclos',
        'versão', 'versao', 'v1', 'v2', 'versão final', 'versao final',

        // Variações
        'se eu não gostar', 'se eu nao gostar', 'não ficou bom', 'nao ficou bom',
        'quero diferente', 'mudar isso', 'trocar isso', 'refazer isso'
    ],

    // ============================================
    // 31. REUNIÕES / COMUNICAÇÃO (60+ variações)
    // ============================================
    reunioes: [
        // Reunião
        'reunião', 'reuniao', 'reuniões', 'reunioes', 'meeting', 'meet',
        'call', 'chamada', 'videochamada', 'videoconferência', 'videoconferencia',
        'agendar reunião', 'marcar reunião', 'fazer reunião',

        // Frequência
        'quantas reuniões', 'reuniões frequentes', 'reunião semanal',
        'reunião diária', 'daily', 'weekly', 'quinzenal', 'mensal',
        'de quanto em quanto tempo', 'frequência', 'frequencia',

        // Ferramentas
        'zoom', 'google meet', 'teams', 'microsoft teams', 'skype',
        'discord', 'slack', 'whatsapp', 'telegram',

        // Comunicação
        'comunicação', 'comunicacao', 'como nos comunicamos', 'falar com vocês',
        'contato direto', 'acesso direto', 'falar quando quiser',
        'resposta rápida', 'tempo de resposta', 'sla',

        // Acompanhamento
        'acompanhar projeto', 'status do projeto', 'atualização', 'atualizacao',
        'report', 'relatório', 'relatorio', 'dashboard', 'painel',

        // Variações
        'vou ter contato', 'posso ligar', 'vocês respondem rápido',
        'demora pra responder', 'horário de atendimento', 'horario de atendimento'
    ],

    // ============================================
    // 32. INDICAÇÕES / REFERÊNCIAS (50+ variações)
    // ============================================
    indicacoes: [
        // Indicação
        'indicação', 'indicacao', 'indicar', 'indico', 'indicaram',
        'alguém indicou', 'alguem indicou', 'fui indicado', 'recomendação',
        'recomendacao', 'recomendar', 'recomendaram',

        // Como conheceu
        'como conheci', 'conheci vocês', 'achei vocês', 'encontrei vocês',
        'vi vocês', 'descobri vocês', 'soube de vocês',

        // Origem
        'vim pelo', 'vi no', 'achei no', 'encontrei no', 'google', 'instagram',
        'facebook', 'linkedin', 'youtube', 'tiktok', 'anúncio', 'anuncio',
        'propaganda', 'publicidade', 'post', 'artigo', 'blog',

        // Programa de indicação
        'programa de indicação', 'ganho algo', 'comissão por indicar',
        'indicar amigo', 'parceria', 'afiliado', 'affiliate'
    ],

    // ============================================
    // 33. COMPARAÇÃO CONCORRENTES (80+ variações)
    // ============================================
    comparacao: [
        // Comparar
        'comparar', 'comparação', 'comparacao', 'comparando', 'versus', 'vs',
        'contra', 'ou', 'diferença entre', 'diferenca entre',

        // Outros fornecedores
        'outra empresa', 'outras empresas', 'outro desenvolvedor', 'outro dev',
        'freelancer', 'freela', 'agência', 'agencia', 'software house',
        'fábrica de software', 'fabrica de software',

        // No-code/Low-code
        'no-code', 'no code', 'nocode', 'low-code', 'low code', 'lowcode',
        'bubble', 'flutterflow', 'adalo', 'glide', 'appgyver', 'thunkable',
        'kodular', 'appsheet', 'power apps',

        // Construtores
        'construtor de app', 'app builder', 'criar app sozinho',
        'fazer meu próprio', 'fazer meu proprio', 'faço eu mesmo',
        'faco eu mesmo', 'diy', 'template pronto',

        // Perguntas
        'vocês são melhores que', 'vcs sao melhores que', 'por que não usar',
        'por que nao usar', 'vale mais a pena', 'compensa mais',
        'qual a vantagem sobre', 'diferente de', 'melhor que',

        // Variações
        'já orçei com outros', 'ja orcei com outros', 'tenho outras propostas',
        'estou cotando', 'to cotando', 'pesquisando opções', 'pesquisando opcoes'
    ],

    // ============================================
    // 34. PROBLEMAS COMUNS (60+ variações)
    // ============================================
    problemas: [
        // Problema atual
        'problema', 'problemas', 'tenho um problema', 'meu problema',
        'estou com problema', 'to com problema', 'dificuldade', 'dificuldades',
        'desafio', 'desafios', 'obstáculo', 'obstaculo',

        // Dor do cliente
        'dor', 'dores', 'minha dor', 'maior dor', 'o que me incomoda',
        'o que me atrapalha', 'perco tempo', 'perco dinheiro', 'gastando muito',

        // Situações
        'não consigo', 'nao consigo', 'não dá pra', 'nao da pra',
        'difícil de', 'dificil de', 'complicado', 'trabalhoso', 'manual',
        'muito manual', 'processo manual', 'planilha', 'excel', 'papel',

        // Resolver
        'resolver', 'resolução', 'resolucao', 'solução', 'solucao',
        'solucionar', 'como resolver', 'vocês resolvem', 'vcs resolvem',
        'ajudam com', 'ajuda com', 'pode ajudar',

        // Variações
        'tô sofrendo com', 'to sofrendo com', 'cansado de', 'farto de',
        'não aguento mais', 'nao aguento mais', 'preciso melhorar'
    ],

    // ============================================
    // 35. RENOVAÇÃO / CONTINUIDADE (50+ variações)
    // ============================================
    renovacao: [
        // Renovar
        'renovar', 'renovação', 'renovacao', 'renova', 'renovando',
        'continuar', 'continuidade', 'dar continuidade', 'seguir',

        // Contrato
        'renovar contrato', 'novo contrato', 'estender contrato',
        'prorrogar', 'prorrogação', 'prorrogacao', 'extensão', 'extensao',

        // Manutenção
        'plano de manutenção', 'plano de manutencao', 'contrato de manutenção',
        'suporte contínuo', 'suporte continuo', 'suporte mensal',
        'fee mensal', 'mensalidade de suporte',

        // Evolução
        'evoluir app', 'evolução', 'evolucao', 'novas funcionalidades',
        'adicionar depois', 'fase 2', 'segunda fase', 'próxima fase',
        'proxima fase', 'roadmap', 'backlog',

        // Variações
        'depois do app pronto', 'quando terminar', 'e depois',
        'longo prazo', 'parceria longa', 'relacionamento contínuo'
    ]
};

// ============================================
// SISTEMA AVANÇADO DE NLU - VERSÃO 2.0
// Normalização inteligente + Detecção semântica
// Cobertura 100x maior para variações linguísticas
// ============================================

// ============================================
// 1. PARTÍCULAS EXPLETIVAS (250+ palavras)
// ============================================
const particulasExpletivas = [
    // === INTERJEIÇÕES E EXPRESSÕES (60+) ===
    'ne', 'né', 'neh', 'viu', 'sabe', 'entende', 'entendeu', 'sacou', 'sacas', 'percebe', 'capta', 'pegou',
    'ta', 'tá', 'ok', 'okay', 'blz', 'beleza', 'suave', 'tranquilo', 'tranqui', 'firmeza', 'fechou',
    'hein', 'heim', 'ein', 'uai', 'ué', 'ue', 'oxe', 'oxente', 'eita', 'eta', 'vixe', 'vixi', 'opa', 'epa',
    'nossa', 'meu deus', 'jesus', 'cruz', 'ave maria', 'misericordia', 'minha nossa', 'credo',
    'caramba', 'caraca', 'carai', 'caracas', 'puxa', 'poxa', 'puts', 'putz', 'pqp', 'puta merda',
    'mano', 'mana', 'cara', 'bicho', 'véi', 'vei', 'veio', 'brother', 'bro', 'parsa', 'parça', 'champs',
    'parceiro', 'parceira', 'chefe', 'patrão', 'chefia', 'amigo', 'amiga', 'colega', 'cumpadre', 'cumadi',
    'tipo', 'tipo assim', 'assim', 'basicamente', 'literalmente', 'praticamente', 'tecnicamente',
    'meio que', 'mais ou menos', 'sei la', 'sei lá', 'nao sei', 'não sei', 'sabe como', 'sabe como é',
    'acho que', 'acho', 'talvez', 'quem sabe', 'vai saber', 'sei eu', 'vai entender',

    // === CONECTIVOS VAZIOS (50+) ===
    'entao', 'então', 'pois', 'pois é', 'pois então', 'logo', 'portanto', 'sendo assim', 'dessa forma',
    'ai', 'aí', 'daí', 'dai', 'la', 'lá', 'aqui', 'ali', 'acolá', 'aca', 'acá',
    'bom', 'bem', 'ora', 'ora bem', 'pois bem', 'muito bem', 'tá bem', 'ta bem',
    'olha', 'olhe', 'olha só', 'olha so', 'olha aqui', 'veja', 'veja bem', 'veja só', 'repara', 'nota',
    'escuta', 'escute', 'ouve', 'ouça', 'presta atenção', 'presta atencao', 'atenta', 'liga',
    'enfim', 'afinal', 'finalmente', 'por fim', 'no final', 'no fim', 'ao final', 'em fim',
    'alias', 'aliás', 'a proposito', 'a propósito', 'por falar nisso', 'falando nisso', 'já que tocou',
    'inclusive', 'por acaso', 'por sinal', 'diga-se de passagem', 'entre nos', 'entre nós', 'cá entre nós',
    'por exemplo', 'tipo', 'como', 'assim como', 'tal como', 'feito', 'igual',

    // === HESITAÇÕES E PAUSAS (40+) ===
    'hm', 'hmm', 'hmmm', 'hmmmm', 'ah', 'ahh', 'ahhh', 'eh', 'ehh', 'ehhh', 'ih', 'ihh',
    'ahn', 'aham', 'uhum', 'uh', 'uhh', 'er', 'err', 'errr', 'erm', 'hum', 'ham',
    'é que', 'e que', 'só que', 'so que', 'mas tipo', 'é tipo', 'tipo que', 'mas é que',
    'como é que', 'como que', 'o que que', 'que que', 'quem que', 'qual que', 'onde que', 'quando que',
    'deixa eu ver', 'deixa ver', 'deixa eu pensar', 'perai', 'pera aí', 'pera ai', 'espera', 'espera aí',
    'calma', 'calma aí', 'calma ai', 'um momento', 'um segundo', 'um minuto', 'um instantinho',
    'como posso dizer', 'como diria', 'por assim dizer', 'digamos', 'vamos dizer',

    // === REFORÇOS DESNECESSÁRIOS (40+) ===
    'mesmo', 'realmente', 'verdadeiramente', 'certamente', 'com certeza', 'sem duvida', 'sem dúvida',
    'na verdade', 'de verdade', 'pra valer', 'de fato', 'efetivamente', 'definitivamente',
    'sinceramente', 'honestamente', 'francamente', 'genuinamente', 'seriamente',
    'pra falar a verdade', 'sendo sincero', 'sendo honesto', 'sem mentira', 'juro', 'te juro', 'prometo',
    'falando serio', 'falando sério', 'serio', 'sério', 'brincadeira', 'zueira', 'zoas',
    'ou seja', 'quer dizer', 'isto é', 'isso é', 'digamos', 'digamos assim', 'vamos dizer assim',
    'por assim dizer', 'de certa forma', 'de certo modo', 'em outras palavras', 'em resumo', 'resumindo',
    'no fundo', 'basicamente falando', 'essencialmente', 'fundamentalmente',

    // === PERGUNTAS RETÓRICAS (30+) ===
    'ou nao', 'ou não', 'certo', 'correto', 'verdade', 'nao e', 'não é', 'ne verdade', 'né verdade',
    'concorda', 'entende', 'percebe', 'capta', 'sacou', 'pegou a ideia', 'ta ligado', 'tá ligado',
    'sera que', 'será que', 'sera', 'será', 'pode ser que', 'talvez', 'quem sabe', 'vai que',
    'e se', 'imagine', 'imagina', 'pensa', 'pensa comigo', 'olha só', 'veja só',
    'nao acha', 'não acha', 'nao achas', 'não achas', 'tu acha', 'vc acha', 'voce acha', 'você acha',

    // === PEDIDOS DE CORTESIA (30+) ===
    'por favor', 'pf', 'pfv', 'pfvr', 'please', 'pls', 'plz', 'pliz',
    'por gentileza', 'por obsequio', 'por obséquio', 'se possivel', 'se possível', 'se for possivel',
    'se puder', 'quando puder', 'se der', 'se tiver como', 'se rolar', 'se pintar', 'caso possa',
    'agradeço', 'agradeco', 'obrigado', 'obrigada', 'vlw', 'valeu', 'thanks', 'tks', 'thx',
    'desculpa', 'desculpe', 'perdao', 'perdão', 'me desculpa', 'sorry', 'sinto muito', 'foi mal',
    'com licenca', 'com licença', 'licenca', 'licença', 'da licenca', 'dá licença',

    // === PRONOMES E TRATAMENTOS (30+) ===
    'voce', 'você', 'voces', 'vocês', 'vc', 'vcs', 'tu', 'teu', 'tua', 'ti', 'te', 'lhe',
    'a gente', 'nós', 'nos', 'eu', 'mim', 'comigo', 'conosco', 'convosco',
    'galera', 'pessoal', 'gente', 'turma', 'rapaziada', 'moçada', 'povão', 'povo',
    'senhor', 'senhora', 'sr', 'sra', 'dona', 'seu', 'moço', 'moça', 'rapaz', 'garoto', 'garota',

    // === ADVÉRBIOS REDUNDANTES (25+) ===
    'muito', 'demais', 'bastante', 'super', 'mega', 'ultra', 'hiper', 'extremamente',
    'bem', 'tao', 'tão', 'tanto', 'quase', 'apenas', 'somente', 'só', 'simplesmente',
    'sempre', 'nunca', 'jamais', 'ainda', 'já', 'ja', 'agora', 'logo', 'cedo', 'tarde',

    // === EXPRESSÕES DE TEMPO VAGAS (20+) ===
    'um dia', 'algum dia', 'qualquer dia', 'outro dia', 'esses dias', 'dias desses',
    'uma hora', 'alguma hora', 'qualquer hora', 'depois', 'mais tarde', 'daqui a pouco',
    'em breve', 'logo logo', 'já já', 'ja ja', 'num instante', 'rapidinho',

    // === REGIONALISMOS (40+) ===
    'bah', 'tchê', 'tche', 'tri', 'barbaridade', 'mas bah', 'bah tchê', 'guri', 'guria', 'piá',
    'sô', 'so', 'uai', 'trem', 'nó', 'no', 'cê', 'ocê', 'ôxe', 'bobage', 'bobagi', 'uê',
    'véi', 'vei', 'mainha', 'painho', 'oxe', 'oxente', 'arretado', 'massa', 'lascado', 'abestado',
    'meu', 'mano', 'firmeza', 'é nois', 'e nois', 'tá ligado', 'ta ligado', 'mermão', 'mano véi',
    'rapaz', 'rapaiz', 'muié', 'homi', 'cabra', 'macho', 'bicho', 'cumpadi', 'cumpade',

    // === GÍRIAS INTERNET (40+) ===
    'kk', 'kkk', 'kkkk', 'kkkkk', 'rs', 'rsrs', 'rsrsrs', 'haha', 'hahaha', 'huehue', 'huehuehue',
    'lol', 'lmao', 'rofl', 'omg', 'wtf', 'tbh', 'btw', 'fyi', 'asap', 'afk', 'brb',
    'tmj', 'slc', 'slk', 'mds', 'pdc', 'flw', 'vlw', 'blz', 'pfvr', 'msg', 'dm', 'pv'
];

// ============================================
// 2. LEMATIZAÇÃO BÁSICA (150+ verbos)
// ============================================
const lematizacaoVerbos = {
    // Ser/Estar
    'sou': 'ser', 'é': 'ser', 'e': 'ser', 'somos': 'ser', 'são': 'ser', 'sao': 'ser', 'era': 'ser', 'eram': 'ser',
    'foi': 'ser', 'foram': 'ser', 'será': 'ser', 'sera': 'ser', 'serão': 'ser', 'serao': 'ser', 'seria': 'ser', 'seriam': 'ser',
    'estou': 'estar', 'está': 'estar', 'esta': 'estar', 'estamos': 'estar', 'estão': 'estar', 'estao': 'estar',
    'estava': 'estar', 'estavam': 'estar', 'esteve': 'estar', 'estará': 'estar', 'estara': 'estar', 'estaria': 'estar',

    // Ter/Haver
    'tenho': 'ter', 'tem': 'ter', 'temos': 'ter', 'têm': 'ter', 'tem': 'ter', 'tinha': 'ter', 'tinham': 'ter',
    'teve': 'ter', 'tiveram': 'ter', 'terá': 'ter', 'tera': 'ter', 'terão': 'ter', 'teria': 'ter', 'teriam': 'ter',
    'há': 'haver', 'ha': 'haver', 'havia': 'haver', 'houve': 'haver', 'haverá': 'haver', 'havera': 'haver',

    // Querer/Poder/Dever
    'quero': 'querer', 'quer': 'querer', 'queremos': 'querer', 'querem': 'querer', 'queria': 'querer', 'quis': 'querer', 'quiser': 'querer',
    'posso': 'poder', 'pode': 'poder', 'podemos': 'poder', 'podem': 'poder', 'podia': 'poder', 'pôde': 'poder', 'poderá': 'poder', 'podera': 'poder', 'poderia': 'poder',
    'devo': 'dever', 'deve': 'dever', 'devemos': 'dever', 'devem': 'dever', 'devia': 'dever', 'deveria': 'dever',

    // Fazer/Dar
    'faço': 'fazer', 'faco': 'fazer', 'faz': 'fazer', 'fazemos': 'fazer', 'fazem': 'fazer', 'fazia': 'fazer', 'fez': 'fazer', 'fará': 'fazer', 'fara': 'fazer', 'faria': 'fazer',
    'dou': 'dar', 'dá': 'dar', 'da': 'dar', 'damos': 'dar', 'dão': 'dar', 'dao': 'dar', 'dava': 'dar', 'deu': 'dar', 'dará': 'dar', 'dara': 'dar', 'daria': 'dar',

    // Ir/Vir
    'vou': 'ir', 'vai': 'ir', 'vamos': 'ir', 'vão': 'ir', 'vao': 'ir', 'ia': 'ir', 'iam': 'ir', 'foi': 'ir', 'irá': 'ir', 'ira': 'ir', 'iria': 'ir',
    'venho': 'vir', 'vem': 'vir', 'vimos': 'vir', 'vêm': 'vir', 'vinha': 'vir', 'veio': 'vir', 'virá': 'vir', 'vira': 'vir', 'viria': 'vir',

    // Saber/Conhecer/Ver
    'sei': 'saber', 'sabe': 'saber', 'sabemos': 'saber', 'sabem': 'saber', 'sabia': 'saber', 'soube': 'saber', 'saberá': 'saber',
    'conheço': 'conhecer', 'conhece': 'conhecer', 'conhecemos': 'conhecer', 'conhecem': 'conhecer', 'conhecia': 'conhecer', 'conheceu': 'conhecer',
    'vejo': 'ver', 'vê': 'ver', 've': 'ver', 'vemos': 'ver', 'veem': 'ver', 'via': 'ver', 'viu': 'ver', 'verá': 'ver', 'vera': 'ver',

    // Ficar/Pegar/Deixar
    'fico': 'ficar', 'fica': 'ficar', 'ficamos': 'ficar', 'ficam': 'ficar', 'ficava': 'ficar', 'ficou': 'ficar', 'ficará': 'ficar', 'ficara': 'ficar', 'ficaria': 'ficar',
    'pego': 'pegar', 'pega': 'pegar', 'pegamos': 'pegar', 'pegam': 'pegar', 'pegava': 'pegar', 'pegou': 'pegar', 'pegará': 'pegar',
    'deixo': 'deixar', 'deixa': 'deixar', 'deixamos': 'deixar', 'deixam': 'deixar', 'deixava': 'deixar', 'deixou': 'deixar', 'deixará': 'deixar',

    // Custar/Demorar/Levar
    'custa': 'custar', 'custam': 'custar', 'custava': 'custar', 'custou': 'custar', 'custará': 'custar', 'custara': 'custar', 'custaria': 'custar',
    'demora': 'demorar', 'demoram': 'demorar', 'demorava': 'demorar', 'demorou': 'demorar', 'demorará': 'demorar', 'demorara': 'demorar',
    'leva': 'levar', 'levam': 'levar', 'levava': 'levar', 'levou': 'levar', 'levará': 'levar', 'levara': 'levar',

    // Precisar/Conseguir/Funcionar
    'preciso': 'precisar', 'precisa': 'precisar', 'precisamos': 'precisar', 'precisam': 'precisar', 'precisava': 'precisar', 'precisou': 'precisar', 'precisará': 'precisar',
    'consigo': 'conseguir', 'consegue': 'conseguir', 'conseguimos': 'conseguir', 'conseguem': 'conseguir', 'conseguia': 'conseguir', 'conseguiu': 'conseguir', 'conseguirá': 'conseguir',
    'funciona': 'funcionar', 'funcionam': 'funcionar', 'funcionava': 'funcionar', 'funcionou': 'funcionar', 'funcionará': 'funcionar',

    // Pagar/Cobrar/Parcelar
    'pago': 'pagar', 'paga': 'pagar', 'pagamos': 'pagar', 'pagam': 'pagar', 'pagava': 'pagar', 'pagou': 'pagar', 'pagará': 'pagar', 'pagara': 'pagar',
    'cobro': 'cobrar', 'cobra': 'cobrar', 'cobramos': 'cobrar', 'cobram': 'cobrar', 'cobrava': 'cobrar', 'cobrou': 'cobrar', 'cobrará': 'cobrar',
    'parcelo': 'parcelar', 'parcela': 'parcelar', 'parcelamos': 'parcelar', 'parcelam': 'parcelar', 'parcelou': 'parcelar',

    // Incluir/Entregar/Publicar
    'incluo': 'incluir', 'inclui': 'incluir', 'incluímos': 'incluir', 'incluimos': 'incluir', 'incluem': 'incluir', 'incluía': 'incluir', 'incluiu': 'incluir', 'incluirá': 'incluir',
    'entrego': 'entregar', 'entrega': 'entregar', 'entregamos': 'entregar', 'entregam': 'entregar', 'entregava': 'entregar', 'entregou': 'entregar', 'entregará': 'entregar',
    'publico': 'publicar', 'publica': 'publicar', 'publicamos': 'publicar', 'publicam': 'publicar', 'publicou': 'publicar', 'publicará': 'publicar',

    // Criar/Desenvolver/Construir
    'crio': 'criar', 'cria': 'criar', 'criamos': 'criar', 'criam': 'criar', 'criava': 'criar', 'criou': 'criar', 'criará': 'criar',
    'desenvolvo': 'desenvolver', 'desenvolve': 'desenvolver', 'desenvolvemos': 'desenvolver', 'desenvolvem': 'desenvolver', 'desenvolveu': 'desenvolver', 'desenvolverá': 'desenvolver',
    'construo': 'construir', 'constrói': 'construir', 'construimos': 'construir', 'constroem': 'construir', 'construiu': 'construir', 'construirá': 'construir',

    // Aceitar/Oferecer/Garantir
    'aceito': 'aceitar', 'aceita': 'aceitar', 'aceitamos': 'aceitar', 'aceitam': 'aceitar', 'aceitou': 'aceitar', 'aceitará': 'aceitar',
    'ofereço': 'oferecer', 'ofereco': 'oferecer', 'oferece': 'oferecer', 'oferecemos': 'oferecer', 'oferecem': 'oferecer', 'ofereceu': 'oferecer', 'oferecerá': 'oferecer',
    'garanto': 'garantir', 'garante': 'garantir', 'garantimos': 'garantir', 'garantem': 'garantir', 'garantiu': 'garantir', 'garantirá': 'garantir'
};

// ============================================
// 3. SINÔNIMOS E VARIAÇÕES SEMÂNTICAS
// ============================================
const sinonimos = {
    app: ['app', 'aplicativo', 'aplicacao', 'aplicação', 'sistema', 'software', 'programa', 'plataforma', 'solucao', 'solução', 'produto', 'ferramenta', 'projeto', 'mvp'],
    preco: ['preco', 'preço', 'valor', 'custo', 'investimento', 'grana', 'dinheiro', 'budget', 'orcamento', 'orçamento', 'quanto', 'cifra', 'montante', 'verba'],
    prazo: ['prazo', 'tempo', 'duracao', 'duração', 'periodo', 'período', 'dias', 'semanas', 'meses', 'deadline', 'entrega', 'previsao', 'previsão', 'estimativa'],
    garantia: ['garantia', 'seguranca', 'segurança', 'certeza', 'confianca', 'confiança', 'protecao', 'proteção', 'risco', 'reembolso', 'devolucao', 'devolução'],
    suporte: ['suporte', 'ajuda', 'atendimento', 'assistencia', 'assistência', 'apoio', 'auxilio', 'auxílio', 'manutencao', 'manutenção'],
    meu: ['meu', 'minha', 'nosso', 'nossa', 'proprio', 'próprio', 'propria', 'própria', 'pertence', 'dono', 'dona', 'proprietario', 'proprietária', 'posse'],
    codigo: ['codigo', 'código', 'source', 'fonte', 'repositorio', 'repositório', 'github', 'gitlab', 'bitbucket'],
    criar: ['criar', 'fazer', 'desenvolver', 'construir', 'montar', 'produzir', 'elaborar', 'implementar', 'buildar'],
    pagar: ['pagar', 'pagamento', 'parcela', 'parcelar', 'dividir', 'entrada', 'quitar', 'desembolsar', 'investir']
};

// ============================================
// 4. NORMALIZAÇÕES COMPOSTAS
// ============================================
const normalizacoesVerbais = [
    // === PROPRIEDADE/POSSE (expandido) ===
    { padrao: /\b(vai ser|sera|será|é|e|fica|ficara|ficará|pertence|pertencera|pertencerá|continua sendo|passa a ser|torna-se|vira)\s+(meu|minha|nosso|nossa|dele|dela|deles|delas|teu|tua|seu|sua)\b/gi, substituir: 'POSSE_MEU' },
    { padrao: /\b(meu|minha|nosso|nossa)\s+(proprio|propria|próprio|própria|mesmo|mesma)\b/gi, substituir: 'POSSE_MEU' },
    { padrao: /\b(sou|serei|vou ser|seria|me torno|me tornarei|fico|ficarei|viro)\s*(o|a)?\s*(dono|dona|proprietario|proprietária|responsavel|responsável|titular)\b/gi, substituir: 'POSSE_DONO' },
    { padrao: /\b(fico|ficarei|vou ficar|ficaria|permaneco|permaneço)\s*(com|sendo)?\s*(o|a)?\s*(dono|dona|posse|propriedade|proprietario|proprietária)?\b/gi, substituir: 'POSSE_FICAR' },
    { padrao: /\b(pertence|pertencera|pertencerá|passa a ser|se torna)\s*(a mim|pra mim|para mim|meu|minha|nosso|nossa)\b/gi, substituir: 'POSSE_MEU' },
    { padrao: /\b(todo|tudo|inteiro|completo|100%|cem por cento)\s*(meu|minha|nosso|nossa|seu|sua)\b/gi, substituir: 'POSSE_MEU' },

    // === CÓDIGO FONTE ===
    { padrao: /\b(codigo|código)\s*(fonte|source|completo|inteiro|todo|original)?\b/gi, substituir: 'CODIGO_FONTE' },
    { padrao: /\bsource\s*code\b/gi, substituir: 'CODIGO_FONTE' },
    { padrao: /\b(repositorio|repositório|repo|github|gitlab|bitbucket)\b/gi, substituir: 'CODIGO_FONTE' },

    // === APP/PRODUTO ===
    { padrao: /\b(aplicativo|aplicacao|aplicação|application|sistema|software|programa|plataforma|solucao|solução|mvp|produto\s+digital)\b/gi, substituir: 'APP' },

    // === PREÇO/VALOR (expandido) ===
    { padrao: /\b(quanto\s+custa|qual\s+(o\s+)?(preco|preço|valor)|quanto\s+(fica|sai|é|e|da|dá)|me\s+passa\s+(o\s+)?(valor|preco|preço)|qual\s+o\s+investimento)\b/gi, substituir: 'PERGUNTA_PRECO' },
    { padrao: /\b(tabela|lista|faixa|range)\s*(de\s+)?(preco|preço|precos|preços|valores)\b/gi, substituir: 'PERGUNTA_PRECO' },
    { padrao: /\b(investimento|orcamento|orçamento|budget|verba)\s*(necessario|necessário|minimo|mínimo|medio|médio|total|aproximado)?\b/gi, substituir: 'PERGUNTA_PRECO' },
    { padrao: /\b(mais\s+barato|mais\s+caro|fica\s+em\s+quanto|sai\s+por\s+quanto|custa\s+quanto|valor\s+total)\b/gi, substituir: 'PERGUNTA_PRECO' },

    // === PRAZO/TEMPO (expandido) ===
    { padrao: /\b(quanto\s+tempo|qual\s+(o\s+)?prazo|demora\s+quanto|leva\s+quanto|quando\s+fica\s+pronto|tempo\s+de\s+(entrega|desenvolvimento|producao|produção))\b/gi, substituir: 'PERGUNTA_PRAZO' },
    { padrao: /\b(prazo|tempo|previsao|previsão|estimativa)\s*(de\s+)?(entrega|desenvolvimento|conclusao|conclusão|finalizacao|finalização)\b/gi, substituir: 'PERGUNTA_PRAZO' },
    { padrao: /\b(dias|semanas|meses|horas)\s*(pra|para|de|até|ate)\s*(entrega|entregar|terminar|concluir|ficar\s+pronto|finalizar)\b/gi, substituir: 'PERGUNTA_PRAZO' },
    { padrao: /\b(urgente|urgencia|urgência|pressa|rapido|rápido|express|asap|pra\s+ontem|correndo|voando)\b/gi, substituir: 'URGENTE' },

    // === PAGAMENTO (expandido) ===
    { padrao: /\b(formas?|meios?|opcoes|opções|condicoes|condições|metodos|métodos)\s*(de\s+)?pagamento\b/gi, substituir: 'PERGUNTA_PAGAMENTO' },
    { padrao: /\b(como|posso|da\s+pra|dá\s+pra|consigo|tem\s+como)\s*(eu\s+)?pagar\b/gi, substituir: 'PERGUNTA_PAGAMENTO' },
    { padrao: /\b(parcela|parcelamento|parcelo|parcelar|dividir|divide|fracionar)\s*(em\s+)?(quantas|quanto|ate|até)?\b/gi, substituir: 'PERGUNTA_PAGAMENTO' },
    { padrao: /\b(pix|cartao|cartão|boleto|transferencia|transferência|credito|crédito|debito|débito|ted|doc)\b/gi, substituir: 'METODO_PAGAMENTO' },
    { padrao: /\b(entrada|sinal|adiantamento|a\s+vista|à\s+vista|avista|desconto)\b/gi, substituir: 'PERGUNTA_PAGAMENTO' },

    // === GARANTIA (expandido) ===
    { padrao: /\b(tem|qual|como\s+é|como\s+e|existe|oferece|da|dá)\s*(alguma\s+)?(garantia|seguranca|segurança)\b/gi, substituir: 'PERGUNTA_GARANTIA' },
    { padrao: /\b(e\s+se|se\s+eu|caso\s+eu)\s*.{0,20}(nao|não)\s+(gostar|curtir|ficar\s+satisfeito|aprovar|quiser)\b/gi, substituir: 'PERGUNTA_GARANTIA' },
    { padrao: /\b(se\s+der|caso\s+de|acontecer)\s*.{0,10}(errado|problema|bug|erro|falha|merda|ruim)\b/gi, substituir: 'PERGUNTA_GARANTIA' },
    { padrao: /\b(reembolso|devolucao|devolução|devolver|estorno|estornar|cancelar|cancelamento|ressarcimento)\b/gi, substituir: 'PERGUNTA_GARANTIA' },
    { padrao: /\b(posso\s+)?confiar|confiavel|confiável|seguro|segura|arriscado|risco|arriscar\b/gi, substituir: 'PERGUNTA_GARANTIA' },

    // === SUPORTE/MANUTENÇÃO ===
    { padrao: /\b(tem|qual|como\s+é|como\s+e|oferece|inclui)\s*(o\s+)?suporte\b/gi, substituir: 'PERGUNTA_SUPORTE' },
    { padrao: /\b(suporte|assistencia|assistência|atendimento)\s*(tecnico|técnico|24h|24\s*horas|integral|pos|pós)?\b/gi, substituir: 'PERGUNTA_SUPORTE' },
    { padrao: /\b(manutencao|manutenção|manter|mantido|cuidar|updates?|upgrades?|atualizacoes|atualizações)\b/gi, substituir: 'PERGUNTA_SUPORTE' },
    { padrao: /\b(depois\s+de\s+pronto|pos\s+venda|pós\s+venda|pos-venda|pós-venda|apos|após)\s*(a\s+)?entrega\b/gi, substituir: 'PERGUNTA_SUPORTE' },
    { padrao: /\b(hospedagem|servidor|servidores|cloud|nuvem|infraestrutura|aws|google\s+cloud|azure|heroku|vercel)\b/gi, substituir: 'PERGUNTA_SUPORTE' },

    // === PUBLICAÇÃO ===
    { padrao: /\b(publica|publicar|publicacao|publicação|subir|colocar|disponibilizar)\s*(na|nas|pra|para)?\s*(loja|lojas|store|stores)?\b/gi, substituir: 'PERGUNTA_PUBLICACAO' },
    { padrao: /\b(play\s*store|app\s*store|google\s*play|apple\s*store|appstore|playstore)\b/gi, substituir: 'PERGUNTA_PUBLICACAO' },
    { padrao: /\b(loja|lojas|store|stores)\s*(do\s+|da\s+)?(google|apple|ios|android|iphone)?\b/gi, substituir: 'PERGUNTA_PUBLICACAO' },

    // === PROCESSO ===
    { padrao: /\b(como|qual)\s*.{0,10}(funciona|é|e|seria|acontece)\s*(o\s+)?(processo|desenvolvimento|projeto|trabalho)\b/gi, substituir: 'PERGUNTA_PROCESSO' },
    { padrao: /\b(etapas|passos|fases|metodologia|workflow|fluxo|ciclo)\s*(do\s+)?(processo|desenvolvimento|projeto|trabalho)?\b/gi, substituir: 'PERGUNTA_PROCESSO' },
    { padrao: /\b(proximos|próximos|primeiros)\s*(passos|etapas)\b/gi, substituir: 'PERGUNTA_PROCESSO' },

    // === TECNOLOGIA ===
    { padrao: /\b(qual|quais)\s*(a|as)?\s*(tecnologia|tecnologias|stack|linguagem|linguagens|framework|frameworks|ferramentas)\b/gi, substituir: 'PERGUNTA_TECNOLOGIA' },
    { padrao: /\b(react|angular|vue|flutter|swift|kotlin|java|python|node|nodejs|php|ruby|go|golang|typescript|javascript)\b/gi, substituir: 'TECNOLOGIA' },
    { padrao: /\b(nativo|hibrido|híbrido|pwa|webapp|web\s*app|cross\s*platform|multiplataforma)\b/gi, substituir: 'PERGUNTA_TECNOLOGIA' },

    // === CONTATO HUMANO ===
    { padrao: /\b(falar|conversar|ligar|chamar|contatar)\s*(com\s+)?(alguem|alguém|humano|pessoa|atendente|vendedor|consultor|especialista|gerente)\b/gi, substituir: 'QUERO_HUMANO' },
    { padrao: /\b(whatsapp|whats|zap|zapzap|telefone|fone|celular|ligacao|ligação|contato|numero|número)\b/gi, substituir: 'QUERO_CONTATO' },

    // === MIGRAÇÃO ===
    { padrao: /\b(ja\s+tenho|já\s+tenho|tenho\s+um|possuo\s+um|meu\s+app\s+atual|app\s+existente|app\s+antigo|sistema\s+atual)\b/gi, substituir: 'MIGRACAO' },
    { padrao: /\b(migrar|migracao|migração|atualizar|modernizar|refazer|refatorar|reconstruir|rebuildar|fazer\s+de\s+novo)\b/gi, substituir: 'MIGRACAO' },

    // === CONCORRENTES ===
    { padrao: /\b(ifood|rappi|uber\s*eats|99|uber|mercado\s*livre|amazon|magalu|magazine\s*luiza|shopee|shein|hotmart|eduzz|monetizze)\b/gi, substituir: 'CONCORRENTE' },
    { padrao: /\b(igual|parecido|tipo|como|estilo|nos\s+moldes|inspirado)\s*(no|na|do|da|o|a)?\s*(ifood|rappi|uber|amazon|mercado\s*livre)?\b/gi, substituir: 'COMO_CONCORRENTE' }
];

// ============================================
// 5. PADRÕES SEMÂNTICOS PARA TODOS OS INTENTS
// ============================================
const padroesSematicos = {
    // === CONTRATUAL / PROPRIEDADE ===
    contratual: [
        /\b(APP|app|aplicativo|sistema|plataforma|software|projeto|produto)\b.{0,40}\b(POSSE_MEU|meu|minha|proprio|próprio|sera\s+meu|será\s+meu|vai\s+ser\s+meu|fica\s+meu|e\s+meu|é\s+meu|pertence)\b/i,
        /\b(POSSE_MEU|meu|minha|proprio|próprio|pertence)\b.{0,40}\b(APP|app|aplicativo|sistema|plataforma|software|projeto|produto)\b/i,
        /\b(CODIGO_FONTE|codigo|código|source|repositorio|repositório)\b.{0,40}\b(POSSE_MEU|meu|minha|entrega|recebo|fico|sera|será|vai\s+ser|pertence)\b/i,
        /\b(POSSE_MEU|meu|minha|entrega|recebo|fico|pertence)\b.{0,40}\b(CODIGO_FONTE|codigo|código|source|repositorio|repositório)\b/i,
        /\b(entreg|receb|dispon|liber|pass).{0,15}\b(CODIGO_FONTE|codigo|código|source|repositorio)\b/i,
        /\b(POSSE_DONO|sou|serei|fico|ficarei|vou\s+ser|seria|me\s+torno|viro).{0,15}(o\s+|a\s+)?(dono|dona|proprietario|proprietária|titular)\b/i,
        /\b(dono|dona|proprietario|proprietária|titular)\s*(do|da|d[eo])?.{0,15}(APP|app|codigo|código|aplicativo|projeto|sistema|software)\b/i,
        /\b(direitos?|propriedade)\s*(intelectual|autoral|autorais|do\s+app|do\s+codigo|do\s+código|sobre)?\b/i,
        /\b(contrato|acordo|termo).{0,25}(propriedade|direitos|cessao|cessão|transferencia|transferência)\b/i,
        /\b(tudo|todo|inteiro|completo|100%).{0,15}(meu|minha|nosso|nossa|seu|sua)\b/i,
        /\b(fica|sera|será|vai|é|e)\s*(tudo\s+)?(meu|minha|nosso|nossa)\b/i
    ],

    // === PREÇO ===
    preco: [
        /\bPERGUNTA_PRECO\b/i,
        /\b(quanto|qual|me\s+passa|me\s+da|me\s+dá).{0,20}(custa|preco|preço|valor|investimento|orcamento|orçamento|budget)\b/i,
        /\b(preco|preço|valor|custo|investimento).{0,20}(do|da|de\s+um|pra|para|dum|duma)\s*(app|aplicativo|sistema|projeto)\b/i,
        /\b(tabela|lista|faixa|range).{0,15}(de\s+)?(preco|preço|valores|precos|preços)\b/i,
        /\b(quanto\s+(fica|sai|da|dá|é|e|custa)|qual\s+(o\s+)?(valor|preco|preço)|sai\s+por\s+quanto|fica\s+em\s+quanto)\b/i,
        /\b(mais\s+barato|mais\s+caro|mais\s+em\s+conta|mais\s+acessivel|mais\s+acessível)\b/i,
        /\b(budget|grana|dinheiro|investir|gastar|desembolsar).{0,20}(quanto|preciso|necessario|necessário)\b/i,
        /\b(valor|preco|preço)\s*(minimo|mínimo|maximo|máximo|medio|médio|aproximado|estimado)\b/i,
        /\b(cabe\s+no|entra\s+no|dentro\s+do)\s*(meu\s+)?(bolso|budget|orcamento|orçamento)\b/i
    ],

    // === PRAZO ===
    prazo: [
        /\bPERGUNTA_PRAZO\b/i,
        /\b(quanto\s+tempo|qual\s+(o\s+)?prazo|demora|leva|tempo).{0,20}(pra|para)?\s*(ficar\s+pronto|entregar|desenvolver|fazer|criar|terminar|concluir)\b/i,
        /\b(prazo|tempo|previsao|previsão|estimativa).{0,15}(de\s+)?(entrega|desenvolvimento|conclusao|conclusão|finalizacao|finalização)\b/i,
        /\b(fica\s+pronto|entrega|termina|conclui|finaliza).{0,15}(quando|em\s+quanto\s+tempo|que\s+dia|que\s+data)\b/i,
        /\b(dias|semanas|meses|horas)\s*(pra|para|de|até|ate)\s*(entrega|entregar|terminar|concluir|ficar\s+pronto|finalizar)\b/i,
        /\bURGENTE\b/i,
        /\b(urgente|urgencia|urgência|pressa|rapido|rápido|logo|ja|já|imediato|asap|pra\s+ontem)\b/i,
        /\b(demora\s+muito|leva\s+muito|muito\s+tempo|tempo\s+demais)\b/i,
        /\b(quando|que\s+dia|que\s+data).{0,15}(fica\s+pronto|entrega|termina|conclui)\b/i
    ],

    // === PAGAMENTO ===
    pagamento: [
        /\bPERGUNTA_PAGAMENTO\b/i,
        /\bMETODO_PAGAMENTO\b/i,
        /\b(formas?|meios?|opcoes|opções|condicoes|condições|metodos|métodos).{0,15}(de\s+)?pagamento\b/i,
        /\b(como|posso|da\s+pra|dá\s+pra|consigo|tem\s+como).{0,15}pagar\b/i,
        /\b(parcela|parcelamento|parcelo|parcelar|dividir|divide|fracionar).{0,20}(quantas|em\s+quantas|ate|até|em)?\b/i,
        /\b(pix|cartao|cartão|boleto|transferencia|transferência|credito|crédito|debito|débito|ted|doc)\b/i,
        /\b(entrada|sinal|adiantamento|a\s+vista|à\s+vista|avista|desconto|promocao|promoção)\b/i,
        /\b(financiar|financiamento|parcelar\s+em|dividir\s+em)\b/i,
        /\b(aceita|aceitam|trabalha|trabalham\s+com).{0,15}(pix|cartao|cartão|boleto)\b/i
    ],

    // === GARANTIA ===
    garantia: [
        /\bPERGUNTA_GARANTIA\b/i,
        /\b(tem|qual|como\s+é|como\s+e|existe|oferece|da|dá).{0,15}(alguma\s+)?(garantia|seguranca|segurança)\b/i,
        /\b(garantia|garantido|garantem|asseguram).{0,20}(que|de\s+que|o\s+que|algo)\b/i,
        /\b(e\s+se|se\s+eu|caso\s+eu|quando\s+eu).{0,25}(nao|não)\s+(gostar|curtir|ficar\s+satisfeito|aprovar|quiser|aceitar)\b/i,
        /\b(se\s+der|caso\s+de|acontecer|tiver).{0,15}(errado|problema|bug|erro|falha|ruim|merda)\b/i,
        /\b(se\s+)?nao\s+funcionar|nao\s+der\s+certo|der\s+errado\b/i,
        /\b(reembolso|devolucao|devolução|devolver|estorno|estornar|cancelar|cancelamento|ressarcimento)\b/i,
        /\b(posso\s+)?(confiar|arriscar)|confiavel|confiável|seguro|segura|arriscado|risco\b/i,
        /\b(satisfacao|satisfação)\s*(garantida|total|100%)?\b/i,
        /\b(nao|não)\s+(vou\s+)?(perder|jogar\s+fora)\s*(meu\s+)?(dinheiro|grana|investimento)\b/i
    ],

    // === SUPORTE/MANUTENÇÃO ===
    manutencao: [
        /\bPERGUNTA_SUPORTE\b/i,
        /\b(tem|qual|como\s+é|como\s+e|oferece|inclui|da|dá).{0,15}(o\s+)?suporte\b/i,
        /\b(suporte|assistencia|assistência|atendimento).{0,15}(tecnico|técnico|24h|24\s*horas|integral|pos|pós|depois)?\b/i,
        /\b(manutencao|manutenção|manter|mantido|cuidar|updates?|upgrades?|atualizacoes|atualizações)\b/i,
        /\b(depois\s+de\s+pronto|pos\s+venda|pós\s+venda|pos-venda|pós-venda|apos|após)\s*(a\s+)?entrega\b/i,
        /\b(hospedagem|servidor|servidores|cloud|nuvem|infraestrutura|aws|google\s+cloud|azure|heroku|vercel|digital\s+ocean)\b/i,
        /\b(bug|bugs|erro|erros|problema|problemas).{0,15}(corrigir|corrigido|resolver|resolvido|consertar|consertado)\b/i,
        /\b(inclui|incluido|incluído|incluso|contempla).{0,15}(suporte|manutencao|manutenção|hospedagem|atualizacao|atualização)\b/i,
        /\b(quem|como).{0,15}(cuida|resolve|corrige|atualiza).{0,15}(depois|pos|pós)\b/i
    ],

    // === PUBLICAÇÃO ===
    publicacao: [
        /\bPERGUNTA_PUBLICACAO\b/i,
        /\b(publica|publicar|publicacao|publicação|subir|colocar|disponibilizar|lancar|lançar).{0,20}(na|nas|pra|para|nas)?\s*(loja|lojas|store|stores)?\b/i,
        /\b(play\s*store|app\s*store|google\s*play|apple\s*store|appstore|playstore)\b/i,
        /\b(loja|lojas|store|stores).{0,15}(do\s+|da\s+)?(google|apple|ios|android|iphone)?\b/i,
        /\b(aparecer|ficar|estar|disponivel|disponível).{0,15}(na|nas)\s*(loja|lojas|store|stores)\b/i,
        /\b(ios|android|iphone).{0,15}(loja|store|publicar|subir|disponibilizar)\b/i,
        /\b(conta\s+de\s+desenvolvedor|developer\s+account|conta\s+dev)\b/i,
        /\b(voces|vocês|vcs).{0,15}(publicam|sobem|colocam|disponibilizam).{0,15}(na|nas)?\s*(loja|store)?\b/i
    ],

    // === PROCESSO ===
    processo: [
        /\bPERGUNTA_PROCESSO\b/i,
        /\b(como|qual).{0,15}(funciona|é|e|seria|acontece)\s*(o\s+)?(processo|desenvolvimento|projeto|trabalho|fluxo)\b/i,
        /\b(etapas|passos|fases|metodologia|workflow|fluxo|ciclo).{0,15}(do\s+)?(processo|desenvolvimento|projeto|trabalho)?\b/i,
        /\b(proximos|próximos|primeiros)\s*(passos|etapas|acoes|ações)\b/i,
        /\b(o\s+que|como)\s*(eu\s+)?(preciso|tenho\s+que|devo)\s*(fazer|providenciar|enviar)\b/i,
        /\b(como\s+)?comecar|começar|iniciar|contratar|fechar|dar\s+inicio|dar\s+início\b/i,
        /\b(ciclo|fluxo).{0,15}(de\s+)?(vida|trabalho|desenvolvimento)\b/i,
        /\b(por\s+onde|como)\s*(comeco|começo|inicio|início|comeca|começa)\b/i
    ],

    // === TECNOLOGIA ===
    tecnologia: [
        /\bPERGUNTA_TECNOLOGIA\b/i,
        /\bTECNOLOGIA\b/i,
        /\b(qual|quais).{0,15}(a\s+|as\s+)?(tecnologia|tecnologias|stack|linguagem|linguagens|framework|frameworks|ferramentas)\b/i,
        /\b(usam|utilizam|desenvolvem\s+em|programam\s+em|trabalham\s+com)\b/i,
        /\b(react|angular|vue|flutter|swift|kotlin|java|python|node|nodejs|php|ruby|go|golang|typescript|javascript)\b/i,
        /\b(nativo|hibrido|híbrido|pwa|webapp|web\s*app|crossplatform|cross\s*platform|multiplataforma)\b/i,
        /\b(banco\s+de\s+dados|database|sql|nosql|mongodb|postgresql|mysql|firebase|supabase|dynamodb)\b/i,
        /\b(backend|frontend|fullstack|full\s*stack|front-end|back-end|full-stack)\b/i,
        /\b(api|apis|rest|restful|graphql|websocket)\b/i
    ],

    // === PORTFÓLIO ===
    portfolio: [
        /\bPERGUNTA_PORTFOLIO\b/i,
        /\b(portfolio|portfólio|exemplos|casos|cases|trabalhos|projetos)\s*(anteriores|ja\s+feitos|já\s+feitos|entregues|realizados)?\b/i,
        /\b(ja|já)\s+(fizeram|desenvolveram|criaram|entregaram|lancaram|lançaram)\b/i,
        /\b(tem|possui|possuem|mostrar|mostra|ver|quero\s+ver).{0,15}(algum\s+)?(exemplo|portfolio|portfólio|case|trabalho|projeto)\b/i,
        /\b(mostra|mostrar|ver|quero\s+ver|deixa\s+eu\s+ver).{0,15}(um\s+)?(exemplo|trabalho|projeto|app|aplicativo)\b/i,
        /\b(referencias|referências|apps\s+que\s+fizeram|projetos\s+que\s+fizeram)\b/i
    ],

    // === EQUIPE ===
    equipe: [
        /\bPERGUNTA_EQUIPE\b/i,
        /\b(quem\s+)?(sao|são|é|e)\s+(voces|vocês|a\s+equipe|o\s+time|a\s+empresa|a\s+evo)\b/i,
        /\b(quantos|quantas).{0,15}(desenvolvedores|programadores|pessoas|funcionarios|funcionários|devs|profissionais)\b/i,
        /\b(sobre\s+)?(a\s+)?(empresa|companhia|startup|agencia|agência|evo)\b/i,
        /\b(quem\s+)?(esta|está)\s+por\s+tras|por\s+trás\b/i,
        /\b(time|equipe|squad|staff).{0,15}(de\s+)?(desenvolvimento|devs|desenvolvedores|tecnologia|ti)\b/i,
        /\b(experiencia|experiência|anos\s+de|tempo\s+de)\s*(mercado|atuacao|atuação|experiencia|experiência)\b/i,
        /\b(onde|aonde).{0,15}(ficam|estao|está|sao|são|localizados|baseados)\b/i
    ],

    // === DIFERENCIAIS ===
    diferenciais: [
        /\bPERGUNTA_DIFERENCIAIS\b/i,
        /\b(diferencial|diferenciais|vantagem|vantagens|beneficio|benefícios|pontos\s+fortes)\b/i,
        /\b(por\s*que|porque)\s+(voces|vocês|a\s+evo|escolher|contratar)\b/i,
        /\b(o\s+que|qual).{0,15}(diferente|diferenca|diferença|especial|unico|único)\b/i,
        /\b(melhor|superior|diferente|mais\s+vantajoso).{0,15}(que|da|do|das|dos).{0,15}(concorrencia|concorrência|outros|outras|mercado)\b/i,
        /\b(destaque|destacam|diferencia|diferenciam|diferenciado)\b/i,
        /\b(por\s+que|porque)\s+(escolher|contratar|preferir|optar)\b/i
    ],

    // === FUNCIONALIDADES ===
    features: [
        /\bPERGUNTA_FEATURES\b/i,
        /\b(o\s+que|quais).{0,15}(inclui|tem|vem|contempla|abrange|oferece)\b/i,
        /\b(funcionalidades?|features?|recursos?|opcoes|opções|modulos|módulos)\b/i,
        /\b(posso|consigo|da\s+pra|dá\s+pra|é\s+possivel|é\s+possível|tem\s+como).{0,15}(adicionar|incluir|ter|fazer|colocar)\b/i,
        /\b(personalizar|customizar|customizacao|customização|sob\s+medida|do\s+meu\s+jeito|como\s+eu\s+quero)\b/i,
        /\b(tem\s+como|da\s+pra|dá\s+pra|posso|consigo)\s*(fazer|colocar|incluir|ter|adicionar)\b/i,
        /\b(o\s+que|quais)\s*(vem|veem|ta|tá|esta|está)\s*(incluido|incluído|incluso)\b/i
    ],

    // === FALAR COM HUMANO/CONTATO ===
    contato: [
        /\bQUERO_HUMANO\b/i,
        /\bQUERO_CONTATO\b/i,
        /\b(falar|conversar|ligar|chamar|contatar).{0,15}(com\s+)?(alguem|alguém|humano|pessoa|atendente|vendedor|consultor|especialista|gerente|responsavel|responsável)\b/i,
        /\b(atendimento|contato).{0,15}(humano|pessoa|real|de\s+verdade)\b/i,
        /\b(whatsapp|whats|zap|zapzap|telefone|fone|celular|ligacao|ligação|numero|número)\b/i,
        /\b(quero|preciso|gostaria|posso).{0,20}(falar|conversar|contato)\b/i,
        /\b(tem|qual).{0,10}(o\s+)?(whatsapp|whats|zap|telefone|numero|número|contato)\b/i
    ],

    // === MIGRAÇÃO ===
    migracao: [
        /\bMIGRACAO\b/i,
        /\b(ja|já)\s+(tenho|possuo|tem)\s+(um\s+)?(app|aplicativo|sistema|plataforma|software)\b/i,
        /\b(meu\s+app|app\s+atual|app\s+existente|app\s+antigo|sistema\s+atual|plataforma\s+atual)\b/i,
        /\b(migrar|migracao|migração|atualizar|modernizar|refazer|refatorar|reconstruir|rebuildar)\b/i,
        /\b(substituir|trocar|mudar).{0,15}(meu\s+)?(app|aplicativo|sistema|plataforma)\b/i,
        /\b(app|sistema|aplicativo).{0,15}(desatualizado|antigo|lento|travando|bugado|velho|ultrapassado|obsoleto)\b/i,
        /\b(reconstruir|rebuildar|fazer\s+de\s+novo|comecar\s+do\s+zero|começar\s+do\s+zero|do\s+zero)\b/i,
        /\b(melhorar|evoluir|aprimorar).{0,15}(meu\s+)?(app|aplicativo|sistema)\b/i
    ],

    // === CONCORRENTES ===
    concorrentes: [
        /\bCONCORRENTE\b/i,
        /\bCOMO_CONCORRENTE\b/i,
        /\b(igual|parecido|tipo|como|estilo|nos\s+moldes|inspirado).{0,15}(no|na|do|da|o|a)?\s*(ifood|rappi|uber|amazon|mercado\s*livre|magalu|shopee|shein|hotmart)\b/i,
        /\b(ifood|rappi|uber\s*eats|99\s*food|uber|mercado\s*livre|amazon|magalu|magazine\s*luiza|shopee|shein|hotmart|eduzz|monetizze)\b/i,
        /\b(sair|largar|deixar|abandonar|me\s+livrar).{0,15}(do|da|o|a)?\s*(ifood|rappi|marketplace|plataforma)\b/i,
        /\b(proprio|próprio|meu\s+proprio|meu\s+próprio)\s*(app|delivery|loja|marketplace|e-commerce|ecommerce)\b/i,
        /\b(sem\s+pagar|parar\s+de\s+pagar|economizar|fugir).{0,15}(taxa|comissao|comissão|porcentagem|%)\b/i,
        /\b(taxa|comissao|comissão|porcentagem).{0,15}(do\s+)?(ifood|rappi|marketplace)\b/i
    ],

    // === SAUDAÇÕES ===
    saudacoes: [
        /^(oi+|ola+|olá+|hey+|eai+|e\s+ai+|fala+|salve+|hello+|hi+|bom\s+dia|boa\s+tarde|boa\s+noite|opa+|eae+|falaaa*)[\s\!\?\.\,]*$/i,
        /^(oi|ola|olá).{0,15}(tudo\s+bem|como\s+vai|beleza|suave|tranquilo)\s*[\?\!]*$/i,
        /^(boa|bom)\s*(dia|tarde|noite)[\s\!\?\.\,]*$/i
    ],

    // === AGRADECIMENTOS ===
    agradecimentos: [
        /\b(obrigado|obrigada|valeu+|vlw+|thanks|thank\s+you|agradeco|agradeço|gratidao|gratidão)\b/i,
        /\b(muito\s+obrigado|muito\s+obrigada|brigadao|brigadão|brigadinho|mto\s+obrigado)\b/i
    ],

    // === DESPEDIDA ===
    despedida: [
        /\b(tchau+|ate\s+mais|até\s+mais|ate\s+logo|até\s+logo|flw+|falou+|bye+|adeus|xau+)\b/i,
        /\b(vou\s+pensar|vou\s+analisar|depois\s+eu\s+volto|mais\s+tarde|outro\s+dia)\b/i,
        /\b(foi\s+bom|foi\s+otimo|foi\s+ótimo|valeu\s+pela|obrigado\s+pela)\s*(conversa|ajuda|atencao|atenção)\b/i
    ],

    // === POSITIVAS (confirmações) ===
    positivas: [
        /^(sim+|isso+|correto|exato|isso\s+mesmo|pode\s+ser|ok+|beleza|fechado|bora+|vamos+|quero|aceito|fechou)[\s\!\.\,]*$/i,
        /\b(gostei|amei|perfeito|otimo|ótimo|show|massa|top|legal|dahora|maneiro|excelente)\b/i,
        /\b(vamos\s+la|vamos\s+lá|bora|pode\s+ser|fechado|to\s+dentro|tô\s+dentro|partiu)\b/i
    ],

    // === NEGATIVAS ===
    negativas: [
        /^(nao+|não+|nope|negativo|nada|nunca|jamais|nem+)[\s\!\.\,]*$/i,
        /\b(nao\s+quero|não\s+quero|nao\s+preciso|não\s+preciso|nao\s+obrigado|não\s+obrigado|nao\s+valeu|não\s+valeu)\b/i,
        /\b(desisto|desistir|cancelar|parar|deixa\s+pra\s+la|deixa\s+pra\s+lá|esquece|deixa\s+quieto)\b/i,
        /\b(nao\s+tenho\s+interesse|não\s+tenho\s+interesse|sem\s+interesse|nao\s+me\s+interessa|não\s+me\s+interessa)\b/i
    ],

    // === DÚVIDAS GENÉRICAS ===
    duvidas: [
        /\b(tenho\s+uma\s+duvida|tenho\s+uma\s+dúvida|duvida|dúvida|pergunta|perguntinha)\b/i,
        /\b(pode\s+me\s+ajudar|me\s+ajuda|preciso\s+de\s+ajuda|help|socorro|uma\s+ajuda)\b/i,
        /\b(queria\s+saber|gostaria\s+de\s+saber|quero\s+saber|preciso\s+saber)\b/i
    ]
};

// ============================================
// 6. FUNÇÕES DE PROCESSAMENTO
// ============================================

/**
 * Aplica lematização básica nos verbos
 */
function lematizar(texto) {
    let resultado = texto;
    for (const [forma, lema] of Object.entries(lematizacaoVerbos)) {
        const regex = new RegExp(`\\b${forma}\\b`, 'gi');
        resultado = resultado.replace(regex, lema);
    }
    return resultado;
}

/**
 * Expande texto com conceitos de sinônimos para aumentar chances de match
 */
function expandirSinonimos(texto) {
    let conceitosEncontrados = [];
    for (const [conceito, lista] of Object.entries(sinonimos)) {
        for (const sinonimo of lista) {
            if (texto.includes(sinonimo)) {
                conceitosEncontrados.push(conceito);
                break;
            }
        }
    }
    return texto + ' ' + conceitosEncontrados.join(' ');
}

/**
 * Normaliza texto removendo partículas expletivas e aplicando normalizações
 */
function normalizarTextoInteligente(texto) {
    let normalizado = texto.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Remove acentos

    // Remove pontuação excessiva mas mantém estrutura
    normalizado = normalizado
        .replace(/[?!]{2,}/g, '?')
        .replace(/\.{2,}/g, '.')
        .replace(/[,;:]+/g, ' ');

    // Remove partículas expletivas
    for (const particula of particulasExpletivas) {
        const regex = new RegExp(`\\b${particula}\\b`, 'gi');
        normalizado = normalizado.replace(regex, ' ');
    }

    // Aplica lematização
    normalizado = lematizar(normalizado);

    // Aplica normalizações verbais/compostas
    for (const { padrao, substituir } of normalizacoesVerbais) {
        normalizado = normalizado.replace(padrao, substituir);
    }

    // Limpa espaços múltiplos
    normalizado = normalizado.replace(/\s+/g, ' ').trim();

    return normalizado;
}

/**
 * Detecta intent usando padrões semânticos (mais robusto)
 */
function detectarIntentSemantico(textoNormalizado, textoOriginal, textoExpandido) {
    let melhorMatch = null;
    let melhorScore = 0;

    for (const [intent, padroes] of Object.entries(padroesSematicos)) {
        for (const padrao of padroes) {
            const matchNormalizado = padrao.test(textoNormalizado);
            const matchOriginal = padrao.test(textoOriginal);
            const matchExpandido = textoExpandido ? padrao.test(textoExpandido) : false;

            if (matchNormalizado || matchOriginal || matchExpandido) {
                let score = 0;
                if (matchNormalizado) score += 100;
                if (matchOriginal) score += 50;
                if (matchExpandido) score += 30;
                score += padrao.toString().length / 10;

                if (score > melhorScore) {
                    melhorScore = score;
                    melhorMatch = {
                        intent: intent,
                        matchType: 'semantic',
                        score: score,
                        pattern: padrao.toString().substring(0, 50)
                    };
                }
            }
        }
    }

    return melhorMatch;
}

function detectChatIntent(message) {
    // Normaliza e prepara múltiplas versões do texto
    const textoNormalizado = normalizarTextoInteligente(message);
    const lowerMsg = message.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    const textoExpandido = expandirSinonimos(lowerMsg);

    // Tenta detecção semântica primeiro (mais robusta)
    const matchSemantico = detectarIntentSemantico(textoNormalizado, lowerMsg, textoExpandido);
    if (matchSemantico) {
        return matchSemantico;
    }

    // Fallback para detecção por keywords
    let bestMatch = null;
    let bestScore = 0;

    for (const [intent, keywords] of Object.entries(chatKeywords)) {
        for (const keyword of keywords) {
            const normalizedKeyword = keyword.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');

            if (textoNormalizado.includes(normalizedKeyword) || lowerMsg.includes(normalizedKeyword)) {
                const score = normalizedKeyword.length;
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = {
                        intent: intent,
                        keyword: keyword,
                        score: score,
                        matchType: 'keyword'
                    };
                }
            }
        }
    }

    return bestMatch;
}

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.chatKeywords = chatKeywords;
    window.detectChatIntent = detectChatIntent;
    window.normalizarTextoInteligente = normalizarTextoInteligente;
    window.particulasExpletivas = particulasExpletivas;
    window.padroesSematicos = padroesSematicos;
    window.lematizacaoVerbos = lematizacaoVerbos;
    window.sinonimos = sinonimos;
    window.expandirSinonimos = expandirSinonimos;
    window.lematizar = lematizar;
}
