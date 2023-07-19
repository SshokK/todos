import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

export type CardProps = HTMLMotionProps<'div'> & {
  children?: ReactNode;
  isClickable?: boolean;
};
