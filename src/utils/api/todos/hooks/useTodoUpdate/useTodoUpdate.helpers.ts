import type { Todo, TodoFromResponse } from '../../todos.api.types.ts';

import * as dateUtils from '../../../../date';
import * as dateConstants from '../../../../../constants/date.constants.ts';

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
  const newTodoDate = payload.date ? new Date(payload.date) : todoToUpdate.date;

  const wasMovedToAnotherDay =
    dateUtils.getDiff({
      dateA: newTodoDate,
      dateB: todoToUpdate.date,
      granularity: dateConstants.DATE_GRANULARITY.DAY,
      shouldReturnAlwaysPositive: true,
    }) > 0;

  const wasMovedWithinTheSameDay =
    newTodoOrder !== todoToUpdate.order && !wasMovedToAnotherDay;
  const wasMovedHigher = todoToUpdate.order < newTodoOrder;

  return todos.flatMap((todo) => {
    const isUpdatedDateTodo = dateUtils.isSame({
      dateA: todo.date,
      dateB: newTodoDate,
      granularity: dateConstants.DATE_GRANULARITY.DAY,
    });

    const isPrevDateTodo = dateUtils.isSame({
      dateA: todo.date,
      dateB: todo.date,
      granularity: dateConstants.DATE_GRANULARITY.DAY,
    });

    /**
     *
     * Update the item itself
     *
     */
    if (todo.id === todoToUpdate.id) {
      return [
        {
          ...todoToUpdate,
          ...payload,
          date: newTodoDate,
        },
      ];
    }

    /**
     *
     * Increase the order of the higher order items within the new day
     *
     */
    if (wasMovedToAnotherDay && isUpdatedDateTodo) {
      return [
        {
          ...todo,
          order: todo.order > todoToUpdate.order ? todo.order + 1 : todo.order,
        },
      ];
    }

    /**
     *
     * Update orders of the surrounded items within the same day
     *
     */
    if (wasMovedWithinTheSameDay && isPrevDateTodo) {
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
      }

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

    return [todo];
  });
};
