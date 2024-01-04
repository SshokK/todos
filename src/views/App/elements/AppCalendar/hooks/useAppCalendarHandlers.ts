import type { AppCalendarHandlers } from './useAppCalendarHandlers.types.ts';
import type { AppCalendarData } from './useAppCalendarData.types.ts';

import * as store from 'store';
import * as utils from 'utils';

import { useHighlighter, useSidebars } from 'contexts';
import { useCallback } from 'react';
import { useStore } from 'store';

export const useAppCalendarHandlers = ({
  localActions,
}: {
  localActions: AppCalendarData['localActions'];
}): AppCalendarHandlers => {
  const appCalendarState = useStore(store.getAppCalendarState);
  const todosState = useStore(store.getTodosState);

  const sidebars = useSidebars();
  const highlighter = useHighlighter({
    onHighlightEnd: () => appCalendarState.setHighlightedTodo(null),
  });

  const handleDateChange: AppCalendarHandlers['handleDateChange'] = useCallback(
    (date) => {
      appCalendarState.setDate(date);
    },
    [appCalendarState],
  );

  const handleTodoClick: AppCalendarHandlers['handleTodoClick'] =
    (sidebarElement) => () => {
      sidebars.sidebar.setTitle('Details');
      sidebars.sidebar.setElement(sidebarElement);
      sidebars.sidebar.setIsOpen(true);
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
    appCalendarState.setDate(utils.getToday());

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

  const handleHighlightedElementRender: AppCalendarHandlers['handleHighlightedElementRender'] =
    useCallback(
      (_, element) => {
        highlighter.setElement(element);
      },
      [highlighter],
    );

  return {
    handleDateChange,
    handleTodoClick,
    handleTodoTitleChange,
    handleTodoCompletionToggle,
    handleTodoDateChange,
    handleTodoItemAdd,
    handleTodoItemOrderChange,
    handleSearchChange,
    handleSearchFocusToggle,
    handleHighlightedElementRender,
  };
};
