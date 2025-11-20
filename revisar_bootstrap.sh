#!/bin/bash

echo "🔍 REVISÃO COMPLETA DA CONVERSÃO BOOTSTRAP"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

FILES="index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html privacy.html registro-marca.html"

echo "1️⃣ VERIFICAÇÃO DE TAGS HTML"
echo ""
for file in $FILES; do
    echo -n "  📄 $file: "
    
    # Contar aberturas e fechamentos de divs
    open_divs=$(grep -o '<div' "$file" | wc -l | tr -d ' ')
    close_divs=$(grep -o '</div>' "$file" | wc -l | tr -d ' ')
    
    # Verificar se HTML fecha
    has_html_close=$(grep -c '</html>' "$file")
    
    if [ "$open_divs" -eq "$close_divs" ] && [ "$has_html_close" -eq 1 ]; then
        echo "✅ OK (divs: $open_divs/$close_divs)"
    else
        echo "⚠️  VERIFICAR (divs: $open_divs/$close_divs, </html>: $has_html_close)"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "2️⃣ VERIFICAÇÃO BOOTSTRAP CSS & JS"
echo ""
for file in $FILES; do
    echo "  📄 $file:"
    
    has_css=$(grep -c "Bootstrap CSS" "$file")
    has_js=$(grep -c "Bootstrap JS Bundle" "$file")
    
    if [ "$has_css" -eq 1 ]; then
        echo "     ✅ Bootstrap CSS presente"
    else
        echo "     ❌ Bootstrap CSS ausente"
    fi
    
    if [ "$has_js" -eq 1 ]; then
        echo "     ✅ Bootstrap JS presente"
    else
        echo "     ❌ Bootstrap JS ausente"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "3️⃣ VERIFICAÇÃO DE ESTRUTURA BOOTSTRAP"
echo ""
for file in $FILES; do
    containers=$(grep -c 'class="container' "$file")
    rows=$(grep -c 'class="row' "$file")
    cols=$(grep -c 'class="col-' "$file")
    
    printf "  📄 %-25s Containers: %2d | Rows: %2d | Cols: %2d\n" "$file" "$containers" "$rows" "$cols"
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "4️⃣ VERIFICAÇÃO DE ROWS SEM CONTAINER"
echo ""

for file in $FILES; do
    # Procurar por rows que não estão dentro de containers
    # Isso é uma verificação simplificada
    echo "  📄 $file:"
    
    # Verificar se há <div class="row"> sem um <div class="container"> antes
    # Grep com contexto para verificar hierarquia
    problemas=$(grep -B5 'class="row' "$file" | grep -c 'class="container')
    total_rows=$(grep -c 'class="row' "$file")
    
    if [ "$total_rows" -eq 0 ]; then
        echo "     ℹ️  Nenhuma row encontrada (OK para páginas simples)"
    elif [ "$problemas" -ge "$total_rows" ]; then
        echo "     ✅ Todas as rows dentro de containers"
    else
        echo "     ⚠️  Verificar hierarquia manualmente"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "5️⃣ VERIFICAÇÃO CONTACT SECTION (ESTRUTURA ESPECIAL)"
echo ""

for file in $FILES; do
    # Verificar se contact section tem estrutura correta
    if grep -q "contact-wrapper" "$file"; then
        echo "  📄 $file:"
        
        has_fluid=$(grep -c 'class="container-fluid contact-wrapper"' "$file")
        has_row=$(grep -A2 'container-fluid contact-wrapper' "$file" | grep -c 'class="row"')
        has_col=$(grep -A5 'container-fluid contact-wrapper' "$file" | grep -c 'class="col-lg-6')
        
        if [ "$has_fluid" -eq 1 ] && [ "$has_row" -ge 1 ] && [ "$has_col" -ge 2 ]; then
            echo "     ✅ Contact section estruturado corretamente"
        else
            echo "     ⚠️  Verificar estrutura (fluid:$has_fluid, row:$has_row, col:$has_col)"
        fi
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "6️⃣ VERIFICAÇÃO DE CLASSES RESPONSIVAS"
echo ""

for file in $FILES; do
    col_lg=$(grep -o 'col-lg-[0-9]' "$file" | wc -l | tr -d ' ')
    col_md=$(grep -o 'col-md-[0-9]' "$file" | wc -l | tr -d ' ')
    
    if [ "$col_lg" -gt 0 ] || [ "$col_md" -gt 0 ]; then
        printf "  📄 %-25s col-lg: %2d | col-md: %2d\n" "$file" "$col_lg" "$col_md"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ REVISÃO COMPLETA!"
echo ""
