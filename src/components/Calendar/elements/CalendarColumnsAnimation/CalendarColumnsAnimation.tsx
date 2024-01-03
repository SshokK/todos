import type { FC } from 'react';
import type { CalendarColumnsAnimationProps } from './CalendarColumnsAnimation.types.ts';

import * as elements from './elements';
import * as framerMotion from 'framer-motion';

import { useAnimationControls } from 'framer-motion';
import {
  useCalendarColumnsAnimationData,
  useCalendarColumnsAnimationHandlers,
  useCalendarColumnsAnimationLifecycle,
} from './hooks';

export const CalendarColumnsAnimation: FC<CalendarColumnsAnimationProps> = ({
  dates,
  shouldUseOnlyFadeAnimation,
  children,
}) => {
  const { formattedData } = useCalendarColumnsAnimationData({
    dates,
    shouldUseOnlyFadeAnimation,
  });

  const animation = useAnimationControls();

  const handlers = useCalendarColumnsAnimationHandlers({
    props: {
      dates,
      shouldUseOnlyFadeAnimation,
    },
    animation,
    formattedData,
  });

  useCalendarColumnsAnimationLifecycle({
    onFadeAnimate: handlers.handleFadeAnimation,
  });

  return (
    <framerMotion.motion.div animate={animation}>
      <framerMotion.AnimatePresence initial={false}>
        {dates.map((date, i, dates) => (
          <elements.CalendarAnimatedColumn
            key={`${date.toDateString()}`}
            index={i}
            isFadeEnabled={formattedData.isFadeEnabled}
          >
            {children(date, i, dates)}
          </elements.CalendarAnimatedColumn>
        ))}
      </framerMotion.AnimatePresence>
    </framerMotion.motion.div>
  );
};
