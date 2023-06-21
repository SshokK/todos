import type { AppHandlers } from './useAppHandlers.types.ts';

import { useSidebarsContext, useTodosContext } from 'contexts';
import { useCallback } from 'react';

export const useAppHandlers = (): AppHandlers => {
  const sidebarsContext = useSidebarsContext();
  const todosContext = useTodosContext();

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
    title,
    changedTodo,
  ) => {
    todosContext.setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === changedTodo.id) {
          return {
            ...todo,
            title,
          };
        }

        return todo;
      }),
    );
  };

  const handleTodoCompletionToggle: AppHandlers['handleTodoCompletionToggle'] =
    (isDone, changedTodo) => {
      todosContext.setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === changedTodo.id) {
            return {
              ...todo,
              isDone,
            };
          }

          return todo;
        }),
      );
    };

  const handleTodoDeletion: AppHandlers['handleTodoDeletion'] = (
    changedTodo,
  ) => {
    todosContext.setTodos((todos) =>
      todos.flatMap((todo) => {
        if (todo.id === changedTodo.id) {
          return [];
        }

        return [todo];
      }),
    );
  };

  const handleTodoItemAdd: AppHandlers['handleTodoItemAdd'] = () => {
    todosContext.setTodos((todos) => [
      ...todos,
      {
        id: Math.random(),
        title: '',
        content: '',
        date: new Date().toDateString(),
        isDone: false,
      },
    ]);
  };

  return {
    handleMount,
    handleTodoClick,
    handleTodoTitleChange,
    handleTodoCompletionToggle,
    handleTodoDeletion,
    handleTodoItemAdd,
  };
};
