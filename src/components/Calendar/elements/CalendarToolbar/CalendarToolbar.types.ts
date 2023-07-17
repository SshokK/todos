import type { ComponentProps } from 'react';
import type { Toolbar } from '../../../Toolbar';

export type CalendarToolbarProps = {
  date: Date;
  config?: ComponentProps<typeof Toolbar>['config'];
  onPrevPageClick?: () => void;
  onNextPageClick?: () => void;
  onPageReset?: () => void;
  onJumpToDate?: (date: Date | null) => void;
};
