import type { CalendarColumnsAnimationProps } from '../CalendarColumnsAnimation.types.ts';
import type { CalendarColumnsAnimationData } from './useCalendarColumnsAnimationData.types.ts';

import * as utils from 'utils';
import * as dateConstants from '../../../../../constants/date.constants.ts';

import { usePreviousValue } from 'utils';

export const useCalendarColumnsAnimationData = ({
  dates,
}: Pick<
  CalendarColumnsAnimationProps,
  'dates'
>): CalendarColumnsAnimationData => {
  const prevDates = usePreviousValue(dates);

  const isFadeEnabled =
    Math.abs(
      utils.getDiff({
        dateA: dates[0],
        dateB: prevDates[0],
        granularity: dateConstants.DATE_GRANULARITY.DAY,
      }),
    ) > 1;

  const formattedData: CalendarColumnsAnimationData['formattedData'] = {
    prevDates,
    isFadeEnabled,
  };

  return {
    formattedData,
  };
};
