export type TodoItemProps = {
  id: string;
  title: string;
  isDone: boolean;
  order?: number;
  isCompact?: boolean;
  onClick?: (id: TodoItemProps['id']) => void;
  onDelete?: (id: TodoItemProps['id']) => void;
  onTitleChange?: (id: TodoItemProps['id'], title: string) => void;
  onCompletionToggle?: (id: TodoItemProps['id'], isDone: boolean) => void;
};
