import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as store from 'store';
import * as utils from 'utils';

import { useStore } from 'store';
import { useMemo, useState } from 'react';

export const useAppNavbarData = (): AppNavbarData => {
  const [todosEndDate, setTodosEndDate] = useState<
    AppNavbarData['localState']['todosEndDate']
  >(utils.getToday());

  const [searchString, setSearchString] =
    useState<AppNavbarData['localState']['searchString']>('');

  const localState: AppNavbarData['localState'] = {
    todosEndDate,
    searchString,
  };

  const localActions: AppNavbarData['localActions'] = useMemo(
    () => ({
      setTodosEndDate,
      setSearchString,
    }),
    [],
  );

  const storeData: AppNavbarData['storeData'] = useStore((state) => ({
    todosByDates: store.getTodosByDates(state, {
      title: localState.searchString,
      isDone: false,
      startDate: utils.getToday(),
      endDate: localState.searchString ? null : localState.todosEndDate,
    }),
  }));

  return {
    localState,
    localActions,
    storeData,
  };
};
