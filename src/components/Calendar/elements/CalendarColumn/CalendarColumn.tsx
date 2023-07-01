import type { FC } from 'react';
import type { CalendarColumnProps } from './CalendarColumn.types.ts';

import * as styles from './CalendarColumn.styles.ts';

import { TYPOGRAPHY_SIZE, TYPOGRAPHY_TYPE } from '../../../Typography';
import { SEPARATOR_ORIENTATION } from '../../../Separator';

import { Typography } from '../../../Typography';
import { Separator } from '../../../Separator';
import { StrictModeDroppable } from '../../../StrictModeDroppable';

export const CalendarColumn: FC<CalendarColumnProps> = ({
  droppableId,
  title,
  noItemsMessage,
  shouldShowRightSeparator,
  shouldShowNoItemsMessage,
  children,
}) => {
  return (
    <StrictModeDroppable droppableId={droppableId}>
      {(dropProvided) => (
        <div ref={dropProvided.innerRef} className={styles.CLASSNAMES.column}>
          <Typography type={TYPOGRAPHY_TYPE.SUBTITLE}>{title}</Typography>
          <div className={styles.CLASSNAMES.itemsOuterContainer}>
            <ul className={styles.CLASSNAMES.itemsInnerContainer}>
              {shouldShowNoItemsMessage ? (
                <Typography
                  type={TYPOGRAPHY_TYPE.SUBTITLE}
                  size={TYPOGRAPHY_SIZE.SM}
                  className={styles.CLASSNAMES.noItemsMessage}
                >
                  {noItemsMessage}
                </Typography>
              ) : (
                children
              )}
            </ul>
            {shouldShowRightSeparator && (
              <Separator
                orientation={SEPARATOR_ORIENTATION.VERTICAL}
                className={styles.CLASSNAMES.separator}
              />
            )}
          </div>
        </div>
      )}
    </StrictModeDroppable>
  );
};

CalendarColumn.defaultProps = {
  noItemsMessage: 'No items',
};
