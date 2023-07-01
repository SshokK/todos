import * as dateFns from 'date-fns';

export const addDays = ({
  date,
  daysCount,
}: {
  date: Date;
  daysCount: number;
}): Date => {
  return dateFns.addDays(date, daysCount);
};
