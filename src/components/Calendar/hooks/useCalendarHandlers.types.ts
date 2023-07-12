import type { DragDropContextProps } from 'react-beautiful-dnd';

export type CalendarHandlers = {
  handlePrevPageChange: () => void;
  handleNextPageChange: () => void;
  handlePageReset: () => void;
  handleDateChange: (date: Date | null) => void;
  handleDragStart: Required<DragDropContextProps>['onDragStart'];
  handleItemDrop: Required<DragDropContextProps>['onDragEnd'];
};
