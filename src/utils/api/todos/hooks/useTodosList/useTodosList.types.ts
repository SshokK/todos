import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosListSelector = QuerySelector<
  Awaited<ReturnType<typeof api.fetchTodos>>
>;

export type TodosListArgs<S extends TodosListSelector> = {
  options?: {
    selector?: S;
  };
};
