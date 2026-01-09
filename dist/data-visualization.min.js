// ========================================
// DATA VISUALIZATION & ANIMATED CHARTS
// ========================================

// Initialize data visualizations on page load
document.addEventListener('DOMContentLoaded', function() {
    initDataVisualizations();
    initScrollAnimations();
});

// Main initialization function
function initDataVisualizations() {
    // Animate all stat cards
    animateStatCards();

    // Animate progress bars when visible
    animateProgressBars();

    // Animate comparison charts
    animateComparisonCharts();

    // Animate counters
    animateCounters();
}

// Animate stat cards with count-up effect
function animateStatCards() {
    const statCards = document.querySelectorAll('.stat-card');

    statCards.forEach((card, index) => {
        // Add entrance animation delay
        card.style.animationDelay = `${index * 0.1}s`;

        // Find stat number and animate
        const statNumber = card.querySelector('.stat-number');
        if (statNumber) {
            const targetValue = statNumber.getAttribute('data-value');
            if (targetValue) {
                animateValue(statNumber, 0, parseFloat(targetValue), 2000);
            }
        }
    });
}

// Animate value counting up
function animateValue(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString('pt-BR') + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-progress');
                bar.style.setProperty('--progress-width', width + '%');
                bar.classList.add('animate');
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

// Animate comparison charts
function animateComparisonCharts() {
    const comparisonBars = document.querySelectorAll('.bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const height = bar.getAttribute('data-height');
                bar.style.setProperty('--bar-height', height + '%');
                bar.classList.add('animate');
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    comparisonBars.forEach(bar => observer.observe(bar));
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.animated-counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                const prefix = counter.getAttribute('data-prefix') || '';

                animateCounterValue(counter, 0, target, 2000, prefix, suffix);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Animate counter with prefix and suffix
function animateCounterValue(element, start, end, duration, prefix = '', suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = progress * (end - start) + start;

        // Format number based on size
        let displayValue;
        if (end >= 1000000) {
            displayValue = (current / 1000000).toFixed(1) + 'M';
        } else if (end >= 1000) {
            displayValue = (current / 1000).toFixed(1) + 'k';
        } else {
            displayValue = current.toFixed(end % 1 !== 0 ? 2 : 0);
        }

        element.textContent = prefix + displayValue + suffix;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize scroll-triggered animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Create stats showcase for articles
function createStatsShowcase(stats) {
    if (!stats) return '';

    const statsArray = Object.entries(stats);
    let html = '<div class="stats-showcase">';

    statsArray.forEach(([key, value], index) => {
        const label = formatStatLabel(key);
        const icon = getStatIcon(key);

        html += `
            <div class="stat-card" style="animation-delay: ${index * 0.15}s">
                <div class="stat-icon">${icon}</div>
                <div class="stat-number" data-value="${parseNumericValue(value)}">${value}</div>
                <div class="stat-label">${label}</div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// Format stat label for display
function formatStatLabel(key) {
    const labels = {
        'roi': 'Retorno sobre Investimento',
        'creators': 'Criadores Ativos',
        'preference': 'Preferência de Marcas',
        'marketSize': 'Tamanho do Mercado',
        'downloads': 'Downloads por Ano',
        'organic': 'Tráfego Orgânico',
        'growth': 'Crescimento Anual',
        'ranking': 'Posição Global',
        'abandonment': 'Taxa de Abandono',
        'costDiff': 'Diferença de Custo',
        'adoption': 'Taxa de Adoção',
        'investment': 'Investimento Total',
        'cpiBrasil': 'CPI Brasil',
        'iosGrowth': 'Crescimento iOS',
        'tiktokCPI': 'CPI TikTok',
        'metaCPI': 'CPI Meta',
        'foodGrowth': 'Crescimento Food Apps',
        'financeGrowth': 'Crescimento Finanças'
    };
    return labels[key] || key;
}

// Get icon for stat type
function getStatIcon(key) {
    const icons = {
        'roi': '💰',
        'creators': '👥',
        'preference': '⭐',
        'marketSize': '📊',
        'downloads': '📱',
        'organic': '🌱',
        'growth': '📈',
        'ranking': '🏆',
        'abandonment': '⚠️',
        'costDiff': '💵',
        'adoption': '✅',
        'investment': '💼',
        'cpiBrasil': '🇧🇷',
        'iosGrowth': '📱',
        'tiktokCPI': '🎵',
        'metaCPI': '👍',
        'foodGrowth': '🍔',
        'financeGrowth': '💳'
    };
    return icons[key] || '📊';
}

// Parse numeric value from string
function parseNumericValue(value) {
    if (typeof value === 'number') return value;
    const numStr = value.toString().replace(/[^0-9.]/g, '');
    return parseFloat(numStr) || 0;
}

// Create progress chart
function createProgressChart(data) {
    let html = '<div class="progress-chart">';

    data.forEach(item => {
        html += `
            <div class="progress-item">
                <div class="progress-label">
                    <span>${item.label}</span>
                    <span>${item.value}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" data-progress="${item.value}"></div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// Create comparison chart
function createComparisonChart(data) {
    let html = '<div class="comparison-chart">';

    data.forEach(item => {
        html += `
            <div class="comparison-bar">
                <div class="bar-container">
                    <div class="bar-fill" data-height="${item.percentage}">
                        <span class="bar-value">${item.value}</span>
                    </div>
                </div>
                <div class="bar-label">${item.label}</div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// Create growth indicator
function createGrowthIndicator(value, isPositive = true) {
    const className = isPositive ? 'positive' : 'negative';
    const arrow = isPositive ? '↑' : '↓';

    return `
        <span class="growth-indicator ${className}">
            <span class="growth-arrow">${arrow}</span>
            <span>${value}</span>
        </span>
    `;
}

// Export functions for use in other scripts
window.DataViz = {
    createStatsShowcase,
    createProgressChart,
    createComparisonChart,
    createGrowthIndicator,
    animateValue,
    initDataVisualizations
};
