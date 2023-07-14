import * as dateFns from 'date-fns';
import * as dateConstants from '../../constants/date.constants.ts';

export const isSame = ({
  dateA,
  dateB,
}: {
  dateA: Date;
  dateB: Date;
  granularity: dateConstants.DATE_GRANULARITY;
}): boolean => {
  return dateFns.differenceInCalendarDays(dateA, dateB) === 0;
};
