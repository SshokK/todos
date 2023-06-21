import type { TypographyProps } from './Typography.types';

import * as react from 'react';
import * as constants from './Typography.constants';
import * as styles from './Typography.styles';

import classnames from 'classnames';

export const Typography = react.forwardRef<HTMLElement, TypographyProps>(
  ({ type, size, className, href, shouldTruncate, children }, ref) => {
    return constants.TYPOGRAPHY_ELEMENTS[
      type ?? constants.TYPOGRAPHY_TYPE.BODY
    ]({
      ref: ref,
      children: children,
      href: href,
      className: classnames(className, {
        [styles.CLASSNAMES]: true,
        [styles.SIZE_CLASSNAMES[size ?? constants.TYPOGRAPHY_SIZE.MD]]: true,
        [styles.TYPE_CLASSNAMES[type ?? constants.TYPOGRAPHY_TYPE.BODY]]: true,
        [styles.TRUNCATE_CLASSNAMES]: shouldTruncate,
      }),
    });
  },
);
