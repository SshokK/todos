import type { CalendarColumnsAnimationProps } from '../CalendarColumnsAnimation.types.ts';
import type { CalendarColumnsAnimationData } from './useCalendarColumnsAnimationData.types.ts';

import * as utils from 'utils';
import * as dateConstants from '../../../../../constants/date.constants.ts';

import { usePreviousValue } from 'utils';

export const useCalendarColumnsAnimationData = ({
  dates,
  shouldUseOnlyFadeAnimation,
}: Pick<
  CalendarColumnsAnimationProps,
  'dates' | 'shouldUseOnlyFadeAnimation'
>): CalendarColumnsAnimationData => {
  const prevDates = usePreviousValue(dates);

  const isFadeEnabled =
    shouldUseOnlyFadeAnimation ||
    (dates.length && !prevDates.length) ||
    dates.some(
      (date, i) =>
        Math.abs(
          utils.getDiff({
            dateA: date,
            dateB: prevDates[i],
            granularity: dateConstants.DATE_GRANULARITY.DAY,
          }),
        ) > 1,
    );

  const formattedData: CalendarColumnsAnimationData['formattedData'] = {
    prevDates,
    isFadeEnabled,
  };

  return {
    formattedData,
  };
};
