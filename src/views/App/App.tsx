import type { FC } from 'react';

import * as components from 'components';
import * as elements from './elements';
import * as styles from './App.styles.ts';

import { useTranslation } from 'react-i18next';
import {
  useAppCalendarToolbarConfigRenderer,
  useAppData,
  useAppHandlers,
  useAppLifecycle,
} from './hooks';

export const App: FC = () => {
  const { t } = useTranslation();

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
      <elements.AppHeader />
      <div className={styles.CLASSNAMES.calendarContainer}>
        <components.Calendar
          date={localState.calendarDate}
          whitelistedDates={formattedData.whitelistedDates}
          noDatesMessage={t('views.App.calendarNoItemsMessage', 'To do items')}
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
