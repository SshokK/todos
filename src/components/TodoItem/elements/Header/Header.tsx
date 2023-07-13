import type { FC } from 'react';
import type { HeaderProps } from './Header.types.ts';

import * as styles from './Header.styles.ts';

import classnames from 'classnames';

import {
  TYPOGRAPHY_TEXT_ALIGNMENT,
  TYPOGRAPHY_TYPE,
} from '../../../Typography';
import { TEXTFIELD_TYPE } from '../../../TextField';

import { Typography } from '../../../Typography';
import { TextField } from '../../../TextField';

export const Header: FC<HeaderProps> = ({
  title,
  isDone,
  order,
  onTitleChange,
}) => {
  return (
    <header className={styles.CLASSNAMES.container}>
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
        isDisabled={isDone}
        onChange={onTitleChange}
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
  );
};
