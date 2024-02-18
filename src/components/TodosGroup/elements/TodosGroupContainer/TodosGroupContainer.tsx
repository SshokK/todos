import type { TodosGroupContainerProps } from './TodosGroupContainer.types.ts';

import * as react from 'react';
import * as styles from './TodosGroupContainer.styles.ts';
import * as animations from '../../TodosGroup.animations.ts';
import * as framerMotion from 'framer-motion';
import * as twMerge from 'tailwind-merge';

import classnames from 'classnames';

export const TodosGroupContainer = react.forwardRef<
  HTMLDivElement,
  TodosGroupContainerProps
>(({ children, className }, ref) => {
  return (
    <framerMotion.motion.div
      ref={ref}
      layout
      variants={animations.VARIANTS}
      initial={animations.ANIMATION_NAME.ENTER}
      animate={animations.ANIMATION_NAME.ACTIVE}
      exit={animations.ANIMATION_NAME.EXIT}
      className={twMerge.twMerge(
        classnames(styles.CLASSNAMES.container, className),
      )}
    >
      {children}
    </framerMotion.motion.div>
  );
});
