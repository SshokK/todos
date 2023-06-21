import type { FC } from 'react';
import type { AppSidebarProps } from './AppSidebar.types.ts';

import * as components from 'components';
import * as styles from './AppSidebar.styles.ts';

import { useTodosContext } from 'contexts';

export const AppSidebar: FC<AppSidebarProps> = ({ todoId }) => {
  const todosContext = useTodosContext();

  return (
    <div className={styles.CLASSNAMES.container}>
      <components.Separator />
      <components.Typography type={components.TYPOGRAPHY_TYPE.TITLE_1}>
        {todosContext.todos.find((todo) => todo.id === todoId)?.title}
      </components.Typography>
      <components.Typography type={components.TYPOGRAPHY_TYPE.BODY}>
        {todosContext.todos.find((todo) => todo.id === todoId)?.content}
      </components.Typography>
    </div>
  );
};
