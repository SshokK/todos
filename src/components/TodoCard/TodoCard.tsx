import type { TodoCardProps } from './TodoCard.types.ts';

import * as react from 'react';
import * as styles from './TodoCard.styles.ts';
import * as animations from './TodoCard.animations.ts';
import * as twMerge from 'tailwind-merge';
import * as utils from 'utils';
import * as dateConstants from '../../constants/date.constants.ts';

import { Card } from '../Card';
import { Typography, TYPOGRAPHY_TYPE } from '../Typography';

import classnames from 'classnames';

import { useTodoCardHandlers } from './hooks';

export const TodoCard = react.forwardRef<HTMLDivElement, TodoCardProps>(
  ({ todo, animationType, ...props }, ref) => {
    const handlers = useTodoCardHandlers({
      props: {
        todo,
      },
    });

    return (
      <Card
        ref={ref}
        layout
        custom={animationType}
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
          <Typography
            type={TYPOGRAPHY_TYPE.TITLE_2}
            className={styles.CLASSNAMES.todoTitle}
          >
            {todo.title || 'No title'}
          </Typography>
          <Typography
            type={TYPOGRAPHY_TYPE.SUBTITLE}
            className={styles.CLASSNAMES.todoDescription}
          >
            {todo.content || 'No description'}
          </Typography>
        </div>
      </Card>
    );
  },
);
