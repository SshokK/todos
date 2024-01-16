import type { FC } from 'react';
import type { ButtonProps } from './Button.types.ts';

import * as styles from './Button.styles.ts';
import * as constants from './Button.constants.ts';

import classnames from 'classnames';

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  textAlignment,
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames({
        [styles.CLASSNAMES.button]: true,
        [styles.CLASSNAMES.textAlignment[
          textAlignment ?? constants.BUTTON_TEXT_ALIGNMENT.CENTER
        ]]: true,
      })}
    >
      {children}
    </button>
  );
};
