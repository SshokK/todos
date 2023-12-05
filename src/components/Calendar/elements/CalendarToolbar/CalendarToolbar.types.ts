import type { ComponentProps, ReactNode } from 'react';
import type { Toolbar } from '../../../Toolbar';

export type CalendarToolbarProps = {
  date: Date;
  onConfigRender?: (
    config: Required<ComponentProps<typeof Toolbar>>['config'],
  ) => Required<ComponentProps<typeof Toolbar>>['config'];
  onPrevPageClick?: () => void;
  onNextPageClick?: () => void;
  onPageReset?: () => void;
  onJumpToDate?: (date: Date | null) => void;
  children?: ReactNode;
};
