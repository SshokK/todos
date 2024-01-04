import type { TodoCardProps } from '../TodoCard.types.ts';
import type { TodoCardHandlers } from './useTodoCardHandlers.types.ts';

import * as store from 'store';
import * as utils from 'utils';
import * as dateConstants from '../../../../../../../../../constants/date.constants.ts';

export const useTodoCardHandlers = ({
  props,
}: {
  props: Pick<TodoCardProps, 'todo' | 'date'>;
}): TodoCardHandlers => {
  const appCalendarStore = store.useStore(store.getAppCalendarState);

  const handleTodoClick: TodoCardHandlers['handleTodoClick'] = () => {
    if (
      Math.abs(
        utils.getDiff({
          dateA: appCalendarStore.date,
          dateB: props.date,
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }),
      ) > 1
    ) {
      appCalendarStore.setDate(props.date);
    }

    appCalendarStore.setHighlightedTodo(props.todo.id);
  };

  return {
    handleTodoClick,
  };
};
