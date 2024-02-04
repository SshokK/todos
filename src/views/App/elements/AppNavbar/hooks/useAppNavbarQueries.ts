import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as utils from 'utils';

export const useAppNavbarQueries = ({
  localState,
}: {
  localState: AppNavbarData['localState'];
}) => {
  const todosCountByDays = utils.useTodosCountByDays({
    queryParams: {
      limit: 3,
      offset: 0,
      title: localState.searchString,
      dateRangeStart: utils.getStartOfDay(utils.getToday()).toISOString(),
    },
  });

  return {
    todosCountByDays,
  };
};
