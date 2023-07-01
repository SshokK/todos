import type { AppSidebarHandlers } from './useAppSidebarHandlers.types.ts';
import type { AppSidebarProps } from '../AppSidebar.types.ts';

import { useStore } from 'store';

export const useAppSidebarHandlers = ({
  props,
}: {
  props: Pick<AppSidebarProps, 'todoId'>;
}): AppSidebarHandlers => {
  const store = useStore();

  const handleTodoContentChange: AppSidebarHandlers['handleTodoContentChange'] =
    (value) => {
      store.setTodoContent(props.todoId, value);
    };

  return {
    handleTodoContentChange,
  };
};
