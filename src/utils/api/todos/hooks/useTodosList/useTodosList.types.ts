import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosListArgs<D> = {
  queryParams?: Parameters<typeof api.fetchTodos>[0];
  options?: {
    isEnabled?: boolean;
    selector?: QuerySelector<Awaited<ReturnType<typeof api.fetchTodos>>, D>;
  };
};
