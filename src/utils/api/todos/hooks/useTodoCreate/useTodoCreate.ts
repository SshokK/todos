import type { TodoCreateArgs } from './useTodoCreate.types.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as api from '../../todos.api.ts';
import * as stringUtils from '../../../../string';
import * as dateUtils from '../../../../date';
import * as dateConstants from '../../../../../constants/date.constants.ts';

export const useTodoCreate = () => {
  const queryClient = useQueryClient();

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
      await queryClient.cancelQueries({
        queryKey: [queryKeys.QUERY_KEY.TODOS],
      });

      const previousTodos = queryClient.getQueryData<
        Awaited<ReturnType<typeof api.fetchTodos>>
      >([queryKeys.QUERY_KEY.TODOS]);

      queryClient.setQueryData<Awaited<ReturnType<typeof api.fetchTodos>>>(
        [queryKeys.QUERY_KEY.TODOS],
        (todosResponse) => {
          const sameDateTodos =
            todosResponse?.filter?.((existingTodo) =>
              dateUtils.isSame({
                dateA: new Date(existingTodo.date),
                dateB: new Date(variables[0].date),
                granularity: dateConstants.DATE_GRANULARITY.DAY,
              }),
            ) ?? [];

          const createdTodo = {
            ...variables[0],
            id: stringUtils.getRandomId(),
            isDone: false,
            order: sameDateTodos.length,
          };

          if (todosResponse) {
            return [...todosResponse, createdTodo];
          }

          return [createdTodo];
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
