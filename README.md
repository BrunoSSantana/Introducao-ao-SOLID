<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nTfuVZvi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4qa1g2dsx1hre7hjjlze.png">

# Desafio: Introdução ao SOLID

<p align="center">
<img src="https://img.shields.io/github/license/BrunoSSantana/desafio02-trilha-node.js" />

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/BrunoSSantana/desafio02-trilha-node.js">
<img src="https://img.shields.io/static/v1?label=Node.js&message=v14.16.1&color=brigthgreen&?style=flat&logo=Node.js">


<img src="https://img.shields.io/static/v1?label=yarn&message=v1.22.10&color=blue&?style=flat&logo=yarn">
</p>


---
<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#rotas">Rotas</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#como_executar">Como Executar</a> • 
 <a href="#licenca">Licença</a> • 
 <a href="#autor">Autor</a>
</p>

<h2 id="objetivo">:dart: Objetivo</h2>

Essa foi uma API de listagem e cadastro de usuários, desenvolvida durante o bootcamp [Ignite](https://help.rocketseat.com.br/hc/pt-br/sections/1500000466461-Ignite) da [Rocketseat](https://rocketseat.com.br). Onde a listagem de usuário funcionasse seria preciso que esse fosse um admin. Mais detalhes você pode conferir em rotas.

Além disso foi implementado a documentação da API utilizando o [Swagger](swagger.io/).

## Rotas

### POST `/users`

A rota deve receber `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista deve ser feito apenas se o usuário for admin.


<h2 id="tecnologias">:hammer_and_wrench: Tecnologias</h2>

* <a href="https://jestjs.io/" ><img width="40px" src="https://cdn.iconscout.com/icon/free/png-256/jest-3628860-3030000.png"/></a>
* <a href="https://nodejs.org/" ><img width="40px" src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"/></a>
* <a href="https://expressjs.com/" ><img width="40px" src="https://cdn.iconscout.com/icon/free/png-256/express-8-1175029.png"/></a>

<h2 id="como_executar">:computer: Como Executar</h2>

```bash
# Clonando repositório
$ git clone https://github.com/BrunoSSantana/desafio04-trilha-node.js.git

# Entrando na pasta
$ cd desafio04-trilha-node.js

# Instalando dependências
$ yarn

# Executando a aplicação em modo de desenvolvimento
$ yarn dev

# Inciando na porta:3333
acesse <http://localhost:3333>
```
### Docs

Para acessar a documentação, após fazer a instalação na sua máquina, acesse a rota [`/api-docs`](<http://localhost:3333/api-docs/>)

![](https://i.imgur.com/HTdrCnb.png)

<h2 id="licenca">:memo: Licença</h2>

Este projeto está sob a licença [MIT](./LICENSE).

<h2 id="autor">:man_technologist: Autor</h2>

<a href="https://github.com/BrunoSSantana/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61945340?s=400&u=882004ebbccf5ae04e55fe4b27a5e704c3a95bab&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Bruno Santana</b></sub></a> <a href="https://github.com/BrunoSSantana/" title="Rocketseat">🚀</a>

Feito com :purple_heart: por Bruno Santana 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@brunoossantana-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/brunoossantana)](https://twitter.com/brunoossantana) [![Linkedin Badge](https://img.shields.io/badge/-Bruno_Santana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-santanas/)](https://www.linkedin.com/in/bruno-santanas/) 
[![Gmail Badge](https://img.shields.io/badge/-brunoosouza15@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:brunoosouza15@gmail.com)](mailto:brunoosouza15.com)


<h4 align="center"> 
	🚧 🚀 Em construção... 🚧
</h4>
