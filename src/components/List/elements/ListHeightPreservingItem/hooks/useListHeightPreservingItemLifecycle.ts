import type { ListHeightPreservingItemHandlers } from './useListHeightPreservingItemHandlers.types.ts';

import { useEffect } from 'react';

export const useListHeightPreservingItemLifecycle = ({
  onSizeRecalculation,
}: {
  onSizeRecalculation: ListHeightPreservingItemHandlers['handleSizeRecalculation'];
}) => {
  useEffect(onSizeRecalculation, [onSizeRecalculation]);
};
