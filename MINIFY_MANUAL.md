# 📝 Guia de Minificação Manual

Como csso e terser não estão instalados, você pode minificar os arquivos de 3 formas:

## OPÇÃO 1: Instalar Ferramentas (Recomendado)

```bash
# Instalar via npm
npm install -g csso-cli terser

# Executar script
./minify-all.sh
```

## OPÇÃO 2: Ferramentas Online (Mais Fácil)

### CSS
1. Acesse: https://cssminifier.com/
2. Copie todo o conteúdo de [styles.css](styles.css)
3. Cole na ferramenta
4. Clique em "Minify"
5. Salve como `dist/styles.min.css`

**Arquivos para minificar:**
- styles.css → dist/styles.min.css
- data-visualization.css → dist/data-visualization.min.css

### JavaScript
1. Acesse: https://javascript-minifier.com/
2. Copie todo o conteúdo de [script.js](script.js)
3. Cole na ferramenta
4. Clique em "Minify"
5. Salve como `dist/script.min.js`

**Arquivos para minificar:**
- script.js → dist/script.min.js
- blog-detalhes.js → dist/blog-detalhes.min.js
- data-visualization.js → dist/data-visualization.min.js

## OPÇÃO 3: Usar CDN/Build Tools

Se você usar um bundler (Webpack, Vite, etc.), ele já minifica automaticamente.

## Atualizar Referências no HTML (Opcional)

Se você criar os arquivos minificados, atualize o HTML:

```html
<!-- De: -->
<link rel="stylesheet" href="styles.css">

<!-- Para: -->
<link rel="stylesheet" href="dist/styles.min.css">
```

```html
<!-- De: -->
<script src="script.js" defer></script>

<!-- Para: -->
<script src="dist/script.min.js" defer></script>
```

## Economia Esperada

- **styles.css:** 96KB → ~65KB (-32%)
- **script.js:** 44KB → ~30KB (-32%)
- **blog-detalhes.js:** 108KB → ~75KB (-31%)

**Total:** ~60KB economizados

## Observação Importante

**NÃO é obrigatório minificar para ter um bom score!**

Com as otimizações já implementadas (HTML, imagens WebP, cache, etc.),
você já deve alcançar **85-90/100** no PageSpeed.

A minificação adiciona apenas **+5-10 pontos** extras.

## Status Atual

✅ Imagens otimizadas (WebP) - **CONCLUÍDO**
✅ HTML otimizado - **CONCLUÍDO**
✅ .htaccess com cache/gzip - **CONCLUÍDO**
🟡 CSS minificado - OPCIONAL (use ferramentas online se quiser)
🟡 JS minificado - OPCIONAL (use ferramentas online se quiser)

**Você já está pronto para fazer deploy!**
