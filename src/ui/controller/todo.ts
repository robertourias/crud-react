import { todoRepository } from "@ui/repository/todo";
import { date } from "zod";

interface TodosControllerGetParams {
  page: number;
}

async function get(params: TodosControllerGetParams) {
  return todoRepository.get({
    page: params.page,
    limit: 2,
  });
}

function filterTodosByContent<Todo>(
  search: string,
  todos: Array<Todo & { content: string }>
): Array<Todo> {
  const homeTodos = todos.filter((todo) => {
    const searchNormalized = search.toLowerCase();
    const contentNormalized = todo.content.toLowerCase();
    return contentNormalized.includes(searchNormalized);
  });

  return homeTodos;
}

interface TodosControlleCreateParams {
  content?: string
  onError: () => void
  onSuccess: (todo: any) => void
}
function create({content, onError, onSuccess} : TodosControlleCreateParams) {
  // Fast fail
  if(!content) {
    onError()
    return
  }

  // Vai vir do repositório
  const todo = {
    id: "12345",
    content,
    date: new Date(),
    done: false,
  }
  onSuccess(todo)
}

export const todoController = {
  get,
  filterTodosByContent,
  create,
};
