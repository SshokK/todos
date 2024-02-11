import type { Variants } from 'framer-motion';

export enum ANIMATION_NAME {
  INITIAL = 'initial',
  ANIMATE = 'animate',
  EXIT = 'exit',
}

export const VARIANTS: Variants = {
  [ANIMATION_NAME.INITIAL]: { opacity: 0, height: 0 },
  [ANIMATION_NAME.ANIMATE]: { opacity: 1, height: '2.5rem' },
  [ANIMATION_NAME.EXIT]: { opacity: 0, height: 0 },
};
