import type { HighlighterContextProviderHandlers } from './useHighlighterContextProviderHandlers.types.ts';

import { useEffect } from 'react';

export const useHighlighterContextProviderLifecycle = ({
  onElementChange,
}: {
  onElementChange: HighlighterContextProviderHandlers['handleElementChange'];
}) => {
  useEffect(onElementChange, [onElementChange]);
};
