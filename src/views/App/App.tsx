import type { FC } from 'react';

import * as components from 'components';
import * as elements from './elements';
import * as styles from './App.styles.ts';

import {
  useAppCalendarToolbarConfigRenderer,
  useAppData,
  useAppHandlers,
  useAppLifecycle,
} from './hooks';

export const App: FC = () => {
  const { localState, localActions, storeData, formattedData } = useAppData();

  const handlers = useAppHandlers({
    localActions,
  });

  const calendarToolbarConfigRenderer = useAppCalendarToolbarConfigRenderer({
    onTodoItemAdd: handlers.handleTodoItemAdd,
    onSearchChange: handlers.handleSearchChange,
  });

  useAppLifecycle({
    onMount: handlers.handleMount(<elements.AppNavbar />),
  });

  return (
    <>
      <components.Alert
        type={components.ALERT_TYPES.ERROR}
        title={'Title'}
        message={'Hello out there'}
      />
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
          whitelistedDates={formattedData.whitelistedDates}
          noDatesMessage="No todos found"
          onDateChange={localActions.setCalendarDate}
          onToolbarConfigRender={calendarToolbarConfigRenderer}
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
