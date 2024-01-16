import type { TodosListSelector, TodosListArgs } from './useTodosList.types.ts';

import * as reactQuery from '@tanstack/react-query';
import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';

import { useQuery } from '@tanstack/react-query';

export const useTodosList = <S extends TodosListSelector>(
  args: TodosListArgs<S> = {},
) => {
  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodos>>,
    Error,
    S extends TodosListSelector
      ? ReturnType<S>
      : Awaited<ReturnType<typeof api.fetchTodos>>
  >({
    queryKey: [queryKeys.QUERY_KEY.TODOS],
    queryFn: () => api.fetchTodos(),
    placeholderData: reactQuery.keepPreviousData,
    initialData: [],
    select: args.options?.selector,
  });
};
