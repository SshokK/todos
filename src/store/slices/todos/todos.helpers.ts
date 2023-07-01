import type { Todo, TodosState } from './todos.store.types.ts';

export const updateTodo = ({
  todos,
  todoId,
  patch,
}: {
  todos: TodosState['todos'];
  todoId: Todo['id'];
  patch: Partial<Todo>;
}) => {
  return Object.fromEntries(
    Object.entries(todos).map(([date, todos]) => {
      return [
        date,
        todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              ...patch,
            };
          }

          return todo;
        }),
      ];
    }),
  );
};
