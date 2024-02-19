import type { InfiniteQuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type InfiniteTodosCountByDatesArgs<D> = {
  queryParams: Omit<Parameters<typeof api.fetchTodosCountByDates>[0], 'offset'>;
  options?: {
    selector?: InfiniteQuerySelector<
      Awaited<ReturnType<typeof api.fetchTodosCountByDates>>,
      D,
      number
    >;
  };
};
