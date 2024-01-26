import type { ComponentProps } from 'react';
import type * as elements from './elements';

export type ToastContextProviderProps = {
  children: ComponentProps<typeof elements.ToastProvider>['children'];
};
