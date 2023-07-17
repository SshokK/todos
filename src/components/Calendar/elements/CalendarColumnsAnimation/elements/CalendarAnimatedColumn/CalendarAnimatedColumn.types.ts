import type { ReactNode } from 'react';

export type CalendarAnimatedColumnProps = {
  prevDates: Date[];
  date: Date;
  index: number;
  isFadeEnabled: boolean;
  children: ReactNode;
};
