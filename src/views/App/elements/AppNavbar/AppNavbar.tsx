import type { FC } from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as elements from './elements';
import * as utils from 'utils';

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
      <components.TodosCounts queryParams={formattedData.queryParams} />
      <div className={styles.CLASSNAMES.upcomingTodosContainer}>
        {queries.todosCountByDays.data?.map((todosCountByDay) => (
          <components.TodosGroup
            key={todosCountByDay.dateRangeStart.toDateString()}
            title={utils.formatHumanizedDate(todosCountByDay.dateRangeStart, t)}
            queryParams={{
              ...formattedData.queryParams,
              dateRangeStart: todosCountByDay.dateRangeStart.toISOString(),
              dateRangeEnd: todosCountByDay.dateRangeEnd.toISOString(),
            }}
          />
        ))}
        <components.NoItemsMessage
          isVisible={
            !queries.todosCountByDays.data?.length &&
            !queries.todosCountByDays.isFetching
          }
        >
          {localState.searchString
            ? t(
                'views.App.AppNavbar.noSearchResults',
                'No todos matching search',
              )
            : t('views.App.AppNavbar.noResultsForToday', 'No todos')}
        </components.NoItemsMessage>
        <components.Loader
          isVisible={queries.todosCountByDays.isFetching}
          Component={components.Spinner}
          componentProps={{ width: components.SPINNER_WIDTH.SM }}
        />
      </div>
    </div>
  );
};
