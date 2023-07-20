import type { FC } from 'react';
import type { CalendarProps } from './Calendar.types.ts';

import * as reactBeautifulDnD from 'react-beautiful-dnd';
import * as styles from './Calendar.styles.ts';
import * as elements from './elements';

import {
  useCalendarData,
  useCalendarHandlers,
  useCalendarLifecycle,
} from './hooks';

export const Calendar: FC<CalendarProps> = ({
  date,
  onDateChange,
  items,
  toolbarConfig,
  additionalToolbar,
  onItemOrderChange,
  ItemComponent,
  itemComponentProps,
}) => {
  const { localState, localActions, formattedData } = useCalendarData({
    date,
  });

  const handlers = useCalendarHandlers({
    props: {
      date,
      items,
      onItemOrderChange,
      onDateChange,
    },
    localState,
    localActions,
  });

  useCalendarLifecycle({
    onDateChange: handlers.handleDateChange,
    onDatePropChange: handlers.handleDatePropChange,
  });

  return (
    <reactBeautifulDnD.DragDropContext
      onDragStart={handlers.handleDragStart}
      onDragEnd={handlers.handleItemDrop}
    >
      <elements.CalendarToolbar
        date={localState.date}
        config={toolbarConfig}
        onPrevPageClick={handlers.handlePrevPageChange}
        onNextPageClick={handlers.handleNextPageChange}
        onPageReset={handlers.handlePageReset}
        onJumpToDate={handlers.handleJumpToDate}
      >
        {additionalToolbar}
      </elements.CalendarToolbar>
      <main className={styles.CLASSNAMES.contentContainer}>
        <elements.CalendarColumnsAnimation dates={formattedData.dates}>
          {(date, i, dates) => (
            <elements.CalendarColumn
              key={date.toDateString()}
              date={date}
              items={items[date.toDateString()] ?? []}
              ItemComponent={ItemComponent}
              itemComponentProps={itemComponentProps}
              isDropDisabled={i === 0 || i === dates.length - 1}
            />
          )}
        </elements.CalendarColumnsAnimation>
      </main>
      <elements.CalendarItemRemoval isDragging={localState.isDragging} />
    </reactBeautifulDnD.DragDropContext>
  );
};
