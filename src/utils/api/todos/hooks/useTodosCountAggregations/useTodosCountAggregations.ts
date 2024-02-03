import type {
  TodosCountAggregationsArgs,
  TodosCountAggregationsSelector,
} from './useTodosCountAggregations.types.ts';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosCountAggregations.constants.ts';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosCountAggregations = <
  S extends TodosCountAggregationsSelector,
>(
  args: TodosCountAggregationsArgs<S> = {},
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodosCountAggregations>>,
    Error,
    S extends TodosCountAggregationsSelector
      ? ReturnType<S>
      : Awaited<ReturnType<typeof api.fetchTodosCountAggregations>>
  >({
    queryKey: [queryKeys.QUERY_KEY.TODOS_COUNT_AGGREGATIONS],
    queryFn: async () => {
      try {
        return await api.fetchTodosCountAggregations();
      } catch (e) {
        errorToast.show(e);

        return constants.INITIAL_DATA;
      }
    },
    initialData: constants.INITIAL_DATA,
    select: args.options?.selector,
  });
};
