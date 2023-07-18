import type { FC } from 'react';
import type { HeaderProps } from './Header.types.ts';

import * as styles from './Header.styles.ts';

import classnames from 'classnames';

import { TEXTFIELD_TYPE } from '../../../TextField';

import { TextField } from '../../../TextField';

export const Header: FC<HeaderProps> = ({ title, isDone, onTitleChange }) => {
  return (
    <header className={styles.CLASSNAMES.container}>
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
