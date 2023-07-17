import type { CalendarColumnsAnimationProps } from '../CalendarColumnsAnimation.types.ts';

export type CalendarColumnsAnimationFormattedData = {
  isFadeEnabled: boolean;
  prevDates: CalendarColumnsAnimationProps['dates'];
};

export type CalendarColumnsAnimationData = {
  formattedData: CalendarColumnsAnimationFormattedData;
};
