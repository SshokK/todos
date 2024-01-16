import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as utils from 'utils';

export const useAppNavbarQueries = ({
  localState,
}: {
  localState: AppNavbarData['localState'];
}) => {
  const todosList = utils.useTodosList({
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

  return {
    todosList,
  };
};
