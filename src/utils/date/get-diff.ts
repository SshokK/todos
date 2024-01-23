import * as dateConstants from '../../constants/date.constants.ts';
import * as dateFns from 'date-fns';

export const getDiff = ({
  dateA,
  dateB,
  shouldReturnAlwaysPositive = false,
}: {
  dateA: Date;
  dateB: Date;
  granularity: dateConstants.DATE_GRANULARITY;
  shouldReturnAlwaysPositive?: boolean;
}): number => {
  const diff = dateFns.differenceInCalendarDays(dateA, dateB);

  if (shouldReturnAlwaysPositive) {
    return Math.abs(diff);
  }

  return diff;
};
