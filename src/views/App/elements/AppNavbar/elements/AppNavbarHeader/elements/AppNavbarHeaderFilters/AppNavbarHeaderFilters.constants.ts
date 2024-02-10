import type { ComponentType } from 'react';
import type {
  AppNavbarHeaderFilterComponentProps,
  FilterConfig,
} from './AppNavbarHeaderFilters.types.ts';

import * as elements from './elements';
import * as components from 'components';

export enum FILTER_KEY {
  INCLUDE_DONE_TODOS = 'includeDoneTodos',
  INCLUDE_OVERDUE_TODOS = 'includeOverdueTodos',
}

export enum FILTER_TYPE {
  CHECKBOX = 'checkbox',
}

export const FILTER_TYPE_COMPONENT: Record<
  FILTER_TYPE,
  ComponentType<AppNavbarHeaderFilterComponentProps>
> = {
  [FILTER_TYPE.CHECKBOX]: elements.Checkbox,
};

export const FILTERS: FilterConfig[] = [
  {
    key: FILTER_KEY.INCLUDE_DONE_TODOS,
    type: FILTER_TYPE.CHECKBOX,
    labelTranslationPath:
      'views.App.AppNavbar.AppNavbarHeader.AppNavbarHeaderFilters.includeDoneTodos',
    defaultValue: false,
    filterComponentProps: {
      type: components.CHECKBOX_TYPE.SECONDARY,
    },
  },
  {
    key: FILTER_KEY.INCLUDE_OVERDUE_TODOS,
    type: FILTER_TYPE.CHECKBOX,
    labelTranslationPath:
      'views.App.AppNavbar.AppNavbarHeader.AppNavbarHeaderFilters.includeOverdueTodos',
    defaultValue: false,
    filterComponentProps: {
      type: components.CHECKBOX_TYPE.SECONDARY,
    },
  },
];

export const FILTER_DEFAULT_VALUES: Record<
  FILTER_KEY,
  FilterConfig['defaultValue']
> = Object.fromEntries(
  FILTERS.map((filter) => [filter.key, filter.defaultValue]),
) as Record<FILTER_KEY, FilterConfig['defaultValue']>;
