import type * as react from 'react';
import type * as selectTypes from '../../../../Select.types';

export type SelectItemProps = {
  value: selectTypes.SelectOption['key'];
  isDisabled?: boolean;
  children: react.ReactNode;
};
