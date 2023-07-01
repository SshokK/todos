import type * as components from '../../components';
import type { ComponentProps } from 'react';

export type ItemForCalendar = components.CalendarItem &
  ComponentProps<typeof components.TodoItem>;
