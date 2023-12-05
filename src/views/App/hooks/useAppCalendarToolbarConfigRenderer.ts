import type { ComponentProps } from 'react';
import type { AppHandlers } from './useAppHandlers.types.ts';

import * as components from 'components';

import { useCallback } from 'react';

export const useAppCalendarToolbarConfigRenderer = ({
  onTodoItemAdd,
  onSearchChange,
}: {
  onTodoItemAdd: AppHandlers['handleTodoItemAdd'];
  onSearchChange: AppHandlers['handleSearchChange'];
}): Required<
  ComponentProps<typeof components.Calendar>
>['onToolbarConfigRender'] => {
  return useCallback(
    (calendarToolbarConfig) => {
      return [
        {
          key: 'add',
          type: components.TOOLBAR_ELEMENT_TYPE.ACTION,
          props: {
            Icon: components.IconPlus,
            onClick: onTodoItemAdd,
          },
        },
        {
          key: 'separator1',
          type: components.TOOLBAR_ELEMENT_TYPE.SEPARATOR,
          props: {},
        },
        ...calendarToolbarConfig,
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
            onChange: onSearchChange,
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
      ];
    },
    [onSearchChange, onTodoItemAdd],
  );
};
