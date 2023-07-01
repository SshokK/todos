import type { Transition, Variants } from 'framer-motion';

import * as constants from './AppNavbar.constants.ts';

export const VARIANTS: Variants = {
  [constants.ANIMATION_NAME.ENTER]: {
    opacity: 0,
  },
  [constants.ANIMATION_NAME.ACTIVE]: {
    opacity: 1,
  },
  [constants.ANIMATION_NAME.EXIT]: {
    opacity: 0,
  },
};

export const TRANSITION: Transition = {
  duration: 0.2,
};
