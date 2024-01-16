import type * as react from 'react';
import type * as constants from './Select.constants';

export type SelectOption = {
  key: string;
  label?: react.ReactNode;
  isDisabled?: boolean;

  [key: string]: unknown;
};

export type SelectOptionGroup = {
  key: string;
  label?: react.ReactNode;
  options?: SelectOption[];
};

export type SelectProps = {
  value: SelectOption['key'] | null;
  options: SelectOptionGroup[];
  placeholder?: string;
  isOpen?: boolean;
  width?: constants.SELECT_WIDTH;
  onChange?: (optionKey: SelectOption['key'], option: SelectOption) => void;
};
