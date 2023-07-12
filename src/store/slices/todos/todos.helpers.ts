import type { Todo, TodosState } from './todos.store.types.ts';

export const updateTodo = ({
  todos,
  todoId,
  patch,
}: {
  todos: TodosState['todos'];
  todoId: Todo['id'];
  patch: Partial<Todo>;
}): TodosState['todos'] => {
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

export const moveTodo = ({
  todos,
  todoId,
  newDate,
}: {
  todos: TodosState['todos'];
  todoId: Todo['id'];
  newDate: Date;
}): TodosState['todos'] => {
  return Object.entries(todos).reduce((updatedTodos, [date, todos]) => {
    const todo = todos.find((todo) => todo.id === todoId);

    if (todo) {
      return {
        ...updatedTodos,
        [date]: [
          ...(updatedTodos[date] ?? []).filter((todo) => todo.id !== todoId),
        ],
        [newDate.toDateString()]: [
          todo,
          ...(updatedTodos[newDate.toDateString()] ?? []),
        ],
      };
    }

    return updatedTodos;
  }, todos);
};
