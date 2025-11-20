#!/bin/bash

# Script de Otimização de Imagens para PageSpeed 100%
# Converte PNG para WebP/AVIF e comprime para melhor performance

echo "🖼️  Iniciando otimização de imagens..."

# Verifica se as ferramentas estão instaladas
command -v cwebp >/dev/null 2>&1 || {
    echo "❌ cwebp não encontrado. Instalando..."
    echo "Execute: brew install webp (macOS) ou apt-get install webp (Linux)"
    exit 1
}

# Lista de imagens para otimizar
images=(
    "image 1.png"
    "image 2.png"
    "mulhernahero.png"
    "Sam's_Club.png"
    "Ponto.png"
    "Kabum.png"
    "Positivo.png"
    "Decathlon.png"
    "Camada 2.png"
    "Clip path group.png"
)

# Criar diretório para imagens otimizadas
mkdir -p optimized

echo ""
echo "📦 Convertendo e comprimindo imagens..."
echo ""

for img in "${images[@]}"; do
    if [ -f "$img" ]; then
        filename="${img%.*}"

        # Converter para WebP (qualidade 85 - ótimo balanço)
        echo "→ Convertendo $img para WebP..."
        cwebp -q 85 "$img" -o "optimized/${filename}.webp"

        # Redimensionar e otimizar PNG original (fallback)
        echo "→ Otimizando PNG original..."
        if command -v pngquant >/dev/null 2>&1; then
            pngquant --quality=65-80 --output "optimized/$img" "$img" --force
        else
            cp "$img" "optimized/$img"
            echo "   ⚠️  pngquant não instalado. PNG não foi comprimido."
        fi

        # Mostrar economia
        original_size=$(du -h "$img" | cut -f1)
        webp_size=$(du -h "optimized/${filename}.webp" | cut -f1)
        echo "   ✅ $img: $original_size → WebP: $webp_size"
        echo ""
    fi
done

echo "✨ Otimização concluída!"
echo ""
echo "📊 Resultados salvos em: ./optimized/"
echo ""
echo "⚡ Próximos passos:"
echo "1. Substitua as imagens originais pelas da pasta 'optimized'"
echo "2. Atualize o HTML para usar <picture> com WebP e PNG fallback"
echo ""
echo "Exemplo:"
echo '<picture>'
echo '  <source srcset="image-2.webp" type="image/webp">'
echo '  <img src="image 2.png" alt="..." loading="lazy">'
echo '</picture>'
