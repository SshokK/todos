import { useQuery } from '@tanstack/react-query';

import * as queryKeys from '../../../../../constants/query-keys.constants.ts';
import * as utils from 'utils';

export const useAppCalendarQueries = () => {
  const fetchTodos = useQuery({
    queryKey: [queryKeys.QUERY_KEY.TODOS],
    queryFn: () => utils.fetchTodos(),
    initialData: {
      result: [],
      totalCount: 0,
    },
    select: utils.formatTodosForCalendar(),
  });

  return {
    fetchTodos,
  };
};
