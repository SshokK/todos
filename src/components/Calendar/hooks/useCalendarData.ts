import type { CalendarData } from './useCalendarData.types.ts';
import type { CalendarProps } from '../Calendar.types.ts';

import * as constants from '../Calendar.constants.ts';
import * as helpers from '../Calendar.helpers.ts';

import { useMemo, useState } from 'react';

export const useCalendarData = ({
  columnsCount,
}: Pick<CalendarProps, 'columnsCount'>): CalendarData => {
  const [firstColumnDate, setFirstColumnDate] = useState(
    constants.INITIAL_DATE,
  );
  const [animationDirection, setAnimationDirection] = useState(
    constants.ANIMATION_DIRECTION.RIGHT,
  );

  const localState: CalendarData['localState'] = {
    firstColumnDate,
    animationDirection,
  };

  const localActions: CalendarData['localActions'] = useMemo(
    () => ({
      setFirstColumnDate,
      setAnimationDirection,
    }),
    [],
  );

  const formattedData: CalendarData['formattedData'] = useMemo(() => {
    const dates = helpers.getFurtherDays({
      startDate: localState.firstColumnDate,
      daysCount: columnsCount,
    });

    return {
      dates,
    };
  }, [columnsCount, localState.firstColumnDate]);

  return {
    localState,
    localActions,
    formattedData,
  };
};
