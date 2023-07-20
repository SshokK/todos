import type { FC } from 'react';

import * as components from 'components';
import * as store from 'store';

import { useStore } from 'store';

export const AppCalendarAdditionalToolbar: FC = () => {
  const todosState = useStore(store.getTodosState);

  return (
    <components.Tooltip title="Delete empty items">
      <components.IconButton
        type={components.ICON_BUTTON_TYPE.SECONDARY}
        Icon={components.IconCircleBackslash}
        size={components.ICON_BUTTON_SIZE.LG}
        onClick={todosState.deleteEmptyTodos}
      />
    </components.Tooltip>
  );
};
