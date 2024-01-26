import type { ToastState } from '../../ToastContext/ToastContext.types.ts';
import type { ComponentProps, Dispatch, SetStateAction } from 'react';

import type * as elements from '../elements';

export type ToastContextProviderLocalState = {
  isOpen: ToastState['isOpen'];
  props: ComponentProps<typeof elements.ToastProvider>;
};

export type ToastContextProviderLocalActions = {
  setIsOpen: Dispatch<SetStateAction<ToastContextProviderLocalState['isOpen']>>;
  setProps: Dispatch<SetStateAction<ToastContextProviderLocalState['props']>>;
};

export type ToastContextProviderData = {
  localState: ToastContextProviderLocalState;
  localActions: ToastContextProviderLocalActions;
};
