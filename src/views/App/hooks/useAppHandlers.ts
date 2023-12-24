import type { AppHandlers } from './useAppHandlers.types.ts';
import type { AppData } from './useAppData.types.ts';

import * as store from 'store';
import * as utils from 'utils';

import { useSidebarsContext } from 'contexts';
import { useCallback } from 'react';
import { useStore } from 'store';

export const useAppHandlers = ({
  localActions,
}: {
  localActions: AppData['localActions'];
}): AppHandlers => {
  const sidebarsContext = useSidebarsContext();
  const todosState = useStore(store.getTodosState);

  const handleMount: AppHandlers['handleMount'] = useCallback(
    (navbarElement) => () => {
      sidebarsContext.navbar.setElement(navbarElement);
    },
    [sidebarsContext.navbar],
  );

  const handleTodoClick: AppHandlers['handleTodoClick'] =
    (sidebarElement) => () => {
      sidebarsContext.sidebar.setTitle('Details');
      sidebarsContext.sidebar.setElement(sidebarElement);

      sidebarsContext.sidebar.setIsOpen(true);
      // sidebarsContext.navbar.setIsOpen(false);
    };

  const handleTodoTitleChange: AppHandlers['handleTodoTitleChange'] = (
    id,
    title,
  ) => {
    todosState.setTodoTitle(id, title);
  };

  const handleTodoCompletionToggle: AppHandlers['handleTodoCompletionToggle'] =
    (id, isDone) => {
      todosState.toggleTodo(id, isDone);
    };

  const handleTodoDateChange: AppHandlers['handleTodoDateChange'] = (
    id,
    date,
  ) => {
    todosState.setTodoDate(id, date);
  };

  const handleTodoItemAdd: AppHandlers['handleTodoItemAdd'] = () => {
    localActions.setCalendarDate(utils.getToday());

    todosState.addTodo({
      id: utils.getRandomId(),
      title: '',
      content: '',
      isDone: false,
    });
  };

  const handleTodoItemOrderChange: AppHandlers['handleTodoItemOrderChange'] = (
    todos,
  ) => {
    todosState.setTodos(todos as Parameters<typeof todosState.setTodos>[0]);
  };

  const handleSearchChange: AppHandlers['handleSearchChange'] = useCallback(
    (value) => {
      console.log('123');
      localActions.setSearchString(value);
    },
    [localActions],
  );

  return {
    handleMount,
    handleTodoClick,
    handleTodoTitleChange,
    handleTodoCompletionToggle,
    handleTodoDateChange,
    handleTodoItemAdd,
    handleTodoItemOrderChange,
    handleSearchChange,
  };
};
