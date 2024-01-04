import type { CalendarRowData } from './useCalendarRowData.types.ts';
import type { ForwardedRef } from 'react';

import { useMemo, useRef } from 'react';
import { useCombinedRefs } from 'utils';

export const useCalendarRowData = (
  forwardedRef: ForwardedRef<HTMLDivElement>,
): CalendarRowData => {
  const containerRef: CalendarRowData['refs']['containerRef'] = useRef(null);

  const childrenContainerRef: CalendarRowData['refs']['childrenContainerRef'] =
    useRef(null);

  const finalContainerRef = useCombinedRefs(containerRef, forwardedRef);

  const refs: CalendarRowData['refs'] = {
    containerRef: finalContainerRef,
    childrenContainerRef: childrenContainerRef,
  };

  const elementClientX =
    childrenContainerRef.current?.getBoundingClientRect().left ?? 0;
  const elementClientY =
    childrenContainerRef.current?.getBoundingClientRect().top ?? 0;

  const formattedData: CalendarRowData['formattedData'] = useMemo(() => {
    return {
      elementClientX,
      elementClientY,
    };
  }, [elementClientX, elementClientY]);

  return {
    refs,
    formattedData,
  };
};
