import type { Variants, Transition } from 'framer-motion';

export enum ANIMATION_NAME {
  OPEN = 'open',
  CLOSED = 'closed',
}

export const INITIAL = {
  opacity: 0,
  x: '100%',
  width: 0,
};

export const VARIANTS: Variants = {
  [ANIMATION_NAME.OPEN]: {
    opacity: 1,
    x: 0,
    width: '30rem',
  },
  [ANIMATION_NAME.CLOSED]: INITIAL,
};

export const TRANSITION: Transition = {
  duration: 0.2,
};
