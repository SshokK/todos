import type * as reactVirtoso from 'react-virtuoso';
import type * as react from 'react';

export type ListProps = {
  // Suppressing component props type in order to make List generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  itemsTotalCount?: number;
  overscan?: reactVirtoso.VirtuosoProps<unknown, unknown>['overscan'];
  componentsContext?: unknown;
  components?: reactVirtoso.Components;

  onEndReach?: () => void;

  onItemRender?: (
    // Suppressing component props type in order to make List generic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: any,
    index: number,
    // Suppressing component props type in order to make List generic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: any,
  ) => react.ReactNode;

  onRenderedItemsChange?: reactVirtoso.VirtuosoProps<
    // Suppressing component props type in order to make List generic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    unknown
  >['itemsRendered'];

  onVisibleItemsRangeChange?: reactVirtoso.VirtuosoProps<
    // Suppressing component props type in order to make List generic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    unknown
  >['rangeChanged'];

  onScrollUp?: () => void;

  onScrollDown?: () => void;
};
