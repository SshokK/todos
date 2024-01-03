import type { AppCalendarState, TodosState } from './slices';
import type { StoreApi } from 'zustand';

export type GlobalState = {
  todosState: TodosState;
  appCalendarState: AppCalendarState;
};

export type Slice<T> = (
  set: StoreApi<GlobalState>['setState'],
  get: StoreApi<GlobalState>['getState'],
) => T;
