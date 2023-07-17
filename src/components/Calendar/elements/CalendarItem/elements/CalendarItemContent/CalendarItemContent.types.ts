import type {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import type { ReactNode } from 'react';

export type CalendarItemContentProps = {
  draggableProps: DraggableProvidedDraggableProps;
  portalTarget: HTMLElement | null;
  isDropAnimating: boolean;
  isDragging: boolean;
  dragTarget?: string | null;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  children?: ReactNode;
};
