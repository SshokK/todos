import type { Transition, Variants } from 'framer-motion';

export enum ANIMATION_NAME {
  ENTER = 'enter',
  ACTIVE = 'active',
  EXIT = 'exit',
}

export const TRANSITION: Transition = {
  x: { type: 'just', duration: 0.3 },
  opacity: { duration: 0.2 },
};

export const VARIANTS: Variants = {
  [ANIMATION_NAME.ENTER]: () => {
    return {
      opacity: 0,
      scale: 1,
    };
  },
  [ANIMATION_NAME.ACTIVE]: ({
    i,
    isFadeEnabled,
    isInPrevDatesList,
  }: {
    i: number;
    isFadeEnabled: boolean;
    isInPrevDatesList: boolean;
  }) => {
    if (isFadeEnabled) {
      return {
        x: `${i * 100}%`,
        opacity: isInPrevDatesList ? [0, 1] : 1,
        scale: [0.8, 1, 1],
        transition: {
          x: {
            duration: 0,
          },
          scale: {
            duration: 0.5,
          },
          opacity: {
            duration: 0.5,
          },
        },
      };
    }

    return {
      x: `${i * 100}%`,
      opacity: i === 4 ? 0 : 1,
    };
  },
  [ANIMATION_NAME.EXIT]: () => {
    return {
      opacity: 0,
      scale: 1,
    };
  },
};
