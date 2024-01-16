import * as dateFns from 'date-fns';
import * as dateConstants from '../../constants/date.constants.ts';

export const formatDate = (
  date: Date,
  options: {
    format: dateConstants.DATE_FORMATS;
  },
): string => {
  return dateFns.format(date, options.format);
};
