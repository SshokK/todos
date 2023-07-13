import type { ReactNode } from 'react';

export type CalendarColumnProps = {
  droppableId: string;
  isDropDisabled?: boolean;
  noItemsMessage?: string;
  shouldShowNoItemsMessage?: boolean;
  title?: string;
  children?: ReactNode;
};
