import type { FC } from 'react';
import type { LoaderProps } from './Loader.types.ts';

import * as framerMotion from 'framer-motion';
import * as animations from './Loader.animations.ts';
import * as styles from './Loader.styles.ts';

import classnames from 'classnames';

export const Loader: FC<LoaderProps> = ({
  isVisible,
  children,
  classNames,
}) => {
  return (
    <div
      className={classnames(
        classNames?.outerContainer,
        styles.CLASSNAMES.outerContainer,
      )}
    >
      <framerMotion.AnimatePresence>
        {isVisible && (
          <framerMotion.motion.div
            initial={animations.ANIMATION_NAME.INITIAL}
            animate={animations.ANIMATION_NAME.ANIMATE}
            exit={animations.ANIMATION_NAME.EXIT}
            variants={animations.VARIANTS}
            className={styles.CLASSNAMES.container}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={styles.CLASSNAMES.svg}
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <rect x="17.5" y="30" width="15" height="40" fill="#e15b64">
                <animate
                  attributeName="y"
                  repeatCount="indefinite"
                  dur="1s"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="18;30;30"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                  begin="-0.2s"
                ></animate>
                <animate
                  attributeName="height"
                  repeatCount="indefinite"
                  dur="1s"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="64;40;40"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                  begin="-0.2s"
                ></animate>
              </rect>
              <rect x="42.5" y="30" width="15" height="40" fill="#00BA85">
                <animate
                  attributeName="y"
                  repeatCount="indefinite"
                  dur="1s"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="20.999999999999996;30;30"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                  begin="-0.1s"
                ></animate>
                <animate
                  attributeName="height"
                  repeatCount="indefinite"
                  dur="1s"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="58.00000000000001;40;40"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                  begin="-0.1s"
                ></animate>
              </rect>
              <rect x="67.5" y="30" width="15" height="40" fill="#E8C388">
                <animate
                  attributeName="y"
                  repeatCount="indefinite"
                  dur="1s"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="20.999999999999996;30;30"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                ></animate>
                <animate
                  attributeName="height"
                  repeatCount="indefinite"
                  dur="1s"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  values="58.00000000000001;40;40"
                  keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                ></animate>
              </rect>
            </svg>
          </framerMotion.motion.div>
        )}
      </framerMotion.AnimatePresence>
      {children}
    </div>
  );
};
