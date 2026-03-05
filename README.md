# Teste Fullstack — Portfolio

Sistema fullstack para **cadastro e exibição de portfólios públicos**.

## ✅ Stack

- **Backend:** NestJS
- **Frontend:** React + TypeScript
- **Banco:** PostgreSQL
- **Docs:** Swagger
- **Upload:** armazenamento local (persistido via volume Docker)
- **Infra:** Docker + docker-compose

---

## 📁 Estrutura do projeto

```
/backend
/frontend
/docker-compose.yml
```

---

## ▶️ Como rodar (recomendado)

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
- **Backend:** `http://localhost:4000`
- **Swagger (API Docs):** `http://localhost:4000/api`
- **Uploads (imagens):** `http://localhost:4000/uploads/<nome-do-arquivo>`

---

## 🔌 Rotas da API (escopo do desafio)

- `POST /portfolio` — cria um portfólio (recebe `multipart/form-data` com `photo`)
- `GET /portfolio/:name` — busca um portfólio pelo nome (ex.: `nome_completo_exemplo`)

---

## 🧪 Como testar rápido

Você pode testar pelo **Swagger** em `http://localhost:4000/api`

Também pode usar Insomnia/Postman para:
- criar um portfólio via `POST /portfolio` com upload da foto
- consultar via `GET /portfolio/:name`

---

## 📝 Notas importantes

- O campo `name` deve estar no formato: `nome_completo_exemplo`
- `name` não pode repetir
- `email` deve ser válido
- links (linkedin e redes sociais) devem ser URLs válidas
- a foto é obrigatória e é salva localmente (com persistência via volume Docker)

---

## 📦 READMEs por módulo

- `backend/README.md` — detalhes específicos da API (NestJS)
- `frontend/README.md` — detalhes específicos do frontend (React)
