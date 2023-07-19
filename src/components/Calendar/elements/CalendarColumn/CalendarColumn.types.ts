import type { ComponentType } from 'react';
import type * as elements from './elements';

export type CalendarColumnProps = {
  date: Date;
  items: elements.CalendarItem[];
  isDropDisabled?: boolean;
  itemComponentProps?: Record<string, unknown>;
  // Suppressing component props type in order to make Calendar generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent?: ComponentType<any>;
};
