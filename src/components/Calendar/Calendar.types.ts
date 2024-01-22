import type { ComponentProps, ReactNode } from 'react';
import type * as elements from './elements';

export type CalendarProps = {
  items: elements.CalendarItem[];

  date?: Date;

  highlightedItemId?: ComponentProps<
    typeof elements.CalendarColumn
  >['highlightedItemId'];

  onHighlightedElementRender?: ComponentProps<
    typeof elements.CalendarColumn
  >['onHighlightedElementRender'];

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

  onItemOrderChange?: (
    item: elements.CalendarItem,
    itemIndex: number,
    date: Date,
  ) => void;

  onItemDelete?: (item: elements.CalendarItem) => void;

  onDateChange?: (date: Date) => void;

  onToolbarConfigRender?: ComponentProps<
    typeof elements.CalendarToolbar
  >['onConfigRender'];

  extraTools?: ReactNode;
};
