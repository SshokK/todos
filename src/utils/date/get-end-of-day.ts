import * as dateFns from 'date-fns';

export const getEndOfDay = (date: Date): Date => {
  return dateFns.endOfDay(date);
};
