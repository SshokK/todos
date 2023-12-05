import type { FC } from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as framerMotion from 'framer-motion';
import * as elements from './elements';

import { useAppNavbarData } from './hooks';

export const AppNavbar: FC = () => {
  const { localState, localActions, storeData } = useAppNavbarData();

  return (
    <div className={styles.CLASSNAMES.container}>
      <components.TextField
        value={localState.searchString}
        onChange={localActions.setSearchString}
        placeholder="Search future todos"
        shouldRenderSearchButton
        classNames={{
          container: styles.CLASSNAMES.searchInput,
        }}
      />
      <elements.TodosCounts />
      <div className={styles.CLASSNAMES.upcomingTodosContainer}>
        <framerMotion.AnimatePresence initial={false}>
          {Object.entries(storeData.todosByDates).flatMap(([date, todos]) => (
            <elements.TodosGroup
              key={date}
              date={new Date(date)}
              todos={todos}
            />
          ))}
        </framerMotion.AnimatePresence>
        <components.NoItemsMessage
          isVisible={!Object.entries(storeData.todosByDates).length}
        >
          {localState.searchString
            ? 'No todos matching search'
            : 'No unfinished todos for today'}
        </components.NoItemsMessage>
      </div>
    </div>
  );
};
