import type { Todo } from '../todos';

export type AppCalendarState = {
  date: Date;
  highlightedTodo: Todo['id'] | null;
  setDate: (date: Date) => void;
  setHighlightedTodo: (id: Todo['id'] | null) => void;
};
