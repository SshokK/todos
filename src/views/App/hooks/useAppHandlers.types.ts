import type { ComponentProps, ReactNode } from 'react';
import type * as components from 'components';

export type AppHandlers = {
  handleMount: (navbarElement: ReactNode) => () => void;

  handleTodoClick: (
    sidebarElement: ReactNode,
  ) => ComponentProps<typeof components.TodoItem>['onClick'];

  handleTodoTitleChange: ComponentProps<
    typeof components.TodoItem
  >['onTitleChange'];

  handleTodoDeletion: ComponentProps<typeof components.TodoItem>['onDelete'];

  handleTodoItemAdd: () => void;

  handleTodoItemOrderChange: ComponentProps<
    typeof components.Calendar
  >['onItemOrderChange'];

  handleTodoCompletionToggle: ComponentProps<
    typeof components.TodoItem
  >['onCompletionToggle'];
};
