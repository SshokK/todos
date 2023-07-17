import type { CalendarHandlers } from './useCalendarHandlers.types.ts';

import { useEffect } from 'react';

export const useCalendarLifecycle = ({
  onDateChange,
  onDatePropChange,
}: {
  onDateChange: CalendarHandlers['handleDateChange'];
  onDatePropChange: CalendarHandlers['handleDatePropChange'];
}) => {
  useEffect(onDateChange, [onDateChange]);
  useEffect(onDatePropChange, [onDatePropChange]);
};
