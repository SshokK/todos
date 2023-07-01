import type { CalendarHandlers } from './useCalendarHandlers.types.ts';
import type { CalendarData } from './useCalendarData.types.ts';
import type { CalendarProps } from '../Calendar.types.ts';

import * as utils from 'utils';
import * as constants from '../Calendar.constants.ts';
import * as elements from '../elements';

export const useCalendarHandlers = ({
  props,
  localActions,
}: {
  props: Pick<CalendarProps, 'items' | 'columnsCount' | 'onItemOrderChange'>;
  localActions: CalendarData['localActions'];
}): CalendarHandlers => {
  const handlePrevPageChange: CalendarHandlers['handlePrevPageChange'] = () => {
    localActions.setAnimationDirection(elements.ANIMATION_DIRECTION.LEFT);
    localActions.setFirstColumnDate((firstColumnDate) =>
      utils.subtractDays({
        date: firstColumnDate,
        daysCount: props.columnsCount,
      }),
    );
  };

  const handleNextPageChange: CalendarHandlers['handleNextPageChange'] = () => {
    localActions.setAnimationDirection(elements.ANIMATION_DIRECTION.RIGHT);
    localActions.setFirstColumnDate((firstColumnDate) =>
      utils.addDays({
        date: firstColumnDate,
        daysCount: props.columnsCount,
      }),
    );
  };

  const handlePageReset: CalendarHandlers['handlePageReset'] = () => {
    localActions.setFirstColumnDate(constants.INITIAL_DATE);
    localActions.setAnimationDirection((direction) =>
      direction === elements.ANIMATION_DIRECTION.RIGHT
        ? elements.ANIMATION_DIRECTION.LEFT
        : elements.ANIMATION_DIRECTION.RIGHT,
    );
  };

  const handleItemDrop: CalendarHandlers['handleItemDrop'] = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumnItems = [...(props.items[source.droppableId] ?? [])];
      const destColumnItems = [...(props.items[destination.droppableId] ?? [])];

      const [removed] = sourceColumnItems.splice(source.index, 1);

      destColumnItems.splice(destination.index, 0, removed);

      props.onItemOrderChange?.({
        ...props.items,
        [source.droppableId]: sourceColumnItems,
        [destination.droppableId]: destColumnItems,
      });
    } else {
      const copiedItems = [...props.items[source.droppableId]];

      const [removed] = copiedItems.splice(source.index, 1);

      copiedItems.splice(destination.index, 0, removed);

      props.onItemOrderChange?.({
        ...props.items,
        [source.droppableId]: copiedItems,
      });
    }
  };

  return {
    handlePrevPageChange,
    handleNextPageChange,
    handlePageReset,
    handleItemDrop,
  };
};
