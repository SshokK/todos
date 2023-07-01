import type * as store from 'store';

export type AppStoreData = {
  todos: ReturnType<typeof store.getTodosForCalendar>;
};

export type AppData = {
  storeData: AppStoreData;
};
