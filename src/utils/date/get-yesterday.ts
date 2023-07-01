import * as dateFns from 'date-fns';

export const getYesterday = (): Date => {
  return dateFns.subDays(new Date(), 1);
};
