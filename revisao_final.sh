#!/bin/bash

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                                                               ║"
echo "║   🔍 REVISÃO FINAL - CONVERSÃO BOOTSTRAP                     ║"
echo "║                                                               ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

FILES="index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html privacy.html registro-marca.html"

# Contadores
total_ok=0
total_files=0

echo "1️⃣  BALANÇO DE TAGS HTML"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

for file in $FILES; do
    total_files=$((total_files + 1))
    open_divs=$(grep -o '<div' "$file" | wc -l | tr -d ' ')
    close_divs=$(grep -o '</div>' "$file" | wc -l | tr -d ' ')
    
    if [ "$open_divs" -eq "$close_divs" ]; then
        echo "  ✅ $file - Balanceado ($open_divs/$close_divs)"
        total_ok=$((total_ok + 1))
    else
        echo "  ❌ $file - Desbalanceado ($open_divs/$close_divs)"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ "$total_ok" -eq "$total_files" ]; then
    echo "✅ RESULTADO: $total_ok/$total_files páginas com HTML válido!"
else
    echo "⚠️  RESULTADO: $total_ok/$total_files páginas OK"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "2️⃣  COMPONENTES BOOTSTRAP"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

total_css=0
total_js=0

for file in $FILES; do
    has_css=$(grep -c "Bootstrap CSS" "$file")
    has_js=$(grep -c "Bootstrap JS Bundle" "$file")
    
    if [ "$has_css" -eq 1 ]; then
        total_css=$((total_css + 1))
    fi
    
    if [ "$has_js" -eq 1 ]; then
        total_js=$((total_js + 1))
    fi
done

echo "  Bootstrap CSS: $total_css/10 páginas"
echo "  Bootstrap JS:  $total_js/10 páginas"
echo ""

if [ "$total_css" -eq 10 ] && [ "$total_js" -eq 10 ]; then
    echo "  ✅ Todos os componentes Bootstrap presentes!"
else
    echo "  ⚠️  Alguns componentes faltando"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "3️⃣  GRID SYSTEM (Containers, Rows, Columns)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

total_containers=0
total_rows=0
total_cols=0

for file in $FILES; do
    containers=$(grep -c 'class="container' "$file")
    rows=$(grep -c 'class="row' "$file")
    cols=$(grep -c 'class="col-' "$file")
    
    total_containers=$((total_containers + containers))
    total_rows=$((total_rows + rows))
    total_cols=$((total_cols + cols))
    
    printf "  %-25s C:%-2d R:%-2d Cols:%-2d\n" "$file" "$containers" "$rows" "$cols"
done

echo ""
echo "  📊 TOTAL: $total_containers containers | $total_rows rows | $total_cols colunas"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ CONVERSÃO BOOTSTRAP - STATUS FINAL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

all_good=1

if [ "$total_ok" -ne "$total_files" ]; then
    echo "  ❌ HTML desbalanceado em $(($total_files - $total_ok)) arquivo(s)"
    all_good=0
fi

if [ "$total_css" -ne 10 ] || [ "$total_js" -ne 10 ]; then
    echo "  ❌ Bootstrap CSS ou JS faltando"
    all_good=0
fi

if [ "$total_containers" -lt 40 ] || [ "$total_rows" -lt 20 ] || [ "$total_cols" -lt 70 ]; then
    echo "  ⚠️  Pode haver componentes faltando"
    all_good=0
fi

if [ "$all_good" -eq 1 ]; then
    echo ""
    echo "  ╔═══════════════════════════════════════════════════════════╗"
    echo "  ║                                                           ║"
    echo "  ║   ✅  TUDO PERFEITO! PRONTO PARA PRODUÇÃO!               ║"
    echo "  ║                                                           ║"
    echo "  ╚═══════════════════════════════════════════════════════════╝"
    echo ""
else
    echo ""
    echo "  ⚠️  Alguns ajustes podem ser necessários"
    echo ""
fi

