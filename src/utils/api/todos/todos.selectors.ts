import type * as api from './todos.api.ts';

import * as lodash from 'lodash';

export const formatTodosForCalendar =
  () => (response: Awaited<ReturnType<typeof api.fetchTodos>>) => {
    return lodash.groupBy(response.result, 'date');
  };
