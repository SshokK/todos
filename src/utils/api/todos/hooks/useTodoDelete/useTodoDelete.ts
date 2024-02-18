import type { TodoDeleteArgs } from './useTodoDelete.types.ts';

import * as todosConstants from '../../todos.constants.ts';
import * as api from '../../todos.api.ts';
import * as constants from './useTodoDelete.constants.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodoDelete = () => {
  const queryClient = useQueryClient();
  const errorToast = useQueryErrorToast();

  return useMutation<
    Awaited<ReturnType<typeof api.deleteTodo>>,
    Error,
    TodoDeleteArgs,
    Awaited<ReturnType<typeof api.fetchTodos>>
  >({
    mutationFn: (variables) => {
      return api.deleteTodo(...variables);
    },
    onMutate: async (variables) => {
      await Promise.all(
        constants.QUERY_KEYS_TO_INVALIDATE.map((queryKeyFactory) =>
          queryClient.cancelQueries({
            queryKey: queryKeyFactory(),
          }),
        ),
      );

      const previousTodos = queryClient.getQueryData<
        Awaited<ReturnType<typeof api.fetchTodos>>
      >(todosConstants.QUERY_KEY_FACTORY.TODOS_LIST());

      queryClient.setQueryData<Awaited<ReturnType<typeof api.fetchTodos>>>(
        todosConstants.QUERY_KEY_FACTORY.TODOS_LIST(),
        (todos) => {
          if (!todos) {
            return [];
          }

          return todos.filter((todo) => todo.id !== variables[0]);
        },
      );

      return previousTodos;
    },

    onError: (e, _, context) => {
      errorToast.show(e);
      queryClient.setQueryData(
        todosConstants.QUERY_KEY_FACTORY.TODOS_LIST(),
        context,
      );
    },

    onSettled: () => {
      return Promise.all(
        constants.QUERY_KEYS_TO_INVALIDATE.map((queryKeyFactory) =>
          queryClient.invalidateQueries({
            queryKey: queryKeyFactory(),
          }),
        ),
      );
    },
  });
};
