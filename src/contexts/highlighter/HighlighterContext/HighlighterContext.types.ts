import type { Dispatch, SetStateAction } from 'react';

export type HighlighterState = {
  element: HTMLElement | null;
  setElement: Dispatch<SetStateAction<HighlighterState['element']>>;
};
