# InputCount Backend

O **InputCount** é um sistema web simples que permite aos usuários enviar valores a um servidor e visualizar o número de vezes que cada valor foi enviado. Este repositório contém o código referente ao **backend** do projeto, desenvolvido em **Node.js** e utilizando o **Express** como framework para gerenciamento de requisições HTTP.

## 🧩 Visão Geral do Projeto
O projeto InputCount é dividido em duas partes principais:
- **Frontend:** Interface web que permite ao usuário inserir um valor em uma caixa de texto e enviá-lo para o backend. Após o envio, o número de vezes que o valor foi recebido pelo servidor é exibido na interface.
- **Backend:** Servidor desenvolvido em Node.js que recebe os valores enviados pelo frontend, armazena a contagem de cada valor e retorna essa informação ao frontend.

> ⚠️ Nota: Este repositório contém apenas o código do backend. O código do frontend está disponível em um repositório separado:
> 🔗 [InputCount Frontend](https://github.com/Gabriel-Vasconcelos/inputcount-frontend)

## 📚 Tecnologias Utilizadas
- Node.js
- Express
- CORS (Cross-Origin Resource Sharing)
- Nodemon (para facilitar o desenvolvimento)
- body-parser (para processar dados recebidos no formato JSON)

## 🚀 Funcionalidades do Backend
- Receber valores enviados pelo frontend via requisição HTTP POST
- Armazenar a contagem de cada valor recebido
- Retornar ao frontend a contagem atualizada para cada valor enviado
- Permitir múltiplos envios e atualização em tempo real

## 📂 Como Executar o Projeto
### 🔧 Passo 1: Clone o repositório:
Execute o seguinte comando no terminal para clonar o repositório:
```bash
git clone https://github.com/gabriel-vasconcelos/inputcount-backend.git
cd inputcount-backend
```

### 🌐 Passo 2: Executar o Servidor
Para iniciar o servidor em modo de desenvolvimento, utilize o comando:
```bash
npm run dev
```

## 🔗 Repositórios Relacionados
- 🔄 Frontend do InputCount: https://github.com/gabriel-vasconcelos/inputcount-frontend
