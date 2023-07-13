import type { CalendarItemContentProps } from './CalendarItemContent.types.ts';

import * as react from 'react';
import * as styles from './CalendarItemContent.styles.ts';
import * as framerMotion from 'framer-motion';

import { REMOVAL_ZONE_DROPPABLE_ID } from '../../../CalendarItemRemoval';
import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../../../../../IconButton';

import { IconButton } from '../../../../../IconButton';
import { IconDragHandle } from '../../../../../Icons';

import { useCalendarItemContentData } from './hooks';

export const CalendarItemContent = react.forwardRef<
  HTMLLIElement,
  CalendarItemContentProps
>(
  (
    { draggableProps, dragHandleProps, isDropAnimating, dragTarget, children },
    ref,
  ) => {
    const { refs, formattedData } = useCalendarItemContentData();

    return (
      <framerMotion.motion.li
        ref={ref}
        {...draggableProps}
        className={styles.CLASSNAMES.container}
        style={{
          ...draggableProps.style,
          ...(isDropAnimating && dragTarget === REMOVAL_ZONE_DROPPABLE_ID
            ? {
                ...styles.REMOVAL_STYLES,
                left: formattedData.elementClientX,
                top: formattedData.elementClientY,
              }
            : {}),
        }}
      >
        <div
          ref={refs.childrenContainerRef}
          className={styles.CLASSNAMES.childrenContainer}
        >
          {children}
        </div>
        <div className={styles.CLASSNAMES.dragZone}>
          <IconButton
            Icon={IconDragHandle}
            size={ICON_BUTTON_SIZE.LG}
            type={ICON_BUTTON_TYPE.SECONDARY}
            className={styles.CLASSNAMES.dragButton}
          />
          <div
            {...dragHandleProps}
            className={styles.CLASSNAMES.dragZoneGrabHandle}
          />
        </div>
      </framerMotion.motion.li>
    );
  },
);
