# 🚀 Guia Rápido de Otimização - Site Evo

## ⚡ Execução Rápida (5 minutos)

Se você já tem as ferramentas instaladas:

```bash
# 1. Otimizar imagens
./optimize-images.sh

# 2. Minificar CSS e JS
./minify-all.sh

# 3. Pronto! Faça upload do site
```

---

## 📋 Checklist Completo

### Fase 1: Preparação (10 min)
- [ ] Ler [INSTALL_TOOLS.md](INSTALL_TOOLS.md)
- [ ] Instalar webp, pngquant, csso-cli, terser
- [ ] Verificar instalação com `cwebp -version`

### Fase 2: Otimização (15 min)
- [ ] Executar `./optimize-images.sh`
- [ ] Executar `./minify-all.sh`
- [ ] Verificar pasta `optimized/` e `dist/`

### Fase 3: Configuração Servidor (20 min)
- [ ] Upload do `.htaccess` (Apache) OU
- [ ] Configurar `nginx.conf` (Nginx)
- [ ] Verificar módulos: gzip, expires, headers
- [ ] Reiniciar servidor

### Fase 4: SEO (10 min)
- [ ] Verificar `sitemap.xml` está acessível
- [ ] Verificar `robots.txt` está acessível
- [ ] Enviar sitemap no Google Search Console
- [ ] Testar Schema.org em validator.schema.org

### Fase 5: Testes (15 min)
- [ ] Testar em PageSpeed Insights
- [ ] Testar em GTmetrix
- [ ] Testar em Lighthouse (Chrome DevTools)
- [ ] Verificar Core Web Vitals

---

## 🎯 Resultado Final Esperado

### PageSpeed Insights
```
✅ Performance:        95-100/100
✅ SEO:               100/100
✅ Accessibility:      95-100/100
✅ Best Practices:     95-100/100
```

### Core Web Vitals
```
✅ LCP: < 2.5s  (Largest Contentful Paint)
✅ FID: < 100ms (First Input Delay)
✅ CLS: < 0.1   (Cumulative Layout Shift)
```

### Tamanho dos Arquivos
```
ANTES:
- image 1.png:     936KB ❌
- image 2.png:     360KB ❌
- styles.css:       96KB ❌
- script.js:        44KB ❌

DEPOIS:
- image-1.webp:     ~50KB ✅ (-94%)
- image-2.webp:     ~80KB ✅ (-78%)
- styles.min.css:   ~65KB ✅ (-32%)
- script.min.js:    ~30KB ✅ (-32%)
```

---

## 📁 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `OTIMIZACOES_COMPLETAS.md` | Documentação completa de todas as otimizações |
| `INSTALL_TOOLS.md` | Guia de instalação de ferramentas |
| `optimize-images.sh` | Script para otimizar imagens |
| `minify-all.sh` | Script para minificar CSS/JS |
| `sitemap.xml` | Sitemap para SEO |
| `robots.txt` | Instruções para crawlers |
| `.htaccess` | Configuração Apache (cache + gzip) |
| `nginx.conf` | Configuração Nginx (cache + gzip) |

---

## 🛠️ Comandos Úteis

### Otimização Manual de Imagens
```bash
# WebP com qualidade 85%
cwebp -q 85 image.png -o image.webp

# PNG com compressão
pngquant --quality=65-80 image.png --output optimized.png
```

### Minificação Manual
```bash
# CSS
csso styles.css -o styles.min.css

# JavaScript
terser script.js -o script.min.js --compress --mangle
```

### Verificar Compressão no Servidor
```bash
# Testar Gzip
curl -H "Accept-Encoding: gzip" -I https://www.evo.com.br/styles.css

# Deve retornar: Content-Encoding: gzip
```

### Verificar Cache Headers
```bash
# Testar Cache
curl -I https://www.evo.com.br/image-2.png

# Deve retornar: Cache-Control: public, max-age=31536000
```

---

## 🔧 Solução de Problemas

### Problema: "cwebp: command not found"
```bash
# macOS
brew install webp

# Linux
sudo apt-get install webp
```

### Problema: "csso: command not found"
```bash
npm install -g csso-cli
# Ou use alternativa online: cssminifier.com
```

### Problema: .htaccess não funciona
```bash
# Verificar se é Apache
apachectl -v

# Verificar AllowOverride
sudo nano /etc/apache2/apache2.conf
# Deve ter: AllowOverride All

# Habilitar módulos
sudo a2enmod deflate expires headers
sudo systemctl restart apache2
```

### Problema: Nginx não comprime
```bash
# Editar nginx.conf
sudo nano /etc/nginx/nginx.conf

# Adicionar no bloco http {}
gzip on;
gzip_types text/css application/javascript;

# Recarregar
sudo nginx -t
sudo systemctl reload nginx
```

---

## 📊 Ferramentas de Teste

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/) - Google oficial
- [GTmetrix](https://gtmetrix.com/) - Análise detalhada
- [WebPageTest](https://www.webpagetest.org/) - Teste em múltiplos locais

### SEO
- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Validator](https://validator.schema.org/)

### Acessibilidade
- [WAVE](https://wave.webaim.org/)
- [aXe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](chrome://lighthouse) (Chrome DevTools)

### Segurança
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## 🎓 Boas Práticas Contínuas

### Manutenção Semanal
- [ ] Verificar PageSpeed score
- [ ] Verificar erros no Google Search Console
- [ ] Revisar logs de erro 404
- [ ] Atualizar sitemap se houver novas páginas

### Manutenção Mensal
- [ ] Otimizar novas imagens adicionadas
- [ ] Revisar e atualizar meta descriptions
- [ ] Verificar backlinks quebrados
- [ ] Atualizar conteúdo antigo

### Manutenção Trimestral
- [ ] Auditoria completa de SEO
- [ ] Análise de Core Web Vitals
- [ ] Revisar estratégia de cache
- [ ] Atualizar certificado SSL (se necessário)

---

## 💡 Dicas Extras

### CDN Gratuito
Use Cloudflare (grátis) para:
- ✅ Cache global
- ✅ Compressão Brotli
- ✅ SSL grátis
- ✅ Proteção DDoS
- ✅ Análise de tráfego

### PWA (Progressive Web App)
Para ir além, adicione:
- `manifest.json` para app installable
- Service Worker para offline
- Push notifications

### Monitoramento
Configure alertas para:
- Downtime (UptimeRobot grátis)
- Performance degradation
- Erros 404/500
- Certificado SSL expirando

---

## ✅ Verificação Final

Antes de considerar completo, verifique:

1. **Imagens**
   - [ ] Todas as imagens estão otimizadas (WebP/AVIF)
   - [ ] Imagens têm width/height
   - [ ] Hero image tem fetchpriority="high"
   - [ ] Demais imagens têm loading="lazy"

2. **CSS/JS**
   - [ ] Arquivos minificados
   - [ ] CSS não-crítico carrega async
   - [ ] Scripts têm defer
   - [ ] Nenhum script bloqueia renderização

3. **SEO**
   - [ ] sitemap.xml acessível
   - [ ] robots.txt acessível
   - [ ] Schema.org validado
   - [ ] Meta tags completas

4. **Servidor**
   - [ ] Gzip/Brotli habilitado
   - [ ] Cache headers configurados
   - [ ] Security headers ativos
   - [ ] HTTPS funcionando

5. **Performance**
   - [ ] PageSpeed > 90
   - [ ] LCP < 2.5s
   - [ ] FID < 100ms
   - [ ] CLS < 0.1

---

## 🎉 Parabéns!

Se todos os itens acima estão verificados, seu site está otimizado para:
- ⚡ Máxima velocidade
- 🔍 Melhor ranking no Google
- ♿ Acessibilidade completa
- 🔒 Segurança robusta

**Próximo passo:** Monitore e mantenha as otimizações!

---

**Dúvidas?** Releia [OTIMIZACOES_COMPLETAS.md](OTIMIZACOES_COMPLETAS.md) para detalhes técnicos.
