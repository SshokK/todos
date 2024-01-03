import type { AppCalendarState } from './app-calendar.store.types.ts';
import type { Slice } from '../../store.types.ts';

import * as utils from 'utils';

export const appCalendarStore: Slice<AppCalendarState> = (set) => ({
  date: utils.getToday(),
  setDate: (date) => {
    set((state) => ({
      appCalendarState: {
        ...state.appCalendarState,
        date: date,
      },
    }));
  },
});
