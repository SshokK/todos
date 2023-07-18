import type { FC } from 'react';
import type { CalendarHeightPreservingItemProps } from './CalendarHeightPreservingItem.types.ts';

import * as styles from './CalendarHeightPreservingItem.styles.ts';

import {
  useCalendarHeightPreservingItemData,
  useCalendarHeightPreservingItemHandlers,
  useCalendarHeightPreservingItemLifecycle,
} from './hooks';

export const CalendarHeightPreservingItem: FC<
  CalendarHeightPreservingItemProps
> = ({ children, ...props }) => {
  const { localState, localActions, formattedData } =
    useCalendarHeightPreservingItemData(props);

  const handlers = useCalendarHeightPreservingItemHandlers({
    localActions,
    formattedData,
  });

  useCalendarHeightPreservingItemLifecycle({
    onSizeRecalculation: handlers.handleSizeRecalculation,
  });

  return (
    <div
      {...props}
      className={styles.CLASSNAMES.container}
      style={{ minHeight: `${localState.size}px` }}
    >
      {children}
    </div>
  );
};
