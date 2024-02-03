import type { FC } from 'react';
import type { SpinnerProps } from './Spinner.types.ts';

import * as framerMotion from 'framer-motion';
import * as animations from './Spinner.animations.ts';

import { useId } from 'react';

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  const id = useId();

  return (
    <framerMotion.motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
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
        style={{
          transformOrigin: 'center',
        }}
        fill="none"
        stroke={`url(#${id})`}
        stroke-width="8"
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
          transformOrigin: 'center',
          stroke: 'currentcolor',
        }}
        fill="none"
        opacity=".2"
        stroke-width="8"
        strokeLinecap="round"
        cx="100"
        cy="100"
        r="70"
      />
    </framerMotion.motion.svg>
  );
};
