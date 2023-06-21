import type { ComponentProps } from 'react';
import type { TextField } from '../../TextField';

export type TodoItemHandlers = {
  handleSidebarOpen: () => void;
  handleTitleChange: ComponentProps<typeof TextField>['onChange'];
  handleCompletionToggle: () => void;
  handleDeletion: () => void;
};
