import type { ComponentProps } from 'react';
import type * as elements from './elements';

export type CalendarItemDate = string;

export type CalendarItem = ComponentProps<
  typeof elements.CalendarItem
>['itemComponentProps'] & {
  id: string | number;
};

export type CalendarProps = {
  date?: Date;
  onDateChange?: (date: Date) => void;
  items: Record<CalendarItemDate, CalendarItem[]>;
  toolbarConfig?: ComponentProps<typeof elements.CalendarToolbar>['config'];
  ItemComponent?: ComponentProps<typeof elements.CalendarItem>['ItemComponent'];
  itemComponentProps?: ComponentProps<
    typeof elements.CalendarItem
  >['itemComponentProps'];
  onItemOrderChange?: (items: CalendarProps['items']) => void;
};
