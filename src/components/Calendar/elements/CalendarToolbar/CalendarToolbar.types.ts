import type { ComponentProps } from 'react';
import type { Toolbar } from '../../../Toolbar';

export type CalendarToolbarProps = {
  centralVisibleColumnDate: Date;
  config?: ComponentProps<typeof Toolbar>['config'];
  onPrevPageClick?: () => void;
  onNextPageClick?: () => void;
  onPageReset?: () => void;
  onDateChange?: (date: Date | null) => void;
};
