import type { ReactNode } from 'react';
import type * as reactVirtoso from 'react-virtuoso';

export type ListProps = {
  // Suppressing component props type in order to make List generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  // Suppressing component props type in order to make List generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onItemRender: (item: any, index: number) => ReactNode;

  overscan?: reactVirtoso.VirtuosoProps<unknown, unknown>['overscan'];
  onEndReach?: (index: number) => void;
  components?: Omit<reactVirtoso.Components, 'Item'>;
};
