import type { InfiniteTodosCountByDaysArgs } from './useTodosInfiniteCountByDays.types.ts';

import * as api from '../../todos.api.ts';
import * as constants from './useTodosInfiniteCountByDays.constants.ts';
import * as todoConstants from '../../todos.constants.ts';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosInfiniteCountByDays = <
  D = Awaited<ReturnType<typeof api.fetchTodosCountByDays>>,
>(
  args: InfiniteTodosCountByDaysArgs<D>,
) => {
  const errorToast = useQueryErrorToast();

  return useInfiniteQuery({
    queryKey: todoConstants.QUERY_KEY_FACTORY.TODOS_INFINITE_COUNT_BY_DAYS(
      args.queryParams,
    ),
    queryFn: async ({ pageParam }) => {
      try {
        return await api.fetchTodosCountByDays({
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
