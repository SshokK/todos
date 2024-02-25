import type { ComponentProps } from 'react';
import type { ListProps } from './List.types.ts';

import * as react from 'react';
import * as reactVirtuoso from 'react-virtuoso';
import * as styles from './List.styles.ts';

export const List = react.forwardRef<HTMLElement, ListProps>(
  (
    {
      items,
      onItemRender,
      overscan,
      onEndReach,
      components,
      componentsContext,
    },
    ref,
  ) => {
    return (
      <reactVirtuoso.Virtuoso
        {...(Boolean(ref) && {
          scrollerRef: ref as ComponentProps<
            typeof reactVirtuoso.Virtuoso
          >['scrollerRef'],
        })}
        data={items}
        style={styles.STYLES.virtualizedList}
        components={{
          ...components,
          /**
           * TODO Figure out if still needed
           */
          // Item: elements.ListHeightPreservingItem,
        }}
        overscan={overscan}
        itemContent={(index, item) => onItemRender(item, index)}
        endReached={onEndReach}
        context={componentsContext}
      />
    );
  },
);

List.defaultProps = {
  overscan: 0,
};
