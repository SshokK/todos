import * as utils from 'utils';

export const getFurtherDays = ({
  startDate,
  daysCount,
}: {
  startDate: Date;
  daysCount: number;
}): Date[] => {
  return [...Array(daysCount).keys()].flatMap((i) => {
    return utils.addDays({
      date: startDate,
      daysCount: i,
    });
  });
};
