import type * as api from '../../todos.api.ts';

export const DEFAULT_QUERY_PARAMS: Parameters<
  typeof api.fetchTodosCountByDays
>[0] = {
  limit: 20,
  offset: 0,
};

export const INITIAL_DATA: Awaited<
  ReturnType<typeof api.fetchTodosCountByDays>
> = [];
