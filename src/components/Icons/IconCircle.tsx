import * as react from 'react';
import * as styles from './styles';
import * as utils from 'utils';

export const IconCircle = react.forwardRef<
  SVGSVGElement,
  react.DetailedHTMLProps<react.HTMLAttributes<SVGSVGElement>, SVGSVGElement>
>((props, ref) => {
  const id = react.useId();

  return (
    <svg
      ref={ref}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={utils.cn(styles.CLASSNAMES, props.className)}
    >
      <defs>
        <linearGradient id={id}>
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
  //
  // return (
  //   <reactIcons.CircleIcon
  //     ref={ref}
  //     {...(props as react.ComponentProps<typeof reactIcons.BoxModelIcon>)}
  //     className={classnames(styles.CLASSNAMES, props.className)}
  //   />
  // );
});
