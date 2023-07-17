import type { CalendarColumnsAnimationHandlers } from './useCalendarColumnsAnimationHandlers.types.ts';

import { useEffect } from 'react';

export const useCalendarColumnsAnimationLifecycle = ({
  onFadeAnimate,
}: {
  onFadeAnimate: CalendarColumnsAnimationHandlers['handleFadeAnimation'];
}) => {
  useEffect(onFadeAnimate, [onFadeAnimate]);
};
