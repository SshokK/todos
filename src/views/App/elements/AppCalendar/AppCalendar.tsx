import type { FC } from 'react';
import type { AppCalendarProps } from './AppCalendar.types.ts';

import * as styles from './AppCalendar.styles.ts';
import * as components from 'components';
import * as elements from './elements';
import * as utils from 'utils';

import { useTranslation } from 'react-i18next';
import { useAppCalendar } from 'contexts';
import {
  useAppCalendarData,
  useAppCalendarHandlers,
  useAppCalendarToolbarConfigRenderer,
} from './hooks';

export const AppCalendar: FC<AppCalendarProps> = ({ headerTools }) => {
  const { t } = useTranslation();

  const appCalendar = useAppCalendar();

  const { localState, localActions, formattedData } = useAppCalendarData();

  const handlers = useAppCalendarHandlers({
    localActions,
  });

  const calendarToolbarConfigRenderer = useAppCalendarToolbarConfigRenderer({
    onTodoItemAdd: handlers.handleTodoItemAdd,
    onSearchChange: handlers.handleSearchChange,
    onSearchFocusToggle: handlers.handleSearchFocusToggle,
  });

  return (
    <components.Loader
      Component={components.Spinner}
      isVisible={false}
      isWithBackground
      classNames={{
        outerContainer: styles.CLASSNAMES.calendarContainer,
      }}
    >
      <elements.AppCalendarHeader tools={headerTools} />
      <components.Calendar
        date={appCalendar.date}
        queryOptions={{
          queryFn: handlers.handleItemsFetch,
          queryKey: utils.QUERY_KEY_FACTORY.TODOS_LIST(),
        }}
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
        highlightedItemId={appCalendar.highlightedTodoId}
        onHighlightedElementRender={handlers.handleHighlightedElementRender}
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
