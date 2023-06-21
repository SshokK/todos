import type { ToolbarProps } from './Toolbar.types';

import * as react from 'react';
import * as reactToolbar from '@radix-ui/react-toolbar';
import * as constants from './Toolbar.constants';
import * as styles from './Toolbar.styles';

import classnames from 'classnames';

export const Toolbar = react.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ config, children, isFullWidth, className }, ref) => {
    return (
      <reactToolbar.Root
        ref={ref}
        className={classnames(className, {
          [styles.CLASSNAMES.container]: true,
          [styles.CLASSNAMES.containerFullWidth]: isFullWidth,
        })}
      >
        {config.map((config) => {
          const Element = constants.TOOLBAR_ELEMENTS[config.type];

          /**
           *
           * Had to disable TS to make this component easy to extend
           *
           */
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return <Element key={config.key} {...config.props} />;
        })}
        {children}
      </reactToolbar.Root>
    );
  },
);
