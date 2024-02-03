import * as dateFns from 'date-fns';

export const getStartOfDay = (date: Date): Date => {
  return dateFns.startOfDay(date);
};
