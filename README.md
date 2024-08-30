Este é um projeto que utiliza Node.js, Express e WebSockets para conectar-se à API da Finnhub e fornecer dados de mercado em tempo real. O frontend é construído com React e exibe essas informações de forma organizada em uma grade.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/download/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/get-npm) (geralmente instalado com o Node.js)
- [Git](https://git-scm.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/technomoney-api.git
   cd technomoney-api
Instale as dependências:

Copiar código
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione a seguinte linha, substituindo pelo seu token da Finnhub:

Copiar código
FINNHUB_API_TOKEN=*****************
Como Rodar
Backend
Compile o TypeScript para JavaScript:

Copiar código
npx tsc
Inicie o servidor:

Copiar código
node dist/server.js
O servidor estará rodando em http://localhost:5001.

Frontend
Navegue até o diretório do frontend (caso esteja no mesmo repositório, por exemplo, /frontend):

Copiar código
cd frontend
Instale as dependências do frontend:

Copiar código
npm install
Inicie o servidor de desenvolvimento:

Copiar código
npm start
O frontend estará disponível em http://localhost:3000.
