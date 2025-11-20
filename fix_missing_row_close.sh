#!/bin/bash

echo "🔧 Corrigindo fechamento de rows no contact section..."
echo ""

FILES="portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html registro-marca.html"

for file in $FILES; do
    echo "  📄 $file"
    
    # Adicionar </div> antes do fechamento do contact-wrapper
    # Procurar por </div> que fecha contact-wrapper (antes de </section>)
    # e adicionar </div> para fechar o row
    
    sed -i '' '/container-fluid contact-wrapper/,/<\/section>/{
        s|^        </div>$|            </div>\n        </div>|
    }' "$file"
    
    echo "     ✅ Row fechado corretamente"
done

echo ""
echo "✅ Todos os rows do contact section corrigidos!"
