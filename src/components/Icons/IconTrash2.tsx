import * as react from 'react';
import * as reactIcons from '@radix-ui/react-icons';
import * as styles from './styles';

import classnames from 'classnames';

export const IconTrash2 = react.forwardRef<
  SVGSVGElement,
  react.DetailedHTMLProps<react.HTMLAttributes<SVGSVGElement>, SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000000"
      ref={ref}
      {...(props as react.ComponentProps<typeof reactIcons.BoxModelIcon>)}
      className={classnames(
        styles.CLASSNAMES,
        props.className,
        'fill-none',
        'stroke-[currentColor]',
      )}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <polyline points="52 16 48 56 16 56 12 16"></polyline>
        <path d="M20 16v-3.94A4.06 4.06 0 0 1 24.06 8h15.88A4.06 4.06 0 0 1 44 12.06V16"></path>
        <line x1="8" y1="16" x2="56" y2="16"></line>
        <line x1="24" y1="28" x2="40" y2="44"></line>
        <line x1="40" y1="28" x2="24" y2="44"></line>
      </g>
    </svg>
  );
});
