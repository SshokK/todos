import type { FC } from 'react';

import * as styles from './AppCalendar.styles.ts';
import * as components from 'components';

import { useTranslation } from 'react-i18next';
import {
  useAppCalendarToolbarConfigRenderer,
  useAppCalendarData,
  useAppCalendarHandlers,
} from './hooks';

export const AppCalendar: FC = () => {
  const { t } = useTranslation();

  const { localState, localActions, storeData, formattedData } =
    useAppCalendarData();

  const handlers = useAppCalendarHandlers({
    localActions,
  });

  const calendarToolbarConfigRenderer = useAppCalendarToolbarConfigRenderer({
    onTodoItemAdd: handlers.handleTodoItemAdd,
    onSearchChange: handlers.handleSearchChange,
    onSearchFocusToggle: handlers.handleSearchFocusToggle,
  });

  return (
    <div className={styles.CLASSNAMES.calendarContainer}>
      <components.Calendar
        date={storeData.date}
        whitelistedDates={formattedData.whitelistedDates}
        noDatesMessage={t(
          'views.App.AppCalendar.noItemsMessage',
          'To do items',
        )}
        onDateChange={handlers.handleDateChange}
        onToolbarConfigRender={calendarToolbarConfigRenderer}
        onItemOrderChange={handlers.handleTodoItemOrderChange}
        shouldUseOnlyFadeAnimation={localState.isSearchFocused}
        highlightedItemId={storeData.highlightedTodoId}
        onHighlightedElementRender={handlers.handleHighlightedElementRender}
        items={storeData.todos}
        ItemComponent={components.TodoItem}
        itemComponentProps={{
          onDateChange: handlers.handleTodoDateChange,
          onCompletionToggle: handlers.handleTodoCompletionToggle,
          onTitleChange: handlers.handleTodoTitleChange,
        }}
      />
    </div>
  );
};
