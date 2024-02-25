import type { AppCalendarData } from './useAppCalendarData.types.ts';

import * as utils from 'utils';

import { useMemo, useState } from 'react';
import { useIsMutating } from '@tanstack/react-query';

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

  const pendingBulkDeleteMutationsCount = useIsMutating({
    mutationKey: utils.MUTATION_KEY_FACTORY.BULK_DELETE(),
  });

  const formattedData: AppCalendarData['formattedData'] = {
    whitelistedDates: localState.searchString ? [] : null,
    isBulkDeleteInProgress: pendingBulkDeleteMutationsCount > 0,
  };

  return {
    localState,
    localActions,
    formattedData,
  };
};
