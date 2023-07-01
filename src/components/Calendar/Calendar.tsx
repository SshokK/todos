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
  columnsCount,
  onItemOrderChange,
  ItemComponent,
  itemComponentProps,
}) => {
  const { localState, localActions, formattedData } = useCalendarData({
    columnsCount,
  });

  const handlers = useCalendarHandlers({
    props: {
      items,
      columnsCount,
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
        <elements.CalendarColumnsAnimation
          animationTriggerKey={localState.firstColumnDate.toString()}
          direction={localState.animationDirection}
          className={styles.CLASSNAMES.columnsContainer}
        >
          {formattedData.dates.map((date, i) => (
            <elements.CalendarColumn
              key={date.toDateString()}
              droppableId={date.toDateString()}
              title={helpers.formatHumanizedDate(date)}
              shouldShowRightSeparator={i < formattedData.dates.length - 1}
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
          ))}
        </elements.CalendarColumnsAnimation>
      </div>
    </reactBeautifulDnD.DragDropContext>
  );
};
