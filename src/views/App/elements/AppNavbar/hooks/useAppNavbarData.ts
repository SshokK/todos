import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as store from 'store';
import * as utils from 'utils';

import { useStore } from 'store';
import { useMemo, useState } from 'react';

export const useAppNavbarData = (): AppNavbarData => {
  const [todosEndDate, setTodosEndDate] = useState(utils.getToday);

  const localState: AppNavbarData['localState'] = {
    todosEndDate,
  };

  const localActions: AppNavbarData['localActions'] = useMemo(
    () => ({
      setTodosEndDate,
    }),
    [],
  );

  const storeData: AppNavbarData['storeData'] = useStore((state) => ({
    unfinishedFutureTodosByDates: store.getUnfinishedFutureTodosByDates(state, {
      endDate: localState.todosEndDate,
    }),
  }));

  return {
    localState,
    localActions,
    storeData,
  };
};
