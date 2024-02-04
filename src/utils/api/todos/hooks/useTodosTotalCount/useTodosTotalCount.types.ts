import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosTotalCountArgs<D> = {
  queryParams?: Parameters<typeof api.fetchTodosTotalCount>[0];
  options?: {
    selector?: QuerySelector<
      Awaited<ReturnType<typeof api.fetchTodosTotalCount>>,
      D
    >;
  };
};
