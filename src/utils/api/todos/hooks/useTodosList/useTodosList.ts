import type { TodosListArgs, TodosListSelector } from './useTodosList.types.ts';

import * as reactQuery from '@tanstack/react-query';
import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodosList.constants.ts';

import { useQuery } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosList = <S extends TodosListSelector>(
  args: TodosListArgs<S> = {},
) => {
  const errorToast = useQueryErrorToast();

  return useQuery<
    Awaited<ReturnType<typeof api.fetchTodos>>,
    Error,
    S extends TodosListSelector
      ? ReturnType<S>
      : Awaited<ReturnType<typeof api.fetchTodos>>
  >({
    queryKey: [queryKeys.QUERY_KEY.TODOS],
    queryFn: async () => {
      try {
        return await api.fetchTodos();
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
