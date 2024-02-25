import type { TodosGroupProps } from './TodosGroup.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as constants from './TodosGroup.constants.ts';
import * as elements from './elements';

import { ANIMATION_TYPE, TodoCard } from '../TodoCard';

import { useTodosGroupQueries } from './hooks';

export const TodosGroup = react.forwardRef<HTMLDivElement, TodosGroupProps>(
  (
    {
      title,
      expectedTodosCount,
      isFetchDisabled,
      isLoading,
      queryParams,
      classNames,
    },
    ref,
  ) => {
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
          {[
            ...Array(
              (expectedTodosCount ?? 0) <= constants.VISIBLE_TODOS_COUNT
                ? expectedTodosCount
                : constants.VISIBLE_TODOS_COUNT,
            ).keys(),
          ].map((_, i) => (
            <TodoCard
              key={i}
              isLoading={
                isFetchDisabled ||
                queries.todos.isLoading ||
                queries.todosTotalCount.isLoading
              }
              todo={queries.todos.data?.flat()[i]}
              animationType={ANIMATION_TYPE.SLIDE_UP}
            />
          ))}
        </framerMotion.AnimatePresence>
        <elements.TodosGroupCount
          isVisible={
            queries.todosTotalCount.data - constants.VISIBLE_TODOS_COUNT > 0
          }
        >
          +{queries.todosTotalCount.data - constants.VISIBLE_TODOS_COUNT} More
        </elements.TodosGroupCount>
      </elements.TodosGroupContainer>
    );
  },
);
