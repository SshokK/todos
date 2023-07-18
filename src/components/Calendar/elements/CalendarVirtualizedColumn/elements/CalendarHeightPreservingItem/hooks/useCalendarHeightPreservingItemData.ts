import type { CalendarHeightPreservingItemData } from './useCalendarHeightPreservingItemData.types.ts';
import type { CalendarHeightPreservingItemProps } from '../CalendarHeightPreservingItem.types.ts';

import { useMemo, useState } from 'react';

export const useCalendarHeightPreservingItemData = (
  props: Pick<CalendarHeightPreservingItemProps, 'data-known-size'>,
): CalendarHeightPreservingItemData => {
  const [size, setSize] = useState(0);

  const localState: CalendarHeightPreservingItemData['localState'] = {
    size,
  };

  const localActions: CalendarHeightPreservingItemData['localActions'] =
    useMemo(
      () => ({
        setSize,
      }),
      [],
    );

  const formattedData: CalendarHeightPreservingItemData['formattedData'] = {
    knownSize: props['data-known-size'],
  };

  return {
    localState,
    localActions,
    formattedData,
  };
};
