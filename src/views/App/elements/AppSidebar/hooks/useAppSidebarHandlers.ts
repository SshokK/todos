import type { AppSidebarHandlers } from './useAppSidebarHandlers.types.ts';
import type { AppSidebarProps } from '../AppSidebar.types.ts';

import * as store from 'store';

import { useStore } from 'store';

export const useAppSidebarHandlers = ({
  props,
}: {
  props: Pick<AppSidebarProps, 'todoId'>;
}): AppSidebarHandlers => {
  const todosState = useStore(store.getTodosState);

  const handleTodoContentChange: AppSidebarHandlers['handleTodoContentChange'] =
    (value) => {
      todosState.setTodoContent(props.todoId, value);
    };

  return {
    handleTodoContentChange,
  };
};
