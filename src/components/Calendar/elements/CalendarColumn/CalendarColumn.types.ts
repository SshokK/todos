import type { ReactNode } from 'react';

export type CalendarColumnProps = {
  droppableId: string;
  noItemsMessage?: string;
  shouldShowNoItemsMessage?: boolean;
  shouldShowRightSeparator?: boolean;
  title?: string;
  children?: ReactNode;
};
