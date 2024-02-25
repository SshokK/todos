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
  queryOptions,
  whitelistedDates,
  shouldUseOnlyFadeAnimation,
  highlightedItemId,
  noDatesMessage,
  onDateChange,
  onItemDelete,
  onToolbarConfigRender,
  onHighlightedElementRender,
  items,
  onItemOrderChange,
  ItemComponent,
  itemComponentProps,
  extraTools,
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
      onItemDelete,
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
      >
        {extraTools}
      </elements.CalendarToolbar>
      <NoItemsMessage
        isVisible={!formattedData.dates.length}
        message={noDatesMessage}
      >
        <main className={styles.CLASSNAMES.contentContainer}>
          <elements.CalendarColumnsAnimation
            dates={formattedData.dates}
            shouldUseOnlyFadeAnimation={shouldUseOnlyFadeAnimation}
          >
            {(date, i, dates) => (
              <elements.CalendarColumn
                key={date.toDateString()}
                date={date}
                queryOptions={queryOptions}
                highlightedItemId={highlightedItemId}
                onHighlightedElementRender={onHighlightedElementRender}
                items={items}
                ItemComponent={ItemComponent}
                itemComponentProps={itemComponentProps}
                isDropDisabled={i === 0 || i === dates.length - 1}
              />
            )}
          </elements.CalendarColumnsAnimation>
        </main>
      </NoItemsMessage>
      <elements.CalendarItemRemoval isDragging={localState.isDragging} />
    </reactBeautifulDnD.DragDropContext>
  );
};

Calendar.defaultProps = {
  noDatesMessage: 'No dates available',
};
