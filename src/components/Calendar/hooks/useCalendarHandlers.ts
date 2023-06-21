import type { CalendarHandlers } from './useCalendarHandlers.types.ts';
import type { CalendarData } from './useCalendarData.types.ts';
import type { CalendarProps } from '../Calendar.types.ts';

import * as utils from 'utils';
import * as constants from '../Calendar.constants.ts';

export const useCalendarHandlers = ({
  props,
  localActions,
}: {
  props: Pick<CalendarProps, 'columnsCount'>;
  localActions: CalendarData['localActions'];
}): CalendarHandlers => {
  const handlePrevPageChange: CalendarHandlers['handlePrevPageChange'] = () => {
    localActions.setAnimationDirection(constants.ANIMATION_DIRECTION.LEFT);
    localActions.setFirstColumnDate((firstColumnDate) =>
      utils.subtractDays({
        date: firstColumnDate,
        daysCount: props.columnsCount,
      }),
    );
  };

  const handleNextPageChange: CalendarHandlers['handleNextPageChange'] = () => {
    localActions.setAnimationDirection(constants.ANIMATION_DIRECTION.RIGHT);
    localActions.setFirstColumnDate((firstColumnDate) =>
      utils.addDays({
        date: firstColumnDate,
        daysCount: props.columnsCount,
      }),
    );
  };

  const handleJumpToCurrentDate: CalendarHandlers['handleJumpToCurrentDate'] =
    () => {
      localActions.setFirstColumnDate(constants.INITIAL_DATE);
      localActions.setAnimationDirection((direction) =>
        direction === constants.ANIMATION_DIRECTION.RIGHT
          ? constants.ANIMATION_DIRECTION.LEFT
          : constants.ANIMATION_DIRECTION.RIGHT,
      );
    };

  return {
    handlePrevPageChange,
    handleNextPageChange,
    handleJumpToCurrentDate,
  };
};
