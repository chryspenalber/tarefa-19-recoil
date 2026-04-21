[Versão em Português](#portugues) | [English Version](#english)

---
<a id="portugues"></a>
## Versão em Português

# To-do List — React + Recoil
**Projeto desenvolvido por Chrys Penalber**

Aplicação simples de gerenciamento de tarefas (To‑do List) construída com **React** e **Recoil** para demonstração de estado global usando átomos e seletores.

---

## Objetivo

- Desenvolver uma aplicação React funcional para adicionar, listar, filtrar e remover tarefas.
- Aplicar os conceitos de Recoil: `RecoilRoot`, átomos e seletores.

---

## Funcionalidades

- Campo para digitar e adicionar uma nova tarefa.
- Listagem das tarefas adicionadas.
- Marcar/Desmarcar tarefa como concluída.
- Remover tarefa.
- Filtros para exibir: Todas, Concluídas, Pendentes.

---

## Estrutura do Projeto

```text
index.html
package.json
vite.config.js
src/
  App.jsx
  main.jsx
  styles.css
  atoms/
    filterAtom.js
    tasksAtom.js
  components/
    NewTaskForm.jsx
    TaskFilters.jsx
    TaskList.jsx
  selectors/
    filteredTasksSelector.js
```


---

## Como executar

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço fornecido pelo Vite (normalmente `http://localhost:5173`).

---

## Autora

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# To-do List — React + Recoil
**Project developed by Chrys Penalber**

Simple task management application (To‑do List) built with **React** and **Recoil** demonstrating global state using atoms and selectors.

---

## Project Goal

- Build a functional React application to add, list, filter and remove tasks.
- Apply Recoil concepts: `RecoilRoot`, atoms and selectors.

---

## Features

- Input to add new tasks.
- Display added tasks.
- Mark/unmark tasks as completed.
- Remove tasks.
- View filters: All, Completed, Pending.

---

## Project Structure

```text
index.html
package.json
vite.config.js
src/
  App.jsx
  main.jsx
  styles.css
  atoms/
    filterAtom.js
    tasksAtom.js
  components/
    NewTaskForm.jsx
    TaskFilters.jsx
    TaskList.jsx
  selectors/
    filteredTasksSelector.js
```

---

## How to Run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the address provided by Vite (usually `http://localhost:5173`).


---

## Author

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

