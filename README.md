# Comandos úteis
    # Lint:
        # npm run lin = encontrar erros com o lint
        # npm run lint -- --fix = consertar os erros com o lint
--------------------------------------------------------------------------------

# Por padrão, tudo que é colocado dentro de pages é entendido como uma rota, nesse caso foi alterado dentro do next.config.js que apenas será considerado arquivo de rotas caso tenha no final do arquivo .page.tsx: por exemplo:
    # Pasta pages:
        # Dashboard
            # index.page.tsx
            # style.ts
        # product
            # index.page.tsx
            # style.ts
# Observe que contém um arquivo .ts, esse arquivo não será entendido como uma rota.