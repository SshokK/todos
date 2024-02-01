import type { FC } from 'react';
import type { BarProps } from './Bar.types.ts';

import * as framerMotion from 'framer-motion';
import * as styles from './Bar.styles.ts';
import * as animations from './Bar.animations.ts';

export const Bar: FC<BarProps> = ({ isOpen, children }) => {
  return (
    <framerMotion.AnimatePresence>
      {isOpen && (
        <framerMotion.motion.article
          animate={
            isOpen
              ? animations.ANIMATION_NAME.OPEN
              : animations.ANIMATION_NAME.CLOSED
          }
          initial={animations.INITIAL}
          variants={animations.VARIANTS}
          transition={animations.TRANSITION}
          className={styles.CLASSNAMES.container}
        >
          {children}
        </framerMotion.motion.article>
      )}
    </framerMotion.AnimatePresence>
  );
};
