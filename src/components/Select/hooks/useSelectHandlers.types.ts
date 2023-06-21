import type * as react from 'react';
import type * as reactSelect from '@radix-ui/react-select';

export type SelectHandlers = {
  handleChange: react.ComponentProps<typeof reactSelect.Root>['onValueChange'];
};
