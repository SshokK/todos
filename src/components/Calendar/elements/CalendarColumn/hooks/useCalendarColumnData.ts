import type { CalendarColumnData } from './useCalendarColumnData.types.ts';
import type { CalendarColumnProps } from '../CalendarColumn.types.ts';

import * as helpers from './useCalendarColumnData.helpers.ts';

import { useMemo, useState } from 'react';

export const useCalendarColumnData = (
  props: Pick<CalendarColumnProps, 'items' | 'date'>,
): CalendarColumnData => {
  const [items, setItems] = useState(props.items ?? []);
  const [offset, setOffset] = useState(0);

  const localState: CalendarColumnData['localState'] = {
    items,
    offset,
  };

  const localActions: CalendarColumnData['localActions'] = useMemo(
    () => ({
      setItems,
      setOffset,
    }),
    [],
  );

  const formattedData: CalendarColumnData['formattedData'] = useMemo(() => {
    return {
      items: helpers.getColumnItems({
        items: localState.items,
        date: props.date,
      }),
    };
  }, [localState.items, props.date]);

  return {
    localState,
    localActions,
    formattedData,
  };
};
