import type { FC } from 'react';
import type { CalendarColumnProps } from './CalendarColumn.types.ts';

import * as styles from './CalendarColumn.styles.ts';

import { TYPOGRAPHY_TYPE } from '../../../Typography';

import { Typography } from '../../../Typography';
import { StrictModeDroppable } from '../../../StrictModeDroppable';
import { NoItemsMessage } from '../../../NoItemsMessage';

export const CalendarColumn: FC<CalendarColumnProps> = ({
  droppableId,
  title,
  noItemsMessage,
  shouldShowNoItemsMessage,
  children,
}) => {
  return (
    <StrictModeDroppable droppableId={droppableId}>
      {(provided) => (
        <>
          <div className={styles.CLASSNAMES.column}>
            <Typography type={TYPOGRAPHY_TYPE.SUBTITLE}>{title}</Typography>
            <div
              ref={provided.innerRef}
              className={styles.CLASSNAMES.itemsOuterContainer}
            >
              <div className={styles.CLASSNAMES.draggablePlaceholder}>
                {provided.placeholder}
              </div>
              <ul className={styles.CLASSNAMES.itemsInnerContainer}>
                {shouldShowNoItemsMessage ? (
                  <NoItemsMessage className={styles.CLASSNAMES.noItemsMessage}>
                    {noItemsMessage}
                  </NoItemsMessage>
                ) : (
                  children
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </StrictModeDroppable>
  );
};

CalendarColumn.defaultProps = {
  noItemsMessage: 'No items',
};
