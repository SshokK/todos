import type { FC } from 'react';
import type { CalendarAnimatedColumnProps } from './CalendarAnimatedColumn.types.ts';

import * as utils from 'utils';
import * as dateConstants from '../../../../../../constants/date.constants.ts';
import * as framerMotion from 'framer-motion';
import * as animations from './CalendarAnimatedColumn.animations.ts';
import * as styles from './CalendarAnimatedColumn.styles.ts';

import { SEPARATOR_ORIENTATION } from '../../../../../Separator';

import { Separator } from '../../../../../Separator';

export const CalendarAnimatedColumn: FC<CalendarAnimatedColumnProps> = ({
  prevDates,
  date,
  index,
  isFadeEnabled,
  children,
}) => {
  const isInPrevDatesList = prevDates.find((prevDate) =>
    utils.isSame({
      dateA: prevDate,
      dateB: date,
      granularity: dateConstants.DATE_GRANULARITY.DAY,
    }),
  );

  return (
    <framerMotion.motion.div
      variants={animations.VARIANTS}
      initial={animations.ANIMATION_NAME.ENTER}
      animate={animations.ANIMATION_NAME.ACTIVE}
      exit={animations.ANIMATION_NAME.EXIT}
      transition={animations.TRANSITION}
      className={styles.CLASSNAMES.columnContainer}
      custom={{
        isFadeEnabled,
        isInPrevDatesList,
        index,
      }}
    >
      {children}
      <Separator
        orientation={SEPARATOR_ORIENTATION.VERTICAL}
        className={styles.CLASSNAMES.separator}
      />
    </framerMotion.motion.div>
  );
};
