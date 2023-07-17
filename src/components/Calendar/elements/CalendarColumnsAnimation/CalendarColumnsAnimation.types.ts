import type { ReactNode } from 'react';

export type CalendarColumnsAnimationProps = {
  dates: Date[];
  children: (date: Date, i: number, dates: Date[]) => ReactNode;
};
