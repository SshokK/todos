import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as utils from 'utils';
import * as components from 'components';

export const useAppNavbarQueries = ({
  formattedData,
}: {
  formattedData: AppNavbarData['formattedData'];
}) => {
  const todosCounts = utils.useTodosCountByStatus({
    queryParams: formattedData.queryParams,
    options: {
      selector: (response) => {
        return {
          [components.TODOS_COUNT_TYPE.DONE]: response.doneCount,
          [components.TODOS_COUNT_TYPE.OVERDUE]: response.overdueCount,
          [components.TODOS_COUNT_TYPE.TO_DO]: response.undoneCount,
        };
      },
    },
  });

  const todosCountByDays = utils.useTodosInfiniteCountByDays({
    queryParams: {
      limit: 50,
      ...formattedData.queryParams,
    },
    options: {
      selector: utils.formatFlattenInfiniteTodosCountByDays,
    },
  });

  return {
    todosCounts,
    todosCountByDays,
  };
};
