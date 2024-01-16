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
    date: store.getAppCalendarDate(state),
    highlightedTodoId: store.getAppCalendarHighlightedTodoId(state),
  }));

  const formattedData: AppCalendarData['formattedData'] = {
    whitelistedDates: localState.searchString ? [] : null,
  };

  return {
    localState,
    localActions,
    storeData,
    formattedData,
  };
};
