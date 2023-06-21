import type { FC } from 'react';
import type { ButtonProps } from './Button.types.ts';

import * as styles from './Button.styles.ts';

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.CLASSNAMES.button}>
      {children}
    </button>
  );
};
