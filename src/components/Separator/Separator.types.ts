import type * as react from 'react';
import type * as framerMotion from 'framer-motion';
import type * as constants from './Separator.constants';

export type SeparatorProps = framerMotion.HTMLMotionProps<'div'> & {
  orientation?: constants.SEPARATOR_ORIENTATION;
  className?: string;
  children?: react.ReactNode;
};
