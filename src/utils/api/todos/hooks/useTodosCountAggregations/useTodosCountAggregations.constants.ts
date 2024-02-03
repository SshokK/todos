import type * as api from '../../todos.api.ts';

export const INITIAL_DATA: Awaited<
  ReturnType<typeof api.fetchTodosCountAggregations>
> = {
  doneCount: 0,
  undoneCount: 0,
  overdueCount: 0,
};
