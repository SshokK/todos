import type { Dispatch, SetStateAction } from 'react';

export type ToolbarDatePickerLocalState = {
  isOpen: boolean;
};

export type ToolbarDatePickerLocalActions = {
  setIsOpen: Dispatch<SetStateAction<ToolbarDatePickerLocalState['isOpen']>>;
};

export type ToolbarDatePickerData = {
  localState: ToolbarDatePickerLocalState;
  localActions: ToolbarDatePickerLocalActions;
};
