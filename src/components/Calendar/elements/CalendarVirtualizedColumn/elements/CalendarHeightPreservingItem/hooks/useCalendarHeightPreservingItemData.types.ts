import type { Dispatch, SetStateAction } from 'react';

export type CalendarHeightPreservingItemLocalState = {
  size: number;
};

export type CalendarHeightPreservingItemLocalActions = {
  setSize: Dispatch<
    SetStateAction<CalendarHeightPreservingItemLocalState['size']>
  >;
};

export type CalendarHeightPreservingItemFormattedData = {
  knownSize: number;
};

export type CalendarHeightPreservingItemData = {
  localState: CalendarHeightPreservingItemLocalState;
  localActions: CalendarHeightPreservingItemLocalActions;
  formattedData: CalendarHeightPreservingItemFormattedData;
};
