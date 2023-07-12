import type { TodoItemHandlers } from './useTodoItemHandlers.types.ts';
import type { TodoItemProps } from '../TodoItem.types.ts';

export const useTodoItemHandlers = ({
  props,
}: {
  props: Pick<
    TodoItemProps,
    | 'id'
    | 'isDone'
    | 'onClick'
    | 'onDateChange'
    | 'onCompletionToggle'
    | 'onTitleChange'
  >;
}): TodoItemHandlers => {
  const handleSidebarOpen: TodoItemHandlers['handleSidebarOpen'] = () => {
    props.onClick?.(props.id);
  };

  const handleTitleChange: TodoItemHandlers['handleTitleChange'] = (title) => {
    props.onTitleChange?.(props.id, title);
  };

  const handleCompletionToggle: TodoItemHandlers['handleCompletionToggle'] =
    () => {
      props.onCompletionToggle?.(props.id, !props.isDone);
    };

  const handleDateChange: TodoItemHandlers['handleDateChange'] = (date) => {
    props.onDateChange?.(props.id, date ?? new Date());
  };

  return {
    handleSidebarOpen,
    handleTitleChange,
    handleCompletionToggle,
    handleDateChange,
  };
};
