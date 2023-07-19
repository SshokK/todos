import type { CalendarRowData } from './useCalendarRowData.types.ts';

import { useMemo, useRef } from 'react';

export const useCalendarRowData = (): CalendarRowData => {
  const childrenContainerRef: CalendarRowData['refs']['childrenContainerRef'] =
    useRef(null);

  const refs: CalendarRowData['refs'] = {
    childrenContainerRef,
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
