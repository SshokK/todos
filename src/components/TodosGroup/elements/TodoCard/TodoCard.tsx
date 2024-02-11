import type { TodoCardProps } from './TodoCard.types.ts';

import * as react from 'react';
import * as styles from './TodoCard.styles.ts';
import * as components from '../../../index.ts';
import * as animations from './TodoCard.animations.ts';
import * as twMerge from 'tailwind-merge';
import * as utils from '../../../../utils';
import * as dateConstants from '../../../../constants/date.constants.ts';

import classnames from 'classnames';

import { useTodoCardHandlers } from './hooks';

export const TodoCard = react.forwardRef<HTMLDivElement, TodoCardProps>(
  ({ todo, ...props }, ref) => {
    const handlers = useTodoCardHandlers({
      props: {
        todo,
      },
    });

    return (
      <components.Card
        ref={ref}
        layout
        initial={animations.ANIMATION_NAME.ENTER}
        animate={animations.ANIMATION_NAME.ACTIVE}
        exit={animations.ANIMATION_NAME.EXIT}
        variants={animations.VARIANTS}
        isClickable
        onClick={handlers.handleTodoClick}
        className={styles.CLASSNAMES.todoCard}
        {...props}
      >
        <div
          className={twMerge.twMerge(
            classnames({
              [styles.CLASSNAMES.todoCardIndicatorContainer]: true,
              [styles.CLASSNAMES.todoCardIndicatorContainerIsToday]:
                utils.isSame({
                  dateA: todo.date,
                  dateB: utils.getToday(),
                  granularity: dateConstants.DATE_GRANULARITY.DAY,
                }),
              [styles.CLASSNAMES.todoCardIndicatorContainerIsOverdue]:
                utils.isBefore({
                  dateA: todo.date,
                  dateB: utils.getToday(),
                  granularity: dateConstants.DATE_GRANULARITY.DAY,
                }),
              [styles.CLASSNAMES.todoCardIndicatorContainerIsDone]: todo.isDone,
            }),
          )}
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
        </div>
      </components.Card>
    );
  },
);
