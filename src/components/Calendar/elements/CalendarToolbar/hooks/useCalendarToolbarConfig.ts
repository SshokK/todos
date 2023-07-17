import type { ComponentProps } from 'react';
import type { CalendarToolbarProps } from '../CalendarToolbar.types.ts';

import {
  TOOLBAR_ELEMENT_TYPE,
  TOOLBAR_SPACING_SIZE,
} from '../../../../Toolbar';
import { TEXTFIELD_TYPE } from '../../../../TextField';

import { Toolbar } from '../../../../Toolbar';
import { IconChevronLeft, IconChevronRight } from '../../../../Icons';

import { useMemo } from 'react';

export const useCalendarToolbarConfig = ({
  props,
}: {
  props: Pick<
    CalendarToolbarProps,
    | 'centralVisibleColumnDate'
    | 'config'
    | 'onPrevPageClick'
    | 'onNextPageClick'
    | 'onDateChange'
  >;
}): ComponentProps<typeof Toolbar>['config'] => {
  return useMemo(
    () => [
      ...[...(props?.config ?? [])],
      {
        key: 'prevPage',
        type: TOOLBAR_ELEMENT_TYPE.ACTION,
        props: {
          Icon: IconChevronLeft,
          onClick: props.onPrevPageClick,
        },
      },
      {
        key: 'jumpToDate',
        type: TOOLBAR_ELEMENT_TYPE.DATEPICKER,
        props: {
          value: props.centralVisibleColumnDate,
          onChange: props.onDateChange,
        },
      },
      {
        key: 'nextPage',
        type: TOOLBAR_ELEMENT_TYPE.ACTION,
        props: {
          Icon: IconChevronRight,
          onClick: props.onNextPageClick,
        },
      },
      {
        key: 'separator2',
        type: TOOLBAR_ELEMENT_TYPE.SEPARATOR,
        props: {},
      },
      {
        key: 'search',
        type: TOOLBAR_ELEMENT_TYPE.TEXTFIELD,
        props: {
          type: TEXTFIELD_TYPE.SECONDARY,
          placeholder: 'Search...',
        },
      },
      {
        key: 'spacing1',
        type: TOOLBAR_ELEMENT_TYPE.SPACING,
        props: {
          size: TOOLBAR_SPACING_SIZE.XL,
        },
      },
    ],
    [
      props?.config,
      props.centralVisibleColumnDate,
      props.onDateChange,
      props.onNextPageClick,
      props.onPrevPageClick,
    ],
  );
};
