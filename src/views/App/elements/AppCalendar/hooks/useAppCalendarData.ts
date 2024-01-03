import type { AppCalendarData } from './useAppCalendarData.types.ts';

import * as store from 'store';

import { useStore } from 'store';
import { useMemo, useState } from 'react';

export const useAppCalendarData = (): AppCalendarData => {
  const [searchString, setSearchString] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const localState: AppCalendarData['localState'] = {
    searchString,
    isSearchFocused,
  };

  const localActions: AppCalendarData['localActions'] = useMemo(
    () => ({
      setSearchString,
      setIsSearchFocused,
    }),
    [],
  );

  const storeData: AppCalendarData['storeData'] = useStore((state) => ({
    todos: store.getTodosForCalendar(state, {
      title: localState.searchString,
    }),
    date: store.getAppCalendarDate(state),
  }));

  const formattedData: AppCalendarData['formattedData'] = {
    whitelistedDates: localState.searchString
      ? Object.entries(storeData.todos).flatMap(([dateString, todos]) => {
          return todos.filter((todo) => !todo.isHidden).length
            ? [new Date(dateString)]
            : [];
        })
      : null,
  };

  return {
    localState,
    localActions,
    storeData,
    formattedData,
  };
};
