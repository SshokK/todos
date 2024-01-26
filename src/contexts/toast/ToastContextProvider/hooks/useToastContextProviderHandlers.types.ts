import type { ToastState } from '../../ToastContext/ToastContext.types.ts';

export type ToastContextProviderHandlers = {
  handleToastShow: ToastState['show'];
};
