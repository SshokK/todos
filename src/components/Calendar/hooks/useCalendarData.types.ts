import type { Dispatch, SetStateAction } from 'react';

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
  localState: CalendarLocalState;
  localActions: CalendarLocalActions;
  formattedData: CalendarFormattedData;
};
