import type {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import type { ReactNode } from 'react';

export type CalendarItemContentProps = {
  draggableProps: DraggableProvidedDraggableProps;
  isDropAnimating: boolean;
  dragTarget?: string | null;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  children?: ReactNode;
};
