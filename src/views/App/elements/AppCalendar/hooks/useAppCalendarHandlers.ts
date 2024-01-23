import type { AppCalendarHandlers } from './useAppCalendarHandlers.types.ts';
import type { AppCalendarData } from './useAppCalendarData.types.ts';

import * as store from 'store';
import * as dateConstants from '../../../../../constants/date.constants.ts';
import * as utils from 'utils';

import { useStore } from 'store';
import { useTodoCreate, useTodoDelete, useTodoUpdate } from 'utils';
import { useHighlighter, useSidebars } from 'contexts';
import { useCallback } from 'react';

export const useAppCalendarHandlers = ({
  localActions,
}: {
  localActions: AppCalendarData['localActions'];
}): AppCalendarHandlers => {
  const appCalendarState = useStore(store.getAppCalendarState);

  const createTodo = useTodoCreate();
  const updateTodo = useTodoUpdate();
  const deleteTodo = useTodoDelete();

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
    updateTodo.mutate([
      id,
      {
        title,
      },
    ]);
  };

  const handleTodoCompletionToggle: AppCalendarHandlers['handleTodoCompletionToggle'] =
    (id, isDone) => {
      updateTodo.mutate([
        id,
        {
          isDone,
        },
      ]);
    };

  const handleTodoDateChange: AppCalendarHandlers['handleTodoDateChange'] = (
    id,
    date,
  ) => {
    updateTodo.mutate([
      id,
      {
        order: 0,
        date: utils.formatDate(date, {
          format: dateConstants.DATE_FORMATS.API_DATE_TIME_WITH_Z,
        }),
      },
    ]);
  };

  const handleTodoItemAdd: AppCalendarHandlers['handleTodoItemAdd'] = () => {
    appCalendarState.setDate(utils.getToday());

    createTodo.mutate([
      {
        id: utils.getRandomId(),
        title: '',
        content: '',
        date: utils.formatDate(utils.getToday(), {
          format: dateConstants.DATE_FORMATS.API_DATE_TIME_WITH_Z,
        }),
      },
    ]);
  };

  const handleTodoItemDelete: AppCalendarHandlers['handleTodoItemDelete'] = (
    item,
  ) => {
    deleteTodo.mutate([item.id]);
  };

  const handleTodoItemOrderChange: AppCalendarHandlers['handleTodoItemOrderChange'] =
    (todo, todoIndex, date) => {
      updateTodo.mutate([
        todo.id,
        {
          order: todoIndex + 1,
          date: utils.formatDate(date, {
            format: dateConstants.DATE_FORMATS.API_DATE_TIME_WITH_Z,
          }),
        },
      ]);
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
    handleTodoItemDelete,
    handleSearchChange,
    handleSearchFocusToggle,
    handleHighlightedElementRender,
  };
};
