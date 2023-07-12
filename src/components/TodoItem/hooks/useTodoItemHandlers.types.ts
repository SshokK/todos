import type { ComponentProps } from 'react';
import type { TextField } from '../../TextField';
import type { DatePicker } from '../../DatePicker';

export type TodoItemHandlers = {
  handleSidebarOpen: () => void;
  handleTitleChange: ComponentProps<typeof TextField>['onChange'];
  handleCompletionToggle: () => void;
  handleDateChange: ComponentProps<typeof DatePicker>['onChange'];
};
