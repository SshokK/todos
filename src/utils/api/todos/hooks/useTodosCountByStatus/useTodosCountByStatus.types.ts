import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosCountByStatusArgs<D> = {
  queryParams?: Omit<
    Parameters<typeof api.fetchTodosCountByStatus>[0],
    'dueDate'
  >;
  options?: {
    selector?: QuerySelector<
      Awaited<ReturnType<typeof api.fetchTodosCountByStatus>>,
      D
    >;
  };
};
