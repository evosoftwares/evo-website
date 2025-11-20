#!/bin/bash

echo "🔧 Convertendo Contact Section para Full Width..."
echo ""

FILES="index.html about.html portfolio.html materiais.html gamificacao.html blog-detalhes.html suporte.html lgpd.html privacy.html registro-marca.html"

for file in $FILES; do
    if grep -q "contact-wrapper" "$file"; then
        echo "  📄 $file"
        
        # Criar backup temporário
        cp "$file" "${file}.bak"
        
        # Usar Python para fazer a substituição complexa
        python3 << 'PYTHON_SCRIPT'
import re
import sys

file = sys.argv[1]

with open(file, 'r') as f:
    content = f.read()

# Padrão para encontrar a seção de contato completa
pattern = r'(<section class="contact" id="contato">)\s*(<div class="container-fluid contact-wrapper">)\s*(<div class="row">)\s*(<div class="col-lg-6 p-0 contact-image">.*?</div>)\s*(<div class="col-lg-6 contact-form-wrapper">)(.*?)(</div>)\s*(</div>)\s*(</div>)\s*(</section>)'

def replace_contact(match):
    # Extrair apenas a parte do formulário
    form_content = match.group(6)
    
    # Nova estrutura: container normal + formulário full width
    new_structure = f'''<section class="contact" id="contato">
        <div class="container contact-wrapper">
            <div class="contact-form-wrapper">{form_content}</div>
        </div>
    </section>'''
    
    return new_structure

# Fazer a substituição
content_new = re.sub(pattern, replace_contact, content, flags=re.DOTALL)

# Se não encontrou o padrão, tentar padrão alternativo sem imagem
if content_new == content:
    print(f"  ⚠️  Padrão não encontrado, mantendo original")
else:
    with open(file, 'w') as f:
        f.write(content_new)
    print(f"  ✅ Convertido para full width")

PYTHON_SCRIPT
python3 -c "import sys; exec(open('/dev/stdin').read())" "$file" << 'PYTHON_END'
import re
import sys

file = sys.argv[1]

with open(file, 'r') as f:
    content = f.read()

# Padrão para encontrar a seção de contato
pattern = r'(<section class="contact" id="contato">.*?</section>)'

match = re.search(pattern, content, re.DOTALL)

if match:
    contact_section = match.group(1)
    
    # Extrair o conteúdo do formulário
    form_pattern = r'<div class="col-lg-6 contact-form-wrapper">(.*?)</div>\s*</div>\s*</div>\s*</section>'
    form_match = re.search(form_pattern, contact_section, re.DOTALL)
    
    if form_match:
        form_content = form_match.group(1)
        
        # Nova estrutura full width
        new_contact = f'''<section class="contact" id="contato">
        <div class="container contact-wrapper">
            <div class="contact-form-wrapper">
{form_content}            </div>
        </div>
    </section>'''
        
        # Substituir no conteúdo original
        content = content.replace(match.group(1), new_contact)
        
        with open(file, 'w') as f:
            f.write(content)

PYTHON_END

    fi
done

echo ""
echo "✅ Contact sections convertidas para full width!"
