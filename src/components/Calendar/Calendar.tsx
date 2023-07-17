import type { FC } from 'react';
import type { CalendarProps } from './Calendar.types.ts';

import * as reactBeautifulDnD from 'react-beautiful-dnd';
import * as styles from './Calendar.styles.ts';
import * as helpers from './Calendar.helpers.ts';
import * as elements from './elements';

import { useCalendarData, useCalendarHandlers } from './hooks';

export const Calendar: FC<CalendarProps> = ({
  items,
  toolbarConfig,
  onItemOrderChange,
  ItemComponent,
  itemComponentProps,
}) => {
  const { refs, localState, localActions, formattedData } = useCalendarData();

  const handlers = useCalendarHandlers({
    props: {
      items,
      onItemOrderChange,
    },
    localActions,
  });

  return (
    <reactBeautifulDnD.DragDropContext
      onDragStart={handlers.handleDragStart}
      onDragEnd={handlers.handleItemDrop}
    >
      <div className={styles.CLASSNAMES.container}>
        <elements.CalendarToolbar
          centralVisibleColumnDate={formattedData.centralVisibleColumnDate}
          config={toolbarConfig}
          onPrevPageClick={handlers.handlePrevPageChange}
          onNextPageClick={handlers.handleNextPageChange}
          onPageReset={handlers.handlePageReset}
          onDateChange={handlers.handleDateChange}
        />
        <main
          ref={refs.container}
          className={styles.CLASSNAMES.contentContainer}
        >
          <div className={styles.CLASSNAMES.columnsContainer}>
            <elements.CalendarColumnsAnimation dates={formattedData.dates}>
              {(date, i, dates) => (
                <elements.CalendarColumn
                  key={date.toDateString()}
                  droppableId={date.toDateString()}
                  title={helpers.formatHumanizedDate(date)}
                  shouldShowNoItemsMessage={!items[date.toDateString()]?.length}
                  isDropDisabled={i === 0 || i === dates.length - 1}
                >
                  {items[date.toDateString()]?.map((item, i) => (
                    <elements.CalendarItem
                      key={item.id}
                      date={date}
                      index={i}
                      portalTarget={refs.container.current}
                      draggableId={String(item.id)}
                      ItemComponent={ItemComponent}
                      itemComponentProps={{
                        ...itemComponentProps,
                        ...item,
                      }}
                    />
                  ))}
                </elements.CalendarColumn>
              )}
            </elements.CalendarColumnsAnimation>
          </div>
        </main>
        <elements.CalendarItemRemoval isDragging={localState.isDragging} />
      </div>
    </reactBeautifulDnD.DragDropContext>
  );
};
