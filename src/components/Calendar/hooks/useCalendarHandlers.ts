import type { CalendarHandlers } from './useCalendarHandlers.types.ts';
import type { CalendarData } from './useCalendarData.types.ts';
import type { CalendarProps } from '../Calendar.types.ts';

import * as utils from 'utils';
import * as lodash from 'lodash';
import * as constants from '../Calendar.constants.ts';
import * as elements from '../elements';

import { useCallback } from 'react';

export const useCalendarHandlers = ({
  props,
  localActions,
}: {
  props: Pick<CalendarProps, 'items' | 'onItemOrderChange'>;
  localActions: CalendarData['localActions'];
}): CalendarHandlers => {
  const handlePrevPageChange: CalendarHandlers['handlePrevPageChange'] =
    // Suppressing because ESLint can't detect deps of lodash.throttle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(
      lodash.throttle(
        () => {
          localActions.setFirstColumnDate((firstColumnDate) =>
            utils.subtractDays({
              date: firstColumnDate,
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
          localActions.setFirstColumnDate((firstColumnDate) =>
            utils.addDays({
              date: firstColumnDate,
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
    localActions.setFirstColumnDate(constants.INITIAL_DATE);
  };

  const handleDateChange: CalendarHandlers['handleDateChange'] = (date) => {
    localActions.setFirstColumnDate(
      date
        ? utils.subtractDays({
            date: date,
            daysCount: 2,
          })
        : constants.INITIAL_DATE,
    );
  };

  const handleDragStart: CalendarHandlers['handleDragStart'] = () => {
    localActions.setIsDragging(true);
  };

  const handleItemDrop: CalendarHandlers['handleItemDrop'] = (result) => {
    localActions.setIsDragging(false);

    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    /**
     *
     * Item was moved to the removal zone
     *
     */
    if (destination?.droppableId === elements.REMOVAL_ZONE_DROPPABLE_ID) {
      const sourceColumnItems = [...(props.items[source.droppableId] ?? [])];

      sourceColumnItems.splice(source.index, 1);

      return props.onItemOrderChange?.({
        ...props.items,
        [source.droppableId]: sourceColumnItems,
      });
    }

    /**
     *
     * Item was moved to a different column
     *
     */
    if (source.droppableId !== destination.droppableId) {
      const sourceColumnItems = [...(props.items[source.droppableId] ?? [])];
      const destColumnItems = [...(props.items[destination.droppableId] ?? [])];

      const [removed] = sourceColumnItems.splice(source.index, 1);

      destColumnItems.splice(destination.index, 0, removed);

      return props.onItemOrderChange?.({
        ...props.items,
        [source.droppableId]: sourceColumnItems,
        [destination.droppableId]: destColumnItems,
      });
    }

    /**
     *
     * Item was moved within the same column
     *
     */

    const copiedItems = [...props.items[source.droppableId]];

    const [removed] = copiedItems.splice(source.index, 1);

    copiedItems.splice(destination.index, 0, removed);

    props.onItemOrderChange?.({
      ...props.items,
      [source.droppableId]: copiedItems,
    });
  };

  return {
    handlePrevPageChange,
    handleNextPageChange,
    handlePageReset,
    handleDateChange,
    handleDragStart,
    handleItemDrop,
  };
};
