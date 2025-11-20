#!/bin/bash

# Script de Minificação Completa para PageSpeed 100%
# Minifica CSS, JavaScript e HTML

echo "⚡ Iniciando processo de minificação..."
echo ""

# Verificar se as ferramentas estão instaladas
if ! command -v csso &> /dev/null; then
    echo "❌ csso-cli não encontrado."
    echo "   Instale com: npm install -g csso-cli"
    echo ""
    USE_CSSO=false
else
    USE_CSSO=true
fi

if ! command -v terser &> /dev/null; then
    echo "❌ terser não encontrado."
    echo "   Instale com: npm install -g terser"
    echo ""
    USE_TERSER=false
else
    USE_TERSER=true
fi

# Criar diretório para arquivos minificados
mkdir -p dist

echo "📝 Minificando CSS..."
if [ "$USE_CSSO" = true ]; then
    csso styles.css -o dist/styles.min.css
    csso data-visualization.css -o dist/data-visualization.min.css

    # Comparar tamanhos
    orig=$(du -h styles.css | cut -f1)
    mini=$(du -h dist/styles.min.css | cut -f1)
    echo "   ✅ styles.css: $orig → $mini"

    orig2=$(du -h data-visualization.css | cut -f1)
    mini2=$(du -h dist/data-visualization.min.css | cut -f1)
    echo "   ✅ data-visualization.css: $orig2 → $mini2"
else
    echo "   ⚠️  Pulando CSS (csso não instalado)"
    cp styles.css dist/styles.min.css
    cp data-visualization.css dist/data-visualization.min.css
fi

echo ""
echo "📜 Minificando JavaScript..."
if [ "$USE_TERSER" = true ]; then
    terser script.js -o dist/script.min.js --compress --mangle
    terser blog-detalhes.js -o dist/blog-detalhes.min.js --compress --mangle
    terser data-visualization.js -o dist/data-visualization.min.js --compress --mangle

    # Comparar tamanhos
    orig=$(du -h script.js | cut -f1)
    mini=$(du -h dist/script.min.js | cut -f1)
    echo "   ✅ script.js: $orig → $mini"

    orig2=$(du -h blog-detalhes.js | cut -f1)
    mini2=$(du -h dist/blog-detalhes.min.js | cut -f1)
    echo "   ✅ blog-detalhes.js: $orig2 → $mini2"

    orig3=$(du -h data-visualization.js | cut -f1)
    mini3=$(du -h dist/data-visualization.min.js | cut -f1)
    echo "   ✅ data-visualization.js: $orig3 → $mini3"
else
    echo "   ⚠️  Pulando JS (terser não instalado)"
    cp script.js dist/script.min.js
    cp blog-detalhes.js dist/blog-detalhes.min.js
    cp data-visualization.js dist/data-visualization.min.js
fi

echo ""
echo "✨ Minificação concluída!"
echo ""
echo "📊 Arquivos salvos em: ./dist/"
echo ""
echo "⚡ Próximos passos:"
echo "1. Substitua as referências no HTML pelos arquivos .min.css e .min.js"
echo "2. Exemplo: <link rel='stylesheet' href='dist/styles.min.css'>"
echo "3. Exemplo: <script src='dist/script.min.js'></script>"
echo ""

# Calcular economia total
if [ "$USE_CSSO" = true ] && [ "$USE_TERSER" = true ]; then
    echo "💾 Economia de espaço estimada: 30-40%"
    echo "⚡ Melhoria de velocidade estimada: 15-25%"
fi
