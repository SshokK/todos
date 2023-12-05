import type { Transition, Variants } from 'framer-motion';

export const TRANSITION: Transition = {
  duration: 1,
};

export enum ANIMATION_NAME {
  INITIAL = 'initial',
  ACTIVE = 'active',
  EXIT = 'exit',
}

export const VARIANTS: Variants = {
  [ANIMATION_NAME.ACTIVE]: (isHidden: boolean) =>
    isHidden ? { opacity: 0.4 } : { opacity: 1 },
};
