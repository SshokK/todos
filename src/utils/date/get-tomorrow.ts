import * as dateFns from 'date-fns';

export const getTomorrow = (): Date => {
  return dateFns.addDays(new Date(), 1);
};
