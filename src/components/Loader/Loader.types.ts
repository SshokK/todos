import type { ReactNode } from 'react';

export type LoaderProps = {
  isVisible: boolean;
  children: ReactNode;
  classNames?: {
    outerContainer?: string;
  };
};
