import type {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import type { ComponentType } from 'react';

export type CalendarItem = {
  id: string;
  isHidden?: boolean;
  isDisabled?: boolean;
  isDragDisabled?: boolean;
  [key: string]: unknown;
};

export type CalendarRowProps = {
  date: Date;
  item: CalendarItem;
  // Suppressing component props type in order to make Calendar generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent?: ComponentType<any>;
  itemComponentProps?: Record<string, unknown>;

  draggableProps?: DraggableProvidedDraggableProps | null;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  isDragging?: boolean;
  isDropAnimating?: boolean;
  dragTarget?: string | null;
};
