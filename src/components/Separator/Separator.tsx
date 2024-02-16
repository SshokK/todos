import type { SeparatorProps } from './Separator.types';

import * as react from 'react';
import * as reactSeparator from '@radix-ui/react-separator';
import * as styles from './Separator.styles';
import * as constants from './Separator.constants';
import * as framerMotions from 'framer-motion';
import * as twMerge from 'tailwind-merge';

import classnames from 'classnames';

import {
  TYPOGRAPHY_SIZE,
  TYPOGRAPHY_TEXT_ALIGNMENT,
  TYPOGRAPHY_TYPE,
} from '../Typography';

import { Typography } from '../Typography';

export const Separator = react.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation, className, children, ...props }, ref) => {
    return (
      <framerMotions.motion.div
        ref={ref}
        className={twMerge.twMerge(
          classnames(styles.CLASSNAMES.container, className),
        )}
        {...props}
      >
        <reactSeparator.Root
          orientation={orientation}
          className={classnames(
            styles.CLASSNAMES.separator,
            styles.ORIENTATION_CLASSNAMES[
              orientation ?? constants.SEPARATOR_ORIENTATION.HORIZONTAL
            ],
          )}
        />
        {children && (
          <>
            <Typography
              size={TYPOGRAPHY_SIZE.XS}
              type={TYPOGRAPHY_TYPE.CAPTION}
              textAlignment={TYPOGRAPHY_TEXT_ALIGNMENT.CENTER}
              className={styles.CLASSNAMES.text}
              noBreak
            >
              {children}
            </Typography>
            <reactSeparator.Root
              ref={ref}
              orientation={orientation}
              className={classnames(
                styles.CLASSNAMES.separator,
                styles.ORIENTATION_CLASSNAMES[
                  orientation ?? constants.SEPARATOR_ORIENTATION.HORIZONTAL
                ],
              )}
            />
          </>
        )}
      </framerMotions.motion.div>
    );
  },
);
