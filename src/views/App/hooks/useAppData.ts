import type { AppData } from './useAppData.types.ts';

import * as store from 'store';
import * as utils from 'utils';

import { useStore } from 'store';
import { useMemo, useState } from 'react';

export const useAppData = (): AppData => {
  const [calendarDate, setCalendarDate] = useState(utils.getToday);

  const localState: AppData['localState'] = {
    calendarDate,
  };

  const localActions: AppData['localActions'] = useMemo(
    () => ({
      setCalendarDate,
    }),
    [],
  );

  const storeData = useStore((state) => ({
    todos: store.getTodosForCalendar(state),
  }));

  return {
    localState,
    localActions,
    storeData,
  };
};
