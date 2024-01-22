import type {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import type { ComponentType } from 'react';

export type CalendarItem = {
  id: string;
  date: Date;
  order?: number;
  isHidden?: boolean;
  isDisabled?: boolean;
  isDragDisabled?: boolean;
  [key: string]: unknown;
};

export type CalendarRowProps = {
  item: CalendarItem;
  isHighlighted?: boolean;
  onHighlightedElementRender?: (
    item: CalendarItem,
    element: HTMLElement,
  ) => void;

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
