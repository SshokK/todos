import type { FadeInProps } from './FadeIn.types.ts';

import * as react from 'react';

import * as framerMotion from 'framer-motion';
import * as animations from './FadeIn.animations.ts';

export const FadeIn: react.FC<FadeInProps> = ({ children }) => {
  if (!children) {
    return null;
  }

  return react.cloneElement<framerMotion.MotionProps>(children, {
    initial: animations.ANIMATION_NAME.ENTER,
    animate: animations.ANIMATION_NAME.ACTIVE,
    exit: animations.ANIMATION_NAME.EXIT,
    whileInView: animations.ANIMATION_NAME.WHILE_IN_VIEW,
    variants: animations.VARIANTS,
  });
};
