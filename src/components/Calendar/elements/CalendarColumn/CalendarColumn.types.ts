import type { ComponentProps, ComponentType } from 'react';
import type * as elements from './elements';
import type * as reactQuery from '@tanstack/react-query';

export type CalendarColumnProps = {
  date: Date;

  queryOptions?: {
    queryKey: reactQuery.QueryKey;
    queryFn: (queryParams: {
      limit: number;
      offset: number;
      date: Date;
    }) => Promise<elements.CalendarItem[]>;
  };
  items?: elements.CalendarItem[];
  highlightedItemId?: elements.CalendarItem['id'] | null;
  onHighlightedElementRender?: ComponentProps<
    typeof elements.CalendarRow
  >['onHighlightedElementRender'];
  isDropDisabled?: boolean;
  itemComponentProps?: Record<string, unknown>;
  // Suppressing component props type in order to make Calendar generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent?: ComponentType<any>;
};
