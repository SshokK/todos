import type { GlobalState } from '../store.types.ts';

import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import * as slices from '../slices';

export const useStore = createWithEqualityFn<GlobalState>(
  (set, get) => ({
    appCalendarState: slices.appCalendarStore(set, get),
  }),
  shallow,
);
