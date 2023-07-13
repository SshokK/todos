import type { FC } from 'react';
import type { StrikethroughProps } from './Strikethrough.types.ts';

import * as styles from './Strikethrough.styles.ts';
import * as animations from './Strikethrough.animations.ts';
import * as framerMotion from 'framer-motion';

import classnames from 'classnames';

export const Strikethrough: FC<StrikethroughProps> = ({ isDone }) => {
  return (
    <framerMotion.AnimatePresence initial={false}>
      {isDone && (
        <framerMotion.motion.hr
          variants={animations.VARIANTS}
          initial={animations.ANIMATION_NAME.INITIAL}
          animate={animations.ANIMATION_NAME.ACTIVE}
          exit={animations.ANIMATION_NAME.EXIT}
          className={classnames({
            [styles.CLASSNAMES.strikethrough]: true,
          })}
        />
      )}
    </framerMotion.AnimatePresence>
  );
};
