import type { Todo } from './todos.api.types.ts';

import * as api from './todos.api.ts';

export enum QUERY_KEY {
  TODOS = 'todos',
  TODOS_COUNT_BY_STATUS = 'todosCountByStatus',
  TODOS_COUNT_BY_DAYS = 'todosCountByDays',
  TODOS_TOTAL_COUNT = 'todosTotalCount',
}

export const QUERY_KEY_FACTORY = {
  TODO_BY_ID: (id: Todo['id']) => [QUERY_KEY.TODOS, id],

  TODOS_LIST: (...args: Parameters<typeof api.fetchTodos>) => [
    QUERY_KEY.TODOS,
    ...args,
  ],

  TODOS_COUNT_BY_DAYS: (
    ...args: Partial<Parameters<typeof api.fetchTodosCountByDays>>
  ) => [QUERY_KEY.TODOS_COUNT_BY_DAYS, ...args],

  TODOS_INFINITE_COUNT_BY_DATES: (
    ...args: [
      queryParams?: Omit<
        Parameters<typeof api.fetchTodosCountByDays>[0],
        'offset'
      >,
    ]
  ) => [QUERY_KEY.TODOS_COUNT_BY_DAYS, 'infinite', ...args],

  TODOS_COUNT_BY_STATUS: (
    ...args: [
      queryParams?: Omit<
        Parameters<typeof api.fetchTodosCountByStatus>[0],
        'dueDate'
      >,
    ]
  ) => [QUERY_KEY.TODOS_COUNT_BY_STATUS, ...args],

  TODOS_TOTAL_COUNT: (...args: Parameters<typeof api.fetchTodosTotalCount>) => [
    QUERY_KEY.TODOS_TOTAL_COUNT,
    ...args,
  ],
};
