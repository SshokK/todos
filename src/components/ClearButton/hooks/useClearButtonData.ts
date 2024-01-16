import type { ClearButtonData } from './useClearButtonData.types.ts';

import { useMemo, useState } from 'react';

export const useClearButtonData = (): ClearButtonData => {
  const [isOpen, setIsOpen] = useState(false);

  const localState: ClearButtonData['localState'] = {
    isOpen,
  };

  const localActions: ClearButtonData['localActions'] = useMemo(
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
