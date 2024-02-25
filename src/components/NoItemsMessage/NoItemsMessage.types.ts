import type { ReactNode } from 'react';

export type NoItemsMessageProps = {
  isVisible?: boolean;
  message?: ReactNode;
  children?: ReactNode;
  classNames?: {
    container?: string;
    message?: string;
  };
};
