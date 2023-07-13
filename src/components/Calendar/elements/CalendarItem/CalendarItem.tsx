import type { FC } from 'react';
import type { CalendarItemProps } from './CalendarItem.types.ts';

import * as reactBeautifulDnD from 'react-beautiful-dnd';
import * as elements from './elements';

import { useMemo } from 'react';

export const CalendarItem: FC<CalendarItemProps> = ({
  draggableId,
  index,
  date,
  itemComponentProps,
  ItemComponent,
}) => {
  const Item = useMemo(() => ItemComponent ?? (() => <></>), [ItemComponent]);

  return (
    <reactBeautifulDnD.Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <elements.CalendarItemContent
          ref={provided.innerRef}
          draggableProps={provided.draggableProps}
          dragHandleProps={provided.dragHandleProps}
          isDropAnimating={snapshot.isDropAnimating}
          dragTarget={snapshot.draggingOver}
        >
          <Item date={date} {...itemComponentProps} />
        </elements.CalendarItemContent>
      )}
    </reactBeautifulDnD.Draggable>
  );
};
