import type { FC } from 'react';
import type { ToastContextProviderProps } from './ToastContextProvider.types.ts';

import * as elements from './elements';

import { ToastContext } from '../ToastContext';

import {
  useToastContextProviderData,
  useToastContextProviderHandlers,
} from './hooks';

export const ToastContextProvider: FC<ToastContextProviderProps> = ({
  children,
}) => {
  const { localState, localActions } = useToastContextProviderData();

  const handlers = useToastContextProviderHandlers({
    localActions,
  });

  return (
    <ToastContext.Provider
      value={{
        isOpen: localState.isOpen,
        show: handlers.handleToastShow,
      }}
    >
      <elements.ToastProvider
        isOpen={localState.isOpen}
        onOpenChange={localActions.setIsOpen}
        {...localState.props}
      >
        {children}
      </elements.ToastProvider>
    </ToastContext.Provider>
  );
};
