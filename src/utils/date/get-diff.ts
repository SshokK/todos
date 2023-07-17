import * as dateConstants from '../../constants/date.constants.ts';
import * as dateFns from 'date-fns';

export const getDiff = ({
  dateA,
  dateB,
}: {
  dateA: Date;
  dateB: Date;
  granularity: dateConstants.DATE_GRANULARITY;
}): number => {
  return dateFns.differenceInCalendarDays(dateA, dateB);
};
