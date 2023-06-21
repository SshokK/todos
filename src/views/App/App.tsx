import type { FC } from 'react';

import * as components from 'components';
import * as elements from './elements';

import { useTodosContext } from 'contexts';
import { useAppHandlers, useAppLifecycle } from './hooks';

export const App: FC = () => {
  const todosContext = useTodosContext();

  const handlers = useAppHandlers();

  useAppLifecycle({
    onMount: handlers.handleMount(<elements.AppNavbar />),
  });

  return (
    <>
      <components.Typography
        type={components.TYPOGRAPHY_TYPE.TITLE_2}
        size={components.TYPOGRAPHY_SIZE.XL}
      >
        To do items
      </components.Typography>
      <div className="flex h-full w-full flex-col gap-4">
        <components.Calendar
          toolbarConfig={[
            {
              key: 'add',
              type: components.TOOLBAR_ELEMENT_TYPE.ACTION,
              props: {
                Icon: components.IconPlus,
                onClick: handlers.handleTodoItemAdd,
              },
            },
            {
              key: 'separator1',
              type: components.TOOLBAR_ELEMENT_TYPE.SEPARATOR,
              props: {},
            },
          ]}
          columnsCount={3}
          className="h-full"
          ItemComponent={components.TodoItem}
          items={todosContext.todos.map((todo) => ({
            id: todo.id,
            date: todo.date,
            todo: todo,
            onDelete: handlers.handleTodoDeletion,
            onCompletionToggle: handlers.handleTodoCompletionToggle,
            onTitleChange: handlers.handleTodoTitleChange,
            onClick: handlers.handleTodoClick(
              <elements.AppSidebar todoId={todo.id} />,
            ),
          }))}
        />
      </div>
    </>
  );
};
