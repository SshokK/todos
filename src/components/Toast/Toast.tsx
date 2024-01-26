import type { ToastProps } from './Toast.types.ts';

import * as react from 'react';
import * as reactToast from '@radix-ui/react-toast';
import * as styles from './Toast.styles.ts';
import * as constants from './Toast.constants.ts';
import * as framerMotion from 'framer-motion';
import * as animations from './Toast.animations.ts';

import { ICON_BUTTON_SIZE } from '../IconButton';
import { TYPOGRAPHY_SIZE, TYPOGRAPHY_TYPE } from '../Typography';

import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { IconClose } from '../Icons';

import classnames from 'classnames';

export const Toast = react.forwardRef<HTMLLIElement, ToastProps>(
  ({ type, isOpen, title, description, duration, onOpenChange }, ref) => {
    return (
      <reactToast.Root
        ref={ref}
        forceMount
        open={isOpen}
        onOpenChange={onOpenChange}
        duration={duration}
        className={styles.CLASSNAMES.container}
      >
        <framerMotion.AnimatePresence>
          {isOpen && (
            <framerMotion.motion.div
              variants={animations.VARIANTS}
              initial={animations.ANIMATION_NAME.ENTER}
              animate={animations.ANIMATION_NAME.ACTIVE}
              exit={animations.ANIMATION_NAME.EXIT}
              className={classnames({
                [styles.CLASSNAMES.innerContainer]: true,
                [styles.CLASSNAMES.innerContainerType[
                  type ?? constants.TOAST_TYPE.NEUTRAL
                ]]: true,
              })}
            >
              <div className={styles.CLASSNAMES.contentAligner}>
                <div className={styles.CLASSNAMES.textContainer}>
                  <reactToast.Title>
                    <Typography
                      type={TYPOGRAPHY_TYPE.TITLE_2}
                      size={TYPOGRAPHY_SIZE.SM}
                    >
                      {title}
                    </Typography>
                  </reactToast.Title>
                  <Typography
                    type={TYPOGRAPHY_TYPE.CAPTION}
                    size={TYPOGRAPHY_SIZE.SM}
                    shouldTruncate
                  >
                    {description}
                  </Typography>
                </div>
                <reactToast.Action asChild altText="Undo">
                  <IconButton size={ICON_BUTTON_SIZE.LG} Icon={IconClose} />
                </reactToast.Action>
              </div>
            </framerMotion.motion.div>
          )}
        </framerMotion.AnimatePresence>
      </reactToast.Root>
    );
  },
);

Toast.defaultProps = {
  type: constants.TOAST_TYPE.NEUTRAL,
  duration: 3000,
};
