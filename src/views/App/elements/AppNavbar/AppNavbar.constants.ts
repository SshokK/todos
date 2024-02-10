import type * as utils from 'utils';

export const DEFAULT_QUERY_PARAMS: Parameters<
  typeof utils.useTodosCountByDays
>[0]['queryParams'] = {
  limit: 3,
  offset: 0,
};
