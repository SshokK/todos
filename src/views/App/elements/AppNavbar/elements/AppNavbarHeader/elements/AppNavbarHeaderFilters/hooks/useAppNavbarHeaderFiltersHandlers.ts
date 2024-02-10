import type { AppNavbarHeaderFiltersProps } from '../AppNavbarHeaderFilters.types.ts';
import type { AppNavbarHeaderFiltersHandlers } from './useAppNavbarHeaderFiltersHandlers.types.ts';

import * as constants from '../AppNavbarHeaderFilters.constants.ts';

export const useAppNavbarHeaderFiltersHandlers = ({
  props,
}: {
  props: Pick<AppNavbarHeaderFiltersProps, 'filters' | 'onFiltersChange'>;
}) => {
  const handleFilterChange: AppNavbarHeaderFiltersHandlers['handleFilterChange'] =
    (filterKey) => (filterValue) => {
      props.onFiltersChange?.({
        ...(props.filters ?? constants.FILTER_DEFAULT_VALUES),
        [filterKey]: filterValue,
      });
    };

  return {
    handleFilterChange,
  };
};
