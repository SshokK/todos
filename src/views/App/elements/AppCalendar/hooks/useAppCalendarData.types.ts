import type { Dispatch, SetStateAction } from 'react';

import type * as store from 'store';

export type AppCalendarLocalState = {
  calendarDate: Date;
  searchString: string;
  isSearchFocused: boolean;
};

export type AppCalendarLocalActions = {
  setCalendarDate: Dispatch<
    SetStateAction<AppCalendarLocalState['calendarDate']>
  >;
  setSearchString: Dispatch<
    SetStateAction<AppCalendarLocalState['searchString']>
  >;
  setIsSearchFocused: Dispatch<
    SetStateAction<AppCalendarLocalState['isSearchFocused']>
  >;
};

export type AppCalendarStoreData = {
  todos: ReturnType<typeof store.getTodosForCalendar>;
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
