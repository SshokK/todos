import type { ComponentType } from 'react';

export type CalendarItemProps = {
  draggableId: string;
  index: number;
  date: Date;
  itemComponentProps?: Record<string, unknown>;
  // Suppressing component props type in order to make Calendar generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent?: ComponentType<any>;
};
