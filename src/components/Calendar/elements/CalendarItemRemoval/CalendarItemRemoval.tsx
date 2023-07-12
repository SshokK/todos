import type { FC } from 'react';
import type { CalendarItemRemovalProps } from './CalendarItemRemoval.types.ts';

import * as styles from './CalendarItemRemoval.styles.ts';
import * as framerMotion from 'framer-motion';
import * as constants from './CalendarItemRemoval.constants.ts';

import classnames from 'classnames';

import { IconTrash2 } from '../../../Icons';
import { Tooltip } from '../../../Tooltip';
import { StrictModeDroppable } from '../../../StrictModeDroppable';

export const CalendarItemRemoval: FC<CalendarItemRemovalProps> = ({
  isDragging,
}) => {
  return (
    <StrictModeDroppable droppableId={constants.REMOVAL_ZONE_DROPPABLE_ID}>
      {(provided, snapshot) => (
        <Tooltip
          isOpen={isDragging ? false : undefined}
          title="Drag'n'drop here to delete"
        >
          <footer
            ref={provided.innerRef}
            className={styles.CLASSNAMES.itemRemovalZone}
          >
            <framerMotion.motion.div
              layout
              className={classnames({
                [styles.CLASSNAMES.itemRemovalBorders]: true,
                [styles.CLASSNAMES.itemRemovalBordersActive]: isDragging,
              })}
            >
              <framerMotion.motion.div
                className={classnames({
                  [styles.CLASSNAMES.itemRemovalBordersSpacer]: true,
                  [styles.CLASSNAMES.itemRemovalBordersSpacerActive]:
                    isDragging,
                  [styles.CLASSNAMES.itemRemovalBordersSpacerActiveDragOver]:
                    snapshot.isDraggingOver,
                })}
              />
            </framerMotion.motion.div>
            <IconTrash2
              className={classnames({
                [styles.CLASSNAMES.itemRemovalIcon]: true,
                [styles.CLASSNAMES.itemRemovalIconActive]: isDragging,
                [styles.CLASSNAMES.itemRemovalIconActiveDragOver]:
                  snapshot.isDraggingOver,
              })}
            />
          </footer>
        </Tooltip>
      )}
    </StrictModeDroppable>
  );
};
