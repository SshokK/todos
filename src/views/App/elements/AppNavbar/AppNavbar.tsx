import type { ComponentProps, FC } from 'react';
import type { AppNavbarListContext } from './AppNavbar.types.ts';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as elements from './elements';
import * as utils from 'utils';

import {
  useAppNavbarData,
  useAppNavbarHandlers,
  useAppNavbarQueries,
} from './hooks';
import { useTranslation } from 'react-i18next';

export const AppNavbar: FC = () => {
  const { t } = useTranslation();

  const { localState, localActions, formattedData } = useAppNavbarData();

  const queries = useAppNavbarQueries({
    formattedData,
  });

  const handlers = useAppNavbarHandlers({
    queries,
  });

  return (
    <div className={styles.CLASSNAMES.container}>
      <elements.AppNavbarHeader
        searchString={localState.searchString}
        filters={localState.filters}
        onSearchChange={localActions.setSearchString}
        onSearchButtonClick={handlers.handleRefetch}
        onFiltersChange={localActions.setFilters}
      />
      <components.TodosCounts
        counts={queries.todosCounts.data}
        isLoading={queries.todosCounts.isFetching}
        classNames={{
          container: styles.CLASSNAMES.todosCounts,
        }}
      />
      <div className={styles.CLASSNAMES.list}>
        <components.List
          items={queries.todosCountByDays.data ?? []}
          onEndReach={queries.todosCountByDays.fetchNextPage}
          onItemRender={(todosCountPage) => (
            <components.TodosGroup
              key={todosCountPage.dateRangeStart.toDateString()}
              isLoading={queries.todosCountByDays.isRefetching}
              isFetchDisabled={queries.todosCountByDays.isFetching}
              expectedTodosCount={todosCountPage.count}
              title={utils.formatHumanizedDate(
                todosCountPage.dateRangeStart,
                t,
              )}
              queryParams={{
                ...formattedData.queryParams,
                dateRangeStart: todosCountPage.dateRangeStart.toISOString(),
                dateRangeEnd: todosCountPage.dateRangeEnd.toISOString(),
              }}
              classNames={{
                container: styles.CLASSNAMES.listItem,
              }}
            />
          )}
          componentsContext={
            {
              searchString: localState.searchString,
              isRefetching: queries.todosCountByDays.isRefetching,
              isInitialLoading: queries.todosCountByDays.isInitialLoading,
              isFetchingNextPage: queries.todosCountByDays.isFetchingNextPage,
            } satisfies AppNavbarListContext
          }
          components={
            {
              EmptyPlaceholder: elements.AppNavbarEmptyPlaceholder,
              Footer: elements.AppNavbarListFooter,
            } as ComponentProps<typeof components.List>['components']
          }
        />
      </div>
    </div>
  );
};
