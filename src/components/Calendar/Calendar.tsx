import type { FC } from 'react';
import type { CalendarProps } from './Calendar.types.ts';

import * as reactBeautifulDnD from 'react-beautiful-dnd';
import * as styles from './Calendar.styles.ts';
import * as elements from './elements';

import { NoItemsMessage } from '../NoItemsMessage';

import {
  useCalendarData,
  useCalendarHandlers,
  useCalendarLifecycle,
} from './hooks';

export const Calendar: FC<CalendarProps> = ({
  date,
  whitelistedDates,
  shouldUseOnlyFadeAnimation,
  highlightedItemId,
  noDatesMessage,
  onDateChange,
  onToolbarConfigRender,
  onHighlightedElementRender,
  items,
  onItemOrderChange,
  ItemComponent,
  itemComponentProps,
}) => {
  const { localState, localActions, formattedData } = useCalendarData({
    date,
    whitelistedDates,
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
        onConfigRender={onToolbarConfigRender}
        onPrevPageClick={handlers.handlePrevPageChange}
        onNextPageClick={handlers.handleNextPageChange}
        onPageReset={handlers.handlePageReset}
        onJumpToDate={handlers.handleJumpToDate}
      />
      <main className={styles.CLASSNAMES.contentContainer}>
        <NoItemsMessage
          isVisible={!formattedData.dates.length}
          className={styles.CLASSNAMES.noDatesMessage}
        >
          {noDatesMessage}
        </NoItemsMessage>
        <elements.CalendarColumnsAnimation
          dates={formattedData.dates}
          shouldUseOnlyFadeAnimation={shouldUseOnlyFadeAnimation}
        >
          {(date, i, dates) => (
            <elements.CalendarColumn
              key={date.toDateString()}
              date={date}
              highlightedItemId={highlightedItemId}
              onHighlightedElementRender={onHighlightedElementRender}
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

Calendar.defaultProps = {
  noDatesMessage: 'No dates available',
};
