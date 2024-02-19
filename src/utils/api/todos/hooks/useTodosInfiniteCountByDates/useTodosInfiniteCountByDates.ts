import type { InfiniteTodosCountByDatesArgs } from './useTodosInfiniteCountByDates.types.ts';

import * as api from '../../todos.api.ts';
import * as constants from './useTodosInfiniteCountByDates.constants.ts';
import * as todoConstants from '../../todos.constants.ts';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosInfiniteCountByDates = <
  D = Awaited<ReturnType<typeof api.fetchTodosCountByDates>>,
>(
  args: InfiniteTodosCountByDatesArgs<D>,
) => {
  const errorToast = useQueryErrorToast();

  return useInfiniteQuery({
    queryKey: todoConstants.QUERY_KEY_FACTORY.TODOS_INFINITE_COUNT_BY_DATES(
      args.queryParams,
    ),
    queryFn: async ({ pageParam }) => {
      try {
        return await api.fetchTodosCountByDates({
          ...args.queryParams,
          offset: args.queryParams.limit * pageParam,
        });
      } catch (e) {
        errorToast.show(e);
        return constants.INITIAL_DATA;
      }
    },
    initialPageParam: 0,

    getNextPageParam: (_, __, lastPageParam) => {
      return lastPageParam + 1;
    },

    getPreviousPageParam: (_, __, firstPageParam) => {
      return firstPageParam - 1;
    },

    select: args.options?.selector,
  });
};
