import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as utils from 'utils';

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

  return {
    localState,
    localActions,
  };
};
