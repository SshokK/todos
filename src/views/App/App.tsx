import type { FC } from 'react';

import * as components from 'components';
import * as elements from './elements';
import * as styles from './App.styles.ts';

import {
  useAppCalendarToolbarConfig,
  useAppData,
  useAppHandlers,
  useAppLifecycle,
} from './hooks';

export const App: FC = () => {
  const { localState, localActions, storeData } = useAppData();

  const handlers = useAppHandlers({
    localActions,
  });

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
          date={localState.calendarDate}
          onDateChange={localActions.setCalendarDate}
          toolbarConfig={calendarToolbarConfig}
          onItemOrderChange={handlers.handleTodoItemOrderChange}
          items={storeData.todos}
          ItemComponent={components.TodoItem}
          additionalToolbar={<elements.AppCalendarAdditionalToolbar />}
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
