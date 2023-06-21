import type { Transition } from 'framer-motion';

import * as constants from './Calendar.constants.ts';

export const VARIANTS = {
  [constants.ANIMATION_NAME.ENTER]: (
    direction: constants.ANIMATION_DIRECTION,
  ) => ({
    x: direction === constants.ANIMATION_DIRECTION.LEFT ? '-100%' : '100%',
  }),
  [constants.ANIMATION_NAME.ACTIVE]: {
    x: 0,
  },
  [constants.ANIMATION_NAME.EXIT]: (
    direction: constants.ANIMATION_DIRECTION,
  ) => ({
    x: direction === constants.ANIMATION_DIRECTION.LEFT ? '100%' : '-100%',
  }),
};

export const TRANSITION: Transition = {
  duration: 0.4,
  ease: 'easeOut',
};
