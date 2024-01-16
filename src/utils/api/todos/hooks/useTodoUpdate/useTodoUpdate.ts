import type { TodoUpdateArgs } from './useTodoUpdate.types.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import { updateTodos } from '../../todos.api.helpers.ts';

export const useTodoUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Awaited<ReturnType<typeof api.updateTodo>>,
    Error,
    TodoUpdateArgs,
    Awaited<ReturnType<typeof api.fetchTodos>>
  >({
    mutationFn: (variables) => {
      return api.updateTodo(...variables);
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

          const todoToUpdate = todos.find((todo) => todo.id === variables[0]);

          if (!todoToUpdate) {
            return [];
          }

          return updateTodos({
            todos: todos,
            todoToUpdate: todoToUpdate,
            payload: variables[1],
          });
        },
      );

      return previousTodos;
    },
    onError: (_, __, context) => {
      queryClient.setQueryData([queryKeys.QUERY_KEY.TODOS], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.QUERY_KEY.TODOS] });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.QUERY_KEY.TODOS_COUNTS],
      });
    },
  });
};
