import type { ComponentProps, ComponentType } from 'react';
import type { Spinner } from '../Spinner';

export type IconLoaderProps = {
  Icon: ComponentType<{ className?: string }>;
  isLoading?: boolean;
  spinnerWidth?: ComponentProps<typeof Spinner>['width'];
  classNames?: {
    container?: string;
    icon?: string;
    spinner?: string;
  };
};
