import type { FC } from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';
import * as framerMotion from 'framer-motion';
import * as animations from './AppNavbar.animations.ts';

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
      <div className={styles.CLASSNAMES.upcomingTodosContainer}>
        <framerMotion.AnimatePresence initial={false}>
          {storeData.unfinishedTodosForToday.map((todo) => (
            <framerMotion.motion.div
              key={todo.id}
              layout
              className={styles.CLASSNAMES.todoCard}
              variants={animations.VARIANTS}
              initial={animations.ANIMATION_NAME.ENTER}
              animate={animations.ANIMATION_NAME.ACTIVE}
              exit={animations.ANIMATION_NAME.EXIT}
              transition={animations.TRANSITION}
            >
              <components.Card>
                <components.Typography
                  type={components.TYPOGRAPHY_TYPE.TITLE_2}
                  className={styles.CLASSNAMES.todoTitle}
                >
                  {todo.title || 'No title'}
                </components.Typography>
                <components.Typography
                  type={components.TYPOGRAPHY_TYPE.SUBTITLE}
                  className={styles.CLASSNAMES.todoDescription}
                >
                  {todo.content || 'No description'}
                </components.Typography>
              </components.Card>
            </framerMotion.motion.div>
          ))}
          {!storeData.unfinishedTodosForToday.length && (
            <components.NoItemsMessage>
              No unfinished todos for today
            </components.NoItemsMessage>
          )}
        </framerMotion.AnimatePresence>
      </div>
    </div>
  );
};
