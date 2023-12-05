import * as utils from 'utils';
import * as constants from '../Calendar.constants.ts';

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

export const formatWhitelistedDates = (dates: Date[]): Date[] => {
  if (!dates.length) {
    return [];
  }

  if (dates.length < constants.COLUMNS_COUNT) {
    const priorDaysCount = Math.floor(
      (constants.COLUMNS_COUNT - dates.length) / 2,
    );
    const nextDaysCount =
      constants.COLUMNS_COUNT - dates.length - priorDaysCount;

    return [
      ...getPriorDays({
        startDate: dates[0],
        daysCount: priorDaysCount,
      }),
      ...dates,
      ...getFurtherDays({
        startDate: dates[dates.length - 1],
        daysCount: nextDaysCount,
      }),
    ];
  }

  return dates;
};
