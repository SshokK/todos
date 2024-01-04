import type { CalendarRowHandlers } from './useCalendarRowHandlers.types.ts';

import { useEffect } from 'react';
import { useDidMount } from 'utils';

export const useCalendarRowLifecycle = ({
  onMount,
  onRowIsHighlighted,
}: {
  onMount: CalendarRowHandlers['handleMount'];
  onRowIsHighlighted: CalendarRowHandlers['handleRowIsHighlighted'];
}) => {
  useDidMount(onMount);
  useEffect(onRowIsHighlighted, [onRowIsHighlighted]);
};
