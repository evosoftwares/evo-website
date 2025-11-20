# 🚀 Guia de Implementação do Service Worker - Evo PWA

**Data:** 19 de Novembro de 2025
**Versão:** 1.0.0

---

## 📋 O QUE É UM SERVICE WORKER?

Um Service Worker é um script JavaScript que roda em background, separado da página web, permitindo funcionalidades que não precisam de interação do usuário:

- ✅ **Cache offline** - Site funciona sem internet
- ✅ **Push notifications** - Notificações mesmo com app fechado
- ✅ **Background sync** - Sincronização em segundo plano
- ✅ **Performance** - Carregamento instantâneo

---

## 📦 ARQUIVOS CRIADOS

### 1. sw.js - Service Worker
**Localização:** `/sw.js` (4.5 KB)

**Funcionalidades implementadas:**
- ✅ Cache de recursos essenciais
- ✅ Estratégia Cache-First
- ✅ Fallback para página offline
- ✅ Limpeza automática de caches antigos
- ✅ Suporte a push notifications
- ✅ Background sync preparado

### 2. offline.html - Página Offline
**Localização:** `/offline.html` (1.5 KB)

Página mostrada quando:
- Usuário está offline
- Recurso não está em cache
- Erro de rede

---

## 🔧 COMO ATIVAR O SERVICE WORKER

### Passo 1: Adicionar Script de Registro

Adicione este código no **final de cada página HTML**, antes de fechar a tag `</body>`:

```html
<!-- Service Worker Registration -->
<script>
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('✓ Service Worker registrado:', registration.scope);
            })
            .catch((error) => {
                console.log('✗ Falha ao registrar Service Worker:', error);
            });
    });
}
</script>
```

### Passo 2: Verificar Funcionamento

**No Chrome DevTools:**
1. Abra o site
2. Pressione F12
3. Vá em **Application** tab
4. Clique em **Service Workers** (lado esquerdo)
5. Verifique status: "activated and is running"

### Passo 3: Testar Cache Offline

1. Com o site aberto, vá em DevTools > Application
2. Clique em **Cache Storage**
3. Verifique se "evo-v1" está listado
4. Expanda e veja os recursos cacheados
5. Teste modo offline:
   - DevTools > Network tab
   - Marque "Offline"
   - Recarregue a página
   - Site deve funcionar normalmente

---

## 📝 SCRIPT DE REGISTRO PARA TODAS AS PÁGINAS

Cole este script **antes de fechar `</body>`** em:
- index.html
- about.html
- portfolio.html
- materiais.html
- gamificacao.html
- blog-detalhes.html
- suporte.html
- lgpd.html
- registro-marca.html

```html
<!-- Service Worker Registration -->
<script>
// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('✓ SW registrado:', registration.scope);

                // Verificar atualizações a cada 1 hora
                setInterval(() => {
                    registration.update();
                }, 3600000);
            })
            .catch((error) => {
                console.error('✗ Falha no SW:', error);
            });
    });

    // Escutar mensagens do Service Worker
    navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Mensagem do SW:', event.data);
    });
}
</script>
```

---

## 🎯 RECURSOS EM CACHE

O Service Worker faz cache de:

```javascript
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/portfolio.html',
  '/materiais.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/404.html'
];
```

**Para adicionar mais recursos ao cache:**
1. Edite `sw.js`
2. Adicione URLs no array `urlsToCache`
3. **IMPORTANTE:** Mude `CACHE_NAME` para `'evo-v2'` (incrementar versão)

---

## 🔄 ESTRATÉGIA DE CACHE

### Cache First, Network Fallback

```
1. Request → Verificar Cache
   ├── Se encontrado → Retornar do cache ✓
   └── Se não → Buscar na rede
       ├── Sucesso → Salvar em cache + Retornar
       └── Falha → Mostrar offline.html
```

**Vantagens:**
- ⚡ Carregamento instantâneo
- 📱 Funciona offline
- 💾 Economiza dados

---

## 📱 PUSH NOTIFICATIONS (Futuro)

O Service Worker já está preparado para push notifications:

```javascript
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('Evo Apps', options)
  );
});
```

**Para ativar:**
1. Obter permissão do usuário
2. Configurar servidor de push (Firebase, OneSignal, etc.)
3. Enviar notificações

---

## 🧹 LIMPEZA DE CACHE

O Service Worker limpa automaticamente caches antigos:

```javascript
// No evento activate
caches.keys().then((cacheNames) => {
  return Promise.all(
    cacheNames.map((cacheName) => {
      if (cacheName !== CACHE_NAME) {
        return caches.delete(cacheName);
      }
    })
  );
});
```

**Quando incrementar versão:**
1. Mudar `const CACHE_NAME = 'evo-v2'`
2. Deploy do novo `sw.js`
3. Service Worker remove cache antigo automaticamente

---

## 🔍 DEBUGGING

### Ver Logs do Service Worker

```javascript
// No Chrome DevTools
Application > Service Workers > Console
```

### Forçar Atualização

```javascript
// No Console do navegador
navigator.serviceWorker.getRegistration().then((reg) => {
  reg.update();
});
```

### Limpar Cache Manualmente

```javascript
// No Console do navegador
caches.delete('evo-v1');
```

### Desregistrar Service Worker

```javascript
// No Console do navegador
navigator.serviceWorker.getRegistration().then((reg) => {
  reg.unregister();
});
```

---

## ⚠️ IMPORTANTE - HTTPS OBRIGATÓRIO

Service Workers **só funcionam em HTTPS** (ou localhost para desenvolvimento).

**Produção:**
- ✅ https://www.evo.com.br ← Funciona
- ❌ http://www.evo.com.br ← NÃO funciona

**Desenvolvimento:**
- ✅ http://localhost:3000 ← Funciona
- ✅ http://127.0.0.1:3000 ← Funciona

---

## 📊 LIGHTHOUSE SCORE

Após implementar o Service Worker, o Lighthouse score deve melhorar:

**Antes:**
- PWA: 30-40/100

**Depois:**
- PWA: 85-100/100 ⭐

**Itens verificados:**
- ✅ Registra Service Worker
- ✅ Responde com 200 quando offline
- ✅ Cache de recursos críticos
- ✅ Página offline disponível

---

## 🧪 TESTES RECOMENDADOS

### Teste 1: Registro
1. Abrir site
2. DevTools > Application > Service Workers
3. Verificar status "activated"

### Teste 2: Cache
1. DevTools > Application > Cache Storage
2. Ver "evo-v1" com recursos

### Teste 3: Offline
1. DevTools > Network > Offline checkbox
2. Recarregar página
3. Site deve funcionar

### Teste 4: Atualização
1. Mudar CACHE_NAME para v2
2. Recarregar página
3. Ver v2 no Cache Storage
4. v1 deve sumir automaticamente

---

## 🔐 SEGURANÇA

### .htaccess Configurado

O .htaccess já está configurado para:

```apache
# Service Worker - nunca fazer cache
<FilesMatch "sw\.js$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Service-Worker-Allowed "/"
</FilesMatch>
```

**Importante:**
- Service Worker **nunca** é cacheado pelo navegador
- Sempre busca nova versão do servidor
- Garante atualizações rápidas

---

## 📚 REFERÊNCIAS

- [MDN - Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Google - Service Worker Lifecycle](https://web.dev/service-worker-lifecycle/)
- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Workbox (Google)](https://developers.google.com/web/tools/workbox)

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Adicionar script de registro em todas as 9 páginas HTML
- [ ] Fazer deploy do sw.js
- [ ] Fazer deploy do offline.html
- [ ] Testar no Chrome DevTools
- [ ] Testar modo offline
- [ ] Verificar cache funcionando
- [ ] Testar em mobile (Android/iOS)
- [ ] Rodar Lighthouse audit
- [ ] Verificar PWA score 85-100

---

## 🎯 PRÓXIMOS PASSOS

1. **Adicionar script de registro** em todas as páginas
2. **Fazer deploy** do site
3. **Testar** em produção
4. **Monitorar** erros no console
5. **Otimizar** lista de cache conforme necessário

---

**Implementado por:** Claude Code
**Data:** 19/11/2025
**Status:** ✅ Pronto para uso
**Suporte:** contato@evo.com.br
