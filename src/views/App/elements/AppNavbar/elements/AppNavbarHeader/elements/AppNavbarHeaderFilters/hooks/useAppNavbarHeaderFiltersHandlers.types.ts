import type { AppNavbarHeaderFilterComponentProps } from '../AppNavbarHeaderFilters.types.ts';

import * as constants from '../AppNavbarHeaderFilters.constants.ts';

export type AppNavbarHeaderFiltersHandlers = {
  handleFilterChange: (
    filterKey: constants.FILTER_KEY,
  ) => (filterValue: AppNavbarHeaderFilterComponentProps['value']) => void;
};
