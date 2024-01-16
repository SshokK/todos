import type {
  TodosCountsArgs,
  TodosCountsSelector,
} from './useTodosCounts.types.ts';

import { useQuery } from '@tanstack/react-query';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';

export const useTodosCounts = <S extends TodosCountsSelector>(
  args: TodosCountsArgs<S> = {},
) => {
  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodosCounts>>,
    Error,
    S extends TodosCountsSelector
      ? ReturnType<S>
      : Awaited<ReturnType<typeof api.fetchTodosCounts>>
  >({
    queryKey: [queryKeys.QUERY_KEY.TODOS_COUNTS],
    queryFn: () => api.fetchTodosCounts(),
    initialData: {
      doneCount: 0,
      undoneCount: 0,
      overdueCount: 0,
      totalCount: 0,
    },
    select: args.options?.selector,
  });
};
