import type { HighlighterData } from './useHighlighterData.types.ts';

import { useRef } from 'react';

export const useHighlighterData = (): HighlighterData => {
  const containerRef: HighlighterData['refs']['container'] = useRef(null);
  const clonedElementRef: HighlighterData['refs']['clonedElement'] =
    useRef(null);

  const refs: HighlighterData['refs'] = {
    container: containerRef,
    clonedElement: clonedElementRef,
  };

  return {
    refs,
  };
};
