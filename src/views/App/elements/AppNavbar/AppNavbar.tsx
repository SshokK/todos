import type { FC } from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as elements from './elements';

import { useAppNavbarData, useAppNavbarQueries } from './hooks';
import { useTranslation } from 'react-i18next';

export const AppNavbar: FC = () => {
  const { t } = useTranslation();

  const { localState, localActions, formattedData } = useAppNavbarData();

  const queries = useAppNavbarQueries({
    formattedData,
  });

  return (
    <div className={styles.CLASSNAMES.container}>
      <elements.AppNavbarHeader
        searchString={localState.searchString}
        filters={localState.filters}
        onSearchChange={localActions.setSearchString}
        onFiltersChange={localActions.setFilters}
      />
      <div className={styles.CLASSNAMES.upcomingTodosContainer}>
        {queries.todosCountByDays.data.map((todosCountByDay) => (
          <elements.TodosGroup
            key={todosCountByDay.dateRangeStart.toDateString()}
            dateRangeStart={todosCountByDay.dateRangeStart}
            dateRangeEnd={todosCountByDay.dateRangeEnd}
            queryParams={formattedData.queryParams}
          />
        ))}
        <components.NoItemsMessage
          isVisible={
            !queries.todosCountByDays.data.length &&
            !queries.todosCountByDays.isFetching
          }
        >
          {localState.searchString
            ? t(
                'views.App.AppNavbar.noSearchResults',
                'No todos matching search',
              )
            : t(
                'views.App.AppNavbar.noResultsForToday',
                'No unfinished todos for today',
              )}
        </components.NoItemsMessage>
      </div>
    </div>
  );
};
