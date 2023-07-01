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
    | 'onDelete'
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

  const handleDeletion: TodoItemHandlers['handleDeletion'] = () => {
    props.onDelete?.(props.id);
  };

  return {
    handleSidebarOpen,
    handleTitleChange,
    handleCompletionToggle,
    handleDeletion,
  };
};
