import type { AppSidebarHandlers } from './useAppSidebarHandlers.types.ts';
import type { AppSidebarProps } from '../AppSidebar.types.ts';

export const useAppSidebarHandlers = ({
  props,
}: {
  props: Pick<AppSidebarProps, 'todoId'>;
}): AppSidebarHandlers => {
  const handleTodoContentChange: AppSidebarHandlers['handleTodoContentChange'] =
    (value) => {
      console.log(props.todoId, value);
    };

  return {
    handleTodoContentChange,
  };
};
