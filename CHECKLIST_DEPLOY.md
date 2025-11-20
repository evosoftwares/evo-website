# ✅ CHECKLIST DE DEPLOY - Site Evo

Use este checklist para garantir que tudo está pronto antes e depois do deploy.

---

## 📋 PRÉ-DEPLOY

### 1️⃣ Instalação de Ferramentas
```bash
# macOS
- [ ] brew install webp
- [ ] brew install pngquant
- [ ] npm install -g csso-cli
- [ ] npm install -g terser

# Linux
- [ ] sudo apt-get install webp
- [ ] sudo apt-get install pngquant
- [ ] sudo npm install -g csso-cli
- [ ] sudo npm install -g terser
```

### 2️⃣ Verificar Instalação
```bash
- [ ] cwebp -version (deve retornar versão)
- [ ] pngquant --version (deve retornar versão)
- [ ] csso --version (deve retornar versão)
- [ ] terser --version (deve retornar versão)
```

### 3️⃣ Backup
```bash
- [ ] Fazer backup completo do site atual
- [ ] Salvar em local seguro
- [ ] Verificar integridade do backup
```

### 4️⃣ Otimização de Imagens
```bash
- [ ] ./optimize-images.sh
- [ ] Verificar pasta /optimized/ foi criada
- [ ] Verificar image-1.webp existe
- [ ] Verificar image-2.webp existe
- [ ] Comparar tamanhos (deve ser -70% menor)
```

### 5️⃣ Minificação CSS/JS
```bash
- [ ] ./minify-all.sh
- [ ] Verificar pasta /dist/ foi criada
- [ ] Verificar styles.min.css existe
- [ ] Verificar script.min.js existe
- [ ] Comparar tamanhos (deve ser -30% menor)
```

### 6️⃣ Teste Local
```bash
- [ ] Abrir index.html no Chrome
- [ ] F12 → Console (verificar sem erros)
- [ ] F12 → Network (verificar imagens .webp)
- [ ] Testar navegação entre páginas
- [ ] Testar formulário de contato
- [ ] Testar menu mobile
- [ ] Testar em Firefox
- [ ] Testar em Safari
```

### 7️⃣ Validação Técnica
```bash
- [ ] https://validator.w3.org/ (HTML válido)
- [ ] https://validator.schema.org/ (Schema.org válido)
- [ ] https://wave.webaim.org/ (Acessibilidade)
```

---

## 🚀 DEPLOY

### 8️⃣ Preparação dos Arquivos
```bash
- [ ] Todos os arquivos otimizados estão prontos
- [ ] .htaccess está incluído
- [ ] sitemap.xml está incluído
- [ ] robots.txt está incluído
- [ ] Pasta /optimized/ está incluída
- [ ] Pasta /dist/ está incluída (se usar minificados)
```

### 9️⃣ Upload (Git)
```bash
- [ ] git add .
- [ ] git commit -m "Otimizações de performance e SEO"
- [ ] git push origin main
- [ ] Verificar build/deploy automático (se aplicável)
```

### 9️⃣ Upload (FTP)
```bash
- [ ] Conectar ao servidor via FTP
- [ ] Upload de todos os arquivos
- [ ] Verificar .htaccess foi enviado
- [ ] Verificar permissões (644 para arquivos, 755 para pastas)
```

---

## ✅ PÓS-DEPLOY

### 🔟 Verificação Básica
```bash
- [ ] https://www.evo.com.br/ carrega
- [ ] Imagens aparecem corretamente
- [ ] Menu funciona
- [ ] Links funcionam
- [ ] Formulário funciona
- [ ] Mobile responsivo funciona
```

### 1️⃣1️⃣ Verificação Técnica
```bash
- [ ] https://www.evo.com.br/sitemap.xml acessível
- [ ] https://www.evo.com.br/robots.txt acessível
- [ ] View Source → Schema.org presente
- [ ] F12 → Console sem erros
- [ ] F12 → Network → Imagens são .webp
```

### 1️⃣2️⃣ Headers HTTP
```bash
# Testar Gzip
- [ ] curl -H "Accept-Encoding: gzip" -I https://www.evo.com.br/styles.css
      (deve retornar: Content-Encoding: gzip)

# Testar Cache
- [ ] curl -I https://www.evo.com.br/image-2.png
      (deve retornar: Cache-Control: max-age=31536000)

# Testar Security Headers
- [ ] curl -I https://www.evo.com.br/
      (deve retornar: X-Content-Type-Options, X-Frame-Options, etc)
```

### 1️⃣3️⃣ PageSpeed Insights
```bash
- [ ] https://pagespeed.web.dev/
- [ ] Inserir: https://www.evo.com.br
- [ ] Performance > 90
- [ ] SEO = 100
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
```

### 1️⃣4️⃣ Google Search Console
```bash
- [ ] Acessar https://search.google.com/search-console
- [ ] Adicionar propriedade: evo.com.br
- [ ] Verificar propriedade (DNS ou HTML)
- [ ] Enviar sitemap: https://www.evo.com.br/sitemap.xml
- [ ] Verificar se sitemap foi aceito
- [ ] Solicitar indexação da página inicial
```

### 1️⃣5️⃣ Schema.org
```bash
- [ ] https://validator.schema.org/
- [ ] Inserir URL: https://www.evo.com.br
- [ ] Verificar Organization schema válido
- [ ] Verificar WebSite schema válido
- [ ] Verificar Service schema válido
- [ ] Sem erros ou warnings
```

### 1️⃣6️⃣ Rich Results
```bash
- [ ] https://search.google.com/test/rich-results
- [ ] Inserir URL: https://www.evo.com.br
- [ ] Verificar rich results detectados
- [ ] Verificar preview no Google
```

### 1️⃣7️⃣ GTmetrix
```bash
- [ ] https://gtmetrix.com/
- [ ] Inserir: https://www.evo.com.br
- [ ] Performance Grade > A
- [ ] Structure Grade > A
- [ ] Web Vitals passando
```

### 1️⃣8️⃣ Segurança
```bash
- [ ] https://securityheaders.com/
- [ ] Inserir: https://www.evo.com.br
- [ ] Score > B
- [ ] CSP configurado
- [ ] X-Frame-Options configurado

- [ ] https://www.ssllabs.com/ssltest/
- [ ] Inserir: evo.com.br
- [ ] SSL Grade > A (se HTTPS ativo)
```

### 1️⃣9️⃣ Cross-Browser Testing
```bash
Desktop:
- [ ] Chrome (última versão)
- [ ] Firefox (última versão)
- [ ] Safari (última versão)
- [ ] Edge (última versão)

Mobile:
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Samsung Internet
```

### 2️⃣0️⃣ Monitoramento (24-48h)
```bash
- [ ] Verificar logs de erro (se disponível)
- [ ] Verificar erros 404
- [ ] Verificar tempo de resposta
- [ ] Verificar taxa de rejeição (Analytics)
- [ ] Verificar Google Search Console para erros
```

---

## 🎯 METAS DE PERFORMANCE

### Deve Alcançar (Mínimo)
```
✅ PageSpeed Performance: > 90
✅ PageSpeed SEO: 100
✅ PageSpeed Accessibility: > 90
✅ PageSpeed Best Practices: > 90
✅ LCP: < 2.5s
✅ FID: < 100ms
✅ CLS: < 0.1
✅ GTmetrix Grade: A
```

### Idealmente Alcançar
```
🎯 PageSpeed Performance: 95-100
🎯 LCP: < 2.0s
🎯 FID: < 50ms
🎯 CLS: < 0.05
🎯 Time to Interactive: < 3s
🎯 Total Blocking Time: < 200ms
```

---

## ⚠️ PROBLEMAS COMUNS

### Imagens não carregam
```bash
Solução:
- [ ] Verificar se /optimized/ foi enviado
- [ ] Verificar permissões da pasta (755)
- [ ] Verificar caminhos no HTML
- [ ] Verificar se browser suporta WebP
```

### Gzip não funciona
```bash
Solução:
- [ ] Verificar se .htaccess foi enviado
- [ ] Verificar se mod_deflate está habilitado
- [ ] Verificar logs do servidor
- [ ] Testar: curl -H "Accept-Encoding: gzip" -I URL
```

### PageSpeed ainda baixo
```bash
Solução:
- [ ] Verificar se scripts foram executados
- [ ] Verificar se imagens foram otimizadas
- [ ] Verificar se .htaccess está ativo
- [ ] Limpar cache do CDN (se usar)
- [ ] Considerar adicionar CDN (Cloudflare)
```

### Schema.org não válido
```bash
Solução:
- [ ] Verificar JSON-LD no View Source
- [ ] Copiar e colar em validator.schema.org
- [ ] Corrigir erros apontados
- [ ] Revalidar
```

---

## 📞 SUPORTE

Se algo der errado:

1. **Reverter para backup:**
   ```bash
   # Restaurar arquivos do backup
   ```

2. **Verificar logs:**
   ```bash
   # Apache: /var/log/apache2/error.log
   # Nginx: /var/log/nginx/error.log
   ```

3. **Consultar documentação:**
   - README_OTIMIZACAO.md
   - RELATORIO_REVISAO.md
   - OTIMIZACOES_COMPLETAS.md

---

## ✅ APROVAÇÃO FINAL

Só marque como completo quando TODOS os itens estiverem ✅

### Pré-Deploy
- [ ] Ferramentas instaladas
- [ ] Imagens otimizadas
- [ ] CSS/JS minificados
- [ ] Testado localmente

### Deploy
- [ ] Arquivos enviados
- [ ] .htaccess ativo
- [ ] Sitemap acessível

### Pós-Deploy
- [ ] Site carrega corretamente
- [ ] PageSpeed > 90
- [ ] SEO = 100
- [ ] Sem erros no console
- [ ] Sitemap enviado ao Google

### Validação Final
- [ ] Todos os testes passaram
- [ ] Performance alcançada
- [ ] SEO implementado
- [ ] Monitoramento configurado

---

**Status:** 🟢 PRONTO PARA DEPLOY
**Data:** _____________
**Responsável:** _____________
**Assinatura:** _____________

---

**Próxima Revisão:** 30 dias após deploy
**Manutenção:** Mensal
