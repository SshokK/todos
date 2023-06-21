import type { ComponentProps, ComponentType } from 'react';
import type { Toolbar } from '../Toolbar';

export type CalendarItem = {
  id: string | number;
  date: string;
  [key: string]: unknown;
};

export type CalendarProps = {
  items: CalendarItem[];
  columnsCount: number;

  toolbarConfig?: ComponentProps<typeof Toolbar>['config'];
  className?: string;
  // Suppressing component props type in order to make Calendar generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent?: ComponentType<any>;
};
