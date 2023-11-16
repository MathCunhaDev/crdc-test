# Crdc Test

Olá! Nessa documentação você vai saber mais sobre esse aplicativo, como rodar, o que usa e etc.

## Tecnologias

O aplicativo foi construído usando VueJS, TypeScript, Sass para estilização e Vite para o build.
A lib de UI utilizada foi o Quasar, ela é uma lib que tem como base o próprio VueJS por isso sua integração com ele é muito fácil.
Por último estamos usando o VueX para compartilhamento dos estados entre os componentes.

## Arquitetura

Nesse projeto decidimos criar uma arquitetura inspirada no **MVC (Model, View, Controller)**.
Certo, mas por quê? Mesmo no front-end é necessário ter um padrão de arquitetura a ser seguido, para que as responsabilidades de cada parte do projeto não sejam misturadas e tenhamos problemas com manutenção, escalabilidade, componentização, desacoplamento e outros no futuro.

Outro ponto é que escolhi não usar o **Single File Component** do VueJS pois quando a aplicação escalar e a codebase ficar grande ele vai dificultar a manutenção e alteração do código dentro dos componentes. Além disso a separação das responsabilidade é uma boa prática de software conhecida e também ajudar a deixar o projeto mais limpo e organizado.

## Pastas

#### Assets

Pasta onde ficam todos os arquivos estáticos da aplicação, imagens, svgs, fontes e etc.

#### Components

Representa a camada **View** do MVC, essa pasta possui todos os componentes visuais que recebem e utilizam as props através da controller.

#### Models

Aqui ficam todas as tipagens necessárias dos componentes, mappers, requisições e etc.

#### Store

Essa pasta representa a **Model** do MVC, ela contém todas as requisições para API's externas, regras de negócios, ContextAPI's, estados e dados, os providers necessários e os mappers.

### Views

Aqui é onde estão as Views do projeto e também a camada de **Controller**.

#### Styles

Contém todos os arquivos necessários para o tema como tamanhos de fontes, cores, reset css e etc.

## Como rodar

Após baixar o projeto execute `npm install` para instalar as dependencias.  
Depois `npm run dev` para rodar o projeto localmente.

## Links úteis

- [Vite](https://vitejs.dev/)
- [MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)
