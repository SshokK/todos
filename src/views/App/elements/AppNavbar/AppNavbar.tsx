import type { FC } from 'react';

import * as components from 'components';
import * as styles from './AppNavbar.styles.ts';

import { useAppNavbarData } from './hooks';

export const AppNavbar: FC = () => {
  const { formattedData } = useAppNavbarData();

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
        {formattedData.todosForToday.map((todo) => (
          <components.Card key={todo.id} className={styles.CLASSNAMES.todoCard}>
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
        ))}
        {!formattedData.todosForToday.length && (
          <components.Typography
            type={components.TYPOGRAPHY_TYPE.SUBTITLE}
            size={components.TYPOGRAPHY_SIZE.SM}
            className={styles.CLASSNAMES.noUpcomingTodosMessage}
          >
            No todos for today
          </components.Typography>
        )}
      </div>
    </div>
  );
};
