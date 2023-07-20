import type { ComponentProps, ReactNode } from 'react';
import type * as elements from './elements';

export type CalendarItemDate = string;

export type CalendarProps = {
  date?: Date;
  onDateChange?: (date: Date) => void;
  items: Record<CalendarItemDate, elements.CalendarItem[]>;
  toolbarConfig?: ComponentProps<typeof elements.CalendarToolbar>['config'];
  additionalToolbar?: ReactNode;

  ItemComponent?: ComponentProps<
    typeof elements.CalendarColumn
  >['ItemComponent'];

  itemComponentProps?: ComponentProps<
    typeof elements.CalendarColumn
  >['itemComponentProps'];

  onItemOrderChange?: (items: CalendarProps['items']) => void;
};
