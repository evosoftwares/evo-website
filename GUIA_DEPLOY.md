# 🚀 GUIA COMPLETO DE DEPLOY - SITE EVO

**Versão:** 3.0 Final
**Data:** 19/11/2025
**Status:** ✅ PRONTO PARA PRODUÇÃO

---

## 📋 PRÉ-REQUISITOS

Antes de fazer o deploy, certifique-se de que você tem:

- ✅ Domínio registrado (evo.com.br)
- ✅ Certificado SSL/TLS (HTTPS)
- ✅ Servidor web (Apache, Nginx, ou hospedagem compartilhada)
- ✅ Acesso FTP/SSH ao servidor
- ✅ Acesso ao Google Search Console
- ✅ Acesso ao Google Analytics (opcional)

---

## 📦 ARQUIVOS PARA DEPLOY

### Arquivos HTML (9 páginas)
```
✅ index.html
✅ about.html
✅ portfolio.html
✅ materiais.html
✅ gamificacao.html
✅ blog-detalhes.html
✅ suporte.html
✅ lgpd.html
✅ registro-marca.html
```

### Arquivos CSS
```
✅ styles.css
✅ data-visualization.css (se existir)
```

### Arquivos JavaScript
```
✅ script.js
```

### Arquivos de Imagem/SVG
```
✅ image05 1.svg (logo)
✅ image 2.png (Open Graph)
✅ favicon.svg
✅ favicon.ico
✅ Todas as outras imagens
```

### Arquivos de Configuração
```
✅ sitemap.xml
✅ robots.txt
✅ .htaccess (para Apache)
```

### NÃO fazer upload
```
❌ node_modules/
❌ .git/
❌ .vscode/
❌ *.md (documentação)
❌ COMECE_AQUI.md
❌ DEPLOY_AGORA.md
❌ REVISAO_FINAL_2025.md
❌ SEO_100_COMPLETO.md
❌ GUIA_DEPLOY.md
```

---

## 🔧 PASSO A PASSO DO DEPLOY

### 1. Preparar os Arquivos

```bash
# Criar pasta de deploy
mkdir deploy
cd deploy

# Copiar apenas arquivos necessários
cp ../*.html .
cp ../*.css .
cp ../*.js .
cp ../*.svg .
cp ../*.png .
cp ../*.ico .
cp ../sitemap.xml .
cp ../robots.txt .
cp ../.htaccess .
```

### 2. Upload via FTP/SSH

**Opção A: FTP (FileZilla, Cyberduck)**
1. Conecte-se ao servidor
2. Navegue até a pasta `public_html` ou `www`
3. Faça upload de todos os arquivos
4. Verifique permissões (644 para arquivos, 755 para pastas)

**Opção B: SSH/SCP**
```bash
# Upload completo via SCP
scp -r deploy/* usuario@servidor.com:/caminho/para/public_html/

# Ou via rsync (recomendado)
rsync -avz --exclude='*.md' --exclude='.git' \
  ./ usuario@servidor.com:/caminho/para/public_html/
```

### 3. Verificar Configurações do Servidor

**Para Apache:**
```bash
# Verificar se mod_rewrite está ativado
a2enmod rewrite
a2enmod deflate
a2enmod expires
a2enmod headers

# Reiniciar Apache
sudo service apache2 restart
```

**Para Nginx:**
Crie arquivo de configuração `/etc/nginx/sites-available/evo`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name evo.com.br www.evo.com.br;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name evo.com.br www.evo.com.br;
    
    root /var/www/evo;
    index index.html;
    
    # SSL Configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    
    # Cache Static Files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # HTML Files
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public, must-revalidate";
    }
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## 🔍 CONFIGURAÇÃO DO GOOGLE SEARCH CONSOLE

### 1. Verificar Propriedade do Site

1. Acesse https://search.google.com/search-console
2. Adicione a propriedade `https://www.evo.com.br`
3. Escolha método de verificação:
   - **Meta tag HTML:** Adicionar no `<head>` de index.html
   - **Arquivo HTML:** Upload de arquivo google[...].html
   - **Google Analytics:** Se já tiver configurado
   - **DNS:** Adicionar registro TXT no domínio

### 2. Enviar Sitemap

```
URL do Sitemap: https://www.evo.com.br/sitemap.xml
```

1. No Search Console, vá em "Sitemaps"
2. Cole a URL do sitemap
3. Clique em "Enviar"
4. Aguarde indexação (pode levar 1-7 dias)

### 3. Solicitar Indexação

1. Use a ferramenta "Inspeção de URL"
2. Cole URL de cada página importante
3. Clique em "Solicitar indexação"
4. Repita para as 9 páginas principais

---

## 📊 CONFIGURAÇÃO DO GOOGLE ANALYTICS

### 1. Criar Propriedade GA4

1. Acesse https://analytics.google.com
2. Crie nova propriedade "Evo"
3. Configure fuso horário: Brasil/São Paulo
4. Copie o ID de medição (G-XXXXXXXXXX)

### 2. Adicionar ao Site

Adicione no `<head>` de todas as páginas HTML (antes do `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ CHECKLIST PÓS-DEPLOY

### Testes Essenciais

- [ ] Todas as 9 páginas carregam corretamente
- [ ] HTTPS está funcionando (cadeado verde)
- [ ] Redirecionamento HTTP → HTTPS funciona
- [ ] Formulários de contato funcionam
- [ ] Links internos funcionam
- [ ] Imagens carregam corretamente
- [ ] Mobile responsivo funciona
- [ ] Google Fonts carrega
- [ ] Bootstrap funciona
- [ ] JavaScript funciona (menu mobile, etc)

### Testes de Performance

- [ ] **PageSpeed Insights:** https://pagespeed.web.dev/
  - Teste Desktop e Mobile
  - Objetivo: 85-100/100
  
- [ ] **GTmetrix:** https://gtmetrix.com/
  - Grade A desejada
  - Tempo de carregamento < 2s

- [ ] **WebPageTest:** https://www.webpagetest.org/
  - Testar de múltiplas localizações

### Testes de SEO

- [ ] **Google Search Console:** Sem erros de rastreamento
- [ ] **Rich Results Test:** https://search.google.com/test/rich-results
  - Testar Schema.org de cada página
  
- [ ] **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
  - Todas as páginas mobile-friendly

- [ ] **Structured Data Testing:** https://validator.schema.org/
  - Validar JSON-LD

### Testes de Segurança

- [ ] **SSL Labs:** https://www.ssllabs.com/ssltest/
  - Grade A+ desejada
  
- [ ] **Security Headers:** https://securityheaders.com/
  - Grade A desejada

### Validação de Redes Sociais

- [ ] **Facebook Debugger:** https://developers.facebook.com/tools/debug/
  - Testar Open Graph de cada página
  
- [ ] **Twitter Card Validator:** https://cards-dev.twitter.com/validator
  - Testar Twitter Cards

- [ ] **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

---

## 🎯 MONITORAMENTO CONTÍNUO

### Ferramentas Recomendadas

1. **Google Search Console** (diário)
   - Monitorar indexação
   - Ver queries de busca
   - Identificar erros

2. **Google Analytics** (semanal)
   - Tráfego orgânico
   - Taxa de rejeição
   - Conversões

3. **PageSpeed Insights** (mensal)
   - Core Web Vitals
   - Performance scores

4. **Uptime Monitor** (contínuo)
   - UptimeRobot
   - Pingdom
   - StatusCake

### Métricas-Chave

- **Tráfego orgânico:** Meta: crescimento de 30% em 3 meses
- **Taxa de rejeição:** Meta: < 50%
- **Tempo médio na página:** Meta: > 2 minutos
- **Conversões:** Meta: 3-5% dos visitantes
- **Core Web Vitals:**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

---

## 🔄 ATUALIZAÇÕES FUTURAS

### Manutenção Regular

**Semanal:**
- Backup completo do site
- Verificar links quebrados
- Monitorar comentários/contatos

**Mensal:**
- Atualizar sitemap.xml (se novos conteúdos)
- Revisar performance no PageSpeed
- Analisar dados do Google Analytics

**Trimestral:**
- Atualizar dependências (Bootstrap, etc)
- Revisar e atualizar conteúdo
- Otimizar imagens antigas

### Como Atualizar o Sitemap

Sempre que adicionar/remover páginas:

```xml
<!-- Adicionar nova entrada -->
<url>
    <loc>https://www.evo.com.br/nova-pagina.html</loc>
    <lastmod>2025-XX-XX</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

Depois reenviar no Google Search Console.

---

## 📞 SUPORTE

### Problemas Comuns

**Problema:** Páginas não indexam no Google
- **Solução:** Verificar robots.txt, enviar sitemap, solicitar indexação manual

**Problema:** Performance baixa no PageSpeed
- **Solução:** Verificar .htaccess, ativar compressão, otimizar imagens

**Problema:** HTTPS não funciona
- **Solução:** Verificar certificado SSL, configurar redirect no .htaccess

**Problema:** Formulário não envia emails
- **Solução:** Configurar script PHP de envio, verificar servidor SMTP

---

## 🎉 CONCLUSÃO

Seguindo este guia, seu site estará:

✅ Online e acessível
✅ Otimizado para SEO
✅ Performático (PageSpeed 85-100)
✅ Seguro (HTTPS + headers)
✅ Indexado no Google
✅ Pronto para gerar tráfego orgânico

**Boa sorte com o lançamento! 🚀**

---

**Última atualização:** 19/11/2025
**Versão:** 3.0 Final
**Autor:** Claude Code + Equipe Evo
