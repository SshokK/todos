import type { FC } from 'react';
import type { CalendarColumnProps } from './CalendarColumn.types.ts';

import { TYPOGRAPHY_TYPE } from '../../../Typography';

import { StrictModeDroppable } from '../../../StrictModeDroppable';
import { Typography } from '../../../Typography';
import { NoItemsMessage } from '../../../NoItemsMessage';
import { List } from '../../../List';

import * as elements from './elements';
import * as reactBeautifulDnd from 'react-beautiful-dnd';
import * as styles from './CalendarColumn.styles.ts';
import * as utils from 'utils';

import { useTranslation } from 'react-i18next';

export const CalendarColumn: FC<CalendarColumnProps> = ({
  date,
  isDropDisabled,
  highlightedItemId,
  onHighlightedElementRender,
  items,
  ItemComponent,
  itemComponentProps,
}) => {
  const { t } = useTranslation();

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
          isDragging={snapshot.isDragging}
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
            {utils.formatHumanizedDate(date, t)}
          </Typography>
          <NoItemsMessage
            isVisible={!items.length}
            className={styles.CLASSNAMES.noItemsMessage}
          >
            No items
          </NoItemsMessage>
          <List
            ref={provided.innerRef}
            items={items}
            onItemRender={(item: elements.CalendarItem, index) => (
              <reactBeautifulDnd.Draggable
                draggableId={String(item.id)}
                index={index}
                key={item.id}
              >
                {(provided, snapshot) => (
                  <elements.CalendarRow
                    ref={provided.innerRef}
                    isHighlighted={item.id === highlightedItemId}
                    onHighlightedElementRender={onHighlightedElementRender}
                    draggableProps={provided.draggableProps}
                    dragHandleProps={provided.dragHandleProps}
                    isDropAnimating={snapshot.isDropAnimating}
                    isDragging={snapshot.isDragging}
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
