import type { GlobalState } from '../../store.types.ts';
import type { Todo } from './todos.store.types.ts';

import * as utils from 'utils';
import * as dateConstants from '../../../constants/date.constants.ts';

export const getTodos = (state: GlobalState) => state.todos;

export const getTodosForCalendar = (state: GlobalState) =>
  Object.fromEntries(
    Object.entries(state.todos).map(([date, todos]) => {
      return [
        date,
        todos.map((todo, i) => ({
          ...todo,
          order: i,
        })),
      ];
    }),
  );

export const getTodosList = (state: GlobalState) => {
  return Object.entries(state.todos).flatMap(([, todos]) => todos);
};

export const getUnfinishedTodosByDates = (
  state: GlobalState,
): Record<string, Todo[]> => {
  return Object.fromEntries(
    Object.entries(state.todos).map(([date, todos]) => {
      const unfinishedTodos = todos.filter((todo) => !todo.isDone);

      if (unfinishedTodos.length) {
        return [date, unfinishedTodos];
      }

      return [];
    }),
  );
};

export const getUnfinishedFutureTodosByDates = (
  state: GlobalState,
  {
    endDate,
  }: {
    endDate?: Date;
  } = {},
): Record<string, Todo[]> => {
  return Object.fromEntries(
    Object.entries(getUnfinishedTodosByDates(state)).filter(([date]) => {
      const isAfter = utils.isAfter({
        dateA: new Date(date),
        dateB: new Date(),
        granularity: dateConstants.DATE_GRANULARITY.DAY,
        isDateAIncluded: true,
      });

      if (endDate) {
        return (
          isAfter &&
          utils.isBefore({
            dateA: new Date(date),
            dateB: new Date(),
            granularity: dateConstants.DATE_GRANULARITY.DAY,
            isDateAIncluded: true,
          })
        );
      }

      return isAfter;
    }),
  );
};

export const getUnfinishedTodosForToday = (state: GlobalState) => {
  return (getTodos(state)[utils.getToday().toDateString()] ?? []).filter(
    (todo) => !todo.isDone,
  );
};

export const getTodoById = (todoId: Todo['id']) => (state: GlobalState) => {
  return getTodosList(state).find((todo) => todo.id === todoId) ?? null;
};

export const getTodosCounts = (state: GlobalState) => {
  return Object.entries(getTodos(state)).reduce(
    (counts, [date, todos]) => {
      const finishedTodosCount = todos.filter((todo) => todo.isDone).length;
      const unfinishedTodosCount = todos.filter((todo) => !todo.isDone).length;

      switch (true) {
        case utils.isBefore({
          dateA: new Date(date),
          dateB: new Date(),
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }): {
          return {
            ...counts,
            unfinishedOverdueTodos:
              counts.unfinishedOverdueTodos + unfinishedTodosCount,
            finishedTodos: counts.finishedTodos + finishedTodosCount,
          };
        }

        case utils.isAfter({
          dateA: new Date(date),
          dateB: new Date(),
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }):
        case utils.isSame({
          dateA: new Date(date),
          dateB: new Date(),
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }): {
          return {
            ...counts,
            unfinishedFutureTodos:
              counts.unfinishedFutureTodos + unfinishedTodosCount,
            finishedTodos: counts.finishedTodos + finishedTodosCount,
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
