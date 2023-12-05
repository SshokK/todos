import type { AppData } from './useAppData.types.ts';

import * as store from 'store';
import * as utils from 'utils';

import { useStore } from 'store';
import { useMemo, useState } from 'react';

export const useAppData = (): AppData => {
  const [calendarDate, setCalendarDate] = useState(utils.getToday);
  const [searchString, setSearchString] = useState('');

  const localState: AppData['localState'] = {
    calendarDate,
    searchString,
  };

  const localActions: AppData['localActions'] = useMemo(
    () => ({
      setCalendarDate,
      setSearchString,
    }),
    [],
  );

  const storeData: AppData['storeData'] = useStore((state) => ({
    todos: store.getTodosForCalendar(state, {
      title: localState.searchString,
    }),
  }));

  const formattedData: AppData['formattedData'] = {
    whitelistedDates: localState.searchString
      ? Object.entries(storeData.todos).flatMap(([dateString, todos]) => {
          return todos.filter((todo) => !todo.isHidden).length
            ? [new Date(dateString)]
            : [];
        })
      : null,
  };

  return {
    localState,
    localActions,
    storeData,
    formattedData,
  };
};
