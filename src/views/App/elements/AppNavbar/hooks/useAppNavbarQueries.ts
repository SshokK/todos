import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as utils from 'utils';
import * as sortConstants from '../../../../../constants/sort-constants.ts';

export const useAppNavbarQueries = ({
  localState,
}: {
  localState: AppNavbarData['localState'];
}) => {
  const todosList = utils.useTodosList({
    queryParams: {
      limit: 3,
      offset: 0,
      isDone: false,
      sortField: 'date',
      sortOrder: sortConstants.SORT_ORDER.DESC,
      dateRangeStart: utils.getStartOfDay(utils.getToday()).toISOString(),
      dateRangeEnd: utils.getEndOfDay(utils.getToday()).toISOString(),
    },
    options: {
      selector: utils.formatTodosByDates({
        filters: {
          title: localState.searchString,
          isDone: false,
          startDate: utils.getToday(),
          endDate: localState.searchString ? null : localState.todosEndDate,
        },
      }),
    },
  });

  const todosTotalCount = utils.useTodosTotalCount({
    queryParams: {
      isDone: false,
      dateRangeStart: utils.getStartOfDay(utils.getToday()).toISOString(),
      dateRangeEnd: utils.getEndOfDay(utils.getToday()).toISOString(),
    },
  });

  return {
    todosList,
    todosTotalCount,
  };
};
