import type { TodosCountByDatesArgs } from './useTodosCountByDates.types.ts';

import * as todosConstants from '../../todos.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosCountByDates.constants.ts';
import * as reactQuery from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosCountByDates = <
  D = Awaited<ReturnType<typeof api.fetchTodosCountByDates>>,
>(
  args: TodosCountByDatesArgs<D>,
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodosCountByDates>>,
    Error,
    D
  >({
    queryKey: todosConstants.QUERY_KEY_FACTORY.TODOS_COUNT_BY_DAYS(
      args.queryParams,
    ),
    queryFn: async () => {
      try {
        return await api.fetchTodosCountByDates(args.queryParams);
      } catch (e) {
        errorToast.show(e);
        return constants.INITIAL_DATA;
      }
    },
    placeholderData: reactQuery.keepPreviousData,
    select: args.options?.selector,
  });
};
