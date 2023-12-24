import type { FC } from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as framerMotion from 'framer-motion';
import * as elements from './elements';
import * as constants from './AppNavbar.constants.ts';

import { useAppNavbarData } from './hooks';
import { useTranslation } from 'react-i18next';

export const AppNavbar: FC = () => {
  const { t } = useTranslation();

  const { localState, localActions, storeData } = useAppNavbarData();

  return (
    <div className={styles.CLASSNAMES.container}>
      <components.TextField
        value={localState.searchString}
        onChange={localActions.setSearchString}
        changeCallbackThrottleTime={constants.SEARCH_THROTTLE_TIME}
        name={constants.SEARCH_FIELD_NAME}
        placeholder={t(
          'views.App.AppNavbar.searchPlaceholder',
          'Search future todos',
        )}
        shouldRenderSearchButton
        classNames={{
          container: styles.CLASSNAMES.searchInput,
        }}
      />
      <elements.TodosCounts />
      <framerMotion.motion.div
        className={styles.CLASSNAMES.upcomingTodosContainer}
      >
        {Object.entries(storeData.todosByDates).flatMap(([date, todos]) => (
          <elements.TodosGroup key={date} date={new Date(date)} todos={todos} />
        ))}
        <components.NoItemsMessage
          isVisible={!Object.entries(storeData.todosByDates).length}
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
      </framerMotion.motion.div>
    </div>
  );
};
