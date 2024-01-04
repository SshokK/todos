import { HighlighterContext } from '../HighlighterContext';

import { useContext, useEffect } from 'react';
import { usePreviousValue } from '../../../utils';

export const useHighlighter = ({
  onHighlightStart,
  onHighlightEnd,
}: {
  onHighlightStart?: () => void;
  onHighlightEnd?: () => void;
} = {}) => {
  const highlighter = useContext(HighlighterContext);

  const prevHighligher = usePreviousValue(highlighter);

  useEffect(() => {
    if (prevHighligher.element !== highlighter.element) {
      if (!highlighter.element) {
        onHighlightEnd?.();
      } else {
        onHighlightStart?.();
      }
    }
  }, [
    highlighter.element,
    onHighlightEnd,
    onHighlightStart,
    prevHighligher.element,
  ]);

  return highlighter;
};
