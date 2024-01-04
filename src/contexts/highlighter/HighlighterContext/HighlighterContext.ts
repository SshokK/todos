import type { HighlighterState } from './HighlighterContext.types.ts';

import { createContext } from 'react';

export const HighlighterContext = createContext<HighlighterState>({
  element: null,
  setElement: () => undefined,
});
