import type { PulseProps } from './Ripple.types.ts';

import * as react from 'react';
import * as styles from './Ripple.styles.ts';
import * as framerMotion from 'framer-motion';
import * as animations from '../Loader/Loader.animations.ts';

import { IconRipple } from '../Icons';

import classnames from 'classnames';

export const Ripple = react.forwardRef<SVGSVGElement, PulseProps>(
  ({ isVisible, className }, ref) => {
    return (
      <framerMotion.AnimatePresence>
        {isVisible && (
          <IconRipple
            ref={ref}
            className={classnames(styles.CLASSNAMES.svg, className)}
            initial={animations.ANIMATION_NAME.INITIAL}
            animate={animations.ANIMATION_NAME.ANIMATE}
            exit={animations.ANIMATION_NAME.EXIT}
            variants={animations.VARIANTS}
          />
        )}
      </framerMotion.AnimatePresence>
    );
  },
);
