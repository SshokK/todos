import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as utils from 'utils';

import { useTodosContext } from 'contexts';
import { useMemo } from 'react';

export const useAppNavbarData = (): AppNavbarData => {
  const todosContext = useTodosContext();

  const formattedData: AppNavbarData['formattedData'] = useMemo(
    () => ({
      todosForToday: todosContext.todos.filter(
        (todo) => todo.date === utils.getToday().toDateString(),
      ),
    }),
    [todosContext.todos],
  );

  return {
    formattedData,
  };
};
