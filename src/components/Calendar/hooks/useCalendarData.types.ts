import type { Dispatch, SetStateAction } from 'react';

import type * as elements from '../elements';

export type CalendarLocalState = {
  firstColumnDate: Date;
  animationDirection: elements.ANIMATION_DIRECTION;
};

export type CalendarLocalActions = {
  setFirstColumnDate: Dispatch<
    SetStateAction<CalendarLocalState['firstColumnDate']>
  >;

  setAnimationDirection: Dispatch<
    SetStateAction<CalendarLocalState['animationDirection']>
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
