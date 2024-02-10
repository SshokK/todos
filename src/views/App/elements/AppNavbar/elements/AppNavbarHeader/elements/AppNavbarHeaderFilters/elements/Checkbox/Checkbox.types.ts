import type * as react from 'react';
import type * as components from 'components';

export type CheckboxProps = Omit<
  react.ComponentProps<typeof components.Checkbox>,
  'label' | 'isChecked'
> & {
  label: string;
  value: unknown;
};
