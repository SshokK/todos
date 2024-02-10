import type * as react from 'react';
import type * as elements from '../elements';
import type * as utils from 'utils';
import type * as types from 'types';

export type AppNavbarLocalState = {
  searchString: Required<
    react.ComponentProps<typeof elements.AppNavbarHeader>
  >['searchString'];

  filters: Required<
    react.ComponentProps<typeof elements.AppNavbarHeader>
  >['filters'];
};

export type AppNavbarLocalActions = {
  setSearchString: react.Dispatch<
    react.SetStateAction<AppNavbarLocalState['searchString']>
  >;

  setFilters: react.Dispatch<
    react.SetStateAction<AppNavbarLocalState['filters']>
  >;
};

export type AppNavbarFormattedData = {
  queryParams: Omit<
    | Parameters<typeof utils.useTodosCountByDays>[0]['queryParams']
    | Parameters<typeof utils.useTodosList>[0]['queryParams'],
    keyof types.ListQueryParams
  >;
};

export type AppNavbarData = {
  localState: AppNavbarLocalState;
  localActions: AppNavbarLocalActions;
  formattedData: AppNavbarFormattedData;
};
