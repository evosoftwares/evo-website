#!/bin/bash

# Script de Verificação de Otimizações - Site Evo
# Versão: 1.0.0
# Data: 19/11/2025

echo "========================================="
echo "  VERIFICAÇÃO DE OTIMIZAÇÕES - EVO"
echo "========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de verificações
TOTAL=0
PASSED=0
FAILED=0

# Função de verificação
check() {
    TOTAL=$((TOTAL + 1))
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $2"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗${NC} $2"
        FAILED=$((FAILED + 1))
    fi
}

echo "1. VERIFICANDO ESTRUTURA DE ARQUIVOS"
echo "-------------------------------------"

# Verificar páginas HTML
for file in index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html registro-marca.html; do
    if [ -f "$file" ]; then
        check 0 "Página $file existe"
    else
        check 1 "Página $file NÃO ENCONTRADA"
    fi
done

echo ""
echo "2. VERIFICANDO ARQUIVOS DE CONFIGURAÇÃO"
echo "----------------------------------------"

# Arquivos de configuração
for file in manifest.json sitemap.xml robots.txt .htaccess humans.txt; do
    if [ -f "$file" ]; then
        check 0 "Arquivo $file existe"
    else
        check 1 "Arquivo $file NÃO ENCONTRADO"
    fi
done

# Verificar security.txt
if [ -f ".well-known/security.txt" ]; then
    check 0 "Arquivo .well-known/security.txt existe"
else
    check 1 "Arquivo .well-known/security.txt NÃO ENCONTRADO"
fi

echo ""
echo "3. VERIFICANDO PÁGINAS DE ERRO"
echo "-------------------------------"

for file in 404.html 500.html offline.html; do
    if [ -f "$file" ]; then
        check 0 "Página $file existe"
    else
        check 1 "Página $file NÃO ENCONTRADA"
    fi
done

echo ""
echo "4. VERIFICANDO PWA"
echo "------------------"

# Service Worker
if [ -f "sw.js" ]; then
    check 0 "Service Worker (sw.js) existe"
else
    check 1 "Service Worker (sw.js) NÃO ENCONTRADO"
fi

# Verificar manifest.json em cada HTML
PWA_COUNT=0
for file in index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html registro-marca.html; do
    if grep -q 'rel="manifest"' "$file" && grep -q 'apple-touch-icon' "$file"; then
        PWA_COUNT=$((PWA_COUNT + 1))
    fi
done

if [ $PWA_COUNT -eq 9 ]; then
    check 0 "PWA integrado em todas as 9 páginas"
else
    check 1 "PWA integrado em apenas $PWA_COUNT/9 páginas"
fi

echo ""
echo "5. VERIFICANDO META TAGS PWA"
echo "----------------------------"

# Verificar meta tags PWA em cada página
APP_META_COUNT=0
for file in index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html registro-marca.html; do
    if grep -q 'apple-mobile-web-app-capable' "$file" && grep -q 'mobile-web-app-capable' "$file"; then
        APP_META_COUNT=$((APP_META_COUNT + 1))
    fi
done

if [ $APP_META_COUNT -eq 9 ]; then
    check 0 "Meta tags PWA completas em todas as 9 páginas"
else
    check 1 "Meta tags PWA completas em apenas $APP_META_COUNT/9 páginas"
fi

echo ""
echo "6. VERIFICANDO BOOTSTRAP"
echo "------------------------"

# Verificar Bootstrap em cada página
BOOTSTRAP_COUNT=0
for file in index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html registro-marca.html; do
    if grep -q 'bootstrap@5.3.2' "$file"; then
        BOOTSTRAP_COUNT=$((BOOTSTRAP_COUNT + 1))
    fi
done

if [ $BOOTSTRAP_COUNT -eq 9 ]; then
    check 0 "Bootstrap 5.3.2 em todas as 9 páginas"
else
    check 1 "Bootstrap 5.3.2 em apenas $BOOTSTRAP_COUNT/9 páginas"
fi

echo ""
echo "7. VERIFICANDO SEO"
echo "------------------"

# Verificar elementos SEO básicos
SEO_COUNT=0
for file in index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html registro-marca.html; do
    HAS_SEO=1
    grep -q '<meta name="description"' "$file" || HAS_SEO=0
    grep -q 'property="og:' "$file" || HAS_SEO=0
    grep -q 'name="twitter:' "$file" || HAS_SEO=0
    grep -q 'application/ld+json' "$file" || HAS_SEO=0

    if [ $HAS_SEO -eq 1 ]; then
        SEO_COUNT=$((SEO_COUNT + 1))
    fi
done

if [ $SEO_COUNT -eq 9 ]; then
    check 0 "Elementos SEO completos em todas as 9 páginas"
else
    check 1 "Elementos SEO completos em apenas $SEO_COUNT/9 páginas"
fi

echo ""
echo "8. VERIFICANDO TAMANHOS DE ARQUIVOS"
echo "------------------------------------"

# Verificar tamanho do sitemap
SITEMAP_SIZE=$(wc -c < sitemap.xml 2>/dev/null || echo "0")
if [ $SITEMAP_SIZE -gt 1000 ]; then
    check 0 "sitemap.xml tem tamanho adequado ($SITEMAP_SIZE bytes)"
else
    check 1 "sitemap.xml muito pequeno ou vazio ($SITEMAP_SIZE bytes)"
fi

# Verificar tamanho do robots.txt
ROBOTS_SIZE=$(wc -c < robots.txt 2>/dev/null || echo "0")
if [ $ROBOTS_SIZE -gt 500 ]; then
    check 0 "robots.txt tem tamanho adequado ($ROBOTS_SIZE bytes)"
else
    check 1 "robots.txt muito pequeno ou vazio ($ROBOTS_SIZE bytes)"
fi

echo ""
echo "========================================="
echo "  RESUMO DA VERIFICAÇÃO"
echo "========================================="
echo ""
echo "Total de verificações: $TOTAL"
echo -e "${GREEN}Aprovadas: $PASSED${NC}"
echo -e "${RED}Falhas: $FAILED${NC}"
echo ""

# Calcular porcentagem
PERCENTAGE=$((PASSED * 100 / TOTAL))

if [ $PERCENTAGE -eq 100 ]; then
    echo -e "${GREEN}✓ SITE 100% OTIMIZADO!${NC}"
elif [ $PERCENTAGE -ge 90 ]; then
    echo -e "${YELLOW}⚠ Site $PERCENTAGE% otimizado - Quase lá!${NC}"
elif [ $PERCENTAGE -ge 70 ]; then
    echo -e "${YELLOW}⚠ Site $PERCENTAGE% otimizado - Precisa de melhorias${NC}"
else
    echo -e "${RED}✗ Site $PERCENTAGE% otimizado - Requer atenção urgente${NC}"
fi

echo ""
echo "========================================="

exit $(( 100 - PERCENTAGE ))
