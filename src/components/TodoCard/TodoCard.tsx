import type { TodoCardProps } from './TodoCard.types.ts';

import * as react from 'react';
import * as styles from './TodoCard.styles.ts';
import * as twMerge from 'tailwind-merge';
import * as utils from 'utils';
import * as dateConstants from '../../constants/date.constants.ts';
import * as elements from './elements';

import { Typography, TYPOGRAPHY_TYPE } from '../Typography';
import { Skeleton } from '../Skeleton';

import classnames from 'classnames';

import { useTodoCardHandlers } from './hooks';

export const TodoCard = react.forwardRef<HTMLDivElement, TodoCardProps>(
  ({ todo, isLoading, animationType, ...props }, ref) => {
    const handlers = useTodoCardHandlers({
      props: {
        todo,
      },
    });

    return (
      <elements.Container
        ref={ref}
        animationType={animationType}
        isClickable={Boolean(todo) && !isLoading}
        onClick={handlers.handleTodoClick}
        {...props}
      >
        <div
          className={twMerge.twMerge(
            classnames({
              [styles.CLASSNAMES.todoCardIndicatorContainer]: true,
              [styles.CLASSNAMES.todoCardIndicatorContainerIsToday]:
                todo &&
                utils.isSame({
                  dateA: todo.date,
                  dateB: utils.getToday(),
                  granularity: dateConstants.DATE_GRANULARITY.DAY,
                }),
              [styles.CLASSNAMES.todoCardIndicatorContainerIsOverdue]:
                todo &&
                utils.isBefore({
                  dateA: todo.date,
                  dateB: utils.getToday(),
                  granularity: dateConstants.DATE_GRANULARITY.DAY,
                }),
              [styles.CLASSNAMES.todoCardIndicatorContainerIsDone]:
                todo?.isDone,
            }),
          )}
        >
          <Typography
            type={TYPOGRAPHY_TYPE.TITLE_2}
            className={styles.CLASSNAMES.todoTitle}
          >
            {isLoading && (
              <Skeleton className={styles.CLASSNAMES.todoTitleSkeleton} />
            )}
            {isLoading ? null : todo?.title || 'No title'}
          </Typography>
          <Typography
            type={TYPOGRAPHY_TYPE.SUBTITLE}
            className={styles.CLASSNAMES.todoDescription}
          >
            {isLoading && (
              <Skeleton className={styles.CLASSNAMES.todoDescriptionSkeleton} />
            )}
            {isLoading ? null : todo?.content || 'No description'}
          </Typography>
        </div>
      </elements.Container>
    );
  },
);
