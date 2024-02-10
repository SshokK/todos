import type { IconLoaderProps } from './IconLoader.types.ts';

import * as react from 'react';
import * as styles from './IconLoader.styles.ts';

import { Spinner } from '../Spinner';

import classnames from 'classnames';

export const IconLoader = react.forwardRef<HTMLDivElement, IconLoaderProps>(
  ({ isLoading, Icon, spinnerWidth, classNames }, ref) => {
    return (
      <div
        ref={ref}
        className={classnames(
          styles.CLASSNAMES.container,
          classNames?.container,
        )}
      >
        <Spinner
          isVisible={isLoading}
          width={spinnerWidth}
          className={classnames(styles.CLASSNAMES.spinner, classNames?.spinner)}
        />
        <Icon className={classNames?.icon} />
      </div>
    );
  },
);
