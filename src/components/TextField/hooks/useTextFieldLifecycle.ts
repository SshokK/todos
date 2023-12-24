import type { TextFieldHandlers } from './useTextFieldHandlers.types.ts';

import { useEffect } from 'react';

export const useTextFieldLifecycle = ({
  onValuePropChange,
}: {
  onValuePropChange: TextFieldHandlers['handleValuePropChange'];
}) => {
  useEffect(onValuePropChange, [onValuePropChange]);
};
