# 🔐 Sistema de Login e Cadastro (Front-End e Back-End)

Um sistema de autenticação web desenvolvido com **HTML5**, **CSS3** e **JavaScript**, simulando um fluxo completo de cadastro, login e gerenciamento de usuários.

O projeto foi criado com foco na prática de desenvolvimento Front-End, explorando validação de formulários, manipulação do DOM, armazenamento de dados com **LocalStorage** e criação de interfaces modernas e responsivas.

---

## ✨ Funcionalidades

### 🔑 Login (`index.html`)

* Validação do formato do e-mail.
* Autenticação utilizando os usuários cadastrados no **LocalStorage**.
* Verificação das credenciais informadas.
* Redirecionamento para a área restrita após login bem-sucedido.
* Exibição de mensagens de erro em casos de autenticação inválida.

---

### 📝 Cadastro (`cadastro.html`)

* Cadastro de novos usuários.
* Campos para:

  * Nome completo;
  * E-mail;
  * Senha;
  * Confirmação de senha.
* Validação para garantir que as senhas sejam iguais.
* Verificação de e-mails já cadastrados.
* Armazenamento automático dos dados no **LocalStorage**.

---

### 🔒 Recuperação de Senha (`senha.html`)

* Campo para inserção do e-mail.
* Validação básica do formulário.
* Simulação de envio de recuperação de senha.
* Retorno automático para a tela de Login.

---

### 👥 Painel de Usuários (`usuarios.html`)

* Área restrita após autenticação.
* Exibição dinâmica da lista de usuários cadastrados.
* Tabela contendo nome e e-mail dos usuários.
* Tratamento para lista vazia, exibindo uma mensagem amigável quando não houver cadastros.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estruturação semântica das páginas.
* **CSS3** — Estilização da interface, responsividade e utilização de Flexbox.
* **JavaScript (ES6)** — Manipulação do DOM, validação de formulários, controle dos eventos e gerenciamento do LocalStorage.
* **LocalStorage** — Persistência dos dados diretamente no navegador, simulando um banco de dados local.
* **Boxicons** — Biblioteca de ícones utilizada na interface.
* **Google Fonts (Poppins)** — Tipografia aplicada ao projeto.

---

## 📂 Estrutura do Projeto

```text
📁 Sistema-Login-Cadastro
│
├── index.html          # Tela de Login
├── cadastro.html       # Cadastro de Usuários
├── senha.html          # Recuperação de Senha
├── usuarios.html       # Painel de Usuários
│
├── style.css           # Estilos principais
├── senha.css           # Estilos da recuperação de senha
├── app.js              # Lógica da aplicação
│
└── README.md
```

---

## 🚀 Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto.

3. Abra o arquivo **index.html** em qualquer navegador moderno.

> **Observação:** O projeto é totalmente Front-End e não requer instalação de dependências, servidores ou banco de dados. Todos os dados são armazenados localmente utilizando o **LocalStorage** do navegador.

---

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais do desenvolvimento web, incluindo:

* Estruturação de páginas com HTML5;
* Estilização moderna utilizando CSS3;
* Layout responsivo com Flexbox;
* Manipulação do DOM com JavaScript;
* Validação de formulários;
* Controle de navegação entre páginas;
* Persistência de dados com LocalStorage;
* Organização e modularização de um projeto Front-End.

---

## 📸 Interface

O sistema possui uma interface moderna com tons de azul, formulários centralizados, ícones intuitivos e navegação simples entre Login, Cadastro, Recuperação de Senha e Painel de Usuários.

> **Sugestão:** adicione capturas de tela na pasta `assets/` e inclua-as neste README para deixar o repositório ainda mais profissional.

---
