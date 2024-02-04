import type * as api from './todos.api.ts';

import * as lodash from 'lodash';

export const formatTodosByDates =
  (options?: { isAscSort?: boolean }) =>
  (response: Awaited<ReturnType<typeof api.fetchTodos>>) => {
    const sortedTodos = [...response].sort((todoA, todoB) => {
      return options?.isAscSort
        ? todoB.order - todoA.order
        : todoA.order - todoB.order;
    });

    const filteredAndSortedTodosWithGroupDates = sortedTodos.map((todo) => ({
      ...todo,
      groupDate: new Date(todo.date).toDateString(),
    }));

    return lodash.groupBy(filteredAndSortedTodosWithGroupDates, 'groupDate');
  };
