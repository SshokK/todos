import type { ComponentProps, ReactNode } from 'react';
import type * as elements from './elements';

export type CalendarItemDate = string;

export type CalendarProps = {
  items: Record<CalendarItemDate, elements.CalendarItem[]>;

  date?: Date;

  whitelistedDates?: Date[] | null;

  noDatesMessage?: ReactNode;

  shouldUseOnlyFadeAnimation?: ComponentProps<
    typeof elements.CalendarColumnsAnimation
  >['shouldUseOnlyFadeAnimation'];

  ItemComponent?: ComponentProps<
    typeof elements.CalendarColumn
  >['ItemComponent'];

  itemComponentProps?: ComponentProps<
    typeof elements.CalendarColumn
  >['itemComponentProps'];

  onItemOrderChange?: (items: CalendarProps['items']) => void;

  onDateChange?: (date: Date) => void;

  onToolbarConfigRender?: ComponentProps<
    typeof elements.CalendarToolbar
  >['onConfigRender'];
};
