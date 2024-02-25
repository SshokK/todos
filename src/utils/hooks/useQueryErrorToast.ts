import * as errorUtils from '../errors';
import * as components from '../../components';

import { useToast } from './useToast.ts';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useQueryErrorToast = (): Omit<
  ReturnType<typeof useToast>,
  'show'
> & {
  show: (e: unknown) => void;
} => {
  const toast = useToast();
  const { t } = useTranslation();

  const show = useCallback(
    (e: unknown) => {
      if (!import.meta.env.DEV) {
        return toast.show({
          type: components.TOAST_TYPE.ERROR,
          title: t('utils.errors.networkError.title'),
          description: t('utils.errors.networkError.description'),
        });
      }

      if (e instanceof errorUtils.FetchError) {
        return toast.show({
          type: components.TOAST_TYPE.ERROR,
          title: e.message,
          description: e.description,
        });
      }

      if (e instanceof Error) {
        return toast.show({
          type: components.TOAST_TYPE.ERROR,
          description: e.message,
        });
      }

      toast.show({
        type: components.TOAST_TYPE.ERROR,
        description: t('utils.errors.networkError.description'),
      });
    },
    [t, toast],
  );

  return {
    ...toast,
    show: show,
  };
};
