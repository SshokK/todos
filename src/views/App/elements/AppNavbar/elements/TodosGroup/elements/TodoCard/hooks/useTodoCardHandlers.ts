import type { TodoCardProps } from '../TodoCard.types.ts';
import type { TodoCardHandlers } from './useTodoCardHandlers.types.ts';

import * as utils from 'utils';
import * as dateConstants from '../../../../../../../../../constants/date.constants.ts';

import { useAppCalendar } from 'contexts';

export const useTodoCardHandlers = ({
  props,
}: {
  props: Pick<TodoCardProps, 'todo' | 'date'>;
}): TodoCardHandlers => {
  const appCalendar = useAppCalendar();

  const handleTodoClick: TodoCardHandlers['handleTodoClick'] = () => {
    if (
      Math.abs(
        utils.getDiff({
          dateA: appCalendar.date,
          dateB: props.date,
          granularity: dateConstants.DATE_GRANULARITY.DAY,
        }),
      ) > 1
    ) {
      appCalendar.setDate(props.date);
    }

    appCalendar.setHighlightedTodoId(props.todo.id);
  };

  return {
    handleTodoClick,
  };
};
