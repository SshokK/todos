import * as utils from 'utils';

export const INITIAL_DATE = utils.subtractDays({
  date: new Date(),
  daysCount: 2,
});

export const COLUMNS_COUNT = 5;

export const PAGINATION_THROTTLE_TIME = 250;
