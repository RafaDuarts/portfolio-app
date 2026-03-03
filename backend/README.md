# 📦 Backend - API Portfólio

API desenvolvida com **NestJS** para gerenciamento de portfólios com
upload de imagem.

------------------------------------------------------------------------

## 🚀 Tecnologias

-   Node.js
-   NestJS
-   TypeScript
-   Swagger
-   Multer (upload de arquivos)
-   Class Validator
-   Docker

------------------------------------------------------------------------

## ⚙️ Instalação Local

``` bash
cd backend
npm install
npm run start:dev
```

A aplicação rodará em:

    http://localhost:4000

------------------------------------------------------------------------

## 📘 Documentação Swagger

Disponível em:

    http://localhost:4000/api

------------------------------------------------------------------------

## 📸 Upload de Imagem

O endpoint `POST /portfolio` recebe:

-   Dados via `multipart/form-data`

As imagens são salvas na pasta:

    backend/uploads

------------------------------------------------------------------------

## 🐳 Rodando com Docker

Build da imagem:

``` bash
docker build -t backend .
```

Rodar container:

``` bash
docker run -p 4000:4000 backend
```

Se estiver usando `docker-compose`, garantir volume para persistência:

``` yaml
volumes:
  - ./backend/uploads:/app/uploads
```

------------------------------------------------------------------------

## ✅ Validações

-   Nome
-   Email válido
-   URLs válidas
-   Descrição com tamanho mínimo
-   Foto obrigatória
