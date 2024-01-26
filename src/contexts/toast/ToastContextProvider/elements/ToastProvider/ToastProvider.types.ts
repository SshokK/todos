import type { ComponentProps, ReactNode } from 'react';
import type * as components from 'components';

export type ToastProviderProps = ComponentProps<typeof components.Toast> & {
  children?: ReactNode;
};
