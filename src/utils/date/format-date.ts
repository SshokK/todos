import * as dateFns from 'date-fns-tz';
import * as dateConstants from '../../constants/date.constants.ts';

export const formatDate = (
  date: Date | string,
  options: {
    format: dateConstants.DATE_FORMATS;
    timezone?: dateConstants.TIMEZONE;
  },
): string => {
  return dateFns.format(
    dateFns.utcToZonedTime(
      date,
      options.timezone ?? dateConstants.TIMEZONE.UTC,
    ),
    options.format,
    {
      timeZone: dateConstants.TIMEZONE.UTC,
    },
  );
};
