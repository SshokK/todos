import type { CalendarData } from './useCalendarData.types.ts';
import type { CalendarProps } from '../Calendar.types.ts';

import * as constants from '../Calendar.constants.ts';
import * as helpers from './useCalendarData.helpers.ts';

import { useMemo, useRef, useState } from 'react';

export const useCalendarData = (
  props: Pick<CalendarProps, 'date'>,
): CalendarData => {
  const containerRef = useRef(null);

  const refs: CalendarData['refs'] = {
    container: containerRef,
  };

  const [date, setDate] = useState<CalendarData['localState']['date']>(
    props.date ?? constants.INITIAL_DATE,
  );

  const [isDragging, setIsDragging] =
    useState<CalendarData['localState']['isDragging']>(false);

  const localState: CalendarData['localState'] = {
    date,
    isDragging,
  };

  const localActions: CalendarData['localActions'] = useMemo(
    () => ({
      setDate,
      setIsDragging,
    }),
    [],
  );

  const formattedData: CalendarData['formattedData'] = useMemo(() => {
    const dates = [
      ...helpers.getPriorDays({
        startDate: localState.date,
        daysCount: constants.SIDE_COLUMNS_COUNT,
      }),
      localState.date,
      ...helpers.getFurtherDays({
        startDate: localState.date,
        daysCount: constants.SIDE_COLUMNS_COUNT,
      }),
    ];

    return {
      dates,
    };
  }, [localState.date]);

  return {
    refs,
    localState,
    localActions,
    formattedData,
  };
};
