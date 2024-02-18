import type * as react from 'react';
import type * as constants from './TextField.constants.ts';
import type { IconButton } from '../IconButton';

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
  onFocus?: (e: react.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: react.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: react.MouseEvent<HTMLInputElement>) => void;
  onSearchButtonClick?: react.ComponentProps<typeof IconButton>['onClick'];
};
