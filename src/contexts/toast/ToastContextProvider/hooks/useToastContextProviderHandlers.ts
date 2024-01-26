import type { ToastContextProviderHandlers } from './useToastContextProviderHandlers.types.ts';
import type { ToastContextProviderData } from './useToastContextProviderData.types.ts';

import { useCallback } from 'react';

export const useToastContextProviderHandlers = ({
  localActions,
}: {
  localActions: ToastContextProviderData['localActions'];
}): ToastContextProviderHandlers => {
  const handleToastShow: ToastContextProviderHandlers['handleToastShow'] =
    useCallback(
      (props) => {
        localActions.setIsOpen(true);
        localActions.setProps(props);
      },
      [localActions],
    );

  return {
    handleToastShow,
  };
};
