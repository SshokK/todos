import type { AppCalendarState } from './slices';
import type { StoreApi } from 'zustand';

export type GlobalState = {
  appCalendarState: AppCalendarState;
};

export type Slice<T> = (
  set: StoreApi<GlobalState>['setState'],
  get: StoreApi<GlobalState>['getState'],
) => T;
