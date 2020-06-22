# Desafio de front-end

## Navedex

O sistema consiste em uma web app para visualização e criação dos navers, possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participou.

Recomendamos fortemente o uso de [react](https://reactjs.org/) para o desenvolvimento, pois é a biblioteca que mais usamos nos projetos da empresa.

## Figma

Use as telas do [figma](https://www.figma.com/) para se guiar no desenvolvimento. O código de css não será tão importante quando o javascript, mas esperamos que o layout fique de acordo com as telas.

## API

Para as funcionalidades da aplicação, faça integração com a [api](https://github.com/naveteam/back-end-test). Recomendamos o uso da [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) ou do [axios](https://github.com/axios/axios) para realizar as chamadas http.

A documentação da API oficial do teste pode ser utilizada com o [postman](https://www.postman.com/) importando [esse](https://www.getpostman.com/collections/3dd1a8a75c9b54e30529) link.

## Funcionalidades

### Login

A web app deverá possuir um fluxo de autenticação, onde o usuário só pode acessar as telas internas do sistema (listagem, formulários) passando pela tela de login. Enviaremos por email um usuário para usar durante o teste.

Para realizar o login, você deve usar a request de `user/login` disponível no postman.

### Listagem

A página inicial da aplicação tera uma lista dos `navers`.

Para listar os `navers`, você deve usar a request de `navers/index` disponível no postman.

### Visualização

Ao clicar em algum `naver` da listagem, o usuário terá uma visualização completa das informações do mesmo.

Para apresentar um único `naver`, você deve usar a request de `navers/show` disponível no postman.
Para excluir um `naver`, você deve usar a request de `navers/delete` disponível no postman.

### Criação/edição

O usuário precisa ter a possibilidade de criar um novo `naver` ou editar um já existente.

Para criar um `naver`, você deve usar a request de `navers/create` disponível no postman.
Para editar um `naver`, você deve usar a request de `navers/update` disponível no postman.

## Observações

Ao finalizar o teste, envie o link do seu repositório por e-mail para [vagas@nave.rs](mailto:vagas@nave.rs).

Se durante o processo de desenvolvimento não conseguiu fazer algo, explique qual o impedimento que encontrou e como tentou resolver em uma seção `Dificuldades` do seu README e nos envie até onde chegou. 😄
