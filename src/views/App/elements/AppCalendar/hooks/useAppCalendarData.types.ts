import type { Dispatch, SetStateAction } from 'react';

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

export type AppCalendarFormattedData = {
  whitelistedDates: Date[] | null;
};

export type AppCalendarData = {
  localState: AppCalendarLocalState;
  localActions: AppCalendarLocalActions;
  formattedData: AppCalendarFormattedData;
};
