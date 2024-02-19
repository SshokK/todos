import type { SkeletonProps } from './Skeleton.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as styles from './Skeleton.styles.ts';
import * as twMerge from 'tailwind-merge';

import classnames from 'classnames';

export const Skeleton = react.forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    return (
      <framerMotion.motion.div
        ref={ref}
        {...props}
        className={twMerge.twMerge(
          classnames(styles.CLASSNAMES.container, props.className),
        )}
      />
    );
  },
);
