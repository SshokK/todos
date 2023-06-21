import type * as react from 'react';
import type * as constants from './Popover.constants';

export type PopoverProps = {
  content?: react.ReactNode;
  children?: react.ReactNode;
  isOpen?: boolean;
  isDisabled?: boolean;
  isBlank?: boolean;
  isWithArrow?: boolean;
  isWithCloseButton?: boolean;
  side?: constants.POPOVER_SIDE;
  alignment?: constants.POPOVER_ALIGNMENT;
};
