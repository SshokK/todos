import type { MutableRefObject } from 'react';

export type CalendarItemContentRefs = {
  childrenContainerRef: MutableRefObject<HTMLDivElement | null>;
};

export type CalendarItemContentFormattedData = {
  elementClientX: number;
  elementClientY: number;
};

export type CalendarItemContentData = {
  refs: CalendarItemContentRefs;
  formattedData: CalendarItemContentFormattedData;
};
