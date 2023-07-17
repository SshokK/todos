import type { Dispatch, SetStateAction } from 'react';

import type * as store from 'store';

export type AppLocalState = {
  calendarDate: Date;
};

export type AppLocalActions = {
  setCalendarDate: Dispatch<SetStateAction<AppLocalState['calendarDate']>>;
};

export type AppStoreData = {
  todos: ReturnType<typeof store.getTodosForCalendar>;
};

export type AppData = {
  storeData: AppStoreData;
  localState: AppLocalState;
  localActions: AppLocalActions;
};
