import type { ReactNode } from 'react';

import type * as constants from './Checkbox.constants';

export type CheckboxProps = {
  type?: constants.CHECKBOX_TYPE;
  size?: constants.CHECKBOX_SIZE;
  label?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  classNames?: {
    container?: string;
    box?: string;
    indicator?: string;
  };
  onChange?: (isChecked: boolean) => void;
};
