import type { ListHeightPreservingItemData } from './useListHeightPreservingItemData.types.ts';
import type { ListHeightPreservingItemHandlers } from './useListHeightPreservingItemHandlers.types.ts';

import { useCallback } from 'react';

export const useListHeightPreservingItemHandlers = ({
  localActions,
  formattedData,
}: {
  localActions: ListHeightPreservingItemData['localActions'];
  formattedData: ListHeightPreservingItemData['formattedData'];
}): ListHeightPreservingItemHandlers => {
  const handleSizeRecalculation: ListHeightPreservingItemHandlers['handleSizeRecalculation'] =
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
