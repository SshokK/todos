import type { CalendarData } from './useCalendarData.types.ts';

import * as constants from '../Calendar.constants.ts';
import * as helpers from './useCalendarData.helpers.ts';
import * as utils from '../../../utils';

import { useMemo, useRef, useState } from 'react';

export const useCalendarData = (): CalendarData => {
  const containerRef = useRef(null);

  const refs: CalendarData['refs'] = {
    container: containerRef,
  };

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

    const centralVisibleColumnDate = utils.addDays({
      date: localState.firstColumnDate,
      daysCount: 2,
    });

    return {
      centralVisibleColumnDate,
      dates,
    };
  }, [localState.firstColumnDate]);

  return {
    refs,
    localState,
    localActions,
    formattedData,
  };
};
