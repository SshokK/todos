import type { CardProps } from './Card.types.ts';

import * as react from 'react';
import * as styles from './Card.styles.ts';
import * as twMerge from 'tailwind-merge';
import * as framerMotion from 'framer-motion';

import classnames from 'classnames';

export const Card = react.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, isClickable, ...props }, ref) => {
    return (
      <framerMotion.motion.div
        ref={ref}
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
  },
);
