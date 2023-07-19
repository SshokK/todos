import type { ReactNode } from 'react';

export type ListProps = {
  // Suppressing component props type in order to make List generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  // Suppressing component props type in order to make List generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onItemRender: (item: any, index: number) => ReactNode;
};
