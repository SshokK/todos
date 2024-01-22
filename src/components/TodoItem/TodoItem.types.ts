import type { Todo } from '../../utils';

export type TodoItemProps = {
  id: Todo['id'];
  title: Todo['title'];
  isDone: Todo['isDone'];
  date: Todo['date'];
  onClick?: (id: TodoItemProps['id']) => void;
  onDateChange?: (id: TodoItemProps['id'], date: Date) => void;
  onTitleChange?: (id: TodoItemProps['id'], title: string) => void;
  onCompletionToggle?: (id: TodoItemProps['id'], isDone: boolean) => void;
};
