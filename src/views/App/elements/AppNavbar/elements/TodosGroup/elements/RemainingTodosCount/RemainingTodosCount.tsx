import type { FC } from 'react';
import type { RemainingTodosCountProps } from './RemainingTodosCount.types.ts';

import * as framerMotion from 'framer-motion';
import * as components from '../../../../../../../../components';
import * as styles from './RemainingTodosCount.styles.ts';
import * as animations from './RemainingTodosCount.animations.ts';

export const RemainingTodosCount: FC<RemainingTodosCountProps> = ({
  todosCount,
  visibleTodosCount,
}) => {
  return (
    <framerMotion.AnimatePresence>
      {todosCount > visibleTodosCount && (
        <framerMotion.motion.div
          layout
          initial={animations.ANIMATION_NAME.INITIAL}
          animate={animations.ANIMATION_NAME.ANIMATE}
          exit={animations.ANIMATION_NAME.EXIT}
          variants={animations.VARIANTS}
        >
          <components.Separator className={styles.CLASSNAMES.separator}>
            <div className={styles.CLASSNAMES.text}>
              +{todosCount - visibleTodosCount} More
            </div>
          </components.Separator>
        </framerMotion.motion.div>
      )}
    </framerMotion.AnimatePresence>
  );
};
