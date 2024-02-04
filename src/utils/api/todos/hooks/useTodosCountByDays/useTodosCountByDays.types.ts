import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosCountByDaysArgs<D> = {
  queryParams: Parameters<typeof api.fetchTodosCountByDays>[0];
  options?: {
    selector?: QuerySelector<
      Awaited<ReturnType<typeof api.fetchTodosCountByDays>>,
      D
    >;
  };
};
