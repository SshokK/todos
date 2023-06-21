import type { FC } from 'react';
import type { CalendarProps } from './Calendar.types.ts';

import * as reactBeautifulDnD from 'react-beautiful-dnd';
import * as styles from './Calendar.styles.ts';
import * as helpers from './Calendar.helpers.ts';
import * as lodash from 'lodash';
import * as framerMotion from 'framer-motion';
import * as animations from './Calendar.animations.ts';
import * as constants from './Calendar.constants.ts';

import classnames from 'classnames';

import { Typography, TYPOGRAPHY_SIZE, TYPOGRAPHY_TYPE } from '../Typography';
import { Separator, SEPARATOR_ORIENTATION } from '../Separator';
import { IconDragHandle, IconReload } from '../Icons';
import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE, IconButton } from '../IconButton';
import { Toolbar } from '../Toolbar';

import {
  useCalendarData,
  useCalendarHandlers,
  useCalendarToolbarConfig,
} from './hooks';

export const Calendar: FC<CalendarProps> = ({
  items,
  toolbarConfig,
  className,
  columnsCount,
  ItemComponent,
}) => {
  const { localState, localActions, formattedData } = useCalendarData({
    columnsCount,
  });

  const Item = ItemComponent ?? (() => <></>);

  const groupedItems = lodash.groupBy(items, 'date');

  const handlers = useCalendarHandlers({
    props: {
      columnsCount,
    },
    localActions,
  });

  const calendarToolbarConfig = useCalendarToolbarConfig({
    props: {
      toolbarConfig,
    },
    onPrevPageChange: handlers.handlePrevPageChange,
    onNextPageChange: handlers.handleNextPageChange,
  });

  return (
    <reactBeautifulDnD.DragDropContext onDragEnd={console.log}>
      <div className={styles.CLASSNAMES.toolbarContainer}>
        <Toolbar config={calendarToolbarConfig} />
        <IconButton
          Icon={IconReload}
          type={ICON_BUTTON_TYPE.SECONDARY}
          size={ICON_BUTTON_SIZE.LG}
          onClick={handlers.handleJumpToCurrentDate}
          tooltip={{
            title: 'Jump to today',
          }}
        />
      </div>
      <div className={styles.CLASSNAMES.container}>
        <framerMotion.AnimatePresence
          initial={false}
          custom={localState.animationDirection}
        >
          <framerMotion.motion.div
            key={localState.firstColumnDate.toString()}
            variants={animations.VARIANTS}
            initial={constants.ANIMATION_NAME.ENTER}
            animate={constants.ANIMATION_NAME.ACTIVE}
            exit={constants.ANIMATION_NAME.EXIT}
            transition={animations.TRANSITION}
            custom={localState.animationDirection}
            className={classnames(
              className,
              styles.CLASSNAMES.columnsContainer,
            )}
          >
            {formattedData.dates.map((date, i) => (
              <div key={date.toString()} className={styles.CLASSNAMES.column}>
                <Typography type={TYPOGRAPHY_TYPE.SUBTITLE}>
                  {helpers.formatCurrentDate(date)}
                </Typography>
                <div className={styles.CLASSNAMES.itemsOuterContainer}>
                  <ul className={styles.CLASSNAMES.itemsInnerContainer}>
                    {!groupedItems[date.toDateString()]?.length && (
                      <Typography
                        type={TYPOGRAPHY_TYPE.SUBTITLE}
                        size={TYPOGRAPHY_SIZE.SM}
                        className={styles.CLASSNAMES.noItemsMessage}
                      >
                        No items
                      </Typography>
                    )}
                    {groupedItems[date.toDateString()]?.map((item) => (
                      <li key={item.id} className={styles.CLASSNAMES.item}>
                        <Item {...item} />
                        <IconButton
                          Icon={IconDragHandle}
                          size={ICON_BUTTON_SIZE.LG}
                          type={ICON_BUTTON_TYPE.SECONDARY}
                          className={classnames(styles.CLASSNAMES.dragButton)}
                        />
                      </li>
                    ))}
                  </ul>
                  {i < formattedData.dates.length - 1 && (
                    <Separator
                      orientation={SEPARATOR_ORIENTATION.VERTICAL}
                      className={styles.CLASSNAMES.separator}
                    />
                  )}
                </div>
              </div>
            ))}
          </framerMotion.motion.div>
        </framerMotion.AnimatePresence>
      </div>
    </reactBeautifulDnD.DragDropContext>
  );
};
