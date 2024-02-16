import type { TodosGroupContainerProps } from './TodosGroupContainer.types.ts';

import * as react from 'react';
import * as styles from './TodosGroupContainer.styles.ts';
import * as animations from '../../TodosGroup.animations.ts';
import * as framerMotion from 'framer-motion';

export const TodosGroupContainer = react.forwardRef<
  HTMLDivElement,
  TodosGroupContainerProps
>(({ children }, ref) => {
  return (
    <framerMotion.motion.div
      ref={ref}
      className={styles.CLASSNAMES.container}
      variants={animations.VARIANTS}
      initial={animations.ANIMATION_NAME.ENTER}
      animate={animations.ANIMATION_NAME.ACTIVE}
      exit={animations.ANIMATION_NAME.EXIT}
    >
      {children}
    </framerMotion.motion.div>
  );
});
