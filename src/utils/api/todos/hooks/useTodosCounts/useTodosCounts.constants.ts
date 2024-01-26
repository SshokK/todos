import type * as api from '../../todos.api.ts';

export const INITIAL_DATA: Awaited<ReturnType<typeof api.fetchTodosCounts>> = {
  doneCount: 0,
  undoneCount: 0,
  overdueCount: 0,
  totalCount: 0,
};
