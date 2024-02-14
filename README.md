# Fincheck

![preview](https://github.com/denion465/fincheck/assets/71099459/d58ca199-a566-4d19-8840-e1d69c618227)


O Fincheck é um sistema de finanças desenvolvido para ajudar os usuários a gerenciar suas receitas e despesas de forma eficiente. Com o Fincheck, os usuários podem cadastrar contas de bancos, carteiras e outras fontes de renda e gastos, facilitando o controle financeiro pessoal.

## Funcionalidades

* Cadastro de contas: Os usuários podem adicionar e gerenciar diversas contas, como contas bancárias, carteiras físicas, entre outras.
* Registro de receitas e despesas: Permite aos usuários registrar suas transações financeiras, categorizando-as e atribuindo-as a contas específicas.
* Análise de gastos: O Fincheck oferece recursos para análise de gastos, permitindo aos usuários visualizar seus padrões de consumo e identificar áreas onde podem economizar.


## Interface do Usuário

Explore os designs detalhados do sistema no [Figma](https://www.figma.com/file/rxGvF8AVdufKZzJQaaYPV6/Fincheck?type=design&node-id=229%3A8335&mode=design&t=HiTc9lQ8EZDOLK0C-1).

## Tecnologias Utilizadas
* **Frontend**: Desenvolvido com React e estilizado utilizando Tailwind CSS para uma experiência de usuário moderna e responsiva.

* **Backend**: Implementado com NestJS, um framework Node.js para construção de aplicações server-side, e Prisma para lidar com o banco de dados PostgreSQL, garantindo eficiência e segurança nos dados.

# Instalação
Para instalar e configurar o Fincheck localmente, siga as instruções abaixo:

Clone o repositório do Fincheck:
```bash
git clone git@github.com:denion465/fincheck.git
```

Navegue até o diretório do projeto:
```bash
cd fincheck
```
Instale as dependências do frontend:
```bash
cd frontend
npm install
```

Volte para o diretório principal do projeto e instale as dependências da API:
```bash
cd ..
cd api
npm install
```

## Configurações do frontend
* Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente relacionadas a API.
* Porta padrão da API é: 3000


## Configurações da API
1. Configuração do banco de dados:

* Certifique-se de ter o PostgreSQL instalado e em execução em sua máquina.
* Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente relacionadas ao banco de dados de acordo com suas configurações.

2. Execute as migrações do banco de dados:

* Entre na pasta raiz da API e execute:

```bash
npx prisma migrate dev
```

1. Inicie a API:

```bash
npm run start:dev
```

1. Inicie o servidor frontend:

```bash
cd ..
cd frontend
npm run dev
```
Acesse o aplicativo Fincheck em seu navegador em http://localhost:5173.
