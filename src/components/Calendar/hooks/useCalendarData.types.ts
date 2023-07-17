import type { Dispatch, MutableRefObject, SetStateAction } from 'react';

export type CalendarRefs = {
  container: MutableRefObject<HTMLElement | null>;
};

export type CalendarLocalState = {
  date: Date;
  isDragging: boolean;
};

export type CalendarLocalActions = {
  setDate: Dispatch<SetStateAction<CalendarLocalState['date']>>;
  setIsDragging: Dispatch<SetStateAction<CalendarLocalState['isDragging']>>;
};

export type CalendarFormattedData = {
  dates: Date[];
};

export type CalendarData = {
  refs: CalendarRefs;
  localState: CalendarLocalState;
  localActions: CalendarLocalActions;
  formattedData: CalendarFormattedData;
};
