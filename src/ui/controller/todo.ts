import { todoRepository } from "@ui/repository/todo";

interface TodosControllerGetParams {
  page?: number;
}

async function get(params: TodosControllerGetParams = {}) {
  console.log(params);
  return todoRepository.get({
    page: 1,
    limit: 2,
  });
}

export const todoController = {
  get,
};
