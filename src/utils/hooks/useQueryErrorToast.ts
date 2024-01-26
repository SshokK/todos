import { useToast } from 'contexts';
import { useCallback } from 'react';

import * as errorUtils from '../errors';
import * as components from '../../components';

export const useQueryErrorToast = (): Omit<
  ReturnType<typeof useToast>,
  'show'
> & {
  show: (e: unknown) => void;
} => {
  const toast = useToast();

  const show = useCallback(
    (e: unknown) => {
      if (!import.meta.env.DEV) {
        return toast.show({
          type: components.TOAST_TYPE.ERROR,
          title: 'Error',
          description: 'Something went wrong',
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
        description: 'Something went wrong',
      });
    },
    [toast],
  );

  return {
    ...toast,
    show: show,
  };
};
