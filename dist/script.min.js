// ============================================
// CONSTANTES DE VALIDAÇÃO
// ============================================
const VALIDATION_CONFIG = {
    NAME_MIN_LENGTH: 3,
    NAME_MAX_LENGTH: 100,
    NAME_MIN_PARTS: 2,
    NAME_PART_MIN_LENGTH: 2,
    MESSAGE_MIN_LENGTH: 10,
    MESSAGE_MAX_LENGTH: 500,
    MESSAGE_WARNING_THRESHOLD: 50
};

// DDDs válidos no Brasil
const VALID_DDDS = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28,
    31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    71, 73, 74, 75, 77, 79, 82, 84, 85, 86, 87, 88, 89,
    92, 93, 94, 95, 97, 98, 99
];

// ============================================
// UTILITÁRIOS
// ============================================

/**
 * Cria elemento de mensagem de sucesso
 * @param {string} text - Texto da mensagem
 * @returns {HTMLElement} Elemento criado
 */
function createSuccessMessage(text) {
    const el = document.createElement('div');
    el.className = 'success-message';
    el.setAttribute('role', 'alert');
    el.textContent = text;
    return el;
}

/**
 * Remove mensagem de sucesso após delay
 * @param {HTMLElement} element - Elemento a remover
 * @param {number} delay - Delay em ms (default 5000)
 */
function removeSuccessMessageAfterDelay(element, delay = 5000) {
    setTimeout(() => {
        if (element && element.parentNode) {
            element.remove();
        }
    }, delay);
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initLazyLoading();
    initSmoothScroll();
    initInputMasks();
    initContactForm();
    initScrollAnimations();
    initNavbarEffects();
    initStatsCounter();
    initSlideshows();
    initTouchOptimizations();
    initLoadMoreProjects();
    initBlogFilters();
    initLoadMoreArticles();
    initArticleNavigation();
    initNewsletterForm();
});

// Lazy Loading Enhancement
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Add loaded class when image loads
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });

                    // If image is already cached
                    if (img.complete) {
                        img.classList.add('loaded');
                    }

                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before entering viewport
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Touch Optimizations for Mobile
function initTouchOptimizations() {
    // Detect if device supports touch
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
        document.body.classList.add('touch-device');

        // Add touch feedback to cards
        const cards = document.querySelectorAll('.possibility-card, .service-card, .testimonial-card, .blog-card');

        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });

            card.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });

        // Prevent double-tap zoom on buttons
        const buttons = document.querySelectorAll('.btn, button');
        buttons.forEach(btn => {
            btn.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.click();
            }, { passive: false });
        });
    }

}

// Load More Projects Functionality
function initLoadMoreProjects() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const hiddenProjects = document.querySelectorAll('.project-card.hidden-project');

    if (!loadMoreBtn || hiddenProjects.length === 0) {
        return;
    }

    loadMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Show all hidden projects with animation
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add('show');
            }, index * 50); // Staggered animation
        });

        // Scroll to the projects section
        const allProjectsSection = document.getElementById('allProjects');
        if (allProjectsSection) {
            const navHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
            const targetPosition = allProjectsSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // Hide the button after loading
        loadMoreBtn.style.display = 'none';

    });
}

// Blog Filters Functionality
function initBlogFilters() {
    const filterBtns = document.querySelectorAll('.blog-filters-section .filter-btn');
    const articleCards = document.querySelectorAll('.article-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter articles
            articleCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0';
                    card.style.display = 'none';
                }
            });

        });
    });
}

// Additional Articles Data
const additionalArticles = [
    {
        id: 6,
        title: 'Segurança em Apps Mobile: Boas Práticas Essenciais',
        description: 'Aprenda as principais práticas de segurança para proteger dados dos usuários. Criptografia, autenticação e mais.',
        category: 'tendências',
        author: 'Pedro Costa',
        date: '5 de outubro',
        readTime: '9 min de leitura',
        image: 'https://images.unsplash.com/photo-1563986768609-322d6d60df60?w=400&h=300&fit=crop',
        alt: 'Segurança em Apps'
    },
    {
        id: 7,
        title: 'Performance: Otimizando Seu App para iOS e Android',
        description: 'Dicas práticas para melhorar a performance do seu aplicativo e reduzir consumo de bateria e memória.',
        category: 'desenvolvimento',
        author: 'Lucas Ferreira',
        date: '2 de outubro',
        readTime: '10 min de leitura',
        image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08e?w=400&h=300&fit=crop',
        alt: 'Performance de Apps'
    },
    {
        id: 8,
        title: 'UX/UI Trends 2025: O Futuro do Design de Apps',
        description: 'Conheça as tendências mais quentes em design de interfaces e experiência do usuário para os próximos anos.',
        category: 'design',
        author: 'Beatriz Silva',
        date: '28 de setembro',
        readTime: '7 min de leitura',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        alt: 'UX UI Trends'
    },
    {
        id: 9,
        title: 'Monetização de Apps: Estratégias Que Funcionam',
        description: 'Explore diferentes modelos de monetização: ads, in-app purchases, subscriptions e muito mais.',
        category: 'negócios',
        author: 'Roberto Alves',
        date: '25 de setembro',
        readTime: '8 min de leitura',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        alt: 'Monetização de Apps'
    },
    {
        id: 10,
        title: '🚀 R$ 6,50 de Retorno para Cada R$ 1,00 Investido: O Poder dos Micro Influenciadores',
        description: 'DADOS EXCLUSIVOS 2025: Brasil lidera com 3,8 milhões de criadores! 82% têm menos de 10k seguidores e geram ROI 11x maior que banners. Descubra por que 44% das marcas brasileiras escolhem nano influenciadores.',
        category: 'marketing',
        author: 'Mariana Santos',
        date: '20 de novembro',
        readTime: '7 min de leitura',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
        alt: 'Marketing de Influência',
        stats: {
            roi: '6.50',
            creators: '3.8M',
            preference: '44%',
            marketSize: 'US$ 31.2bi até 2027'
        }
    },
    {
        id: 11,
        title: '🔍 Brasil: 4º Maior Mercado Mundial! Como Capturar 50%+ de Downloads Orgânicos',
        description: 'ESTUDO 2024: 10 bilhões de downloads no Brasil! Top 3 posições capturam metade de TODOS os downloads. Apps com palavras-chave longas cresceram +32%. Aprenda o framework ASO que coloca seu app no topo sem gastar R$ 1 em anúncios.',
        category: 'marketing',
        author: 'Felipe Rodrigues',
        date: '18 de novembro',
        readTime: '9 min de leitura',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=300&fit=crop',
        alt: 'App Store Optimization',
        stats: {
            downloads: '10bi/ano',
            organic: '50%+',
            growth: '+32%',
            ranking: '4º mercado global'
        }
    },
    {
        id: 12,
        title: '🎮 ALERTA: 90% Abandonam em 30 Dias! Como Gamificação Salva Seu App',
        description: 'PESQUISA BRASIL 2025: Reter é 5x mais barato que adquirir. 93% dos marketers aprovam gamificação e 45% das marcas investem agora. US$ 1,67bi em remarketing! Descubra os 7 gatilhos que multiplicam retenção e receita.',
        category: 'desenvolvimento',
        author: 'Júlia Mendes',
        date: '15 de novembro',
        readTime: '8 min de leitura',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
        alt: 'Gamificação em Apps',
        stats: {
            abandonment: '90%',
            costDiff: '5x mais caro adquirir',
            adoption: '93% aprovam',
            investment: 'US$ 1.67bi remarketing'
        }
    },
    {
        id: 13,
        title: '🤝 US$ 2,85 Bilhões Investidos no Brasil! Como Crescer Gastando 80% Menos',
        description: 'REVELADO 2024: Brasil é 4º maior mercado global! Apps de alimentação cresceram +923% no iOS. Finanças triplicaram investimentos. Aprenda a estratégia de parcerias locais que apps inteligentes usam para crescer gastando 80% menos.',
        category: 'negócios',
        author: 'Carlos Eduardo',
        date: '12 de novembro',
        readTime: '6 min de leitura',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
        alt: 'Parcerias Estratégicas',
        stats: {
            investment: 'US$ 2.85bi',
            foodGrowth: '+923% iOS',
            financeGrowth: '3x investimento',
            ranking: '4º mercado mundial'
        }
    },
    {
        id: 14,
        title: '💰 R$ 0,44 por Instalação no Brasil! iOS Explodiu +168% em 2024',
        description: 'DADOS EXCLUSIVOS: CPI Brasil é 12x MENOR que EUA/UK! iOS cresceu +168%, Android -22%. TikTok: $1,75-$4/install. Meta: $2,60. Google com lances estratégicos. O guia completo de performance marketing que escala com ROI positivo.',
        category: 'marketing',
        author: 'Amanda Costa',
        date: '10 de novembro',
        readTime: '10 min de leitura',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        alt: 'Performance Marketing',
        stats: {
            cpiBrasil: 'R$ 0.44',
            iosGrowth: '+168%',
            tiktokCPI: '$1.75-$4',
            metaCPI: '$2.60'
        }
    }
];

let articlesLoaded = 0;
const articlesPerPage = 6;

// Load More Articles Functionality
function initLoadMoreArticles() {
    const loadMoreBtn = document.getElementById('loadMoreArticlesBtn');
    const articlesGrid = document.getElementById('articlesGrid');

    if (!loadMoreBtn || !articlesGrid) {
        return;
    }

    loadMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Change button state
        const originalText = loadMoreBtn.innerHTML;
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = '0.6';
        loadMoreBtn.innerHTML = 'Carregando... <span class="spinner"></span>';

        // Simulate loading delay (in real app, this would be an API call)
        setTimeout(() => {
            loadMoreArticles(articlesGrid);

            // Restore button state
            loadMoreBtn.innerHTML = originalText;
            loadMoreBtn.style.opacity = '1';

            // Check if there are more articles to load
            if (articlesLoaded >= additionalArticles.length) {
                loadMoreBtn.disabled = true;
                loadMoreBtn.style.opacity = '0.5';
                loadMoreBtn.innerHTML = 'Nenhum artigo mais para carregar';
                loadMoreBtn.style.cursor = 'default';
            } else {
                loadMoreBtn.disabled = false;
            }

            }, 800);
    });
}

function loadMoreArticles(grid) {
    // Load up to 3 more articles
    const articlesToLoad = Math.min(3, additionalArticles.length - articlesLoaded);

    for (let i = 0; i < articlesToLoad; i++) {
        const article = additionalArticles[articlesLoaded];

        const articleHTML = `
            <div class="article-card clickable" data-category="${article.category}" data-article-id="${article.id}">
                <div class="article-image">
                    <img src="${article.image}" alt="${article.alt}" width="400" height="300" loading="lazy">
                    <div class="article-overlay">
                        <span class="article-category">${capitalizeCategory(article.category)}</span>
                    </div>
                </div>
                <div class="article-content">
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-description">${article.description}</p>
                    <div class="article-meta">
                        <span class="meta-author">Por ${article.author}</span>
                        <span class="meta-date">${article.date}</span>
                        <span class="meta-read">${article.readTime}</span>
                    </div>
                </div>
            </div>
        `;

        grid.insertAdjacentHTML('beforeend', articleHTML);
        articlesLoaded++;

        // Re-initialize article navigation for newly added articles
        initArticleNavigation();
    }
}

function capitalizeCategory(category) {
    const categories = {
        'design': 'Design',
        'desenvolvimento': 'Desenvolvimento',
        'negócios': 'Negócios',
        'marketing': 'Marketing',
        'tendências': 'Tendências'
    };
    return categories[category] || category;
}

// Article Navigation Functionality
function initArticleNavigation() {
    const articleCards = document.querySelectorAll('.article-card.clickable');

    articleCards.forEach(card => {
        // Remove any existing event listeners by cloning the node
        const newCard = card.cloneNode(true);
        card.parentNode?.replaceChild(newCard, card);

        // Add click event listener
        newCard.addEventListener('click', function() {
            const articleId = this.getAttribute('data-article-id');
            if (articleId) {
                window.location.href = `blog-detalhes.html?id=${articleId}`;
            }
        });

        // Add keyboard accessibility
        newCard.setAttribute('tabindex', '0');
        newCard.setAttribute('role', 'link');

        newCard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const articleId = this.getAttribute('data-article-id');
                if (articleId) {
                    window.location.href = `blog-detalhes.html?id=${articleId}`;
                }
            }
        });
    });
}

// Newsletter Form Functionality
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput.value.trim();

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, digite um email válido');
                return;
            }

            // Show success message usando função utilitária
            const successMessage = createSuccessMessage('✓ Inscrição realizada com sucesso! Obrigado por se inscrever.');
            const formWrapper = newsletterForm.parentNode;
            formWrapper.insertBefore(successMessage, newsletterForm);

            // Reset form
            newsletterForm.reset();

            // Remove success message after delay
            removeSuccessMessageAfterDelay(successMessage);
        });
    }
}

// Mobile Menu Functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    if (!menuToggle || !navMenu || !menuOverlay) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Toggle menu function
    function toggleMenu() {
        const isOpen = navMenu.classList.contains('active');

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Open menu
    function openMenu() {
        menuToggle.classList.add('active');
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Fechar menu');
    }

    // Close menu
    function closeMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    }

    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Small delay to allow smooth scroll to start before closing
            setTimeout(closeMenu, 100);
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on window resize (if switching to desktop view)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 768 && navMenu.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });

}

// Smooth Scrolling for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Input Masks
function initInputMasks() {
    // Máscara para Nome (apenas letras e espaços)
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        // IMask aplicado sem armazenar referência (não utilizada)
        IMask(nameInput, {
            mask: /[a-záàâãéèêíïóôõöúçñA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/
        });

        nameInput.addEventListener('blur', validateNameField);
        nameInput.addEventListener('input', removeErrorState);
    }

    // Máscara para Celular: (XX) 9XXXX-XXXX
    const phoneInput = document.getElementById('phoneInput');
    if (phoneInput) {
        // IMask aplicado sem armazenar referência (não utilizada)
        IMask(phoneInput, {
            mask: '(00) 90000-0000',
            lazy: false,
            overwrite: true
        });

        phoneInput.addEventListener('blur', validatePhoneField);
        phoneInput.addEventListener('input', removeErrorState);
    }

    // Formatter para Message (controle avançado)
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            // Limita ao máximo de caracteres
            if (this.value.length > VALIDATION_CONFIG.MESSAGE_MAX_LENGTH) {
                this.value = this.value.substring(0, VALIDATION_CONFIG.MESSAGE_MAX_LENGTH);
            }
            updateCharacterCount(this);
        });

        messageInput.addEventListener('blur', validateMessageField);
        messageInput.addEventListener('input', removeErrorState);
    }
}

// Validar campo Nome
function validateNameField() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    let errorMessage = '';

    // Verificar se está vazio
    if (!name) {
        errorMessage = 'O nome é obrigatório';
    }
    // Verificar comprimento mínimo
    else if (name.length < VALIDATION_CONFIG.NAME_MIN_LENGTH) {
        errorMessage = `O nome deve ter pelo menos ${VALIDATION_CONFIG.NAME_MIN_LENGTH} caracteres`;
    }
    // Verificar comprimento máximo
    else if (name.length > VALIDATION_CONFIG.NAME_MAX_LENGTH) {
        errorMessage = `O nome não pode ter mais de ${VALIDATION_CONFIG.NAME_MAX_LENGTH} caracteres`;
    }
    // Verificar se tem pelo menos nome e sobrenome
    else if (name.split(' ').length < VALIDATION_CONFIG.NAME_MIN_PARTS) {
        errorMessage = 'Por favor, digite seu nome e sobrenome';
    }
    // Verificar se cada palavra tem pelo menos 2 caracteres
    else {
        const words = name.split(' ').filter(word => word.length > 0);
        const hasInvalidWords = words.some(word => word.length < VALIDATION_CONFIG.NAME_PART_MIN_LENGTH);
        if (hasInvalidWords) {
            errorMessage = `Cada parte do nome deve ter pelo menos ${VALIDATION_CONFIG.NAME_PART_MIN_LENGTH} caracteres`;
        }
    }

    if (errorMessage) {
        setFieldError(nameInput, errorMessage);
        return false;
    }

    clearFieldError(nameInput);
    return true;
}

// Validar campo Celular
function validatePhoneField() {
    const phoneInput = document.getElementById('phoneInput');
    const phone = phoneInput.value.trim();
    let errorMessage = '';

    // Verificar se está vazio
    if (!phone) {
        errorMessage = 'O celular é obrigatório';
    }
    // Verificar formato completo
    else if (!/^\(\d{2}\)\s9\d{4}-\d{4}$/.test(phone)) {
        errorMessage = 'Celular inválido. Use o formato (XX) 9XXXX-XXXX';
    }
    // Extrair e validar DDD
    else {
        const dddMatch = phone.match(/\((\d{2})\)/);
        if (dddMatch) {
            const ddd = parseInt(dddMatch[1], 10);
            if (!VALID_DDDS.includes(ddd)) {
                errorMessage = `DDD ${ddd} não é válido`;
            }
        }
    }

    if (errorMessage) {
        setFieldError(phoneInput, errorMessage);
        return false;
    }

    clearFieldError(phoneInput);
    return true;
}

// Validar campo Mensagem
function validateMessageField() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    let errorMessage = '';

    // Verificar se está vazio
    if (!message) {
        errorMessage = 'A mensagem é obrigatória';
    }
    // Verificar comprimento mínimo
    else if (message.length < VALIDATION_CONFIG.MESSAGE_MIN_LENGTH) {
        errorMessage = `A mensagem deve ter pelo menos ${VALIDATION_CONFIG.MESSAGE_MIN_LENGTH} caracteres (${message.length}/${VALIDATION_CONFIG.MESSAGE_MIN_LENGTH})`;
    }
    // Verificar comprimento máximo
    else if (message.length > VALIDATION_CONFIG.MESSAGE_MAX_LENGTH) {
        errorMessage = `A mensagem não pode ter mais de ${VALIDATION_CONFIG.MESSAGE_MAX_LENGTH} caracteres`;
    }

    if (errorMessage) {
        setFieldError(messageInput, errorMessage);
        return false;
    }

    clearFieldError(messageInput);
    return true;
}

// Adicionar estado de erro visual
function setFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    field.style.backgroundColor = '#fadbd8';

    // Remover mensagem anterior se existir
    const existingError = field.nextElementSibling;
    if (existingError && existingError.classList.contains('error-message')) {
        existingError.remove();
    }

    // Criar elemento de erro
    const errorElement = document.createElement('small');
    errorElement.classList.add('error-message');
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '12px';
    errorElement.style.display = 'block';
    errorElement.style.marginTop = '5px';
    errorElement.textContent = message;

    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

// Remover estado de erro visual
function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.backgroundColor = '';

    const errorElement = field.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
}

// Remover estado de erro ao digitar
function removeErrorState() {
    const errorElement = this.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
        errorElement.remove();
    }
}

// Atualizar contador de caracteres
function updateCharacterCount(field) {
    const count = field.value.length;
    const maxCount = VALIDATION_CONFIG.MESSAGE_MAX_LENGTH;

    let counterElement = field.nextElementSibling;
    if (counterElement && !counterElement.classList.contains('error-message')) {
        counterElement.remove();
    } else if (counterElement && counterElement.classList.contains('error-message')) {
        counterElement = field.nextElementSibling?.nextElementSibling;
    }

    if (!counterElement || !counterElement.classList.contains('char-count')) {
        counterElement = document.createElement('small');
        counterElement.classList.add('char-count');
        field.parentNode.insertBefore(counterElement, field.nextSibling);
    }

    const remaining = maxCount - count;
    const showWarning = remaining <= VALIDATION_CONFIG.MESSAGE_WARNING_THRESHOLD;
    counterElement.textContent = `${count}/${maxCount} caracteres${showWarning ? ` (${remaining} restantes)` : ''}`;
    counterElement.classList.toggle('char-count-warning', showWarning);
}

// Contact Form Submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validar todos os campos antes de enviar
            const isNameValid = validateNameField();
            const isPhoneValid = validatePhoneField();
            const isMessageValid = validateMessageField();

            // Se algum campo é inválido, não enviar
            if (!isNameValid || !isPhoneValid || !isMessageValid) {
                alert('Por favor, corrija os erros nos campos acima antes de enviar.');
                return;
            }

            // Get form values
            const name = document.getElementById('nameInput').value.trim();
            const phone = document.getElementById('phoneInput').value.trim();
            const message = document.getElementById('messageInput').value.trim();

            // Process form submission

            // Show success message usando função utilitária
            const successMessage = createSuccessMessage('✓ Mensagem enviada com sucesso! Entraremos em contato em breve.');
            const formWrapper = contactForm.parentNode;
            formWrapper.insertBefore(successMessage, contactForm);

            // Reset form
            contactForm.reset();

            // Remove success message after delay
            removeSuccessMessageAfterDelay(successMessage);

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate various elements on scroll (excluding .stat-item)
    const animateElements = document.querySelectorAll(
        '.portfolio-item, .testimonial-card, .service-card, .blog-card'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar Scroll Effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Determine current page
    function getCurrentPage() {
        const pathname = window.location.pathname;
        if (pathname.includes('about.html')) return 'about';
        if (pathname.includes('portfolio.html')) return 'portfolio';
        if (pathname.includes('materiais.html')) return 'materiais';
        // Home is when accessing index.html, /, or when file ends with /
        if (pathname.includes('index.html') || pathname === '/' || pathname === '') return 'home';
        return 'home'; // Default to home
    }

    // Set active link based on current page (on page load)
    function setActiveByPage() {
        const currentPage = getCurrentPage();
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (currentPage === 'home') {
                // On home page, mark Home link as active
                if (href === '#home' || href === 'index.html' || href === 'index.html#home') {
                    link.classList.add('active');
                }
            } else if (currentPage === 'about' && href === 'about.html') {
                link.classList.add('active');
            } else if (currentPage === 'portfolio' && href === 'portfolio.html') {
                link.classList.add('active');
            } else if (currentPage === 'materiais' && href === 'materiais.html') {
                link.classList.add('active');
            }
        });
    }

    // Set active page on load
    setActiveByPage();

    // Add shadow on scroll
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        // Only update nav link by section scroll if on home page
        const currentPage = getCurrentPage();
        if (currentPage === 'home') {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (window.pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');

                // Match by section ID
                if (href && href.slice(1) === current) {
                    link.classList.add('active');
                }
                // If no section is current, mark home link as active
                else if (!current && (href === '#home' || href === 'index.html#home')) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animated Stats Counter
function initStatsCounter() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const statNumber = entry.target.querySelector('.stat-number');

                if (statNumber) {
                    const text = statNumber.textContent;
                    const numMatch = text.match(/\d+/);

                    if (numMatch) {
                        const targetNumber = parseInt(numMatch[0]);
                        const suffix = text.replace(targetNumber.toString(), '');

                        animateValue(statNumber, 0, targetNumber, 2000, suffix);
                        entry.target.dataset.animated = 'true';
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Helper function to animate number values
function animateValue(element, start, end, duration, suffix = '') {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 16);
    const startTime = performance.now();

    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        current = start + (range * easeOutQuad(progress));
        element.textContent = Math.floor(current) + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = end + suffix;
        }
    }

    requestAnimationFrame(updateValue);
}

// Easing function for smooth animation
function easeOutQuad(t) {
    return t * (2 - t);
}

// Add dynamic animations via CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .hero-left {
        animation: fadeInUp 0.8s ease-out 0.2s backwards;
    }

    .hero-right {
        animation: fadeInUp 0.8s ease-out 0.4s backwards;
    }

    .nav-link.active {
        color: #0066FF;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Partner logos animation
const partnerItems = document.querySelectorAll('.partner-item');
partnerItems.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
});

// Initialize Slideshows using Swiper.js
function initSlideshows() {
    // Check if Swiper is loaded
    if (typeof Swiper === 'undefined') {
        return;
    }

    // Check if elements exist
    const portfolioWrapper = document.querySelector('.portfolio-slideshow-wrapper');
    const testimonialsWrapper = document.querySelector('.testimonials-slideshow-wrapper');
    const blogWrapper = document.querySelector('.blog-slideshow-wrapper');

    // Portfolio Slideshow
    if (portfolioWrapper) {
    try {
        const portfolioSwiper = new Swiper('.portfolio-slideshow-wrapper', {
            slidesPerView: 'auto',
            spaceBetween: window.innerWidth < 768 ? 16 : 32,
            speed: 750,
            loop: true,
            grabCursor: true,
            allowTouchMove: true,
            centeredSlides: window.innerWidth < 768,
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            // Mobile-specific settings
            touchRatio: 1,
            touchAngle: 45,
            threshold: 5,
            shortSwipes: true,
            longSwipesMs: 300,
            freeMode: false,
            // Smooth transitions
            effect: 'slide',
            watchSlidesProgress: true,
            // Performance
            observer: true,
            observeParents: true,
        });

        // Navigation buttons
        const portfolioPrevBtn = document.querySelector('.portfolio-prev');
        const portfolioNextBtn = document.querySelector('.portfolio-next');

        if (portfolioPrevBtn && portfolioNextBtn) {
            portfolioPrevBtn.addEventListener('click', () => {
                portfolioSwiper.autoplay.stop();
                portfolioSwiper.slidePrev();
            });

            portfolioNextBtn.addEventListener('click', () => {
                portfolioSwiper.autoplay.stop();
                portfolioSwiper.slideNext();
            });
        }
    } catch (error) {
        console.error('Error initializing Portfolio Swiper:', error);
    }
    }

    // Testimonials Slideshow
    if (testimonialsWrapper) {
    try {
        const testimonialsSwiper = new Swiper('.testimonials-slideshow-wrapper', {
            slidesPerView: 'auto',
            spaceBetween: window.innerWidth < 768 ? 16 : 24,
            speed: 750,
            loop: true,
            grabCursor: true,
            allowTouchMove: true,
            centeredSlides: window.innerWidth < 768,
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            // Mobile optimizations
            touchRatio: 1,
            touchAngle: 45,
            threshold: 5,
            shortSwipes: true,
            longSwipesMs: 300,
            effect: 'slide',
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
        });

        // Navigation buttons
        const testimonialsPrevBtn = document.querySelector('.testimonials-prev');
        const testimonialsNextBtn = document.querySelector('.testimonials-next');

        if (testimonialsPrevBtn && testimonialsNextBtn) {
            testimonialsPrevBtn.addEventListener('click', () => {
                testimonialsSwiper.autoplay.stop();
                testimonialsSwiper.slidePrev();
            });

            testimonialsNextBtn.addEventListener('click', () => {
                testimonialsSwiper.autoplay.stop();
                testimonialsSwiper.slideNext();
            });
        }
    } catch (error) {
        console.error('Error initializing Testimonials Swiper:', error);
    }
    }

    // Blog Slideshow
    if (blogWrapper) {
    try {
        const blogSwiper = new Swiper('.blog-slideshow-wrapper', {
            slidesPerView: 'auto',
            spaceBetween: window.innerWidth < 768 ? 16 : 24,
            speed: 750,
            loop: true,
            grabCursor: true,
            allowTouchMove: true,
            centeredSlides: window.innerWidth < 768,
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            // Mobile optimizations
            touchRatio: 1,
            touchAngle: 45,
            threshold: 5,
            shortSwipes: true,
            longSwipesMs: 300,
            effect: 'slide',
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
        });

        // Navigation buttons
        const prevBtn = document.querySelector('.blog-prev');
        const nextBtn = document.querySelector('.blog-next');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                blogSwiper.autoplay.stop();
                blogSwiper.slidePrev();
            });

            nextBtn.addEventListener('click', () => {
                blogSwiper.autoplay.stop();
                blogSwiper.slideNext();
            });
        }
    } catch (error) {
        console.error('Error initializing Blog Swiper:', error);
    }
    }
}

// Enhanced Scroll Animations with Slide Effects
function addSlideAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const direction = entry.target.dataset.slideDirection || 'bottom';
                entry.target.classList.add(`animate-slide-${direction}`);
                slideObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add slide animations to sections
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.dataset.slideDirection = 'bottom';
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        slideObserver.observe(card);
    });

    // Stats items animation removed - only using countup animation
}

// Call the slide animations on load
document.addEventListener('DOMContentLoaded', () => {
    addSlideAnimations();
});
