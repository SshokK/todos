import type { AppNavbarHeaderFiltersProps } from '../AppNavbarHeaderFilters.types.ts';
import type { AppNavbarHeaderFiltersData } from './useAppNavbarHeaderFiltersData.types.ts';

import * as helpers from './useAppNavbarHeaderFiltersData.helpers.ts';

import { useMemo } from 'react';

export const useAppNavbarHeaderFiltersData = (
  props: Pick<AppNavbarHeaderFiltersProps, 'filters'>,
): AppNavbarHeaderFiltersData => {
  const formattedData = useMemo(() => {
    const appliedFiltersCount = helpers.getAppliedFiltersCount(props.filters);

    return {
      appliedFiltersCount,
    };
  }, [props.filters]);

  return {
    formattedData,
  };
};
