import type { NoItemsMessageProps } from './NoItemsMessage.types.ts';

import * as react from 'react';
import * as styles from './NoItemsMessage.styles.ts';
import * as framerMotion from 'framer-motion';
import * as utils from 'utils';

import {
  TYPOGRAPHY_SIZE,
  TYPOGRAPHY_TEXT_ALIGNMENT,
  TYPOGRAPHY_TYPE,
} from '../Typography';

import { Typography } from '../Typography';
import { FadeIn } from '../Animations';

export const NoItemsMessage = react.forwardRef<
  HTMLDivElement,
  NoItemsMessageProps
>(({ isVisible, classNames, message, children }, ref) => {
  return (
    <div
      ref={ref}
      className={utils.cn(styles.CLASSNAMES.container, classNames?.container)}
    >
      <framerMotion.AnimatePresence initial={false}>
        {isVisible && (
          <FadeIn>
            <Typography
              type={TYPOGRAPHY_TYPE.SUBTITLE}
              size={TYPOGRAPHY_SIZE.SM}
              textAlignment={TYPOGRAPHY_TEXT_ALIGNMENT.CENTER}
              shouldTruncate
              className={utils.cn(
                styles.CLASSNAMES.noUpcomingTodosMessage,
                classNames?.container,
              )}
            >
              {message}
            </Typography>
          </FadeIn>
        )}
      </framerMotion.AnimatePresence>
      {children}
    </div>
  );
});

NoItemsMessage.defaultProps = {
  message: 'No data',
};
