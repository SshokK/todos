import type { TodosGroupProps } from './TodosGroup.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as styles from '../TodosGroup/TodosGroup.styles.ts';
import * as constants from './TodosGroup.constants.ts';
import * as elements from './elements';

import { useTodosGroupQueries } from './hooks';

export const TodosGroup = react.forwardRef<HTMLDivElement, TodosGroupProps>(
  ({ dateRangeStart, dateRangeEnd, searchString }, ref) => {
    const queries = useTodosGroupQueries({
      props: {
        dateRangeStart,
        dateRangeEnd,
        searchString,
      },
    });

    return (
      <div ref={ref} className={styles.CLASSNAMES.container}>
        <framerMotion.AnimatePresence initial={false} mode="popLayout">
          <elements.TodosGroupHeader
            key={dateRangeStart.toDateString()}
            date={dateRangeStart}
            isLoading={
              queries.todosTotalCount.isFetching && queries.todos.isFetching
            }
          />
          {queries.todos.data.flatMap((todo, i) => {
            if (i < constants.VISIBLE_TODOS_COUNT) {
              return <elements.TodoCard key={todo.id} todo={todo} />;
            }
          })}
          {queries.todosTotalCount.data - constants.VISIBLE_TODOS_COUNT > 0 && (
            <elements.RemainingTodosCount
              todosCount={queries.todosTotalCount.data}
              visibleTodosCount={constants.VISIBLE_TODOS_COUNT}
            />
          )}
        </framerMotion.AnimatePresence>
      </div>
    );
  },
);
