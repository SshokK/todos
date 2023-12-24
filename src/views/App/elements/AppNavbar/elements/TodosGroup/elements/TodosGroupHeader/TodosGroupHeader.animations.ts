import type { Transition, Variants } from 'framer-motion';

export enum ANIMATION_NAME {
  ENTER = 'enter',
  ACTIVE = 'active',
  EXIT = 'exit',
}

export const VARIANTS: Variants = {
  [ANIMATION_NAME.ENTER]: {
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
