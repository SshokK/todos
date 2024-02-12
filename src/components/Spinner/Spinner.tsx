import type { FC } from 'react';
import type { SpinnerProps } from './Spinner.types.ts';

import * as framerMotion from 'framer-motion';
import * as animations from './Spinner.animations.ts';
import * as constants from './Spinner.constants.ts';
import * as styles from './Spinner.styles.ts';

import classnames from 'classnames';

import { IconSpinner } from '../Icons';

export const Spinner: FC<SpinnerProps> = ({
  isVisible,
  size,
  width,
  className,
}) => {
  return (
    <framerMotion.AnimatePresence>
      {isVisible && (
        <IconSpinner
          className={classnames(
            className,
            styles.SIZE_CLASSNAMES[size ?? constants.SPINNER_SIZE.MD],
          )}
          initial={animations.ANIMATION_NAME.ENTER}
          animate={animations.ANIMATION_NAME.ACTIVE}
          exit={animations.ANIMATION_NAME.EXIT}
          variants={animations.VARIANTS}
          strokeWidth={
            constants.STROKE_WIDTH[width ?? constants.SPINNER_WIDTH.MD]
          }
        />
      )}
    </framerMotion.AnimatePresence>
  );
};

Spinner.defaultProps = {
  size: constants.SPINNER_SIZE.MD,
  width: constants.SPINNER_WIDTH.MD,
};
