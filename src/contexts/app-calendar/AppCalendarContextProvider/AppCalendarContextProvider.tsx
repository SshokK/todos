import type { FC } from 'react';
import type { AppCalendarContextProviderProps } from './AppCalendarContextProvider.types.ts';

import { AppCalendarContext } from '../AppCalendarContext';

import { useAppCalendarContextProviderData } from './hooks';

export const AppCalendarContextProvider: FC<
  AppCalendarContextProviderProps
> = ({ children }) => {
  const { localState, localActions } = useAppCalendarContextProviderData();

  return (
    <AppCalendarContext.Provider
      value={{
        date: localState.date,
        highlightedTodoId: localState.highlightedTodoId,

        setDate: localActions.setDate,
        setHighlightedTodoId: localActions.setHighlightedTodoId,
      }}
    >
      {children}
    </AppCalendarContext.Provider>
  );
};
