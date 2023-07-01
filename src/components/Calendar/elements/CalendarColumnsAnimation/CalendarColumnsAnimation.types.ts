import type { ReactNode } from 'react';

import type * as constants from './CalendarColumnsAnimation.constants.ts';

export type CalendarColumnsAnimationProps = {
  animationTriggerKey: string;
  direction: constants.ANIMATION_DIRECTION;
  children: ReactNode;
  className?: string;
};
