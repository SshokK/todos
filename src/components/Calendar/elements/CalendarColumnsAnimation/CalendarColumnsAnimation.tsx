import type { FC } from 'react';
import type { CalendarColumnsAnimationProps } from './CalendarColumnsAnimation.types.ts';

import * as framerMotion from 'framer-motion';
import * as elements from './elements';

import { useCalendarColumnsAnimationData } from './hooks';

export const CalendarColumnsAnimation: FC<CalendarColumnsAnimationProps> = ({
  dates,
  children,
}) => {
  const { formattedData } = useCalendarColumnsAnimationData({
    dates,
  });

  return (
    <framerMotion.AnimatePresence initial={false}>
      {dates.map((date, i, dates) => (
        <elements.CalendarAnimatedColumn
          key={date.toDateString()}
          prevDates={formattedData.prevDates}
          date={date}
          index={i}
          isFadeEnabled={formattedData.isFadeEnabled}
        >
          {children(date, i, dates)}
        </elements.CalendarAnimatedColumn>
      ))}
    </framerMotion.AnimatePresence>
  );
};
