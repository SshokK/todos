import type { DragDropContextProps } from 'react-beautiful-dnd';
import type { CalendarToolbar } from '../elements';
import type { ComponentProps } from 'react';

export type CalendarHandlers = {
  handlePrevPageChange: () => void;
  handleNextPageChange: () => void;
  handlePageReset: () => void;
  handleJumpToDate: Required<
    ComponentProps<typeof CalendarToolbar>
  >['onJumpToDate'];
  handleDragStart: Required<DragDropContextProps>['onDragStart'];
  handleItemDrop: Required<DragDropContextProps>['onDragEnd'];
  handleDateChange: () => void;
  handleDatePropChange: () => void;
};
