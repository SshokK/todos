import type { Todo, TodoFromResponse } from './todos.api.types.ts';

import * as stringUtils from '../../string';
import * as dateUtils from '../../date';

export const normalizeTodos = (
  todosFromResponse: Partial<TodoFromResponse>[],
): Todo[] => {
  if (!Array.isArray(todosFromResponse)) {
    return [];
  }

  return todosFromResponse.map((todo) => ({
    ...todo,
    id: todo.id || stringUtils.getRandomId(),
    title: todo.title || '',
    content: todo.content || '',
    order: todo.order || 1,
    isDone: todo.isDone || false,
    date: todo.date ? new Date(todo.date) : dateUtils.getToday(),
  }));
};

export const updateTodos = ({
  todos,
  todoToUpdate,
  payload,
}: {
  todos: Todo[];
  todoToUpdate: Todo;
  payload: Partial<Omit<TodoFromResponse, 'id'>>;
}): Todo[] => {
  const newTodoOrder = payload.order ?? todoToUpdate.order;
  const wasMoved = newTodoOrder !== todoToUpdate.order;
  const wasMovedHigher = todoToUpdate.order < newTodoOrder;

  return todos.flatMap((todo) => {
    if (todo.id === todoToUpdate.id) {
      return [
        {
          ...todoToUpdate,
          ...payload,
          date: payload.date ? new Date(payload.date) : todoToUpdate.date,
        },
      ];
    }

    if (!wasMoved) {
      return [todo];
    }

    if (wasMovedHigher) {
      return [
        {
          ...todo,
          order:
            todo.order > todoToUpdate.order && todo.order <= newTodoOrder
              ? todo.order - 1
              : todo.order,
        },
      ];
    } else {
      return [
        {
          ...todo,
          order:
            todo.order < todoToUpdate.order && todo.order >= newTodoOrder
              ? todo.order + 1
              : todo.order,
        },
      ];
    }
  });
};
