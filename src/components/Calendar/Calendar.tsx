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
  const { localActions, formattedData } = useCalendarData();

  const handlers = useCalendarHandlers({
    props: {
      items,
      onItemOrderChange,
    },
    localActions,
  });

  return (
    <reactBeautifulDnD.DragDropContext onDragEnd={handlers.handleItemDrop}>
      <elements.CalendarToolbar
        config={toolbarConfig}
        onPrevPageClick={handlers.handlePrevPageChange}
        onNextPageClick={handlers.handleNextPageChange}
        onPageReset={handlers.handlePageReset}
      />
      <div className={styles.CLASSNAMES.container}>
        <div className={styles.CLASSNAMES.columnsContainer}>
          <elements.CalendarColumnsAnimation
            dates={formattedData.dates}
            classNames={{
              columnContainer: styles.CLASSNAMES.columnContainer,
            }}
          >
            {(date, i) => (
              <elements.CalendarColumn
                key={date.toDateString()}
                droppableId={date.toDateString()}
                title={helpers.formatHumanizedDate(date)}
                shouldShowRightSeparator={i < formattedData.dates.length - 2}
                shouldShowNoItemsMessage={!items[date.toDateString()]?.length}
              >
                {items[date.toDateString()]?.map((item, i) => (
                  <elements.CalendarItem
                    key={item.id}
                    draggableId={String(item.id)}
                    index={i}
                    itemComponentProps={{
                      ...itemComponentProps,
                      ...item,
                    }}
                    ItemComponent={ItemComponent}
                  />
                ))}
              </elements.CalendarColumn>
            )}
          </elements.CalendarColumnsAnimation>
        </div>
      </div>
    </reactBeautifulDnD.DragDropContext>
  );
};
