import type { FC } from 'react';
import type { ListHeightPreservingItemProps } from './ListHeightPreservingItem.types.ts';

import * as styles from './ListHeightPreservingItem.styles.ts';

import {
  useListHeightPreservingItemData,
  useListHeightPreservingItemHandlers,
  useListHeightPreservingItemLifecycle,
} from './hooks';

export const ListHeightPreservingItem: FC<ListHeightPreservingItemProps> = ({
  children,
  ...props
}) => {
  const { localState, localActions, formattedData } =
    useListHeightPreservingItemData(props);

  const handlers = useListHeightPreservingItemHandlers({
    localActions,
    formattedData,
  });

  useListHeightPreservingItemLifecycle({
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
