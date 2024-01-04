import type { CalendarRowProps } from '../CalendarRow.types.ts';
import type { CalendarRowHandlers } from './useCalendarRowHandlers.types.ts';
import type { CalendarRowData } from './useCalendarRowData.types.ts';

import { useCallback } from 'react';
import { usePreviousValue } from 'utils';

export const useCalendarRowHandlers = ({
  props,
  refs,
}: {
  props: Pick<
    CalendarRowProps,
    'onHighlightedElementRender' | 'isHighlighted' | 'item'
  >;
  refs: CalendarRowData['refs'];
}): CalendarRowHandlers => {
  const { onHighlightedElementRender } = props;

  const prevProps = usePreviousValue(props);

  const handleMount: CalendarRowHandlers['handleMount'] = () => {
    if (props.isHighlighted && refs.containerRef.current) {
      onHighlightedElementRender?.(props.item, refs.containerRef.current);
    }
  };

  const handleRowIsHighlighted: CalendarRowHandlers['handleRowIsHighlighted'] =
    useCallback(() => {
      if (
        prevProps.isHighlighted !== props.isHighlighted &&
        props.isHighlighted &&
        refs.containerRef.current
      ) {
        onHighlightedElementRender?.(props.item, refs.containerRef.current);
      }
    }, [
      onHighlightedElementRender,
      prevProps.isHighlighted,
      props.isHighlighted,
      props.item,
      refs.containerRef,
    ]);

  return {
    handleMount,
    handleRowIsHighlighted,
  };
};
