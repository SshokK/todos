import type * as constants from './Typography.constants';
import type * as react from 'react';
import type * as framerMotion from 'framer-motion';

export type TypographyProps = framerMotion.MotionProps & {
  type: constants.TYPOGRAPHY_TYPE;
  size?: constants.TYPOGRAPHY_SIZE;
  textAlignment?: constants.TYPOGRAPHY_TEXT_ALIGNMENT;
  noBreak?: boolean;
  children?: react.ReactNode;
  href?: string;
  className?: string;
  shouldTruncate?: boolean;
};
