import type { TodosGroupProps } from './TodosGroup.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as constants from './TodosGroup.constants.ts';
import * as elements from './elements';

import { ANIMATION_TYPE, TodoCard } from '../TodoCard';

import { useTodosGroupQueries } from './hooks';

export const TodosGroup = react.forwardRef<HTMLDivElement, TodosGroupProps>(
  ({ title, isFetchDisabled, isLoading, queryParams, classNames }, ref) => {
    const queries = useTodosGroupQueries({
      props: {
        queryParams,
        isFetchDisabled,
      },
    });

    return (
      <elements.TodosGroupContainer ref={ref} className={classNames?.container}>
        <elements.TodosGroupHeader
          isLoading={
            isLoading ||
            queries.todosTotalCount.isFetching ||
            queries.todos.isFetching
          }
        >
          {title}
        </elements.TodosGroupHeader>
        <framerMotion.AnimatePresence initial={false} mode="popLayout">
          {queries.todos.data?.flatMap((todo, i) => {
            if (i < constants.VISIBLE_TODOS_COUNT) {
              return (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  animationType={ANIMATION_TYPE.SLIDE_UP}
                />
              );
            }
          })}
          {queries.todosTotalCount.data - constants.VISIBLE_TODOS_COUNT > 0 && (
            <elements.TodosGroupCount>
              +{queries.todosTotalCount.data - constants.VISIBLE_TODOS_COUNT}{' '}
              More
            </elements.TodosGroupCount>
          )}
        </framerMotion.AnimatePresence>
      </elements.TodosGroupContainer>
    );
  },
);
