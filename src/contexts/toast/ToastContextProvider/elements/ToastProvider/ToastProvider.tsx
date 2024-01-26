import type { FC } from 'react';
import type { ToastProviderProps } from './ToastProvider.types.ts';

import * as reactToast from '@radix-ui/react-toast';
import * as components from 'components';
import * as styles from './ToastProvider.styles.ts';

export const ToastProvider: FC<ToastProviderProps> = ({
  children,
  ...toastProps
}) => {
  return (
    <reactToast.Provider swipeDirection="right">
      {children}
      <reactToast.Viewport className={styles.CLASSNAMES.viewport} />
      <components.Toast {...toastProps} />
    </reactToast.Provider>
  );
};
