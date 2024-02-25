import type { LoaderProps } from './Loader.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as animations from './Loader.animations.ts';
import * as styles from './Loader.styles.ts';

import classnames from 'classnames';

export const Loader = react.forwardRef<HTMLDivElement, LoaderProps>(
  (
    {
      Component,
      componentProps,
      isVisible,
      isWithBackground,
      children,
      classNames,
    },
    ref,
  ) => {
    return (
      <framerMotion.motion.div
        ref={ref}
        className={classnames(classNames?.outerContainer, {
          [styles.CLASSNAMES.outerContainer]: true,
          [styles.CLASSNAMES.outerContainerWithBackground]: Boolean(children),
        })}
      >
        {!children && <Component isVisible={isVisible} {...componentProps} />}
        {children && (
          <framerMotion.AnimatePresence>
            {isVisible && (
              <framerMotion.motion.div
                initial={animations.ANIMATION_NAME.INITIAL}
                animate={animations.ANIMATION_NAME.ANIMATE}
                exit={animations.ANIMATION_NAME.EXIT}
                variants={animations.VARIANTS}
                className={classnames({
                  [styles.CLASSNAMES.container]: true,
                  [styles.CLASSNAMES.containerWithBackground]: isWithBackground,
                })}
              >
                <Component
                  isVisible
                  className={classNames?.loader}
                  {...componentProps}
                />
              </framerMotion.motion.div>
            )}
          </framerMotion.AnimatePresence>
        )}
        {children}
      </framerMotion.motion.div>
    );
  },
);
