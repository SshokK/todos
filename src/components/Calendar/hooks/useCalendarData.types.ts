import type { Dispatch, SetStateAction } from 'react';

export type CalendarLocalState = {
  firstColumnDate: Date;
};

export type CalendarLocalActions = {
  setFirstColumnDate: Dispatch<
    SetStateAction<CalendarLocalState['firstColumnDate']>
  >;
};

export type CalendarFormattedData = {
  dates: Date[];
};

export type CalendarData = {
  localState: CalendarLocalState;
  localActions: CalendarLocalActions;
  formattedData: CalendarFormattedData;
};
