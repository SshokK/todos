import type * as framerMotion from 'framer-motion';

export type SkeletonProps = framerMotion.HTMLMotionProps<'div'> & {
  classNames?: string;
};
