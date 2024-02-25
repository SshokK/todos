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
    };
  },
  [ANIMATION_NAME.ACTIVE]: () => {
    return {
      opacity: 1,
    };
  },
  [ANIMATION_NAME.EXIT]: () => {
    return {
      opacity: 0,
    };
  },
  [ANIMATION_NAME.WHILE_IN_VIEW]: () => {
    return {
      opacity: 1,
    };
  },
};
