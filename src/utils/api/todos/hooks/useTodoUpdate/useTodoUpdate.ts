import type { TodoUpdateArgs } from './useTodoUpdate.types.ts';

import * as helpers from './useTodoUpdate.helpers.ts';
import * as constants from './useTodoUpdate.constants.ts';
import * as api from '../../todos.api.ts';
import * as todosConstants from '../../todos.constants.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodoUpdate = () => {
  const queryClient = useQueryClient();
  const errorToast = useQueryErrorToast();

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

          const todoToUpdate = todos.find((todo) => todo.id === variables[0]);

          if (!todoToUpdate) {
            return todos;
          }

          return helpers.updateTodos({
            todos: todos,
            todoToUpdate: todoToUpdate,
            payload: variables[1],
          });
        },
      );

      return previousTodos;
    },

    onError: (e, _, previousTodos) => {
      errorToast.show(e);
      queryClient.setQueryData(
        todosConstants.QUERY_KEY_FACTORY.TODOS_LIST(),
        previousTodos,
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
