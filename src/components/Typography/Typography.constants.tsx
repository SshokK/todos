import type * as react from 'react';

import * as framerMotion from 'framer-motion';

export enum TYPOGRAPHY_SIZE {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = '2xl',
}

export enum TYPOGRAPHY_TYPE {
  TITLE_1 = 'title1',
  TITLE_2 = 'title2',
  SUBTITLE = 'subtitle',
  CAPTION = 'caption',
  BODY = 'body',
  LINK = 'link',
}

export enum TYPOGRAPHY_TEXT_ALIGNMENT {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export const TYPOGRAPHY_ELEMENTS: Record<TYPOGRAPHY_TYPE, react.FC> = {
  [TYPOGRAPHY_TYPE.TITLE_1]: (props: framerMotion.HTMLMotionProps<'h1'>) => (
    <framerMotion.motion.h1 {...props} />
  ),
  [TYPOGRAPHY_TYPE.TITLE_2]: (props: framerMotion.HTMLMotionProps<'h2'>) => (
    <framerMotion.motion.h2 {...props} />
  ),
  [TYPOGRAPHY_TYPE.SUBTITLE]: (props: framerMotion.HTMLMotionProps<'h4'>) => (
    <framerMotion.motion.h4 {...props} />
  ),
  [TYPOGRAPHY_TYPE.BODY]: (props: framerMotion.HTMLMotionProps<'p'>) => (
    <framerMotion.motion.p {...props} />
  ),
  [TYPOGRAPHY_TYPE.CAPTION]: (props: framerMotion.HTMLMotionProps<'span'>) => (
    <framerMotion.motion.span {...props} />
  ),
  [TYPOGRAPHY_TYPE.LINK]: (props: framerMotion.HTMLMotionProps<'a'>) => (
    <framerMotion.motion.a target="_blank" rel="noopener" {...props} />
  ),
};
