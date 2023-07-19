import type * as store from 'store';
import type { Dispatch, SetStateAction } from 'react';

export type AppNavbarLocalState = {
  todosEndDate: Date;
};

export type AppNavbarLocalActions = {
  setTodosEndDate: Dispatch<
    SetStateAction<AppNavbarLocalState['todosEndDate']>
  >;
};

export type AppNavbarStoreData = {
  unfinishedFutureTodosByDates: ReturnType<
    typeof store.getUnfinishedFutureTodosByDates
  >;
};

export type AppNavbarData = {
  localState: AppNavbarLocalState;
  localActions: AppNavbarLocalActions;
  storeData: AppNavbarStoreData;
};
