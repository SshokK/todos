import type { CalendarItemContentData } from './useCalendarItemContentData.types.ts';

import { useMemo, useRef } from 'react';

export const useCalendarItemContentData = (): CalendarItemContentData => {
  const childrenContainerRef: CalendarItemContentData['refs']['childrenContainerRef'] =
    useRef(null);

  const refs: CalendarItemContentData['refs'] = {
    childrenContainerRef,
  };

  const elementClientX =
    childrenContainerRef.current?.getBoundingClientRect().left ?? 0;
  const elementClientY =
    childrenContainerRef.current?.getBoundingClientRect().top ?? 0;

  const formattedData: CalendarItemContentData['formattedData'] =
    useMemo(() => {
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
