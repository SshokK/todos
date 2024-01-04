import type { Dispatch, SetStateAction } from 'react';

import type * as store from 'store';

export type AppCalendarLocalState = {
  searchString: string;
  isSearchFocused: boolean;
};

export type AppCalendarLocalActions = {
  setSearchString: Dispatch<
    SetStateAction<AppCalendarLocalState['searchString']>
  >;
  setIsSearchFocused: Dispatch<
    SetStateAction<AppCalendarLocalState['isSearchFocused']>
  >;
};

export type AppCalendarStoreData = {
  todos: ReturnType<typeof store.getTodosForCalendar>;
  date: ReturnType<typeof store.getAppCalendarDate>;
  highlightedTodoId: ReturnType<typeof store.getAppCalendarHighlightedTodoId>;
};

export type AppCalendarFormattedData = {
  whitelistedDates: Date[] | null;
};

export type AppCalendarData = {
  storeData: AppCalendarStoreData;
  localState: AppCalendarLocalState;
  localActions: AppCalendarLocalActions;
  formattedData: AppCalendarFormattedData;
};
