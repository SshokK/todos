import type { Dispatch, SetStateAction } from 'react';

export type ClearButtonLocalState = {
  isOpen: boolean;
};

export type ClearButtonLocalActions = {
  setIsOpen: Dispatch<SetStateAction<ClearButtonLocalState['isOpen']>>;
};

export type ClearButtonData = {
  localState: ClearButtonLocalState;
  localActions: ClearButtonLocalActions;
};
