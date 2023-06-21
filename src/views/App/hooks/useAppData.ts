import * as helpers from './useAppData.helpers.ts';

import { useTodosContext } from 'contexts';
import { useMemo } from 'react';

export const useAppData = () => {
  const todosContext = useTodosContext();

  const formattedData = useMemo(() => {
    return {
      todosGroupedByDates: helpers.getTodosGroupedByDates(todosContext.todos),
    };
  }, [todosContext.todos]);

  return {
    formattedData,
  };
};
