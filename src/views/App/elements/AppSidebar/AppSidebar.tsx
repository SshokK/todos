import type { FC } from 'react';
import type { AppSidebarProps } from './AppSidebar.types.ts';

import * as components from 'components';
import * as styles from './AppSidebar.styles.ts';

import { getTodoById, useStore } from 'store';
import { useAppSidebarHandlers } from './hooks';

export const AppSidebar: FC<AppSidebarProps> = ({ todoId }) => {
  const todo = useStore(getTodoById(todoId));

  const handlers = useAppSidebarHandlers({
    props: {
      todoId,
    },
  });

  return (
    <div className={styles.CLASSNAMES.container}>
      <components.Separator />
      <components.Typography type={components.TYPOGRAPHY_TYPE.TITLE_1}>
        {todo?.title}
      </components.Typography>
      <components.Typography type={components.TYPOGRAPHY_TYPE.BODY}>
        <components.RichTextEditor
          value={todo?.content}
          onChange={handlers.handleTodoContentChange}
          placeholder="Description..."
        />
      </components.Typography>
    </div>
  );
};
