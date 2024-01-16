import type { FC } from 'react';
import type { AppCalendarProps } from './AppCalendar.types.ts';

import * as styles from './AppCalendar.styles.ts';
import * as components from 'components';
import * as elements from './elements';

import { useTranslation } from 'react-i18next';
import {
  useAppCalendarData,
  useAppCalendarHandlers,
  useAppCalendarQueries,
  useAppCalendarToolbarConfigRenderer,
} from './hooks';

export const AppCalendar: FC<AppCalendarProps> = ({ headerTools }) => {
  const { t } = useTranslation();

  const { localState, localActions, storeData, formattedData } =
    useAppCalendarData();

  const handlers = useAppCalendarHandlers({
    localActions,
  });

  const queries = useAppCalendarQueries();

  const calendarToolbarConfigRenderer = useAppCalendarToolbarConfigRenderer({
    onTodoItemAdd: handlers.handleTodoItemAdd,
    onSearchChange: handlers.handleSearchChange,
    onSearchFocusToggle: handlers.handleSearchFocusToggle,
  });

  return (
    <components.Loader
      isVisible={queries.todosList.isLoading}
      classNames={{
        outerContainer: styles.CLASSNAMES.calendarContainer,
      }}
    >
      <elements.AppCalendarHeader tools={headerTools} />
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
        onItemDelete={handlers.handleTodoItemDelete}
        highlightedItemId={storeData.highlightedTodoId}
        onHighlightedElementRender={handlers.handleHighlightedElementRender}
        items={queries.todosList.data}
        ItemComponent={components.TodoItem}
        itemComponentProps={{
          onDateChange: handlers.handleTodoDateChange,
          onCompletionToggle: handlers.handleTodoCompletionToggle,
          onTitleChange: handlers.handleTodoTitleChange,
        }}
        extraTools={<components.ClearButton />}
      />
    </components.Loader>
  );
};
