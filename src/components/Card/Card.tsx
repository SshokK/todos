import type { FC } from 'react';
import type { CardProps } from './Card.types.ts';

import * as styles from './Card.styles.ts';
import * as twMerge from 'tailwind-merge';
import * as framerMotion from 'framer-motion';

import classnames from 'classnames';

export const Card: FC<CardProps> = ({
  children,
  className,
  isClickable,
  ...props
}) => {
  return (
    <framerMotion.motion.div
      className={twMerge.twMerge(
        classnames({
          [styles.CLASSNAMES.container]: true,
          [styles.CLASSNAMES.isClickable]: isClickable,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </framerMotion.motion.div>
  );
};
