import type { Variants } from 'framer-motion';

export enum ANIMATION_NAME {
  ENTER = 'initial',
  ACTIVE = 'animate',
  EXIT = 'exit',
}

export const VARIANTS: Variants = {
  [ANIMATION_NAME.ENTER]: {
    x: 30,
    opacity: 0,
  },
  [ANIMATION_NAME.ACTIVE]: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  [ANIMATION_NAME.EXIT]: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
