import type { CheckboxProps } from './Checkbox.types.ts';

import * as react from 'react';
import * as components from 'components';

export const Checkbox = react.forwardRef<HTMLFormElement, CheckboxProps>(
  (props, ref) => {
    return (
      <components.Checkbox
        ref={ref}
        isChecked={Boolean(props.value)}
        {...props}
      />
    );
  },
);
