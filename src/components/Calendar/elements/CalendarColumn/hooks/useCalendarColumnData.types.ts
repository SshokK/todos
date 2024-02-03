import type { Dispatch, SetStateAction } from 'react';

import type * as elements from '../elements';

export type CalendarColumnLocalState = {
  items: elements.CalendarItem[];
  offset: number;
};

export type CalendarColumnLocalActions = {
  setItems: Dispatch<SetStateAction<CalendarColumnLocalState['items']>>;
  setOffset: Dispatch<SetStateAction<CalendarColumnLocalState['offset']>>;
};

export type CalendarColumnFormattedData = {
  items: elements.CalendarItem[];
};

export type CalendarColumnData = {
  localState: CalendarColumnLocalState;
  localActions: CalendarColumnLocalActions;
  formattedData: CalendarColumnFormattedData;
};
