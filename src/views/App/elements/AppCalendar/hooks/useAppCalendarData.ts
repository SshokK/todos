import type { AppCalendarData } from './useAppCalendarData.types.ts';

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

  const formattedData: AppCalendarData['formattedData'] = {
    whitelistedDates: localState.searchString ? [] : null,
  };

  return {
    localState,
    localActions,
    formattedData,
  };
};
