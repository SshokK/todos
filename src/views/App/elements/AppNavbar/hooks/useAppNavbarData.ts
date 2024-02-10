import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as elements from '../elements';
import * as utils from 'utils';

import { useMemo, useState } from 'react';

export const useAppNavbarData = (): AppNavbarData => {
  const [searchString, setSearchString] =
    useState<AppNavbarData['localState']['searchString']>('');

  const [filters, setFilters] = useState<
    AppNavbarData['localState']['filters']
  >(elements.FILTER_DEFAULT_VALUES);

  const localState: AppNavbarData['localState'] = {
    searchString,
    filters,
  };

  const localActions: AppNavbarData['localActions'] = useMemo(
    () => ({
      setSearchString,
      setFilters,
    }),
    [],
  );

  const formattedData: AppNavbarData['formattedData'] = useMemo(() => {
    const queryParams = {
      title: localState.searchString,

      ...(!localState.filters[elements.FILTER_KEY.INCLUDE_OVERDUE_TODOS] && {
        dateRangeStart: utils.getStartOfDay(utils.getToday()).toISOString(),
      }),

      ...(!localState.filters[elements.FILTER_KEY.INCLUDE_DONE_TODOS] && {
        isDone: false,
      }),
    };

    return {
      queryParams,
    };
  }, [localState.filters, localState.searchString]);

  return {
    localState,
    localActions,
    formattedData,
  };
};
