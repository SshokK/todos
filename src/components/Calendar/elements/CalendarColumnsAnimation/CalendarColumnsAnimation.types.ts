import type { ReactNode } from 'react';

export type CalendarColumnsAnimationProps = {
  dates: Date[];
  children: (date: Date, i: number) => ReactNode;
  classNames?: {
    columnContainer?: string;
    separator?: string;
  };
};
