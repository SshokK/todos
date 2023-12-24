import * as react from 'react';
import * as reactIcons from '@radix-ui/react-icons';
import * as styles from './styles';

import classnames from 'classnames';

export const IconQuestionCircled = react.forwardRef<
  SVGSVGElement,
  react.DetailedHTMLProps<react.HTMLAttributes<SVGSVGElement>, SVGSVGElement>
>((props, ref) => {
  return (
    <reactIcons.QuestionMarkCircledIcon
      ref={ref}
      {...(props as react.ComponentProps<
        typeof reactIcons.QuestionMarkCircledIcon
      >)}
      className={classnames(styles.CLASSNAMES, props.className)}
    />
  );
});
