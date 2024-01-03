import type { CalendarColumnsAnimationProps } from '../CalendarColumnsAnimation.types.ts';
import type { CalendarColumnsAnimationData } from './useCalendarColumnsAnimationData.types.ts';
import type { CalendarColumnsAnimationHandlers } from './useCalendarColumnsAnimationHandlers.types.ts';

import * as utils from 'utils';
import * as dateConstants from '../../../../../constants/date.constants.ts';
import * as animations from '../CalendarColumnsAnimation.animations.ts';

import { useCallback } from 'react';
import { useAnimationControls } from 'framer-motion';

export const useCalendarColumnsAnimationHandlers = ({
  props,
  formattedData,
  animation,
}: {
  props: Pick<
    CalendarColumnsAnimationProps,
    'dates' | 'shouldUseOnlyFadeAnimation'
  >;
  formattedData: CalendarColumnsAnimationData['formattedData'];
  animation: ReturnType<typeof useAnimationControls>;
}): CalendarColumnsAnimationHandlers => {
  const handleFadeAnimation: CalendarColumnsAnimationHandlers['handleFadeAnimation'] =
    useCallback(() => {
      const isFadeEnabled =
        Math.abs(
          utils.getDiff({
            dateA: props.dates[0],
            dateB: formattedData.prevDates[0],
            granularity: dateConstants.DATE_GRANULARITY.DAY,
          }),
        ) > 1 || props.shouldUseOnlyFadeAnimation;

      if (isFadeEnabled) {
        animation.start(animations.FADE_IN);
      }
    }, [
      props.dates,
      props.shouldUseOnlyFadeAnimation,
      formattedData.prevDates,
      animation,
    ]);

  return {
    handleFadeAnimation,
  };
};
