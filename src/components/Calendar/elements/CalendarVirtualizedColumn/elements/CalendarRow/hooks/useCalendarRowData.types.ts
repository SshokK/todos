import type { MutableRefObject } from 'react';

export type CalendarRowRefs = {
  childrenContainerRef: MutableRefObject<HTMLDivElement | null>;
};

export type CalendarRowFormattedData = {
  elementClientX: number;
  elementClientY: number;
};

export type CalendarRowData = {
  refs: CalendarRowRefs;
  formattedData: CalendarRowFormattedData;
};
