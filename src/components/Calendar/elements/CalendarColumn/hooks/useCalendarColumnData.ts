import type { CalendarColumnData } from './useCalendarColumnData.types.ts';
import type { CalendarColumnProps } from '../CalendarColumn.types.ts';

import * as helpers from './useCalendarColumnData.helpers.ts';

import { useMemo } from 'react';

export const useCalendarColumnData = (
  props: Pick<CalendarColumnProps, 'items' | 'date'>,
): CalendarColumnData => {
  const formattedData: CalendarColumnData['formattedData'] = useMemo(() => {
    return {
      items: helpers.getColumnItems({
        items: props.items,
        date: props.date,
      }),
    };
  }, [props.date, props.items]);

  return {
    formattedData,
  };
};
