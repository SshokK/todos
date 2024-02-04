import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosCountByStatusArgs<D> = {
  options?: {
    selector?: QuerySelector<
      Awaited<ReturnType<typeof api.fetchTodosCountByStatus>>,
      D
    >;
  };
};
