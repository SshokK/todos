import type * as utils from 'utils';

export const DEFAULT_QUERY_PARAMS: Parameters<
  typeof utils.useTodosInfiniteCountByDays
>[0]['queryParams'] = {
  limit: 3,
};
