# Questões para Portinhas - Checklist

## Descrição
Checklist de perguntas para serem respondidas pelo Portinhas

---

## Checklist

- [ ] **Não está logando mais pelo Google**
  - Verificar autenticação OAuth do Google
  - Testar fluxo de login
  - Validar credenciais e permissões

- [ ] **Quando acaba a validade de uma promoção, ela precisa ser inativada também dos cupons válidos**
  - Remover cupom dos cupons válidos ao expirar promoção
  - Mostrar mensagem indicando que o cupom não está mais válido
  - Substituir botão "Usar Cupom" pela mensagem de cupom inválido

- [ ] **Na tela do print, colocar a data de até quando está ativo**
  - Adicionar data de validade/expiração na tela de print
  - Formatar data de forma clara e legível

- [ ] **Uma assinatura anual, com data de início e fim**
  - Criar sistema de assinatura anual
  - Rastrear datas de início e fim
  - Remover acesso a cupons que requerem assinatura quando expirar
  - Mostrar status da assinatura ao usuário

---

## Notas Adicionais
- Considerar sincronização entre promoções, cupons e assinaturas
- Validar fluxos de expiração automática
- Testar transições de estado (ativo → inativo)
