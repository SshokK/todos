import type { TodoItemHandlers } from './useTodoItemHandlers.types.ts';
import type { TodoItemProps } from '../TodoItem.types.ts';

export const useTodoItemHandlers = ({
  props,
}: {
  props: Pick<
    TodoItemProps,
    'todo' | 'onClick' | 'onDelete' | 'onCompletionToggle' | 'onTitleChange'
  >;
}): TodoItemHandlers => {
  const handleSidebarOpen: TodoItemHandlers['handleSidebarOpen'] = () => {
    props.onClick?.(props.todo);
  };

  const handleTitleChange: TodoItemHandlers['handleTitleChange'] = (title) => {
    props.onTitleChange?.(title, props.todo);
  };

  const handleCompletionToggle: TodoItemHandlers['handleCompletionToggle'] =
    () => {
      props.onCompletionToggle?.(!props.todo.isDone, props.todo);
    };

  const handleDeletion: TodoItemHandlers['handleDeletion'] = () => {
    props.onDelete?.(props.todo);
  };

  return {
    handleSidebarOpen,
    handleTitleChange,
    handleCompletionToggle,
    handleDeletion,
  };
};
