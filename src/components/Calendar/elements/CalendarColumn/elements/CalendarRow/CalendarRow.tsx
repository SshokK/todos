import type { CalendarRowProps } from './CalendarRow.types.ts';

import * as react from 'react';
import * as styles from './CalendarRow.styles.ts';
import * as framerMotion from 'framer-motion';
import * as animations from './CalendarRow.animations.ts';

import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../../../../../IconButton';
import { REMOVAL_ZONE_DROPPABLE_ID } from '../../../CalendarItemRemoval';

import { IconButton } from '../../../../../IconButton';
import { IconDragHandle } from '../../../../../Icons';

import { useMemo } from 'react';
import { useCalendarRowData } from './hooks';

export const CalendarRow = react.forwardRef<HTMLDivElement, CalendarRowProps>(
  (
    {
      draggableProps,
      dragHandleProps,
      date,
      item,
      ItemComponent,
      itemComponentProps,
      isDropAnimating,
      dragTarget,
    },
    ref,
  ) => {
    const { refs, formattedData } = useCalendarRowData();

    const Item = useMemo(() => ItemComponent ?? (() => <></>), [ItemComponent]);

    return (
      <framerMotion.motion.div
        ref={ref}
        {...draggableProps}
        custom={item.isDisabled || item.isHidden}
        initial={animations.ANIMATION_NAME.INITIAL}
        animate={animations.ANIMATION_NAME.ACTIVE}
        exit={animations.ANIMATION_NAME.EXIT}
        variants={animations.VARIANTS}
        transition={animations.TRANSITION}
        className={styles.CLASSNAMES.container}
        style={{
          ...draggableProps?.style,
          ...(isDropAnimating && dragTarget === REMOVAL_ZONE_DROPPABLE_ID
            ? {
                ...styles.REMOVAL_STYLES,
                left: formattedData.elementClientX,
                top: formattedData.elementClientY,
              }
            : {}),
        }}
      >
        {item.isDisabled && <div className={styles.CLASSNAMES.blocker} />}
        <div
          ref={refs.childrenContainerRef}
          className={styles.CLASSNAMES.childrenContainer}
        >
          <Item date={date} {...itemComponentProps} {...item} />
        </div>
        <div className={styles.CLASSNAMES.dragZone}>
          <IconButton
            Icon={IconDragHandle}
            size={ICON_BUTTON_SIZE.LG}
            type={ICON_BUTTON_TYPE.SECONDARY}
          />
          <div
            {...dragHandleProps}
            className={styles.CLASSNAMES.dragZoneGrabHandle}
          />
        </div>
      </framerMotion.motion.div>
    );
  },
);
