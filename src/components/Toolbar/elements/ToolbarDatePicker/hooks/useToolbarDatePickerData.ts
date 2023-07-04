import type { ToolbarDatePickerData } from './useToolbarDatePickerData.types.ts';

import { useMemo, useState } from 'react';

export const useToolbarDatePickerData = (): ToolbarDatePickerData => {
  const [isOpen, setIsOpen] = useState(false);

  const localState: ToolbarDatePickerData['localState'] = {
    isOpen,
  };

  const localActions: ToolbarDatePickerData['localActions'] = useMemo(
    () => ({
      setIsOpen,
    }),
    [],
  );

  return {
    localState,
    localActions,
  };
};
