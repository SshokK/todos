import type { Dispatch, SetStateAction } from 'react';

import type * as store from 'store';

export type AppLocalState = {
  calendarDate: Date;
  searchString: string;
};

export type AppLocalActions = {
  setCalendarDate: Dispatch<SetStateAction<AppLocalState['calendarDate']>>;
  setSearchString: Dispatch<SetStateAction<AppLocalState['searchString']>>;
};

export type AppStoreData = {
  todos: ReturnType<typeof store.getTodosForCalendar>;
};

export type AppFormattedData = {
  whitelistedDates: Date[] | null;
};

export type AppData = {
  storeData: AppStoreData;
  localState: AppLocalState;
  localActions: AppLocalActions;
  formattedData: AppFormattedData;
};
