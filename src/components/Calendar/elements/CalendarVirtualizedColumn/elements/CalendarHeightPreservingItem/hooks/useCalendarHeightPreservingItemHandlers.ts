import type { CalendarHeightPreservingItemData } from './useCalendarHeightPreservingItemData.types.ts';
import type { CalendarHeightPreservingItemHandlers } from './useCalendarHeightPreservingItemHandlers.types.ts';

import { useCallback } from 'react';

export const useCalendarHeightPreservingItemHandlers = ({
  localActions,
  formattedData,
}: {
  localActions: CalendarHeightPreservingItemData['localActions'];
  formattedData: CalendarHeightPreservingItemData['formattedData'];
}): CalendarHeightPreservingItemHandlers => {
  const handleSizeRecalculation: CalendarHeightPreservingItemHandlers['handleSizeRecalculation'] =
    useCallback(() => {
      localActions.setSize((prevSize) => {
        return formattedData.knownSize == 0
          ? prevSize
          : formattedData.knownSize;
      });
    }, [formattedData.knownSize, localActions]);

  return {
    handleSizeRecalculation,
  };
};
