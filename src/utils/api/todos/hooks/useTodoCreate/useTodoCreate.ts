import type { TodoCreateArgs } from './useTodoCreate.types.ts';

import * as todosConstants from '../../todos.constants.ts';
import * as api from '../../todos.api.ts';
import * as dateUtils from '../../../../date';
import * as dateConstants from '../../../../../constants/date.constants.ts';
import * as helpers from '../../todos.api.helpers.ts';
import * as constants from './useTodoCreate.constants.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodoCreate = () => {
  const queryClient = useQueryClient();
  const errorToast = useQueryErrorToast();

  return useMutation<
    Awaited<ReturnType<typeof api.createTodo>>,
    Error,
    TodoCreateArgs,
    Awaited<ReturnType<typeof api.fetchTodos>>
  >({
    mutationFn: (variables) => {
      return api.createTodo(...variables);
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
          const sameDateTodos =
            todos?.filter?.((existingTodo) =>
              dateUtils.isSame({
                dateA: new Date(existingTodo.date),
                dateB: new Date(variables[0].date),
                granularity: dateConstants.DATE_GRANULARITY.DAY,
              }),
            ) ?? [];

          const createdTodo = helpers.normalizeTodos([
            {
              ...variables[0],
              isDone: false,
              order: sameDateTodos.length + 1,
            },
          ])[0];

          if (todos) {
            return [...todos, createdTodo];
          }

          return [createdTodo];
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
