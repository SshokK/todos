import type { FC } from 'react';
import type { TodoCardProps } from './TodoCard.types.ts';

import * as styles from './TodoCard.styles.ts';
import * as animations from './TodoCard.animations.ts';
import * as components from 'components';

export const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <components.Card
      key={todo.id}
      className={styles.CLASSNAMES.todoCard}
      layout
      variants={animations.VARIANTS}
      initial={animations.ANIMATION_NAME.ENTER}
      animate={animations.ANIMATION_NAME.ACTIVE}
      exit={animations.ANIMATION_NAME.EXIT}
      transition={animations.TRANSITION}
    >
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
  );
};
