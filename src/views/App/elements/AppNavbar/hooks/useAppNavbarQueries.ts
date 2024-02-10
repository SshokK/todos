import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as utils from 'utils';
import * as constants from '../AppNavbar.constants.ts';

export const useAppNavbarQueries = ({
  formattedData,
}: {
  formattedData: AppNavbarData['formattedData'];
}) => {
  const todosCountByDays = utils.useTodosCountByDays({
    queryParams: {
      ...constants.DEFAULT_QUERY_PARAMS,
      ...formattedData.queryParams,
    },
  });

  return {
    todosCountByDays,
  };
};
