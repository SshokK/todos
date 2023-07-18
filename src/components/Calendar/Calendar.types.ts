import type { ComponentProps } from 'react';
import type * as elements from './elements';

export type CalendarItemDate = string;

export type CalendarProps = {
  date?: Date;
  onDateChange?: (date: Date) => void;
  items: Record<CalendarItemDate, elements.CalendarItem[]>;
  toolbarConfig?: ComponentProps<typeof elements.CalendarToolbar>['config'];

  ItemComponent?: ComponentProps<
    typeof elements.CalendarVirtualizedColumn
  >['ItemComponent'];

  itemComponentProps?: ComponentProps<
    typeof elements.CalendarVirtualizedColumn
  >['itemComponentProps'];

  onItemOrderChange?: (items: CalendarProps['items']) => void;
};
