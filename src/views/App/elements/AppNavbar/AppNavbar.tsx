import type { FC } from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as framerMotion from 'framer-motion';
import * as elements from './elements';

import { useAppNavbarData } from './hooks';

export const AppNavbar: FC = () => {
  const { storeData } = useAppNavbarData();

  return (
    <div className={styles.CLASSNAMES.container}>
      <components.TextField
        placeholder="Search by title"
        shouldRenderSearchButton
        classNames={{
          container: styles.CLASSNAMES.searchInput,
        }}
      />
      <elements.TodosCounts />
      <div className={styles.CLASSNAMES.upcomingTodosContainer}>
        <framerMotion.AnimatePresence initial={false}>
          {Object.entries(storeData.unfinishedFutureTodosByDates).flatMap(
            ([date, todos]) => (
              <elements.TodosGroup
                key={date}
                date={new Date(date)}
                todos={todos}
              />
            ),
          )}
        </framerMotion.AnimatePresence>
        <components.NoItemsMessage
          isVisible={
            !Object.entries(storeData.unfinishedFutureTodosByDates).length
          }
        >
          No unfinished todos for today
        </components.NoItemsMessage>
      </div>
    </div>
  );
};
