import type * as utils from 'utils';

export const DEFAULT_QUERY_PARAMS: Parameters<
  typeof utils.useTodosInfiniteCountByDates
>[0]['queryParams'] = {
  limit: 50,
};
