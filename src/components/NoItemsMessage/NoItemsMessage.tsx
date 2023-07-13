import type { FC } from 'react';
import type { NoItemsMessageProps } from './NoItemsMessage.types.ts';

import * as animations from './NoItemsMessage.animations.ts';
import * as styles from './NoItemsMessage.styles.ts';
import * as framerMotion from 'framer-motion';

import classnames from 'classnames';

import { TYPOGRAPHY_SIZE, TYPOGRAPHY_TYPE } from '../Typography';

import { Typography } from '../Typography';

export const NoItemsMessage: FC<NoItemsMessageProps> = ({
  isVisible,
  className,
  children,
}) => {
  return (
    <framerMotion.AnimatePresence initial={false}>
      {isVisible && (
        <framerMotion.motion.div
          layout
          variants={animations.VARIANTS}
          initial={animations.ANIMATION_NAME.ENTER}
          animate={animations.ANIMATION_NAME.ACTIVE}
          exit={animations.ANIMATION_NAME.EXIT}
          transition={animations.TRANSITION}
          className={classnames(
            className,
            styles.CLASSNAMES.noUpcomingTodosMessage,
          )}
        >
          <Typography type={TYPOGRAPHY_TYPE.SUBTITLE} size={TYPOGRAPHY_SIZE.SM}>
            {children}
          </Typography>
        </framerMotion.motion.div>
      )}
    </framerMotion.AnimatePresence>
  );
};

NoItemsMessage.defaultProps = {
  children: 'No items',
};
