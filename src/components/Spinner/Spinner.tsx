import type { FC } from 'react';
import type { SpinnerProps } from './Spinner.types.ts';

import * as framerMotion from 'framer-motion';
import * as animations from './Spinner.animations.ts';
import * as styles from './Spinner.styles.ts';
import * as classnames from 'classnames';
import * as constants from './Spinner.constants.ts';

import { useId } from 'react';

export const Spinner: FC<SpinnerProps> = ({ isVisible, width, className }) => {
  const id = useId();
  const strokeWidth =
    constants.STROKE_WIDTH[width ?? constants.SPINNER_WIDTH.MD];

  return (
    <framerMotion.AnimatePresence>
      {isVisible && (
        <framerMotion.motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className={classnames(className, styles.CLASSNAMES.svg)}
          initial={animations.ANIMATION_NAME.ENTER}
          animate={animations.ANIMATION_NAME.ACTIVE}
          exit={animations.ANIMATION_NAME.EXIT}
          variants={animations.VARIANTS}
        >
          <radialGradient
            id={id}
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stopColor="currentcolor" />
            <stop offset=".3" stopColor="currentcolor" stopOpacity=".9" />
            <stop offset=".6" stopColor="currentcolor" stopOpacity=".6" />
            <stop offset=".8" stopColor="currentcolor" stopOpacity=".3" />
            <stop offset="1" stopColor="currentcolor" stopOpacity="0" />
          </radialGradient>
          <circle
            className={styles.CLASSNAMES.spinningCircle}
            fill="none"
            stroke={`url(#${id})`}
            stroke-width={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="200 1000"
            strokeDashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="0.8"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            style={{
              stroke: 'currentColor',
            }}
            className={styles.CLASSNAMES.trackCircle}
            fill="none"
            opacity=".2"
            stroke-width={strokeWidth}
            strokeLinecap="round"
            cx="100"
            cy="100"
            r="70"
          />
        </framerMotion.motion.svg>
      )}
    </framerMotion.AnimatePresence>
  );
};

Spinner.defaultProps = {
  width: constants.SPINNER_WIDTH.MD,
};
