import type { Dispatch, SetStateAction } from 'react';

export type AppNavbarLocalState = {
  todosEndDate: Date | null;
  searchString: string;
};

export type AppNavbarLocalActions = {
  setTodosEndDate: Dispatch<
    SetStateAction<AppNavbarLocalState['todosEndDate']>
  >;
  setSearchString: Dispatch<
    SetStateAction<AppNavbarLocalState['searchString']>
  >;
};

export type AppNavbarData = {
  localState: AppNavbarLocalState;
  localActions: AppNavbarLocalActions;
};
