# Imagem base
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar restante do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Expor porta 4000
EXPOSE 4000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]