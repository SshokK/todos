import type * as constants from './Typography.constants';
import type * as react from 'react';

export type TypographyProps = {
  type: constants.TYPOGRAPHY_TYPE;
  size?: constants.TYPOGRAPHY_SIZE;
  textAlignment?: constants.TYPOGRAPHY_TEXT_ALIGNMENT;
  children?: react.ReactNode;
  href?: string;
  className?: string;
  shouldTruncate?: boolean;
};
