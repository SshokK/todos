import type { ComponentProps } from 'react';
import type { ListProps } from './List.types.ts';

import * as react from 'react';
import * as reactVirtuoso from 'react-virtuoso';
import * as styles from './List.styles.ts';
import * as elements from './elements';

export const List = react.forwardRef<HTMLElement, ListProps>(
  ({ items, onItemRender }, ref) => {
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
          Item: elements.ListHeightPreservingItem,
        }}
        itemContent={(index, item) => onItemRender(item, index)}
      />
    );
  },
);
