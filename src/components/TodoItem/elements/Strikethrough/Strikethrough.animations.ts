import type { Variants } from 'framer-motion';

export enum ANIMATION_NAME {
  INITIAL = 'initial',
  ACTIVE = 'done',
  EXIT = 'exit',
}

export const VARIANTS: Variants = {
  [ANIMATION_NAME.INITIAL]: {
    width: 0,
  },
  [ANIMATION_NAME.ACTIVE]: {
    width: 'calc(100% + 0.6rem)',
  },
  [ANIMATION_NAME.EXIT]: {
    width: 0,
  },
};
