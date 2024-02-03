import type { ComponentProps, ReactNode } from 'react';
import type * as components from 'components';

export type AppCalendarHandlers = {
  handleItemsFetch: Required<
    Required<ComponentProps<typeof components.Calendar>>['queryOptions']
  >['queryFn'];

  handleDateChange: Required<
    ComponentProps<typeof components.Calendar>
  >['onDateChange'];

  handleTodoClick: (
    sidebarElement: ReactNode,
  ) => ComponentProps<typeof components.TodoItem>['onClick'];

  handleTodoTitleChange: ComponentProps<
    typeof components.TodoItem
  >['onTitleChange'];

  handleTodoDateChange: ComponentProps<
    typeof components.TodoItem
  >['onDateChange'];

  handleTodoItemAdd: () => void;

  handleTodoItemOrderChange: ComponentProps<
    typeof components.Calendar
  >['onItemOrderChange'];

  handleTodoItemDelete: ComponentProps<
    typeof components.Calendar
  >['onItemDelete'];

  handleTodoCompletionToggle: ComponentProps<
    typeof components.TodoItem
  >['onCompletionToggle'];

  handleSearchChange: Required<
    ComponentProps<typeof components.TextField>
  >['onChange'];

  handleSearchFocusToggle: (
    isFocused: boolean,
  ) =>
    | Required<ComponentProps<typeof components.TextField>>['onBlur']
    | Required<ComponentProps<typeof components.TextField>>['onFocus'];

  handleHighlightedElementRender: Required<
    ComponentProps<typeof components.Calendar>
  >['onHighlightedElementRender'];
};
