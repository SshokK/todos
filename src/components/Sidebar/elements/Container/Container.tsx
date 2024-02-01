import type { FC } from 'react';
import type { ContainerProps } from './Container.types.ts';

import * as framerMotion from 'framer-motion';
import * as styles from './Container.styles.ts';
import * as animations from './Container.animations.ts';

export const Container: FC<ContainerProps> = ({ isOpen, children }) => {
  return (
    <framerMotion.AnimatePresence>
      {isOpen && (
        <framerMotion.motion.div
          className={styles.CLASSNAMES.container}
          initial={animations.ANIMATION_NAME.INITIAL}
          animate={animations.ANIMATION_NAME.ACTIVE}
          exit={animations.ANIMATION_NAME.EXIT}
          variants={animations.VARIANTS}
          transition={animations.TRANSITION}
        >
          {children}
        </framerMotion.motion.div>
      )}
    </framerMotion.AnimatePresence>
  );
};
