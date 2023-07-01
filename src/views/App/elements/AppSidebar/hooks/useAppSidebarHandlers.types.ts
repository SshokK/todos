import type { ComponentProps } from 'react';
import type * as components from 'components';

export type AppSidebarHandlers = {
  handleTodoContentChange: Required<
    ComponentProps<typeof components.RichTextEditor>
  >['onChange'];
};
