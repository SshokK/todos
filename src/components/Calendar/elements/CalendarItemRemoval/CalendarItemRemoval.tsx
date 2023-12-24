import type { FC } from 'react';
import type { CalendarItemRemovalProps } from './CalendarItemRemoval.types.ts';

import * as styles from './CalendarItemRemoval.styles.ts';
import * as framerMotion from 'framer-motion';
import * as constants from './CalendarItemRemoval.constants.ts';

import classnames from 'classnames';

import { IconTrash2 } from '../../../Icons';
import { Tooltip } from '../../../Tooltip';
import { StrictModeDroppable } from '../../../StrictModeDroppable';

import { useTranslation } from 'react-i18next';

export const CalendarItemRemoval: FC<CalendarItemRemovalProps> = ({
  isDragging,
}) => {
  const { t } = useTranslation();

  return (
    <StrictModeDroppable droppableId={constants.REMOVAL_ZONE_DROPPABLE_ID}>
      {(provided, snapshot) => (
        <Tooltip
          isOpen={isDragging ? false : undefined}
          title={t(
            'components.Calendar.CalendarItemRemoval.tooltip',
            "Drag'n'drop here to delete",
          )}
        >
          <footer
            ref={provided.innerRef}
            className={styles.CLASSNAMES.container}
          >
            <div className={styles.CLASSNAMES.draggablePlaceholder}>
              {provided.placeholder}
            </div>
            <framerMotion.motion.div
              layout
              className={classnames({
                [styles.CLASSNAMES.borders]: true,
                [styles.CLASSNAMES.bordersActive]: isDragging,
                [styles.CLASSNAMES.bordersActiveDragOver]:
                  snapshot.isDraggingOver,
              })}
            />
            <IconTrash2
              className={classnames({
                [styles.CLASSNAMES.icon]: true,
                [styles.CLASSNAMES.iconActive]: isDragging,
                [styles.CLASSNAMES.iconActiveDragOver]: snapshot.isDraggingOver,
              })}
            />
          </footer>
        </Tooltip>
      )}
    </StrictModeDroppable>
  );
};
