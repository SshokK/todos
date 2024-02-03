import type { QuerySelector } from '../../../../../types';

import type * as api from '../../todos.api.ts';

export type TodosCountAggregationsSelector = QuerySelector<
  Awaited<ReturnType<typeof api.fetchTodosCountAggregations>>
>;

export type TodosCountAggregationsArgs<
  S extends TodosCountAggregationsSelector,
> = {
  options?: {
    selector?: S;
  };
};
