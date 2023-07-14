import type { TodosCountsData } from './useTodosCountsData.types.ts';

import * as store from 'store';

import { useStore } from 'store';

export const useTodosCountsData = (): TodosCountsData => {
  const storeData: TodosCountsData['storeData'] = useStore((state) => ({
    todosCounts: store.getTodosCounts(state),
  }));

  return {
    storeData,
  };
};
