import { subtractDays } from './subtract-days.ts';

export const getYesterday = (): Date => {
  return subtractDays({
    date: new Date(),
    daysCount: 1,
  });
};
