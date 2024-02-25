import type { TodosGroupProps } from './TodosGroup.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as constants from './TodosGroup.constants.ts';
import * as elements from './elements';

import { TodoCard } from '../TodoCard';

import { useTodosGroupData, useTodosGroupQueries } from './hooks';

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
    const { formattedData } = useTodosGroupData({
      expectedTodosCount,
    });

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
          {[...Array(formattedData.cardsCountToRender).keys()].map((_, i) => (
            <TodoCard
              key={i}
              isLoading={
                isFetchDisabled ||
                queries.todos.isLoading ||
                queries.todosTotalCount.isLoading
              }
              todo={queries.todos.data?.flat()[i]}
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
