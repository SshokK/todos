import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosCountsSelector = QuerySelector<
  Awaited<ReturnType<typeof api.fetchTodosCounts>>
>;

export type TodosCountsArgs<S extends TodosCountsSelector> = {
  options?: {
    selector?: S;
  };
};
