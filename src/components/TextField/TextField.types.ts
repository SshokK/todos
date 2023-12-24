import type { FocusEvent, MouseEvent } from 'react';
import type * as constants from './TextField.constants.ts';

export type TextFieldProps = {
  value?: string;
  placeholder?: string;
  name?: string;
  changeCallbackThrottleTime?: number;
  classNames?: {
    container?: string;
    input?: string;
  };
  type?: constants.TEXTFIELD_TYPE;
  shouldRenderSearchButton?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
};
