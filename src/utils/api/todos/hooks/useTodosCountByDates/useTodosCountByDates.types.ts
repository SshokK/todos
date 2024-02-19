import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosCountByDatesArgs<D> = {
  queryParams: Parameters<typeof api.fetchTodosCountByDates>[0];
  options?: {
    selector?: QuerySelector<
      Awaited<ReturnType<typeof api.fetchTodosCountByDates>>,
      D
    >;
  };
};
