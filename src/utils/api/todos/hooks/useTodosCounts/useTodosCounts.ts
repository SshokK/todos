import type {
  TodosCountsArgs,
  TodosCountsSelector,
} from './useTodosCounts.types.ts';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosCounts.constants.ts';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosCounts = <S extends TodosCountsSelector>(
  args: TodosCountsArgs<S> = {},
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodosCounts>>,
    Error,
    S extends TodosCountsSelector
      ? ReturnType<S>
      : Awaited<ReturnType<typeof api.fetchTodosCounts>>
  >({
    queryKey: [queryKeys.QUERY_KEY.TODOS_COUNTS],
    queryFn: async () => {
      try {
        return await api.fetchTodosCounts();
      } catch (e) {
        errorToast.show(e);

        return constants.INITIAL_DATA;
      }
    },
    initialData: constants.INITIAL_DATA,
    select: args.options?.selector,
  });
};
