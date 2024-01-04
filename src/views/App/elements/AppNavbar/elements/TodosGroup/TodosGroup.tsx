import type { TodosGroupProps } from './TodosGroup.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as styles from '../TodosGroup/TodosGroup.styles.ts';
import * as constants from './TodosGroup.constants.ts';
import * as elements from './elements';
import * as animations from './TodosGroup.animations.ts';

export const TodosGroup = react.forwardRef<HTMLDivElement, TodosGroupProps>(
  ({ date, todos }, ref) => {
    return (
      <framerMotion.motion.div
        ref={ref}
        className={styles.CLASSNAMES.container}
        initial={animations.ANIMATION_NAME.ENTER}
        animate={animations.ANIMATION_NAME.ACTIVE}
        exit={animations.ANIMATION_NAME.EXIT}
        variants={animations.CONTAINER_VARIANTS}
      >
        <framerMotion.AnimatePresence initial={false} mode="popLayout">
          <elements.TodosGroupHeader key={date.toDateString()} date={date} />
          {todos.flatMap((todo, i) => {
            if (i < constants.VISIBLE_TODOS_COUNT) {
              return (
                <elements.TodoCard key={todo.id} date={date} todo={todo} />
              );
            }
          })}
          {todos.length > constants.VISIBLE_TODOS_COUNT && (
            <elements.RemainingTodosCount
              todosCount={todos.length}
              visibleTodosCount={constants.VISIBLE_TODOS_COUNT}
            />
          )}
        </framerMotion.AnimatePresence>
      </framerMotion.motion.div>
    );
  },
);
