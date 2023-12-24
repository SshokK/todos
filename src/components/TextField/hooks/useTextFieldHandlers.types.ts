import type { ChangeEventHandler } from 'react';

export type TextFieldHandlers = {
  handleValueChange: ChangeEventHandler<HTMLInputElement>;
  handleValuePropChange: () => void;
};
