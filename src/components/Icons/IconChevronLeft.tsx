import * as react from 'react';
import * as reactIcons from '@radix-ui/react-icons';
import * as styles from './styles';

import classnames from 'classnames';

export const IconChevronLeft = react.forwardRef<
  SVGSVGElement,
  react.DetailedHTMLProps<react.HTMLAttributes<SVGSVGElement>, SVGSVGElement>
>((props, ref) => {
  return (
    <reactIcons.ChevronLeftIcon
      ref={ref}
      {...(props as react.ComponentProps<typeof reactIcons.BoxModelIcon>)}
      className={classnames(styles.CLASSNAMES, props.className)}
    />
  );
});
