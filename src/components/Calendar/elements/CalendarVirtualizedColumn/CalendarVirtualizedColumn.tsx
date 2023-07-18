import type { ComponentProps, FC } from 'react';
import type { CalendarVirtualizedColumnProps } from './CalendarVirtualizedColumn.types.ts';

import { TYPOGRAPHY_TYPE } from '../../../Typography';

import { StrictModeDroppable } from '../../../StrictModeDroppable';
import { Typography } from '../../../Typography';
import { NoItemsMessage } from '../../../NoItemsMessage';

import * as elements from './elements';
import * as reactVirtuoso from 'react-virtuoso';
import * as reactBeautifulDnd from 'react-beautiful-dnd';
import * as styles from './CalendarVirtualizedColumn.styles.ts';
import * as helpers from './CalendarVirtualizedColumn.helpers.ts';

export const CalendarVirtualizedColumn: FC<CalendarVirtualizedColumnProps> = ({
  date,
  isDropDisabled,
  items,
  ItemComponent,
  itemComponentProps,
}) => {
  return (
    <StrictModeDroppable
      droppableId={date.toDateString()}
      mode="virtual"
      isDropDisabled={isDropDisabled}
      renderClone={(provided, snapshot, rubric) => (
        <elements.CalendarRow
          ref={provided.innerRef}
          draggableProps={provided.draggableProps}
          dragHandleProps={provided.dragHandleProps}
          isDropAnimating={snapshot.isDropAnimating}
          dragTarget={snapshot.draggingOver}
          date={date}
          item={items[rubric.source.index]}
          ItemComponent={ItemComponent}
          itemComponentProps={itemComponentProps}
        />
      )}
    >
      {(provided) => (
        <div className={styles.CLASSNAMES.column}>
          <Typography
            type={TYPOGRAPHY_TYPE.SUBTITLE}
            className={styles.CLASSNAMES.columnTitle}
          >
            {helpers.formatHumanizedDate(date)}
          </Typography>
          <NoItemsMessage
            isVisible={!items.length}
            className={styles.CLASSNAMES.noItemsMessage}
          >
            No items
          </NoItemsMessage>
          <reactVirtuoso.Virtuoso
            scrollerRef={
              provided.innerRef as ComponentProps<
                typeof reactVirtuoso.Virtuoso
              >['scrollerRef']
            }
            data={items}
            style={styles.STYLES.virtualizedList}
            components={{
              Item: elements.CalendarHeightPreservingItem,
            }}
            itemContent={(index, item: elements.CalendarItem) => (
              <reactBeautifulDnd.Draggable
                draggableId={String(item.id)}
                index={index}
                key={item.id}
              >
                {(provided, snapshot) => (
                  <elements.CalendarRow
                    ref={provided.innerRef}
                    draggableProps={provided.draggableProps}
                    dragHandleProps={provided.dragHandleProps}
                    isDropAnimating={snapshot.isDropAnimating}
                    dragTarget={snapshot.draggingOver}
                    date={date}
                    item={item}
                    ItemComponent={ItemComponent}
                    itemComponentProps={itemComponentProps}
                  />
                )}
              </reactBeautifulDnd.Draggable>
            )}
          />
        </div>
      )}
    </StrictModeDroppable>
  );
};
