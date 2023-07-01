import type { DragDropContextProps } from 'react-beautiful-dnd';

export type CalendarHandlers = {
  handlePrevPageChange: () => void;
  handleNextPageChange: () => void;
  handlePageReset: () => void;
  handleItemDrop: Required<DragDropContextProps>['onDragEnd'];
};
