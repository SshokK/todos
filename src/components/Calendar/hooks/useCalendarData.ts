import type { CalendarData } from './useCalendarData.types.ts';

import * as constants from '../Calendar.constants.ts';
import * as helpers from './useCalendarData.helpers.ts';

import { useMemo, useState } from 'react';

export const useCalendarData = (): CalendarData => {
  const [firstColumnDate, setFirstColumnDate] = useState(
    constants.INITIAL_DATE,
  );

  const localState: CalendarData['localState'] = {
    firstColumnDate,
  };

  const localActions: CalendarData['localActions'] = useMemo(
    () => ({
      setFirstColumnDate,
    }),
    [],
  );

  const formattedData: CalendarData['formattedData'] = useMemo(() => {
    const dates = helpers.getFurtherDays({
      startDate: localState.firstColumnDate,
      daysCount: constants.COLUMNS_COUNT,
    });

    return {
      dates,
    };
  }, [localState.firstColumnDate]);

  return {
    localState,
    localActions,
    formattedData,
  };
};
