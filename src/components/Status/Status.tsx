import type { StatusProps } from './Status.types';

import * as react from 'react';
import * as styles from './Status.styles';

import classnames from 'classnames';

export const Status = react.forwardRef<HTMLDivElement, StatusProps>(
  ({ type, isPinging }, ref) => {
    return (
      <div ref={ref} className={styles.CLASSNAMES.container}>
        {isPinging && (
          <div
            className={classnames({
              [styles.CLASSNAMES.statusPingAnimation]: true,
              [styles.COLOR_CLASSNAMES[type]]: true,
            })}
          />
        )}
        <div
          className={classnames({
            [styles.CLASSNAMES.status]: true,
            [styles.COLOR_CLASSNAMES[type]]: true,
          })}
        />
      </div>
    );
  },
);
