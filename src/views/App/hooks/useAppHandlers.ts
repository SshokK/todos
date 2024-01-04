import type { AppHandlers } from './useAppHandlers.types.ts';

import { useSidebars } from 'contexts';
import { useCallback } from 'react';

export const useAppHandlers = (): AppHandlers => {
  const sidebarsContext = useSidebars();

  const handleMount: AppHandlers['handleMount'] = useCallback(
    (navbarElement) => () => {
      sidebarsContext.navbar.setElement(navbarElement);
    },
    [sidebarsContext.navbar],
  );

  return {
    handleMount,
  };
};
