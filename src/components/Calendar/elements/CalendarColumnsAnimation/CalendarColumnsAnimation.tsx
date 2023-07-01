import type { FC } from 'react';
import type { CalendarColumnsAnimationProps } from './CalendarColumnsAnimation.types.ts';

import * as animations from './CalendarColumnsAnimation.animations.ts';
import * as constants from './CalendarColumnsAnimation.constants.ts';
import * as framerMotion from 'framer-motion';

export const CalendarColumnsAnimation: FC<CalendarColumnsAnimationProps> = ({
  animationTriggerKey,
  direction,
  className,
  children,
}) => {
  return (
    <framerMotion.AnimatePresence initial={false} custom={direction}>
      <framerMotion.motion.div
        key={animationTriggerKey}
        variants={animations.VARIANTS}
        initial={constants.ANIMATION_NAME.ENTER}
        animate={constants.ANIMATION_NAME.ACTIVE}
        exit={constants.ANIMATION_NAME.EXIT}
        transition={animations.TRANSITION}
        custom={direction}
        className={className}
      >
        {children}
      </framerMotion.motion.div>
    </framerMotion.AnimatePresence>
  );
};
