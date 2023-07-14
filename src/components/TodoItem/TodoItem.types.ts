export type TodoItemProps = {
  id: string;
  title: string;
  isDone: boolean;
  date: Date;
  order?: number;
  onClick?: (id: TodoItemProps['id']) => void;
  onDateChange?: (id: TodoItemProps['id'], date: Date) => void;
  onTitleChange?: (id: TodoItemProps['id'], title: string) => void;
  onCompletionToggle?: (id: TodoItemProps['id'], isDone: boolean) => void;
};
