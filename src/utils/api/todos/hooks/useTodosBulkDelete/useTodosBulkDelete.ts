import type { TodoBulkDeleteArgs } from './useTodosBulkDelete.types.ts';

import * as constants from './useTodosBulkDelete.constants.ts';
import * as api from '../../todos.api.ts';
import * as todosConstants from '../../todos.constants.ts';
import * as helpers from './useTodosBulkDelete.helpers.ts';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQueryErrorToast, useToast } from '../../../../hooks';
import { useTranslation } from 'react-i18next';

export const useTodosBulkDelete = () => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const errorToast = useQueryErrorToast();
  const toast = useToast();

  return useMutation<
    Awaited<ReturnType<typeof api.bulkDeleteTodos>>,
    Error,
    TodoBulkDeleteArgs,
    Awaited<ReturnType<typeof api.fetchTodos>>
  >({
    mutationKey: todosConstants.MUTATION_KEY_FACTORY.BULK_DELETE(),
    mutationFn: (variables) => {
      return api.bulkDeleteTodos(...variables);
    },
    onError: errorToast.show,
    onSuccess: (data) => {
      toast.show(helpers.getSuccessMessage(t, data));

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
