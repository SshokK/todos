import type { AnimationDefinition } from 'framer-motion';

export const FADE_IN: AnimationDefinition = {
  opacity: [0, 1],
  transition: {
    duration: 0.8,
  },
};
