import type { CalendarHeightPreservingItemHandlers } from './useCalendarHeightPreservingItemHandlers.types.ts';

import { useEffect } from 'react';

export const useCalendarHeightPreservingItemLifecycle = ({
  onSizeRecalculation,
}: {
  onSizeRecalculation: CalendarHeightPreservingItemHandlers['handleSizeRecalculation'];
}) => {
  useEffect(onSizeRecalculation, [onSizeRecalculation]);
};
