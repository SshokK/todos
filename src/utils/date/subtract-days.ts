import * as dateFns from 'date-fns';

export const subtractDays = ({
  date,
  daysCount,
}: {
  date: Date;
  daysCount: number;
}): Date => {
  return dateFns.subDays(date, daysCount);
};
