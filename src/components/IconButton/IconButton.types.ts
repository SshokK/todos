import type {
  ComponentType,
  MouseEvent,
  ComponentProps,
  HTMLProps,
  ReactNode,
} from 'react';
import type * as constants from './IconButton.constants';

import type { Tooltip } from '../Tooltip';

export type IconButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'> & {
  type?: constants.ICON_BUTTON_TYPE;
  size?: constants.ICON_BUTTON_SIZE;
  badge?: ReactNode;
  Icon?: ComponentType<{
    className?: string;
  }>;
  element?: constants.ICON_BUTTON_ELEMENT;
  isDisabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  tooltip?: Pick<ComponentProps<typeof Tooltip>, 'title' | 'side'>;
  className?: string;
};
