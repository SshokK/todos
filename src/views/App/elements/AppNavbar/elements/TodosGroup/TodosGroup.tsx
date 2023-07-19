import type { FC } from 'react';
import type { TodosGroupProps } from './TodosGroup.types.ts';

import * as styles from './TodosGroup.styles.ts';
import * as animations from './TodosGroup.animations.ts';
import * as constants from './TodosGroup.constants.ts';
import * as framerMotion from 'framer-motion';
import * as elements from './elements';
import * as components from 'components';
import * as utils from 'utils';

export const TodosGroup: FC<TodosGroupProps> = ({ date, todos }) => {
  return (
    <framerMotion.motion.div
      layout="position"
      variants={animations.VARIANTS}
      initial={animations.ANIMATION_NAME.ENTER}
      animate={animations.ANIMATION_NAME.ACTIVE}
      exit={animations.ANIMATION_NAME.EXIT}
      transition={animations.TRANSITION}
      className={styles.CLASSNAMES.container}
    >
      <components.Typography
        type={components.TYPOGRAPHY_TYPE.SUBTITLE}
        className={styles.CLASSNAMES.date}
        textAlignment={components.TYPOGRAPHY_TEXT_ALIGNMENT.LEFT}
      >
        {utils.formatHumanizedDate(new Date(date))}
      </components.Typography>
      {todos.flatMap((todo, i) => {
        if (i < constants.VISIBLE_TODOS_COUNT) {
          return <elements.TodoCard key={todo.id} todo={todo} />;
        }
      })}
      <elements.RemainingTodosCount
        todosCount={todos.length}
        visibleTodosCount={constants.VISIBLE_TODOS_COUNT}
      />
    </framerMotion.motion.div>
  );
};
