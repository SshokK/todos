import type { FC } from 'react';
import type { TodoItemProps } from './TodoItem.types.ts';

import classnames from 'classnames';

import * as styles from './TodoItem.styles.ts';

import { TEXTFIELD_TYPE } from '../TextField';
import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../IconButton';

import { IconButton } from '../IconButton';
import { TextField } from '../TextField';
import { IconCheckCircled, IconCicrle } from '../Icons';
import { Toolbar } from '../Toolbar';

import { useTodoItemHandlers, useTodoItemToolbarConfig } from './hooks';

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  isCompact,
  onClick,
  onDelete,
  onCompletionToggle,
  onTitleChange,
}) => {
  const handlers = useTodoItemHandlers({
    props: {
      todo,
      onClick,
      onDelete,
      onCompletionToggle,
      onTitleChange,
    },
  });

  const toolbarConfig = useTodoItemToolbarConfig({
    onDelete: handlers.handleDeletion,
  });

  return (
    <div
      className={classnames({
        [styles.CLASSNAMES.container]: true,
        [styles.CLASSNAMES.containerSpacingCompact]: isCompact,
        [styles.CLASSNAMES.containerSpacingRegular]: !isCompact,
      })}
    >
      <IconButton
        Icon={todo.isDone ? IconCheckCircled : IconCicrle}
        size={isCompact ? ICON_BUTTON_SIZE.MD : ICON_BUTTON_SIZE.LG}
        type={ICON_BUTTON_TYPE.SECONDARY}
        onClick={handlers.handleCompletionToggle}
        className={classnames({
          [styles.CLASSNAMES.stateToggleButtonCompleted]: todo.isDone,
        })}
      />
      <div
        tabIndex={0}
        className={classnames({
          [styles.CLASSNAMES.content]: true,
          [styles.CLASSNAMES.contentCompact]: isCompact,
        })}
        onClick={handlers.handleSidebarOpen}
      >
        {todo.isDone && <hr className={styles.CLASSNAMES.strikethrough} />}
        <header className={styles.CLASSNAMES.header}>
          <TextField
            type={TEXTFIELD_TYPE.TRANSPARENT}
            value={todo.title}
            isDisabled={isCompact || todo.isDone}
            onChange={handlers.handleTitleChange}
            placeholder="No title"
            classNames={{
              container: styles.CLASSNAMES.titleInputContainer,
              input: classnames({
                [styles.CLASSNAMES.titleInput]: true,
                [styles.CLASSNAMES.titleInputDisabled]: todo.isDone,
              }),
            }}
          />
        </header>
      </div>
      {!isCompact && <Toolbar config={toolbarConfig} />}
    </div>
  );
};
