import type { ComponentType, MouseEvent, ComponentProps } from 'react';
import type * as constants from './IconButton.constants';

import type { Tooltip } from '../Tooltip';

export type IconButtonProps = {
  type?: constants.ICON_BUTTON_TYPE;
  size?: constants.ICON_BUTTON_SIZE;
  Icon?: ComponentType;
  isDisabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  tooltip?: Pick<ComponentProps<typeof Tooltip>, 'title' | 'side'>;
  className?: string;
};
