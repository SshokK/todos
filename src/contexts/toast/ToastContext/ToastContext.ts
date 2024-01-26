import type { ToastState } from './ToastContext.types';

import { createContext } from 'react';

export const ToastContext = createContext<ToastState>({
  isOpen: false,
  show: () => undefined,
});
