import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosTotalCountSelector = QuerySelector<
  Awaited<ReturnType<typeof api.fetchTodosTotalCount>>
>;

export type TodosTotalCountArgs<S extends TodosTotalCountSelector> = {
  queryParams?: Parameters<typeof api.fetchTodosTotalCount>[0];
  options?: {
    selector?: S;
  };
};
