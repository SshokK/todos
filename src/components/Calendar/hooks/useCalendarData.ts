import type { CalendarData } from './useCalendarData.types.ts';

import * as constants from '../Calendar.constants.ts';
import * as helpers from './useCalendarData.helpers.ts';
import * as utils from '../../../utils';

import { useMemo, useState } from 'react';

export const useCalendarData = (): CalendarData => {
  const [firstColumnDate, setFirstColumnDate] = useState<
    CalendarData['localState']['firstColumnDate']
  >(constants.INITIAL_DATE);

  const [isDragging, setIsDragging] =
    useState<CalendarData['localState']['isDragging']>(false);

  const localState: CalendarData['localState'] = {
    firstColumnDate,
    isDragging,
  };

  const localActions: CalendarData['localActions'] = useMemo(
    () => ({
      setFirstColumnDate,
      setIsDragging,
    }),
    [],
  );

  const formattedData: CalendarData['formattedData'] = useMemo(() => {
    const dates = helpers.getFurtherDays({
      startDate: localState.firstColumnDate,
      daysCount: constants.COLUMNS_COUNT,
    });

    return {
      centralVisibleColumnDate: utils.addDays({
        date: localState.firstColumnDate,
        daysCount: 2,
      }),
      dates,
    };
  }, [localState.firstColumnDate]);

  return {
    localState,
    localActions,
    formattedData,
  };
};
