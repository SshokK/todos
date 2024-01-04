import type { TodoCardProps } from './TodoCard.types.ts';

import * as react from 'react';
import * as styles from './TodoCard.styles.ts';
import * as components from 'components';
import * as animations from './TodoCard.animations.ts';

import { useTodoCardHandlers } from './hooks';

export const TodoCard = react.forwardRef<HTMLDivElement, TodoCardProps>(
  ({ todo, date, ...props }, ref) => {
    const handlers = useTodoCardHandlers({
      props: {
        date,
        todo,
      },
    });

    return (
      <components.Card
        ref={ref}
        layout
        className={styles.CLASSNAMES.todoCard}
        initial={animations.ANIMATION_NAME.ENTER}
        animate={animations.ANIMATION_NAME.ACTIVE}
        exit={animations.ANIMATION_NAME.EXIT}
        variants={animations.VARIANTS}
        isClickable
        onClick={handlers.handleTodoClick}
        {...props}
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
  },
);
