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
      daysCount: i + 1,
    });
  });
};

export const getPriorDays = ({
  startDate,
  daysCount,
}: {
  startDate: Date;
  daysCount: number;
}): Date[] => {
  return [...Array(daysCount).keys()]
    .flatMap((i) => {
      return utils.subtractDays({
        date: startDate,
        daysCount: i + 1,
      });
    })
    .reverse();
};
