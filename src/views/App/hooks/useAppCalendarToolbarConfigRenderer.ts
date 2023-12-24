import type { ComponentProps } from 'react';
import type { AppHandlers } from './useAppHandlers.types.ts';

import * as components from 'components';
import * as constants from '../App.constants.ts';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useAppCalendarToolbarConfigRenderer = ({
  onTodoItemAdd,
  onSearchChange,
}: {
  onTodoItemAdd: AppHandlers['handleTodoItemAdd'];
  onSearchChange: AppHandlers['handleSearchChange'];
}): Required<
  ComponentProps<typeof components.Calendar>
>['onToolbarConfigRender'] => {
  const { t } = useTranslation();

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
            changeCallbackThrottleTime: constants.SEARCH_DEBOUNCE_TIME,
            placeholder: t('views.App.calendarSearchPlaceholder', 'Search...'),
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
    [onSearchChange, onTodoItemAdd, t],
  );
};
