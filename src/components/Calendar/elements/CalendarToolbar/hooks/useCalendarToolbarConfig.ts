import type { ComponentProps } from 'react';
import type { CalendarToolbarProps } from '../CalendarToolbar.types.ts';

import { TOOLBAR_ELEMENT_TYPE } from '../../../../Toolbar';

import { Toolbar } from '../../../../Toolbar';
import { IconChevronLeft, IconChevronRight } from '../../../../Icons';

import { useMemo } from 'react';

export const useCalendarToolbarConfig = ({
  props,
}: {
  props: Pick<
    CalendarToolbarProps,
    | 'date'
    | 'onConfigRender'
    | 'onPrevPageClick'
    | 'onNextPageClick'
    | 'onJumpToDate'
  >;
}): ComponentProps<typeof Toolbar>['config'] => {
  const { onConfigRender, onPrevPageClick, onNextPageClick, onJumpToDate } =
    props;

  return useMemo(() => {
    const calendarToolbarConfig: ComponentProps<typeof Toolbar>['config'] = [
      {
        key: 'prevPage',
        type: TOOLBAR_ELEMENT_TYPE.ACTION,
        props: {
          Icon: IconChevronLeft,
          onClick: onPrevPageClick,
        },
      },
      {
        key: 'jumpToDate',
        type: TOOLBAR_ELEMENT_TYPE.DATEPICKER,
        props: {
          value: props.date,
          onChange: onJumpToDate,
        },
      },
      {
        key: 'nextPage',
        type: TOOLBAR_ELEMENT_TYPE.ACTION,
        props: {
          Icon: IconChevronRight,
          onClick: onNextPageClick,
        },
      },
    ];

    return onConfigRender
      ? onConfigRender(calendarToolbarConfig)
      : calendarToolbarConfig;
  }, [
    onPrevPageClick,
    props.date,
    onJumpToDate,
    onNextPageClick,
    onConfigRender,
  ]);
};
