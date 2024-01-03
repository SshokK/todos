import type { AppHandlers } from './useAppHandlers.types.ts';

import { useSidebarsContext } from 'contexts';
import { useCallback } from 'react';

export const useAppHandlers = (): AppHandlers => {
  const sidebarsContext = useSidebarsContext();

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
