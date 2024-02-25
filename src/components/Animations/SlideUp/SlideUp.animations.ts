import type * as framerMotion from 'framer-motion';

export enum ANIMATION_NAME {
  ENTER = 'enter',
  ACTIVE = 'active',
  EXIT = 'exit',
  WHILE_IN_VIEW = 'whileInView',
}

export const VARIANTS: framerMotion.Variants = {
  [ANIMATION_NAME.ENTER]: () => {
    return {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2,
      },
    };
  },
  [ANIMATION_NAME.ACTIVE]: () => {
    return {
      opacity: 1,
      y: [50, 10, 0],
      transition: {
        duration: 0.4,
      },
    };
  },
  [ANIMATION_NAME.EXIT]: () => {
    return {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    };
  },
  [ANIMATION_NAME.WHILE_IN_VIEW]: () => {
    return {
      opacity: 1,
      transition: {
        duration: 1,
      },
    };
  },
};
