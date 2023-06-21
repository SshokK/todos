import type { ComponentProps } from 'react';
import type { CalendarHandlers } from './useCalendarHandlers.types.ts';
import type { CalendarProps } from '../Calendar.types.ts';

import * as components from 'components';

import { useMemo } from 'react';

export const useCalendarToolbarConfig = ({
  props,

  onPrevPageChange,
  onNextPageChange,
}: {
  props: Pick<CalendarProps, 'toolbarConfig'>;

  onPrevPageChange: CalendarHandlers['handlePrevPageChange'];
  onNextPageChange: CalendarHandlers['handleNextPageChange'];
}): ComponentProps<typeof components.Toolbar>['config'] => {
  return useMemo(
    () => [
      ...[...(props?.toolbarConfig ?? [])],
      {
        key: 'prevPage',
        type: components.TOOLBAR_ELEMENT_TYPE.ACTION,
        props: {
          Icon: components.IconChevronLeft,
          onClick: onPrevPageChange,
        },
      },
      {
        key: 'nextPage',
        type: components.TOOLBAR_ELEMENT_TYPE.ACTION,
        props: {
          Icon: components.IconChevronRight,
          onClick: onNextPageChange,
        },
      },
      {
        key: 'separator2',
        type: components.TOOLBAR_ELEMENT_TYPE.SEPARATOR,
        props: {},
      },
      {
        key: 'search',
        type: components.TOOLBAR_ELEMENT_TYPE.TEXTFIELD,
        props: {
          type: components.TEXTFIELD_TYPE.SECONDARY,
          placeholder: 'Search...',
        },
      },
      {
        key: 'spacing1',
        type: components.TOOLBAR_ELEMENT_TYPE.SPACING,
        props: {
          size: components.TOOLBAR_SPACING_SIZE.XL,
        },
      },
    ],
    [onNextPageChange, onPrevPageChange, props?.toolbarConfig],
  );
};
