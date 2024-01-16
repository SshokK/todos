import type * as constants from '../ClearButton.constants.ts';

export type ClearButtonHandlers = {
  handlePopoverToggle: (isOpen: boolean) => () => void;
  handleOptionClick: (type: constants.CLEAR_TYPE) => () => void;
};
