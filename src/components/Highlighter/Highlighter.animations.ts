import type { Variants } from 'framer-motion';

export enum ANIMATION_NAME {
  ENTER = 'initial',
  ACTIVE = 'animate',
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
