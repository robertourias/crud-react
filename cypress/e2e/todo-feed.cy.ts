const BASE_URL = "http://localhost:3000";

describe("/ - Todos feed", () => {
  it("when load, renders the page", () => {
    cy.visit(BASE_URL);
  });

  it("when create a new todo, it must appears in the screen", () => {
    const textInput = "Test todo";
    // 0 - Interceptações/Intertecptação
    cy.intercept("POST", `${BASE_URL}/api/todos`, (request) => {
      request.reply({
        statusCode: 201,
        body: {
          todo: {
            id: "70905d7e-c969-45b1-99f0-1aa155477204",
            date: "2023-04-15T19:46:51.109Z",
            content: textInput,
            done: false,
          },
        },
      });
    }).as("createTodo");

    // 1 - Abrir a página
    cy.visit(BASE_URL);
    // 2 e 3 - Selecionar o input de criar nova todo e Digitar no input de criar nova todo
    const inputAddTodo = "header > form > input";
    cy.get(inputAddTodo).type(textInput);
    // 4 - Clicar no botão
    const buttonAddTodo = "form > button";
    cy.get(buttonAddTodo).click();

    // 5 - Checar se na página surgiu um novo elemento
    cy.wait("createTodo").then((_) => {
      cy.get("table").contains(textInput);
    });

    // Criar validações a partir de valores
    expect("texto").to.be.equal("texto");
  });
});
