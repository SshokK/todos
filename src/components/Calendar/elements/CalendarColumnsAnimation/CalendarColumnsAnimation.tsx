import type { FC } from 'react';
import type { CalendarColumnsAnimationProps } from './CalendarColumnsAnimation.types.ts';

import { SEPARATOR_ORIENTATION } from '../../../Separator';

import * as framerMotion from 'framer-motion';
import * as animations from './CalendarColumnsAnimation.animations.ts';

import { Separator } from '../../../Separator';

export const CalendarColumnsAnimation: FC<CalendarColumnsAnimationProps> = ({
  dates,
  children,
  classNames,
}) => {
  return (
    <framerMotion.AnimatePresence initial={false} mode="wait">
      <framerMotion.LayoutGroup>
        {dates.map((date, i) => (
          <framerMotion.motion.div
            key={date.toDateString()}
            layoutId={date.toDateString()}
            className={classNames?.columnContainer}
            transition={animations.TRANSITION}
          >
            {children(date, i)}
            <Separator
              orientation={SEPARATOR_ORIENTATION.VERTICAL}
              className={classNames?.separator}
            />
          </framerMotion.motion.div>
        ))}
      </framerMotion.LayoutGroup>
    </framerMotion.AnimatePresence>
  );
};
