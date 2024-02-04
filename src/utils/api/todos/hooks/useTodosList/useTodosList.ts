import type { TodosListArgs } from './useTodosList.types.ts';

import * as reactQuery from '@tanstack/react-query';
import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosList.constants.ts';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosList = <D = Awaited<ReturnType<typeof api.fetchTodos>>>(
  args: TodosListArgs<D>,
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<Awaited<ReturnType<typeof api.fetchTodos>>, Error, D>({
    queryKey: [queryKeys.QUERY_KEY.TODOS, args.queryParams],
    queryFn: async () => {
      try {
        return await api.fetchTodos(args.queryParams);
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
