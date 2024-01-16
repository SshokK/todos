import type { Todo } from './todos.api.types.ts';

import * as dateUtils from '../../date';
import * as dateConstants from '../../../constants/date.constants.ts';

export const getTodosCounts = (todos: Todo[]) => {
  return todos.reduce(
    (counts, todo) => {
      switch (true) {
        case dateUtils.isBefore({
          dateA: new Date(todo.date),
          dateB: new Date(),
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }): {
          if (!todo.isDone) {
            return {
              ...counts,
              unfinishedOverdueTodos: counts.unfinishedOverdueTodos + 1,
            };
          }

          return counts;
        }

        case dateUtils.isAfter({
          dateA: new Date(todo.date),
          dateB: new Date(),
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }):
        case dateUtils.isSame({
          dateA: new Date(todo.date),
          dateB: new Date(),
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }): {
          return {
            ...counts,
            unfinishedFutureTodos: todo.isDone
              ? counts.unfinishedFutureTodos
              : counts.unfinishedFutureTodos + 1,
            finishedTodos: todo.isDone
              ? counts.finishedTodos + 1
              : counts.finishedTodos,
          };
        }

        default: {
          return counts;
        }
      }
    },
    {
      finishedTodos: 0,
      unfinishedFutureTodos: 0,
      unfinishedOverdueTodos: 0,
    },
  );
};

export const updateTodos = ({
  todos,
  todoToUpdate,
  payload,
}: {
  todos: Todo[];
  todoToUpdate: Todo;
  payload: Partial<Omit<Todo, 'id'>>;
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
