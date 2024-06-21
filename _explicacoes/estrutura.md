project-web/
├── src/
    ├── pages/
    │   ├── api/
    │   │   └── index.ts: Provavelmente contém rotas para a API, como /api/todos.
    │   │   └── todos.ts: Arquivo com a lógica da API para lidar com tarefas (todos).
    │   └── index.tsx: A página principal da sua aplicação (ex: página inicial).
    ├── src/
    │   ├── server/
    │   |   |── controller/
    │   |   |   └── todo.ts: Controla a lógica de interação com tarefas (todos) no servidor.
    │   |   |── infra/
    │   |   |   └── errors.ts: Gerencia o tratamento de erros no lado do servidor.
    │   |   └── repository/
    │   |       └── todo.ts: Contém a lógica de acesso aos dados de tarefas (todos), possivelmente utilizando um banco de dados.
    │   ├── ui/
    │       ├── controller/
    │       |   └── todo.ts: Controla a interação com tarefas (todos) na interface do usuário.
    │       ├── schema/
    │       |   └── todo.ts: Define schemas para validação de dados de tarefas (todos), possivelmente usando 
    │       ├── repository/
    │       |   └── todo.ts: Lógica de acesso aos dados de tarefas (todos) no lado do cliente.
    │       └── theme/
    │           └── GlobalStyles.tsx: Define os estilos globais para a sua aplicação.
    ├── cypress/
    │   └── e2e/
    │       └── spec.cy.ts
    └── storybook/
        ├── main.js
        └── preview.js

