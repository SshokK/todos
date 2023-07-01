import type { ComponentProps } from 'react';
import type { AppHandlers } from './useAppHandlers.types.ts';

import * as components from 'components';

import { useMemo } from 'react';

export const useAppCalendarToolbarConfig = ({
  onTodoItemAdd,
}: {
  onTodoItemAdd: AppHandlers['handleTodoItemAdd'];
}): Required<ComponentProps<typeof components.Calendar>>['toolbarConfig'] => {
  return useMemo(
    () => [
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
    ],
    [onTodoItemAdd],
  );
};
