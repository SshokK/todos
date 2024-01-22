import type { TodoDeleteArgs } from './useTodoDelete.types.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';

export const useTodoDelete = () => {
  const queryClient = useQueryClient();

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
      await queryClient.cancelQueries({
        queryKey: [queryKeys.QUERY_KEY.TODOS],
      });

      const previousTodos = queryClient.getQueryData<
        Awaited<ReturnType<typeof api.fetchTodos>>
      >([queryKeys.QUERY_KEY.TODOS]);

      queryClient.setQueryData<Awaited<ReturnType<typeof api.fetchTodos>>>(
        [queryKeys.QUERY_KEY.TODOS],
        (todos) => {
          if (!todos) {
            return [];
          }

          return todos.flatMap((todo) => {
            if (todo.id === variables[0]) {
              return [];
            }

            return [todo];
          });
        },
      );

      return previousTodos;
    },
    onError: (_, __, context) => {
      queryClient.setQueryData([queryKeys.QUERY_KEY.TODOS], context);
    },
    onSettled: () => {
      return Promise.all([
        queryClient.invalidateQueries({
          queryKey: [queryKeys.QUERY_KEY.TODOS],
        }),
        queryClient.invalidateQueries({
          queryKey: [queryKeys.QUERY_KEY.TODOS_COUNTS],
        }),
      ]);
    },
  });
};
