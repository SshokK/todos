import type * as i18Next from 'i18next';

import * as utils from '../index.ts';

export const formatHumanizedDate = (
  date: Date,
  t: i18Next.TFunction,
): string => {
  switch (date.toDateString()) {
    case new Date().toDateString(): {
      return t('utils.date.today', `Today`);
    }

    case utils
      .subtractDays({
        date: new Date(),
        daysCount: 1,
      })
      .toDateString(): {
      return t('utils.date.yesterday', `Yesterday`);
    }

    case utils
      .addDays({
        date: new Date(),
        daysCount: 1,
      })
      .toDateString(): {
      return t('utils.date.tomorrow', `Tomorrow`);
    }

    default: {
      return date.toLocaleDateString('en-US');
    }
  }
};
