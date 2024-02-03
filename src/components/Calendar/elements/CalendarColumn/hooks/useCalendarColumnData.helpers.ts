import type { CalendarColumnProps } from '../CalendarColumn.types.ts';
import type { CalendarColumnData } from './useCalendarColumnData.types.ts';

import * as utils from 'utils';
import * as dateConstants from '../../../../../constants/date.constants.ts';

export const getColumnItems = ({
  date,
  items,
}: {
  date: CalendarColumnProps['date'];
  items: CalendarColumnData['localState']['items'];
}) => {
  return items
    .filter((item) =>
      utils.isSame({
        dateA: item.date,
        dateB: date,
        granularity: dateConstants.DATE_GRANULARITY.DAY,
      }),
    )
    .sort((itemA, itemB) => (itemA?.order ?? 0) - (itemB?.order ?? 0));
};
