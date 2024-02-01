import type { AppCalendarState } from './AppCalendarContext.types.ts';

import { createContext } from 'react';

export const AppCalendarContext = createContext<AppCalendarState>({
  date: new Date(),
  highlightedTodoId: null,

  setDate: () => undefined,
  setHighlightedTodoId: () => undefined,
});
