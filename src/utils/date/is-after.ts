import * as dateFns from 'date-fns';
import * as dateConstants from '../../constants/date.constants.ts';

export const isAfter = ({
  dateA,
  dateB,
  isDateAIncluded,
}: {
  dateA: Date;
  dateB: Date;
  granularity: dateConstants.DATE_GRANULARITY;
  isDateAIncluded?: boolean;
}): boolean => {
  const diff = dateFns.differenceInCalendarDays(dateA, dateB);

  return isDateAIncluded ? diff >= 0 : diff > 0;
};
