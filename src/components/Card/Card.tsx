import type { FC } from 'react';
import type { CardProps } from './Card.types.ts';

import * as styles from './Card.styles.ts';

import classnames from 'classnames';

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={classnames(styles.CLASSNAMES.container, className)}>
      {children}
    </div>
  );
};
