import type { GlobalState } from '../../store.types.ts';
import type { Todo } from './todos.store.types.ts';
import type { ComponentProps } from 'react';
import type * as components from 'components';

import * as utils from 'utils';
import * as dateConstants from '../../../constants/date.constants.ts';

export const getTodosState = (state: GlobalState) => state.todosState;

export const getTodos = (state: GlobalState) => getTodosState(state).todos;

export const getTodosForCalendar = (
  state: GlobalState,
  {
    title,
  }: {
    title?: string;
  },
): ComponentProps<typeof components.Calendar>['items'] =>
  Object.fromEntries(
    Object.entries(getTodos(state)).map(([date, todos]) => {
      return [
        date,
        todos.map((todo, i) => {
          const hasMatchedTitle = title
            ? todo.title.toLowerCase().includes(title.toLowerCase())
            : true;

          return {
            ...todo,
            isHidden: !hasMatchedTitle,
            order: i,
          };
        }),
      ];
    }),
  );

export const getTodosList = (state: GlobalState) => {
  return Object.entries(getTodos(state)).flatMap(([, todos]) => todos);
};

export const getTodosByDates = (
  state: GlobalState,
  options?: {
    isAscSort?: boolean;
    filters?: {
      isDone?: boolean;
      startDate?: Date | null;
      endDate?: Date | null;
      title?: Todo['title'];
    };
  },
): Record<string, Todo[]> => {
  return Object.fromEntries(
    Object.entries(getTodos(state)).flatMap(([date, todos]) => {
      const filteredTodos = todos.filter((todo) => {
        const hadMatchedTitle = options?.filters?.title
          ? todo.title
              .toLowerCase()
              .includes(options?.filters.title.toLowerCase())
          : true;

        const hasMatchedStatus =
          typeof options?.filters?.isDone === 'boolean'
            ? todo.isDone === options?.filters.isDone
            : true;

        const hasMatchedStartDate = options?.filters?.startDate
          ? utils.isAfter({
              dateA: new Date(date),
              dateB: options?.filters.startDate,
              granularity: dateConstants.DATE_GRANULARITY.DAY,
              isDateAIncluded: true,
            })
          : true;

        const hasMatchedEndDate = options?.filters?.endDate
          ? utils.isBefore({
              dateA: new Date(date),
              dateB: options?.filters?.endDate,
              granularity: dateConstants.DATE_GRANULARITY.DAY,
              isDateAIncluded: true,
            })
          : true;

        return (
          hadMatchedTitle &&
          hasMatchedStatus &&
          hasMatchedStartDate &&
          hasMatchedEndDate
        );
      });

      if (filteredTodos.length) {
        return [
          [date, options?.isAscSort ? filteredTodos.reverse() : filteredTodos],
        ];
      }

      return [];
    }),
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
