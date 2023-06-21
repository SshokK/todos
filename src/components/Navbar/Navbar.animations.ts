import type { Variants, Transition } from 'framer-motion';

import * as constants from './Navbar.constants.ts';

export const INITIAL = {
  opacity: 0,
  x: '-100%',
  width: 0,
};

export const VARIANTS: Variants = {
  [constants.ANIMATION_NAME.OPEN]: {
    opacity: 1,
    x: 0,
    width: '30rem',
  },
  [constants.ANIMATION_NAME.CLOSED]: INITIAL,
};

export const TRANSITION: Transition = {
  duration: 0.2,
};
