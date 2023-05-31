# Use a imagem base do Node.js 19
FROM node:19

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

# Exponha a porta 3000 (ou a porta que você desejar usar)
EXPOSE 3000

# Comando padrão para iniciar o servidor
CMD [ "node", "server.js" ]
