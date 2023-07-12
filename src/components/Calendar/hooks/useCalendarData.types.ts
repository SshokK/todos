import type { Dispatch, SetStateAction } from 'react';

export type CalendarLocalState = {
  firstColumnDate: Date;
  isDragging: boolean;
};

export type CalendarLocalActions = {
  setFirstColumnDate: Dispatch<
    SetStateAction<CalendarLocalState['firstColumnDate']>
  >;
  setIsDragging: Dispatch<SetStateAction<CalendarLocalState['isDragging']>>;
};

export type CalendarFormattedData = {
  centralVisibleColumnDate: Date;
  dates: Date[];
};

export type CalendarData = {
  localState: CalendarLocalState;
  localActions: CalendarLocalActions;
  formattedData: CalendarFormattedData;
};
