import type * as react from 'react';
import type * as components from 'components';
import type * as elements from './elements';

export type AppNavbarHeaderProps = {
  searchString?: string;

  onSearchChange?: react.ComponentProps<
    typeof components.TextField
  >['onChange'];

  filters?: react.ComponentProps<
    typeof elements.AppNavbarHeaderFilters
  >['filters'];

  onFiltersChange?: react.ComponentProps<
    typeof elements.AppNavbarHeaderFilters
  >['onFiltersChange'];
};
