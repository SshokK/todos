import * as utils from 'utils';

import { useTodosList } from 'utils';
import { useAppCalendar } from 'contexts';

export const useAppCalendarQueries = () => {
  const appCalendar = useAppCalendar();

  const todosList = useTodosList({
    queryParams: {
      dateRangeStart: utils
        .subtractDays({
          date: appCalendar.date,
          daysCount: 2,
        })
        .toISOString(),

      dateRangeEnd: utils
        .addDays({
          date: appCalendar.date,
          daysCount: 2,
        })
        .toISOString(),
    },
  });

  return {
    todosList,
  };
};
