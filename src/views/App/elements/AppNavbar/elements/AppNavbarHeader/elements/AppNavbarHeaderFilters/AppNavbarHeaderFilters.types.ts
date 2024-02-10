import type * as constants from './AppNavbarHeaderFilters.constants.ts';

export type FilterValues = Record<constants.FILTER_KEY, unknown>;

export type FilterConfig = {
  key: constants.FILTER_KEY;
  type: constants.FILTER_TYPE;
  labelTranslationPath: string;
  defaultValue: unknown;
  filterComponentProps?: Record<string, unknown>;
};

export type AppNavbarHeaderFiltersProps = {
  filters?: FilterValues;
  onFiltersChange?: (filters: FilterValues) => void;
};

export type AppNavbarHeaderFilterComponentProps = {
  label: string;
  value: unknown;

  [key: string]: unknown;
};
