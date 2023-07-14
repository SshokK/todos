import type * as store from 'store';

export type TodosCountsStoreData = {
  todosCounts: ReturnType<typeof store.getTodosCounts>;
};

export type TodosCountsData = {
  storeData: TodosCountsStoreData;
};
