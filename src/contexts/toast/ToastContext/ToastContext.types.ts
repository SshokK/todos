import type { ToastContextProviderData } from '../ToastContextProvider/hooks/useToastContextProviderData.types.ts';

export type ToastState = {
  isOpen: boolean;
  show: (args: ToastContextProviderData['localState']['props']) => void;
};
