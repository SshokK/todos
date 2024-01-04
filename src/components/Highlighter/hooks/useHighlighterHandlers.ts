import type { HighlighterProps } from '../Highlighter.types.ts';
import type { HighlighterData } from './useHighlighterData.types.ts';
import type { HighlighterHandlers } from './useHighlighterHandlers.types.ts';

import { useCallback } from 'react';
import { getElementDimensions } from './useHighlighterHandlers.helpers.ts';

export const useHighlighterHandlers = ({
  props,
  refs,
}: {
  props: Pick<HighlighterProps, 'element'>;
  refs: HighlighterData['refs'];
}): HighlighterHandlers => {
  const handleElementChange: HighlighterHandlers['handleElementChange'] =
    useCallback(() => {
      if (props.element && refs.container.current) {
        const clonedElement = props.element.cloneNode(true) as HTMLElement;

        refs.clonedElement.current = clonedElement;

        const resizeObserver = new ResizeObserver(() => {
          const elementDimensions = getElementDimensions(props.element);

          clonedElement.style.pointerEvents = 'none';
          clonedElement.style.position = `absolute`;
          clonedElement.style.width = `${elementDimensions.width}px`;
          clonedElement.style.height = `${elementDimensions.height}px`;
          clonedElement.style.left = `${elementDimensions.left}px`;
          clonedElement.style.top = `${elementDimensions.top}px`;
        });

        resizeObserver.observe(props.element);

        refs.container.current?.appendChild?.(clonedElement);

        return () => resizeObserver.disconnect();
      }
    }, [props.element, refs.clonedElement, refs.container]);

  return {
    handleElementChange,
  };
};
