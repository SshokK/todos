import type { TodosState } from './slices';
import type { StoreApi } from 'zustand';

export type GlobalState = TodosState;

export type Slice<T> = (
  set: StoreApi<GlobalState>['setState'],
  get: StoreApi<GlobalState>['getState'],
) => T;
