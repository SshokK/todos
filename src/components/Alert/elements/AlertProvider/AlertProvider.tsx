import type { FC } from 'react';
import type { AlertProviderProps } from './AlertProvider.types.ts';

import * as reactToast from '@radix-ui/react-toast';
import * as constants from './AlertProvider.constants.ts';

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  return (
    <reactToast.Provider swipeDirection={constants.ALERT_SWIPE_DIRECTION}>
      {children}
      <reactToast.ToastViewport />
    </reactToast.Provider>
  );
};
