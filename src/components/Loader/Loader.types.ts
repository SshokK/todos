import type { ComponentType, ReactNode } from 'react';

export type LoaderComponentProps = {
  isVisible?: boolean;
  className?: string;
  [key: string]: unknown;
};

export type LoaderProps = {
  Component: ComponentType<LoaderComponentProps>;
  isVisible: boolean;
  componentProps?: Omit<LoaderComponentProps, 'isVisible' | 'className'>;
  children?: ReactNode;
  isWithBackground?: boolean;
  classNames?: {
    outerContainer?: string;
    loader?: string;
  };
};
