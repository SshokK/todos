import type { AppCalendarHandlers } from './useAppCalendarHandlers.types.ts';
import type { AppCalendarData } from './useAppCalendarData.types.ts';

import * as store from 'store';
import * as utils from 'utils';

import { useSidebarsContext } from 'contexts';
import { useCallback } from 'react';
import { useStore } from 'store';

export const useAppCalendarHandlers = ({
  localActions,
}: {
  localActions: AppCalendarData['localActions'];
}): AppCalendarHandlers => {
  const sidebarsContext = useSidebarsContext();
  const todosState = useStore(store.getTodosState);

  const handleTodoClick: AppCalendarHandlers['handleTodoClick'] =
    (sidebarElement) => () => {
      sidebarsContext.sidebar.setTitle('Details');
      sidebarsContext.sidebar.setElement(sidebarElement);

      sidebarsContext.sidebar.setIsOpen(true);
      // sidebarsContext.navbar.setIsOpen(false);
    };

  const handleTodoTitleChange: AppCalendarHandlers['handleTodoTitleChange'] = (
    id,
    title,
  ) => {
    todosState.setTodoTitle(id, title);
  };

  const handleTodoCompletionToggle: AppCalendarHandlers['handleTodoCompletionToggle'] =
    (id, isDone) => {
      todosState.toggleTodo(id, isDone);
    };

  const handleTodoDateChange: AppCalendarHandlers['handleTodoDateChange'] = (
    id,
    date,
  ) => {
    todosState.setTodoDate(id, date);
  };

  const handleTodoItemAdd: AppCalendarHandlers['handleTodoItemAdd'] = () => {
    localActions.setCalendarDate(utils.getToday());

    todosState.addTodo({
      id: utils.getRandomId(),
      title: '',
      content: '',
      isDone: false,
    });
  };

  const handleTodoItemOrderChange: AppCalendarHandlers['handleTodoItemOrderChange'] =
    (todos) => {
      todosState.setTodos(todos as Parameters<typeof todosState.setTodos>[0]);
    };

  const handleSearchChange: AppCalendarHandlers['handleSearchChange'] =
    useCallback(
      (value) => {
        localActions.setSearchString(value);
        localActions.setIsSearchFocused(true);
      },
      [localActions],
    );

  const handleSearchFocusToggle: AppCalendarHandlers['handleSearchFocusToggle'] =
    useCallback(
      (isFocused) => () => {
        localActions.setIsSearchFocused(isFocused);
      },
      [localActions],
    );

  return {
    handleTodoClick,
    handleTodoTitleChange,
    handleTodoCompletionToggle,
    handleTodoDateChange,
    handleTodoItemAdd,
    handleTodoItemOrderChange,
    handleSearchChange,
    handleSearchFocusToggle,
  };
};
