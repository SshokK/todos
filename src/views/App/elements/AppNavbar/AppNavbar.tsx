import type { AppNavbarListContext } from './AppNavbar.types.ts';

import type * as react from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as elements from './elements';
import * as utils from 'utils';

import { useTranslation } from 'react-i18next';
import {
  useAppNavbarData,
  useAppNavbarHandlers,
  useAppNavbarQueries,
} from './hooks';

export const AppNavbar: react.FC = () => {
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
          onItemRender={(
            item: NonNullable<typeof queries.todosCountByDays.data>[number],
          ) => (
            <components.TodosGroup
              isLoading={queries.todosCountByDays.isRefetching}
              isFetchDisabled={queries.todosCountByDays.isLoading}
              expectedTodosCount={item.count}
              title={utils.formatHumanizedDate(item.date, t)}
              queryParams={{
                ...formattedData.queryParams,
                dateRangeStart: item.date.toISOString(),
                dateRangeEnd: utils.getEndOfDay(item.date).toISOString(),
              }}
              classNames={{
                container: styles.CLASSNAMES.listItem,
              }}
            />
          )}
          components={
            {
              EmptyPlaceholder: elements.AppNavbarEmptyPlaceholder,
              Footer: elements.AppNavbarListFooter,
            } as react.ComponentProps<typeof components.List>['components']
          }
          componentsContext={
            {
              searchString: localState.searchString,
              isRefetching: queries.todosCountByDays.isRefetching,
              isInitialLoading: queries.todosCountByDays.isInitialLoading,
              isFetchingNextPage: queries.todosCountByDays.isFetchingNextPage,
            } satisfies AppNavbarListContext
          }
        />
      </div>
    </div>
  );
};
