import type { CalendarHandlers } from './useCalendarHandlers.types.ts';
import type { CalendarData } from './useCalendarData.types.ts';
import type { CalendarProps } from '../Calendar.types.ts';

import * as utils from 'utils';
import { getDiff, subtractDays, usePreviousValue } from 'utils';
import * as lodash from 'lodash';
import * as constants from '../Calendar.constants.ts';
import * as elements from '../elements';

import { useCallback } from 'react';
import { DATE_GRANULARITY } from '../../../constants/date.constants.ts';

export const useCalendarHandlers = ({
  props,
  localState,
  localActions,
}: {
  props: Pick<
    CalendarProps,
    'date' | 'items' | 'onItemOrderChange' | 'onDateChange' | 'onItemDelete'
  >;
  localState: CalendarData['localState'];
  localActions: CalendarData['localActions'];
}): CalendarHandlers => {
  const { onItemOrderChange, onDateChange, onItemDelete } = props;

  const prevProps = usePreviousValue(props);
  const prevLocalState = usePreviousValue(localState);

  const handlePrevPageChange: CalendarHandlers['handlePrevPageChange'] =
    // Suppressing because ESLint can't detect deps of lodash.throttle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(
      lodash.throttle(
        () => {
          localActions.setDate((date) =>
            utils.subtractDays({
              date: date,
              daysCount: 1,
            }),
          );
        },
        constants.PAGINATION_THROTTLE_TIME,
        {
          trailing: false,
        },
      ),
      [localActions],
    );

  const handleNextPageChange: CalendarHandlers['handleNextPageChange'] =
    // Suppressing because ESLint can't detect deps of lodash.throttle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(
      lodash.throttle(
        () => {
          localActions.setDate((date) =>
            utils.addDays({
              date: date,
              daysCount: 1,
            }),
          );
        },
        constants.PAGINATION_THROTTLE_TIME,
        {
          trailing: false,
        },
      ),
      [localActions],
    );

  const handlePageReset: CalendarHandlers['handlePageReset'] = () => {
    localActions.setDate(constants.INITIAL_DATE);
  };

  const handleJumpToDate: CalendarHandlers['handleJumpToDate'] = (date) => {
    localActions.setDate(date ? date : constants.INITIAL_DATE);
  };

  const handleDragStart: CalendarHandlers['handleDragStart'] = () => {
    localActions.setIsDragging(true);
  };

  const handleItemDrop: CalendarHandlers['handleItemDrop'] = (result) => {
    localActions.setIsDragging(false);

    const { source, destination, draggableId } = result;

    const changedItem = props.items.find((item) => item.id === draggableId);

    if (!destination || !changedItem) {
      return;
    }

    /**
     *
     * Item was moved to the removal zone
     *
     */
    if (destination.droppableId === elements.REMOVAL_ZONE_DROPPABLE_ID) {
      return onItemDelete?.(changedItem);
    }

    /**
     *
     * Item was moved within the same or different column
     *
     */
    const daysDiff = getDiff({
      dateA: new Date(source.droppableId),
      dateB: new Date(destination.droppableId),
      granularity: DATE_GRANULARITY.DAY,
    });

    onItemOrderChange?.(
      changedItem,
      destination.index,
      subtractDays({
        date: changedItem.date,
        daysCount: daysDiff,
      }),
    );
  };

  const handleDateChange: CalendarHandlers['handleDateChange'] =
    useCallback(() => {
      if (prevLocalState.date !== localState.date) {
        onDateChange?.(localState.date);
      }
    }, [localState.date, onDateChange, prevLocalState.date]);

  const handleDatePropChange: CalendarHandlers['handleDatePropChange'] =
    useCallback(() => {
      if (prevProps.date !== props.date && props.date) {
        localActions.setDate(props.date);
      }
    }, [localActions, prevProps.date, props.date]);

  return {
    handlePrevPageChange,
    handleNextPageChange,
    handlePageReset,
    handleJumpToDate,
    handleDragStart,
    handleItemDrop,
    handleDateChange,
    handleDatePropChange,
  };
};
