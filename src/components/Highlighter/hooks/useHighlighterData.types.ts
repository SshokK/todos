import type { MutableRefObject } from 'react';

export type HighlighterRefs = {
  container: MutableRefObject<HTMLDivElement | null>;
  clonedElement: MutableRefObject<HTMLElement | null>;
};

export type HighlighterData = {
  refs: HighlighterRefs;
};
