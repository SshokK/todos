import type { ComponentType } from 'react';

export type IconLoaderProps = {
  isLoading?: boolean;
  Icon: ComponentType<{ className?: string }>;
  classNames?: {
    container?: string;
    icon?: string;
    spinner?: string;
  };
};
