import type { ComponentProps } from 'react';
import type { DatePicker } from '../../DatePicker';
import type * as elements from '../elements';

export type TodoItemHandlers = {
  handleSidebarOpen: () => void;
  handleTitleChange: ComponentProps<typeof elements.Header>['onTitleChange'];
  handleCompletionToggle: () => void;
  handleDateChange: ComponentProps<typeof DatePicker>['onChange'];
};
