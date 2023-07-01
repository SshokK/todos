import type { AppData } from './useAppData.types.ts';

import * as store from 'store';

import { useStore } from 'store';

export const useAppData = (): AppData => {
  const storeData = useStore((state) => ({
    todos: store.getTodosForCalendar(state),
  }));

  return {
    storeData,
  };
};
