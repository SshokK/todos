import type { HighlighterHandlers } from './useHighlighterHandlers.types.ts';

import { useEffect } from 'react';

export const useHighlighterLifecycle = ({
  onElementChange,
}: {
  onElementChange: HighlighterHandlers['handleElementChange'];
}) => {
  useEffect(onElementChange, [onElementChange]);
};
