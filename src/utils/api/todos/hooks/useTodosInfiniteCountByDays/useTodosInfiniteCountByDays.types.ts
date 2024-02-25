import type { InfiniteQuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type InfiniteTodosCountByDaysSelector<D> = InfiniteQuerySelector<
  Awaited<ReturnType<typeof api.fetchTodosCountByDays>>,
  D,
  number
>;

export type InfiniteTodosCountByDaysArgs<D> = {
  queryParams: Omit<Parameters<typeof api.fetchTodosCountByDays>[0], 'offset'>;
  options?: {
    selector?: InfiniteTodosCountByDaysSelector<D>;
  };
};
