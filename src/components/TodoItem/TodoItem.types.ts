import type { Todo } from '../../contexts';

export type TodoItemProps = {
  todo: Todo;
  isCompact?: boolean;
  onClick?: (todo: Todo) => void;
  onDelete?: (todo: Todo) => void;
  onTitleChange?: (title: string, todo: Todo) => void;
  onCompletionToggle?: (isDone: boolean, todo: Todo) => void;
};
