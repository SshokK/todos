import type { TextFieldData } from './useTextFieldData.types.ts';
import type { TextFieldProps } from '../TextField.types.ts';

import { useMemo, useState } from 'react';

export const useTextFieldData = (
  props: Pick<TextFieldProps, 'value'>,
): TextFieldData => {
  const [value, setValue] = useState(props.value ?? '');

  const localState: TextFieldData['localState'] = {
    value,
  };

  const localActions: TextFieldData['localActions'] = useMemo(
    () => ({
      setValue,
    }),
    [],
  );

  return {
    localState,
    localActions,
  };
};
