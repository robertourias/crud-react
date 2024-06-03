async function get() {
  return fetch("/api/todos").then(async (todosServer) => {
    const todosString = await todosServer.text();
    const todosResult = JSON.parse(todosString);
    return todosResult.todos;
  });
}

export const todoController = {
  get,
};
