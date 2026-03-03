# Frontend - Portfolio App

Este diretório contém a aplicação frontend do projeto Portfolio.

## 🚀 Tecnologias Utilizadas

-   React
-   TypeScript
-   Axios
-   React Router
-   Docker

## 🔧 Configuração do Ambiente

Crie um arquivo `.env` na raiz do frontend com:

    VITE_API_URL=http://localhost:4000


## ▶️ Rodando Localmente

``` bash
npm install
npm run dev
```

A aplicação ficará disponível em:

    http://localhost:5173

## 🐳 Rodando com Docker

Certifique-se de que o serviço do frontend está configurado no
`docker-compose.yml` da raiz.

Depois execute:

``` bash
docker-compose up --build
```

## 🌐 Rotas

-   `/:slug` → Página pública do portfólio

## 🔗 Integração com Backend

O frontend consome a API:

    GET /portfolio/:slug
    POST /portfolio

