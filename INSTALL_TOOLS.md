# 🛠️ Instalação de Ferramentas de Otimização

## Para executar todas as otimizações, instale as seguintes ferramentas:

### macOS

```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar ferramentas de otimização de imagens
brew install webp
brew install pngquant
brew install imagemagick

# Instalar ferramentas de minificação
npm install -g csso-cli
npm install -g terser
npm install -g html-minifier
```

### Linux (Ubuntu/Debian)

```bash
# Ferramentas de imagem
sudo apt-get update
sudo apt-get install webp pngquant imagemagick

# Node.js e NPM (se não tiver)
sudo apt-get install nodejs npm

# Ferramentas de minificação
sudo npm install -g csso-cli
sudo npm install -g terser
sudo npm install -g html-minifier
```

### Windows

```powershell
# Instalar Chocolatey (gerenciador de pacotes)
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Instalar ferramentas
choco install webp
choco install pngquant
choco install imagemagick

# Node.js
choco install nodejs

# Ferramentas de minificação
npm install -g csso-cli
npm install -g terser
npm install -g html-minifier
```

## Verificar Instalação

```bash
# Verificar se tudo foi instalado corretamente
cwebp -version
pngquant --version
csso --version
terser --version
html-minifier --version
```

## Executar Otimizações

```bash
# 1. Otimizar imagens
./optimize-images.sh

# 2. Minificar CSS
csso styles.css -o styles.min.css

# 3. Minificar JavaScript
terser script.js -o script.min.js --compress --mangle

# 4. Minificar HTML (se necessário)
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

## Alternativa Online (Sem Instalação)

Se preferir não instalar nada localmente, use essas ferramentas online:

- **Imagens:** https://squoosh.app/ (Google)
- **CSS:** https://cssminifier.com/
- **JavaScript:** https://javascript-minifier.com/
- **HTML:** https://www.willpeavy.com/tools/minifier/

## Performance Esperada

Após otimização:
- 🖼️ Imagens: -70% a -85% de tamanho
- 📄 CSS: -30% a -40% de tamanho
- 📜 JavaScript: -25% a -35% de tamanho
- ⚡ PageSpeed Score: 95-100/100
