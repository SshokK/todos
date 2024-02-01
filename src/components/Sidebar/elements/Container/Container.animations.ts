import type { Variants, Transition } from 'framer-motion';

export enum ANIMATION_NAME {
  INITIAL = 'initial',
  ACTIVE = 'active',
  EXIT = 'exit',
}

export const VARIANTS: Variants = {
  [ANIMATION_NAME.INITIAL]: {
    opacity: 0,
  },
  [ANIMATION_NAME.ACTIVE]: {
    opacity: 1,
  },
  [ANIMATION_NAME.EXIT]: {
    opacity: 0,
  },
};

export const TRANSITION: Transition = {
  duration: 0.2,
};
