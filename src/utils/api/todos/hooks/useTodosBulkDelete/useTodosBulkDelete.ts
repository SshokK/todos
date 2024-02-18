import type { TodoBulkDeleteArgs } from './useTodosBulkDelete.types.ts';

import * as constants from './useTodosBulkDelete.constants.ts';
import * as api from '../../todos.api.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQueryErrorToast } from '../../../../hooks';

export const useTodosBulkDelete = () => {
  const queryClient = useQueryClient();
  const errorToast = useQueryErrorToast();

  return useMutation<
    Awaited<ReturnType<typeof api.bulkDeleteTodos>>,
    Error,
    TodoBulkDeleteArgs,
    Awaited<ReturnType<typeof api.fetchTodos>>
  >({
    mutationFn: (variables) => {
      return api.bulkDeleteTodos(...variables);
    },
    onError: errorToast.show,
    onSuccess: () => {
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
