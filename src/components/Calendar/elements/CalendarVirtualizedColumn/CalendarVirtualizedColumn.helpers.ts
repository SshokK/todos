import * as utils from 'utils';

export const formatHumanizedDate = (date: Date): string => {
  switch (date.toDateString()) {
    case new Date().toDateString(): {
      return `Today`;
    }

    case utils
      .subtractDays({
        date: new Date(),
        daysCount: 1,
      })
      .toDateString(): {
      return 'Yesterday';
    }

    case utils
      .addDays({
        date: new Date(),
        daysCount: 1,
      })
      .toDateString(): {
      return 'Tomorrow';
    }

    default: {
      return date.toLocaleDateString('en-US');
    }
  }
};
