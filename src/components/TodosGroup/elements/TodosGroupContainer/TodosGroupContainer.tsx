import type { TodosGroupContainerProps } from './TodosGroupContainer.types.ts';

import * as react from 'react';
import * as styles from './TodosGroupContainer.styles.ts';
import * as framerMotion from 'framer-motion';
import * as twMerge from 'tailwind-merge';

import { FadeIn } from '../../../Animations';

import classnames from 'classnames';

export const TodosGroupContainer = react.forwardRef<
  HTMLDivElement,
  TodosGroupContainerProps
>(({ children, className }, ref) => {
  return (
    <FadeIn>
      <framerMotion.motion.div
        ref={ref}
        layout
        className={twMerge.twMerge(
          classnames(styles.CLASSNAMES.container, className),
        )}
      >
        {children}
      </framerMotion.motion.div>
    </FadeIn>
  );
});
