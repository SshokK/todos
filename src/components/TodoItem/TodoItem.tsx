import type { FC } from 'react';
import type { TodoItemProps } from './TodoItem.types.ts';

import classnames from 'classnames';

import * as styles from './TodoItem.styles.ts';
import * as elements from './elements';

import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../IconButton';

import { IconButton } from '../IconButton';
import { IconCheckCircled, IconCicrle } from '../Icons';
import { Toolbar } from '../Toolbar';

import { useTodoItemHandlers, useTodoItemToolbarConfig } from './hooks';

export const TodoItem: FC<TodoItemProps> = ({
  id,
  title,
  isDone,
  order,
  date,
  onClick,
  onDateChange,
  onCompletionToggle,
  onTitleChange,
}) => {
  const handlers = useTodoItemHandlers({
    props: {
      id,
      isDone,
      onClick,
      onDateChange,
      onCompletionToggle,
      onTitleChange,
    },
  });

  const toolbarConfig = useTodoItemToolbarConfig({
    props: {
      date,
    },
    onDateChange: handlers.handleDateChange,
  });

  return (
    <div className={styles.CLASSNAMES.container}>
      <IconButton
        Icon={isDone ? IconCheckCircled : IconCicrle}
        size={ICON_BUTTON_SIZE.LG}
        type={ICON_BUTTON_TYPE.SECONDARY}
        onClick={handlers.handleCompletionToggle}
        className={classnames({
          [styles.CLASSNAMES.stateToggleButtonCompleted]: isDone,
        })}
      />
      <div
        tabIndex={0}
        className={styles.CLASSNAMES.content}
        onClick={handlers.handleSidebarOpen}
      >
        <elements.Strikethrough isDone={isDone} />
        <elements.Header
          title={title}
          order={order}
          isDone={isDone}
          onTitleChange={handlers.handleTitleChange}
        />
      </div>
      <Toolbar config={toolbarConfig} />
    </div>
  );
};
