import type { TodosCountByDaysArgs } from './useTodosCountByDays.types.ts';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosCountByDays.constants.ts';
import * as reactQuery from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosCountByDays = <
  D = Awaited<ReturnType<typeof api.fetchTodosCountByDays>>,
>(
  args: TodosCountByDaysArgs<D>,
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodosCountByDays>>,
    Error,
    D
  >({
    queryKey: [queryKeys.QUERY_KEY.TODOS_COUNT_BY_DAYS, args.queryParams],
    queryFn: async () => {
      try {
        return await api.fetchTodosCountByDays(args.queryParams);
      } catch (e) {
        errorToast.show(e);
        return constants.INITIAL_DATA;
      }
    },
    placeholderData: reactQuery.keepPreviousData,
    select: args.options?.selector,
  });
};
