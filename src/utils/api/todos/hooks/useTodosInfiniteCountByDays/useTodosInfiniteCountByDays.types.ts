import type { InfiniteQuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type InfiniteTodosCountByDaysArgs<D> = {
  queryParams: Omit<Parameters<typeof api.fetchTodosCountByDays>[0], 'offset'>;
  options?: {
    selector?: InfiniteQuerySelector<
      Awaited<ReturnType<typeof api.fetchTodosCountByDays>>,
      D,
      number
    >;
  };
};
