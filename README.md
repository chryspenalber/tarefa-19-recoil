[Versão em Português](#portugues) | [English Version](#english)

---
<a id="portugues"></a>
## Versão em Português

# To‑do List — React + Recoil
**Projeto desenvolvido por Chrys Penalber**

Aplicação simples de gerenciamento de tarefas construída com **React** e **Recoil**. O objetivo deste projeto é demonstrar o uso de átomos e seletores do Recoil para gerenciamento de estado global, além de organizar a UI em componentes reutilizáveis.

---

## Objetivos

- Implementar um fluxo completo de tarefas: adicionar, listar, marcar como concluída e remover.
- Demonstrar padrão de estado global com `RecoilRoot`, `atoms` e `selectors`.
- Separar responsabilidades em componentes (`NewTaskForm`, `TaskList`, `TaskFilters`) e manter estilos simples em `styles.css`.

---

## Links

-  [**Live Site**](https://tarefa-19-recoil.vercel.app/)
-  [**Repositório no GitHub**](https://github.com/chryspenalber/tarefa-19-recoil)

---

## Principais Funcionalidades

- Adicionar novas tarefas via formulário.
- Listar tarefas com indicação de status (concluída / pendente).
- Alternar status de conclusão.
- Remover tarefas individualmente.
- Filtrar visualmente por: Todas, Concluídas, Pendentes.

---

## Estrutura do Projeto

```text
index.html
package.json
vite.config.js
src/
  main.jsx
  App.jsx
  styles.css
  atoms/
    filterAtom.js
    tasksAtom.js
  selectors/
    filteredTasksSelector.js
  components/
    NewTaskForm.jsx
    TaskFilters.jsx
    TaskList.jsx
```

---

## Estilos

- Estilos globais e regras visuais estão em `src/styles.css`.
- A aplicação usa classes simples e layout baseado em Flexbox para responsividade básica.

---

## Tecnologias

- React — Biblioteca de UI
- Recoil — Estado global com átomos e seletores
- Vite — Dev server e build rápido
- JavaScript (ES6+) — Lógica da aplicação
- CSS — Estilos em `src/styles.css`

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

## Contato

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# To‑do List — React + Recoil
**Project developed by Chrys Penalber**

This is a simple task management app built with **React** and **Recoil**. It demonstrates global state using Recoil atoms and selectors and organizes the UI into small, focused components.

---

## Goals

- Implement a full task flow: add, list, toggle completion and remove tasks.
- Demonstrate global state management using `RecoilRoot`, `atoms` and `selectors`.
- Keep UI responsibilities separated (`NewTaskForm`, `TaskList`, `TaskFilters`) and styles in `styles.css`.

---

## Links

-  [**Live Site**](https://tarefa-19-recoil.vercel.app/)
- [**GitHub Repository**](https://github.com/chryspenalber/tarefa-19-recoil)

---

## Key Features

- Add tasks via a form input.
- Show tasks with completed/pending status.
- Toggle task completion state.
- Remove tasks individually.
- Filter tasks by: All, Completed, Pending.

---

## Project Structure

```text
index.html
package.json
vite.config.js
src/
  main.jsx
  App.jsx
  styles.css
  atoms/
    filterAtom.js
    tasksAtom.js
  selectors/
    filteredTasksSelector.js
  components/
    NewTaskForm.jsx
    TaskFilters.jsx
    TaskList.jsx
```

---

## Styles

- Global styles are defined in `src/styles.css`.
- Layout uses Flexbox for simple responsiveness across common viewports.

---

## Technologies

- React — UI library
- Recoil — Global state with atoms and selectors
- Vite — Dev server & build tool
- JavaScript (ES6+) — App logic
- CSS — Styling in `src/styles.css`

---

## How to Run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the address provided by Vite (usually `http://localhost:5173`).

---

## Author / Contact

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)
