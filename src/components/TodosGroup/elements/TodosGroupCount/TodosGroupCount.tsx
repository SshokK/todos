import type { RemainingTodosCountProps } from './TodosGroupCount.types.ts';

import * as react from 'react';
import * as components from '../../../index.ts';
import * as styles from './TodosGroupCount.styles.ts';

export const TodosGroupCount = react.forwardRef<
  HTMLDivElement,
  RemainingTodosCountProps
>(({ children }, ref) => {
  return (
    <components.FadeIn>
      <components.Separator
        ref={ref}
        layout
        className={styles.CLASSNAMES.separator}
      >
        <div className={styles.CLASSNAMES.text}>{children}</div>
      </components.Separator>
    </components.FadeIn>
  );
});
