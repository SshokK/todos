import type { Variants } from 'framer-motion';

export enum ANIMATION_NAME {
  ENTER = 'enter',
  ACTIVE = 'active',
  EXIT = 'exit',
}

export const VARIANTS: Variants = {
  [ANIMATION_NAME.ENTER]: () => {
    return {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2,
      },
    };
  },
  [ANIMATION_NAME.ACTIVE]: () => ({
    opacity: 1,

    y: [50, 10, 0],
    transition: {
      duration: 0.4,
    },
  }),
  [ANIMATION_NAME.EXIT]: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};
