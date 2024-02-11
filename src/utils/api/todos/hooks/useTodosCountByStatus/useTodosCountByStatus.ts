import type { TodosCountByStatusArgs } from './useTodosCountByStatus.types.ts';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosCountByStatus.constants.ts';
import * as dateUtils from '../../../../date';
import * as reactQuery from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosCountByStatus = <
  D = Awaited<ReturnType<typeof api.fetchTodosCountByStatus>>,
>(
  args: TodosCountByStatusArgs<D> = {
    queryParams: {},
  },
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodosCountByStatus>>,
    Error,
    D
  >({
    queryKey: [queryKeys.QUERY_KEY.TODOS_COUNT_BY_STATUS, args.queryParams],
    queryFn: async () => {
      try {
        return await api.fetchTodosCountByStatus({
          ...(args.queryParams ?? {}),
          isDone: undefined,
          dueDate: dateUtils.getStartOfDay(dateUtils.getToday()).toISOString(),
        });
      } catch (e) {
        errorToast.show(e);

        return constants.INITIAL_DATA;
      }
    },
    placeholderData: reactQuery.keepPreviousData,
    initialData: constants.INITIAL_DATA,
    select: args.options?.selector,
  });
};
