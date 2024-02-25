import type { TodosListArgs } from './useTodosList.types.ts';

import * as reactQuery from '@tanstack/react-query';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosList.constants.ts';
import * as todosConstants from '../../todos.constants.ts';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosList = <D = Awaited<ReturnType<typeof api.fetchTodos>>>(
  args: TodosListArgs<D>,
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<Awaited<ReturnType<typeof api.fetchTodos>>, Error, D>({
    enabled: args.options?.isEnabled,
    queryKey: todosConstants.QUERY_KEY_FACTORY.TODOS_LIST(args.queryParams),
    queryFn: async () => {
      try {
        return await api.fetchTodos(args.queryParams);
      } catch (e) {
        errorToast.show(e);
        return constants.INITIAL_DATA;
      }
    },
    placeholderData: reactQuery.keepPreviousData,
    select: args.options?.selector,
  });
};
