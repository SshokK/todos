import * as utils from 'utils';

import { useTodosList } from 'utils';

export const useAppCalendarQueries = () => {
  const todosList = useTodosList({
    options: {
      selector: utils.formatTodosForCalendar(),
    },
  });

  return {
    todosList,
  };
};
