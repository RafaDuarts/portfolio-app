# Teste Fullstack — Portfolio

Sistema fullstack para **cadastro e exibição de portfólios públicos**.

## ✅ Stack

- **Backend:** NestJS
- **Frontend:** React + TypeScript
- **Frontend em Next.js:** Next.js (SSR – página pública do portfólio)
- **Banco:** PostgreSQL
- **Docs:** Swagger
- **Upload:** armazenamento local (persistido via volume Docker)
- **Infra:** Docker + docker-compose

---

## 📁 Estrutura do projeto

```
/backend           → API NestJS
/frontend          → Frontend React
/frontend-next     → Página pública em Next.js (SSR)
/docker-compose.yml
```

---

## ▶️ Como rodar o projeto

Pré-requisito: **Docker** e **Docker Compose** instalados.

Na raiz do projeto:

```bash
docker-compose up --build
```

Para rodar em segundo plano:

```bash
docker-compose up -d --build
```

Para parar:

```bash
docker-compose down
```

> Observação: os dados do PostgreSQL ficam persistidos em volume. Para apagar tudo (banco + dados), use:
>
> ```bash
> docker-compose down -v
> ```

---

## 🌐 Acessos

> As portas abaixo são as padrão deste projeto. Se você alterou, confira no `docker-compose.yml`.

- **Frontend:** `http://localhost:5173`
- **Frontend Next (SSR):** `http://localhost:3000`
- **Backend:** `http://localhost:4000`
- **Swagger (API Docs):** `http://localhost:4000/api`
- **Uploads (imagens):** `http://localhost:4000/uploads/<nome-do-arquivo>`

---

## 🔌 Rotas da API

### Criar portfólio

```
POST /portfolio
```

- Recebe `multipart/form-data`
- Upload da foto (`photo`)
- Validação de dados

### Buscar portfólio

```
GET /portfolio/:name
```

Exemplo:

```
GET /portfolio/rafael_duarte
```

---

## 🧪 Como testar rapidamente

1. Acesse o **Swagger**:

```
http://localhost:4000/api
```

2. Execute:

```
POST /portfolio
```

3. Depois consulte:

```
GET /portfolio/:name
```

4. Abra a página pública:

React:
```
http://localhost:5173/<name>
```

Next SSR:
```
http://localhost:3000/<name>
```

---

## 📝 Regras de validação

- `name` não pode se repetir
- `email` deve ser válido
- URLs devem ser válidas
- `photo` é obrigatória

---

## 📦 READMEs por módulo

- `backend/README.md` — detalhes da API NestJS
- `frontend/README.md` — frontend React
- `frontend-next/README.md` — implementação com Next.js

---

## 🖥️ Frontends do Projeto

O projeto possui duas implementações de frontend com propósitos diferentes:

### React (Vite)

A aplicação principal foi construída utilizando **React + Vite**, responsável por:

- Consumo da API NestJS
- Renderização da interface no cliente (Client-Side Rendering)
- Navegação via React Router
- Integração direta com o backend REST

Essa implementação segue o escopo principal.

---

### Next.js (SSR)

Como diferencial técnico, foi criada uma implementação alternativa da página pública do portfólio utilizando **Next.js**.

Principais características:

- **Server-Side Rendering (SSR)** da página `/:name`
- **Dynamic Routes**
- Página **404 customizada**
- **Incremental Static Regeneration (ISR)** para cache de páginas públicas
- Uso de `next/image` para renderização de imagens

Benefícios dessa abordagem:

- Melhor **SEO**
- Melhor **tempo de carregamento inicial**
- HTML já renderizado no servidor
- Escalabilidade para páginas públicas de alto tráfego

Essa implementação demonstra como a aplicação poderia evoluir para um modelo mais otimizado para produção.


## 🧬 Possível Evolução com GraphQL

Embora a API atual utilize REST, uma evolução natural da arquitetura seria a adoção de **GraphQL**.

No contexto deste projeto, o GraphQL poderia ser aplicado da seguinte forma:

### API Gateway GraphQL

O NestJS poderia expor um endpoint:

```
/graphql
```

permitindo consultas mais flexíveis aos dados.

### Query de Portfólio

Exemplo de query:

```
query {
  portfolio(name: "rafael_duarte") {
    name
    description
    linkedin
    photo
    socialLinks {
      facebook
      twitter
      instagram
    }
  }
}
```

**Benefícios:**

- O frontend solicita **apenas os campos necessários**
- Redução de **overfetching**
- Maior flexibilidade para diferentes interfaces
- Melhor integração com aplicações mobile ou dashboards

---

## ✅ Conclusão

Este projeto implementa:

- API REST construída com NestJS
- Persistência com PostgreSQL
- Upload e armazenamento de imagens
- Documentação da API com Swagger
- Frontend em React consumindo a API
- Ambiente totalmente containerizado com Docker

Como diferencial, também foi implementada uma versão da página pública utilizando **Next.js com Server-Side Rendering (SSR)**, demonstrando uma possível evolução arquitetural da aplicação.

---

## 👨‍💻 Autor

Desenvolvedor: **Rafael Duarte dos Santos**
- Linkedin: https://www.linkedin.com/in/rafaduarts/
- Portfólio: https://rafaduarts.vercel.app/
