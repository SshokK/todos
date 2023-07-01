import type { GlobalState } from '../../store.types.ts';
import type { Todo } from './todos.store.types.ts';

import * as utils from 'utils';

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

export const getUnfinishedTodosForToday = (state: GlobalState) => {
  return (getTodos(state)[utils.getToday().toDateString()] ?? []).filter(
    (todo) => !todo.isDone,
  );
};

export const getTodoById = (todoId: Todo['id']) => (state: GlobalState) => {
  return getTodosList(state).find((todo) => todo.id === todoId) ?? null;
};
