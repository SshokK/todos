import type { ReactNode } from 'react';
import type * as constants from './Toast.constants.ts';

export type ToastProps = {
  type?: constants.TOAST_TYPE;
  isOpen?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  duration?: number;
  onOpenChange?: (isOpen: boolean) => void;
};
