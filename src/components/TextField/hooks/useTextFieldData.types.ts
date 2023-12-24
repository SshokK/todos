import type { Dispatch, SetStateAction } from 'react';

export type TextFieldLocalState = {
  value: string;
};

export type TextFieldLocalActions = {
  setValue: Dispatch<SetStateAction<TextFieldLocalState['value']>>;
};

export type TextFieldData = {
  localState: TextFieldLocalState;
  localActions: TextFieldLocalActions;
};
