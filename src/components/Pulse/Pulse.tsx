import type { PulseProps } from './Pulse.types.ts';

import * as react from 'react';
import * as styles from './Pulse.styles.ts';
import * as framerMotion from 'framer-motion';
import * as animations from '../Loader/Loader.animations.ts';

import { IconPulse } from '../Icons';

import classnames from 'classnames';

export const Pulse = react.forwardRef<SVGSVGElement, PulseProps>(
  ({ isVisible, className }, ref) => {
    return (
      <framerMotion.AnimatePresence>
        {isVisible && (
          <IconPulse
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
