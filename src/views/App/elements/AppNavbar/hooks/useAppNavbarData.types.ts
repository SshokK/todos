import type { Todo } from 'store';

export type AppNavbarStoreData = {
  unfinishedTodosForToday: Todo[];
};

export type AppNavbarData = {
  storeData: AppNavbarStoreData;
};
