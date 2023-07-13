import type { GlobalState } from '../store.types.ts';

import { create } from 'zustand';

import * as slices from '../slices';

export const useStore = create<GlobalState>((set, get) => ({
  ...slices.todosStore(set, get),
}));
