import type { FC } from 'react';
import type { TodoItemProps } from './TodoItem.types.ts';

import classnames from 'classnames';

import * as styles from './TodoItem.styles.ts';

import { TextField, TEXTFIELD_TYPE } from '../TextField';
import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE, IconButton } from '../IconButton';
import { IconCheckCircled, IconCicrle } from '../Icons';
import { Toolbar } from '../Toolbar';

import { useTodoItemHandlers, useTodoItemToolbarConfig } from './hooks';
import {
  Typography,
  TYPOGRAPHY_TEXT_ALIGNMENT,
  TYPOGRAPHY_TYPE,
} from '../Typography';

export const TodoItem: FC<TodoItemProps> = ({
  id,
  title,
  isDone,
  order,
  isCompact,
  onClick,
  onDelete,
  onCompletionToggle,
  onTitleChange,
}) => {
  const handlers = useTodoItemHandlers({
    props: {
      id,
      isDone,
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
        Icon={isDone ? IconCheckCircled : IconCicrle}
        size={isCompact ? ICON_BUTTON_SIZE.MD : ICON_BUTTON_SIZE.LG}
        type={ICON_BUTTON_TYPE.SECONDARY}
        onClick={handlers.handleCompletionToggle}
        className={classnames({
          [styles.CLASSNAMES.stateToggleButtonCompleted]: isDone,
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
        {isDone && <hr className={styles.CLASSNAMES.strikethrough} />}
        <header className={styles.CLASSNAMES.header}>
          {!Number.isNaN(Number(order)) && (
            <Typography
              type={TYPOGRAPHY_TYPE.BODY}
              textAlignment={TYPOGRAPHY_TEXT_ALIGNMENT.RIGHT}
              className={styles.CLASSNAMES.order}
            >
              {(order as number) + 1}.
            </Typography>
          )}
          <TextField
            type={TEXTFIELD_TYPE.TRANSPARENT}
            value={title}
            isDisabled={isCompact || isDone}
            onChange={handlers.handleTitleChange}
            placeholder="No title"
            classNames={{
              container: styles.CLASSNAMES.titleInputContainer,
              input: classnames({
                [styles.CLASSNAMES.titleInput]: true,
                [styles.CLASSNAMES.titleInputDisabled]: isDone,
              }),
            }}
          />
        </header>
      </div>
      {!isCompact && <Toolbar config={toolbarConfig} />}
    </div>
  );
};
