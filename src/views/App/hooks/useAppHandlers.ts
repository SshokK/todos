import type { AppHandlers } from './useAppHandlers.types.ts';

import { useSidebarsContext } from 'contexts';
import { useCallback } from 'react';
import { useStore } from 'store';

import * as utils from 'utils';

export const useAppHandlers = (): AppHandlers => {
  const sidebarsContext = useSidebarsContext();
  const store = useStore();

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
    store.setTodoTitle(id, title);
  };

  const handleTodoCompletionToggle: AppHandlers['handleTodoCompletionToggle'] =
    (id, isDone) => {
      store.toggleTodo(id, isDone);
    };

  const handleTodoDateChange: AppHandlers['handleTodoDateChange'] = (
    id,
    date,
  ) => {
    store.setTodoDate(id, date);
  };

  const handleTodoItemAdd: AppHandlers['handleTodoItemAdd'] = () => {
    store.addTodo({
      id: utils.getRandomId(),
      title: '',
      content: '',
      isDone: false,
    });
  };

  const handleTodoItemOrderChange: AppHandlers['handleTodoItemOrderChange'] = (
    todos,
  ) => {
    store.setTodos(todos as Parameters<typeof store.setTodos>[0]);
  };

  return {
    handleMount,
    handleTodoClick,
    handleTodoTitleChange,
    handleTodoCompletionToggle,
    handleTodoDateChange,
    handleTodoItemAdd,
    handleTodoItemOrderChange,
  };
};
