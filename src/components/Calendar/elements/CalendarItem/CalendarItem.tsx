import type { FC } from 'react';
import type { CalendarItemProps } from './CalendarItem.types.ts';

import classnames from 'classnames';

import * as styles from './CalendarItem.styles.ts';
import * as reactBeautifulDnD from 'react-beautiful-dnd';
import * as framerMotion from 'framer-motion';

import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../../../IconButton';

import { IconDragHandle } from '../../../Icons';
import { IconButton } from '../../../IconButton';

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
      {(dragProvided, dragSnapshot) => (
        <framerMotion.motion.li
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          className={styles.CLASSNAMES.container}
        >
          <Item date={date} {...itemComponentProps} />
          <IconButton
            {...dragProvided.dragHandleProps}
            Icon={IconDragHandle}
            size={ICON_BUTTON_SIZE.LG}
            type={ICON_BUTTON_TYPE.SECONDARY}
            className={classnames({
              [styles.CLASSNAMES.dragButton]: true,
              [styles.CLASSNAMES.dragButtonActive]: dragSnapshot.isDragging,
            })}
          />
        </framerMotion.motion.li>
      )}
    </reactBeautifulDnD.Draggable>
  );
};
