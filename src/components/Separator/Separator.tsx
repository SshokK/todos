import type { SeparatorProps } from './Separator.types';

import * as react from 'react';
import * as reactSeparator from '@radix-ui/react-separator';
import * as styles from './Separator.styles';
import * as constants from './Separator.constants';

import classnames from 'classnames';

import { TYPOGRAPHY_SIZE, TYPOGRAPHY_TYPE } from '../Typography';

import { Typography } from '../Typography';

export const Separator = react.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ orientation, className, children }, ref) => {
    return (
      <div className={classnames(className, styles.CLASSNAMES.container)}>
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
        {children && (
          <>
            <Typography
              size={TYPOGRAPHY_SIZE.XS}
              type={TYPOGRAPHY_TYPE.CAPTION}
              className={styles.CLASSNAMES.text}
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
      </div>
    );
  },
);
