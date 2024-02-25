import type { TodoCardProps } from './TodoCard.types.ts';

import * as react from 'react';
import * as styles from './TodoCard.styles.ts';
import * as utils from 'utils';
import * as dateConstants from '../../constants/date.constants.ts';
import * as framerMotion from 'framer-motion';
import * as elements from './elements';

import { Typography, TYPOGRAPHY_TYPE } from '../Typography';
import { Card } from '../Card';
import { FadeIn } from '../Animations';

import { useTodoCardHandlers } from './hooks';

export const TodoCard = react.forwardRef<HTMLDivElement, TodoCardProps>(
  ({ todo, isLoading, ...props }, ref) => {
    const handlers = useTodoCardHandlers({
      props: {
        todo,
      },
    });

    return (
      <FadeIn>
        <Card
          ref={ref}
          layout
          isClickable={Boolean(todo) && !isLoading}
          onClick={handlers.handleTodoClick}
          {...props}
        >
          <framerMotion.motion.div
            className={utils.cn({
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
            })}
          >
            <Typography
              type={TYPOGRAPHY_TYPE.TITLE_2}
              className={styles.CLASSNAMES.todoTitle}
            >
              <elements.TodoCardSkeleton
                isLoading={isLoading}
                classNames={{
                  skeleton: styles.CLASSNAMES.todoTitleSkeleton,
                }}
              >
                {todo?.title || 'No title'}
              </elements.TodoCardSkeleton>
            </Typography>
            <Typography
              type={TYPOGRAPHY_TYPE.SUBTITLE}
              className={styles.CLASSNAMES.todoDescription}
            >
              <elements.TodoCardSkeleton
                isLoading={isLoading}
                classNames={{
                  skeleton: styles.CLASSNAMES.todoDescriptionSkeleton,
                }}
              >
                {todo?.content || 'No description'}
              </elements.TodoCardSkeleton>
            </Typography>
          </framerMotion.motion.div>
        </Card>
      </FadeIn>
    );
  },
);
