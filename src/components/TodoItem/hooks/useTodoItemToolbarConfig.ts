import type { ComponentProps } from 'react';
import type { TodoItemHandlers } from './useTodoItemHandlers.types.ts';
import type { TodoItemProps } from '../TodoItem.types.ts';

import { TOOLBAR_ELEMENT_TYPE } from '../../Toolbar';

import { Toolbar } from '../../Toolbar';

import { useMemo } from 'react';

export const useTodoItemToolbarConfig = ({
  props,
  onDateChange,
}: {
  props: Pick<TodoItemProps, 'date'>;
  onDateChange: TodoItemHandlers['handleDateChange'];
}) => {
  return useMemo(() => {
    const config: ComponentProps<typeof Toolbar>['config'] = [];

    config.push({
      key: 'changeDate',
      type: TOOLBAR_ELEMENT_TYPE.DATEPICKER,
      props: {
        value: props.date,
        onChange: onDateChange,
      },
    });

    return config;
  }, [onDateChange, props.date]);
};
