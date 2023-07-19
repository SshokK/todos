import type { ListHeightPreservingItemData } from './useListHeightPreservingItemData.types.ts';
import type { ListHeightPreservingItemProps } from '../ListHeightPreservingItem.types.ts';

import { useMemo, useState } from 'react';

export const useListHeightPreservingItemData = (
  props: Pick<ListHeightPreservingItemProps, 'data-known-size'>,
): ListHeightPreservingItemData => {
  const [size, setSize] = useState(0);

  const localState: ListHeightPreservingItemData['localState'] = {
    size,
  };

  const localActions: ListHeightPreservingItemData['localActions'] = useMemo(
    () => ({
      setSize,
    }),
    [],
  );

  const formattedData: ListHeightPreservingItemData['formattedData'] = {
    knownSize: props['data-known-size'],
  };

  return {
    localState,
    localActions,
    formattedData,
  };
};
