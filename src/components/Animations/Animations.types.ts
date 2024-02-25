import type * as react from 'react';
import type * as framerMotion from 'framer-motion';

export type AnimationProps = {
  children: react.FunctionComponentElement<framerMotion.MotionProps> | null;
};
