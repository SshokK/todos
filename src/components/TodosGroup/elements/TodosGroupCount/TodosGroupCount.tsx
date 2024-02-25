import type { RemainingTodosCountProps } from './TodosGroupCount.types.ts';

import * as react from 'react';
import * as components from '../../../index.ts';
import * as styles from './TodosGroupCount.styles.ts';
import * as animations from './TodosGroupCount.animations.ts';
import * as framerMotion from 'framer-motion';

export const TodosGroupCount = react.forwardRef<
  HTMLDivElement,
  RemainingTodosCountProps
>(({ isVisible, children }, ref) => {
  return (
    <framerMotion.AnimatePresence>
      {isVisible && (
        <components.Separator
          ref={ref}
          layout
          initial={animations.ANIMATION_NAME.INITIAL}
          animate={animations.ANIMATION_NAME.ANIMATE}
          exit={animations.ANIMATION_NAME.EXIT}
          variants={animations.VARIANTS}
          className={styles.CLASSNAMES.separator}
        >
          <div className={styles.CLASSNAMES.text}>{children}</div>
        </components.Separator>
      )}
    </framerMotion.AnimatePresence>
  );
});
