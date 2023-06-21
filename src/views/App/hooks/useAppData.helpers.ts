import type { Todo, TodosState } from 'contexts';

export const getTodosGroupedByDates = (
  todos: TodosState['todos'],
): Record<string, Todo[]> => {
  return todos.reduce((groupedTodos, todo) => {
    return {
      ...groupedTodos,
      [todo.date]:
        todo.date in groupedTodos ? [...groupedTodos[todo.date], todo] : [todo],
    };
  }, {} as Record<string, Todo[]>);
};
