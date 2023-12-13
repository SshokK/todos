import type { ReactNode } from 'react';

import type * as constants from './Alert.constants';

export type AlertProps = {
  /**
   * Alert type
   */
  type?: constants.ALERT_TYPES;
  /**
   * Title of the alert
   */
  title?: ReactNode;
  /**
   * Content of the alert
   */
  message?: ReactNode;
  /**
   * Custom classnames
   */
  classNames?: {
    container?: string;
  };
  /**
   * Flag that will show or hide the close button
   */
  isClosable?: boolean;
  /**
   * Extra element to render. The element will be renderer after the content and before the close icon
   */
  children?: ReactNode;
  /**
   * Close event handler
   */
  onClose?: () => void;
};
