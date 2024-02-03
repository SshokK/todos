import type { IconLoaderProps } from './IconLoader.types.ts';

import * as react from 'react';
import * as elements from './elements';
import * as styles from './IconLoader.styles.ts';
import * as framerMotion from 'framer-motion';

import classnames from 'classnames';

export const IconLoader = react.forwardRef<HTMLDivElement, IconLoaderProps>(
  ({ isLoading, Icon, classNames }) => {
    return (
      <div
        className={classnames(
          styles.CLASSNAMES.container,
          classNames?.container,
        )}
      >
        <framerMotion.AnimatePresence>
          {isLoading && (
            <elements.Spinner
              className={classnames(
                styles.CLASSNAMES.spinner,
                classNames?.spinner,
              )}
            />
          )}
        </framerMotion.AnimatePresence>
        <Icon className={classNames?.icon} />
      </div>
    );
  },
);
