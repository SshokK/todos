import type { TodosGroupHeaderProps } from './TodosGroupHeader.types.ts';

import * as react from 'react';
import * as components from '../../../index.ts';
import * as styles from './TodosGroupHeader.styles.ts';

export const TodosGroupHeader = react.forwardRef<
  HTMLParagraphElement,
  TodosGroupHeaderProps
>(({ children, isLoading }, ref) => {
  return (
    <components.FadeIn>
      <components.Typography
        ref={ref}
        layout="position"
        type={components.TYPOGRAPHY_TYPE.SUBTITLE}
        className={styles.CLASSNAMES.container}
        textAlignment={components.TYPOGRAPHY_TEXT_ALIGNMENT.LEFT}
      >
        {children}
        <components.Spinner
          isVisible={isLoading}
          width={components.SPINNER_WIDTH.MD}
          size={components.SPINNER_SIZE.SM}
          className={styles.CLASSNAMES.spinner}
        />
      </components.Typography>
    </components.FadeIn>
  );
});
