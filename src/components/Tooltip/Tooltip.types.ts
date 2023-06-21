import type * as react from 'react';
import type * as constants from './Tooltip.constants';

export type TooltipProps = {
  title?: react.ReactNode;
  children?: react.ReactNode;
  isOpen?: boolean;
  side?: constants.TOOLTIP_SIDE;
};
