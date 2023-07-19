import type { Dispatch, SetStateAction } from 'react';

export type ListHeightPreservingItemLocalState = {
  size: number;
};

export type ListHeightPreservingItemLocalActions = {
  setSize: Dispatch<SetStateAction<ListHeightPreservingItemLocalState['size']>>;
};

export type ListHeightPreservingItemFormattedData = {
  knownSize: number;
};

export type ListHeightPreservingItemData = {
  localState: ListHeightPreservingItemLocalState;
  localActions: ListHeightPreservingItemLocalActions;
  formattedData: ListHeightPreservingItemFormattedData;
};
