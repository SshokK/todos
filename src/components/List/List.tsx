import type { ListProps } from './List.types.ts';

import * as react from 'react';
import * as reactVirtuoso from 'react-virtuoso';
import * as styles from './List.styles.ts';

export const List = react.forwardRef<HTMLElement, ListProps>(
  (
    {
      items,
      itemsTotalCount,
      overscan,
      components,
      componentsContext,
      onItemRender,
      onEndReach,
      onRenderedItemsChange,
      onVisibleItemsRangeChange,
    },
    ref,
  ) => {
    return (
      <reactVirtuoso.Virtuoso
        {...(Boolean(ref) && {
          scrollerRef: ref as react.ComponentProps<
            typeof reactVirtuoso.Virtuoso
          >['scrollerRef'],
        })}
        data={items}
        totalCount={itemsTotalCount}
        style={styles.STYLES.virtualizedList}
        components={{
          ...components,
          /**
           * TODO Figure out if still needed
           */
          // Item: elements.ListHeightPreservingItem,
        }}
        overscan={overscan}
        itemContent={(index, item, context) =>
          onItemRender ? onItemRender(item, index, context) : index
        }
        endReached={onEndReach}
        context={componentsContext}
        itemsRendered={onRenderedItemsChange}
        rangeChanged={onVisibleItemsRangeChange}
      />
    );
  },
);

List.defaultProps = {
  overscan: 0,
};
