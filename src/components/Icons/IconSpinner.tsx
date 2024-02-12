import * as react from 'react';
import * as framerMotion from 'framer-motion';
import * as styles from './styles';
import * as twMerge from 'tailwind-merge';

import classnames from 'classnames';

import { useId } from 'react';

export const IconSpinner = react.forwardRef<
  SVGSVGElement,
  framerMotion.SVGMotionProps<SVGSVGElement> & {
    strokeWidth?: number;
  }
>((props, ref) => {
  const id = useId();

  return (
    <framerMotion.motion.svg
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={twMerge.twMerge(
        classnames(styles.CLASSNAMES, String(props.className)),
      )}
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
        strokeWidth={props.strokeWidth ?? 8}
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
          transformOrigin: 'center',
        }}
        fill="none"
        opacity=".2"
        strokeWidth={props.strokeWidth ?? 8}
        strokeLinecap="round"
        cx="100"
        cy="100"
        r="70"
      />
    </framerMotion.motion.svg>
  );
});
