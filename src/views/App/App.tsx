import type { FC } from 'react';

import * as components from 'components';
import * as elements from './elements';
import * as styles from './App.styles.ts';

import {
  useAppData,
  useAppCalendarToolbarConfig,
  useAppHandlers,
  useAppLifecycle,
} from './hooks';

export const App: FC = () => {
  const { storeData } = useAppData();

  const handlers = useAppHandlers();

  const calendarToolbarConfig = useAppCalendarToolbarConfig({
    onTodoItemAdd: handlers.handleTodoItemAdd,
  });

  useAppLifecycle({
    onMount: handlers.handleMount(<elements.AppNavbar />),
  });

  return (
    <>
      <components.Typography
        type={components.TYPOGRAPHY_TYPE.TITLE_2}
        size={components.TYPOGRAPHY_SIZE.XL}
        className={styles.CLASSNAMES.heading}
      >
        To do items
      </components.Typography>
      <div className={styles.CLASSNAMES.calendarContainer}>
        <components.Calendar
          toolbarConfig={calendarToolbarConfig}
          onItemOrderChange={handlers.handleTodoItemOrderChange}
          items={storeData.todos}
          ItemComponent={components.TodoItem}
          itemComponentProps={{
            onDateChange: handlers.handleTodoDateChange,
            onCompletionToggle: handlers.handleTodoCompletionToggle,
            onTitleChange: handlers.handleTodoTitleChange,
          }}
        />
      </div>
    </>
  );
};
