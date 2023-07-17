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
    };
  },
  [ANIMATION_NAME.ACTIVE]: ({
    index,
    isFadeEnabled,
  }: {
    index: number;
    isFadeEnabled: boolean;
  }) => {
    if (isFadeEnabled) {
      return {
        x: `${index * 100}%`,
        opacity: 1,
        transition: {
          x: {
            duration: 0,
          },
        },
      };
    }

    return {
      x: `${index * 100}%`,
      opacity: index === 4 ? 0 : 1,
    };
  },
  [ANIMATION_NAME.EXIT]: () => {
    return {
      opacity: 0,
    };
  },
};
