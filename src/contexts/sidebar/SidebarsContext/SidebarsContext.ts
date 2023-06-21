import type { SidebarsState } from './SidebarsContext.types';

import { createContext } from 'react';

export const SidebarsContext = createContext<SidebarsState>({
  sidebar: {
    isOpen: false,
    title: null,
    element: null,

    setTitle: () => null,
    setIsOpen: () => null,
    setElement: () => null,
  },
  navbar: {
    isOpen: true,
    element: null,

    setIsOpen: () => null,
    setElement: () => null,
  },
});
