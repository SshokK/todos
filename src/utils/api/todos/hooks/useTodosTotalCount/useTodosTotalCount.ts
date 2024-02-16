import type { TodosTotalCountArgs } from './useTodosTotalCount.types.ts';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosTotalCount.constants.ts';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosTotalCount = <
  D = Awaited<ReturnType<typeof api.fetchTodosTotalCount>>,
>(
  args: TodosTotalCountArgs<D> = {},
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodosTotalCount>>,
    Error,
    D
  >({
    enabled: args.options?.isEnabled,
    queryKey: [queryKeys.QUERY_KEY.TODOS_TOTAL_COUNT, args.queryParams],
    queryFn: async () => {
      try {
        return await api.fetchTodosTotalCount(args.queryParams ?? {});
      } catch (e) {
        errorToast.show(e);

        return constants.INITIAL_DATA;
      }
    },
    initialData: constants.INITIAL_DATA,
    select: args.options?.selector,
  });
};
