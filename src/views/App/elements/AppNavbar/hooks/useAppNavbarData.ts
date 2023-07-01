import type { AppNavbarData } from './useAppNavbarData.types.ts';

import * as store from 'store';

import { useStore } from 'store';

export const useAppNavbarData = (): AppNavbarData => {
  const storeData = useStore((state) => ({
    unfinishedTodosForToday: store.getUnfinishedTodosForToday(state),
  }));

  return {
    storeData,
  };
};
