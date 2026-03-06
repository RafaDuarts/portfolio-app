
# Frontend Next.js – Página Pública do Portfólio

Este diretório contém uma implementação alternativa da **página pública do portfólio** utilizando **Next.js com Server‑Side Rendering (SSR)**.

Essa versão foi criada como **diferencial** para demonstrar boas práticas de renderização no servidor, SEO e performance inicial.

A aplicação consome a mesma API construída com **NestJS + PostgreSQL** no backend.

---

# 🚀 Tecnologias Utilizadas

- Next.js (App Router)
- React
- TypeScript
- Server‑Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- CSS Modules

---

# 🌐 Rotas

## Página pública do portfólio

```
/:name
```

Exemplo:

```
http://localhost:3000/rafael_duarte
```

Fluxo:

1. O Next.js recebe a requisição.
2. A página busca os dados na API NestJS.
3. O HTML é renderizado **no servidor (SSR)**.
4. O conteúdo é enviado pronto para o navegador.

---

# ❌ Página não encontrada

Caso o portfólio não exista, a aplicação utiliza o mecanismo nativo do Next.js:

```
notFound()
```

Isso renderiza automaticamente:

```
app/not-found.tsx
```

Mostrando uma página personalizada com a mensagem:

**“Portfólio não encontrado”.**

---

# ⚡ Performance

A página utiliza **Incremental Static Regeneration (ISR)**:

```
export const revalidate = 60
```

Isso significa que:

- a página pode ser cacheada
- é revalidada automaticamente a cada 60 segundos
- melhora performance e escalabilidade

---

# 🔌 Comunicação com a API

A aplicação consome o backend NestJS através da variável de ambiente:

```
API_URL
```

Exemplo:

```
API_URL=http://backend:4000
```

Essa URL é utilizada para buscar os dados do portfólio:

```
GET /portfolio/:name
```

---

# 🐳 Executando com Docker

Este frontend é executado junto com os demais serviços através do `docker-compose` do projeto principal.

Após subir o ambiente:

```
docker-compose up --build
```

A página ficará disponível em:

```
http://localhost:3000
```
