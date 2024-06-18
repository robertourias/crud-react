import { Todo } from "@ui/schema/todo";
import { z as schema } from "zod";

import { todoRepository } from "@ui/repository/todo";

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

interface TodosControllerCreateParams { 
  content?: string
  onError: (customMessage?: string) => void
  onSuccess: (todo: Todo) => void
}
function create({content, onError, onSuccess} : TodosControllerCreateParams) {
  // Fast fail
  const parsedParams = schema.string().nonempty().safeParse(content);
  if (!parsedParams.success) {
    onError()
    return
  }

  todoRepository
    .createByContent(parsedParams.data)
    .then((newTodo) => {
      onSuccess(newTodo);
    })
    .catch(() => {
      onError();
    });
}

export const todoController = {
  get,
  filterTodosByContent,
  create,
};
