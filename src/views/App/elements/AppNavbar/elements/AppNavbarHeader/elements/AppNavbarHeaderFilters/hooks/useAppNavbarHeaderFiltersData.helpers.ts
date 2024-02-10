import type { AppNavbarHeaderFiltersProps } from '../AppNavbarHeaderFilters.types.ts';

import * as constants from '../AppNavbarHeaderFilters.constants.ts';

export const getAppliedFiltersCount = (
  filters: AppNavbarHeaderFiltersProps['filters'],
) => {
  if (!filters) {
    return 0;
  }

  return Object.entries(filters).filter(([filterKey, filterValue]) => {
    /**
     * TODO Update to support arrays and objects
     */
    return (
      filterValue !==
      constants.FILTER_DEFAULT_VALUES[
        filterKey as keyof typeof constants.FILTER_DEFAULT_VALUES
      ]
    );
  }).length;
};
