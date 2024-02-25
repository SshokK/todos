import type * as api from '../../todos.api.ts';
import type { useToast } from '../../../../hooks';
import type { useTranslation } from 'react-i18next';

import * as components from 'components';

export const getSuccessMessage = (
  t: ReturnType<typeof useTranslation>['t'],
  data: Awaited<ReturnType<typeof api.bulkDeleteTodos>>,
): Parameters<ReturnType<typeof useToast>['show']>[0] => {
  if (data.deletedCount > 0) {
    return {
      type: components.TOAST_TYPE.SUCCESS,
      title: t('utils.api.todos.bulkDeleteMessage.success.title'),
      description: t('utils.api.todos.bulkDeleteMessage.success.description', {
        count: data.deletedCount,
      }),
    };
  }

  return {
    type: components.TOAST_TYPE.NEUTRAL,
    title: t('utils.api.todos.bulkDeleteMessage.emptyResult.title'),
    description: t('utils.api.todos.bulkDeleteMessage.emptyResult.description'),
  };
};
