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

export const todoController = {
  get,
};
