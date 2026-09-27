# Acaochego 🐾

Projeto acadêmico desenvolvido para uma ONG fictícia de proteção e cuidado com animais.

## Sobre o projeto

O Acaochego é uma aplicação web desenvolvida para apresentar uma organização voltada à proteção animal. O projeto utiliza navegação em página única (SPA), permitindo acessar as diferentes áreas por meio de rotas com hash.

A aplicação também possui formulário de cadastro com validação, mensagens de erro dinâmicas e armazenamento dos dados válidos no navegador.

## Tecnologias utilizadas

* HTML5
* HTML semântico
* CSS3
* JavaScript
* DOM
* Template Literals
* `map()`
* Validação com Expressões Regulares (Regex)
* `localStorage`
* Git e GitHub

## Estrutura do projeto

```text
Projeto_acaochego/
├── index.html
├── css/
│   ├── base.css
│   ├── projetos.css
│   └── cadastro.css
├── js/
│   ├── app.js
│   ├── validacao.js
│   └── storage.js
└── imagens/
```

## Páginas

* Início
* Projetos
* Cadastro

## Funcionalidades

* Navegação SPA utilizando hash
* Menu responsivo com submenu
* Exibição dinâmica dos projetos
* Validação de formulário em tempo real
* Validação no envio do formulário
* Mensagens de erro inseridas dinamicamente no DOM
* Armazenamento dos dados válidos no `localStorage`
* Recuperação automática dos dados salvos
* Organização do JavaScript em arquivos separados

## Versionamento

O projeto utiliza Git e GitHub com uma estrutura baseada no GitFlow:

* `main`: versão estável do projeto
* `develop`: integração das alterações de desenvolvimento
* `feature/*`: desenvolvimento de novas funcionalidades

As alterações são registradas por meio de commits e posteriormente integradas entre as branches.

## Execução

O projeto não possui dependências externas. Para executar localmente, basta baixar ou clonar o repositório e abrir o arquivo `index.html` em um navegador.

## Objetivo

Praticar o desenvolvimento front-end utilizando HTML, CSS e JavaScript, aplicando conceitos de semântica, responsividade, manipulação do DOM, validação de formulários, armazenamento local, organização de código e controle de versão.
