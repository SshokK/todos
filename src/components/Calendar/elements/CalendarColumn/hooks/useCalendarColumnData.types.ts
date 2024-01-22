import type { CalendarColumnProps } from '../CalendarColumn.types.ts';

export type CalendarColumnFormattedData = {
  items: CalendarColumnProps['items'];
};

export type CalendarColumnData = {
  formattedData: CalendarColumnFormattedData;
};
