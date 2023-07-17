import type { IconButtonProps } from './IconButton.types';
import type { ElementType } from 'react';

import * as react from 'react';
import * as styles from './IconButton.styles';
import * as constants from './IconButton.constants';

import classnames from 'classnames';

import { Tooltip } from '../Tooltip';

import { useIconButtonHandlers } from './hooks';

export const IconButton = react.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      type,
      size,
      tooltip,
      onClick,
      isDisabled,
      Icon,
      element,
      className,
      ...restProps
    },
    ref,
  ) => {
    const handlers = useIconButtonHandlers();

    const Element = `${element}` as ElementType;

    return (
      <Tooltip
        isOpen={!tooltip?.title ? false : undefined}
        title={tooltip?.title}
        side={tooltip?.side}
      >
        <Element
          {...restProps}
          ref={ref}
          onClick={onClick}
          disabled={isDisabled}
          className={classnames(className, {
            [styles.CLASSNAMES]: true,
            [styles.TYPE_CLASSNAMES[
              type ?? constants.ICON_BUTTON_TYPE.PRIMARY
            ]]: true,
            [styles.SIZE_CLASSNAMES[size ?? constants.ICON_BUTTON_SIZE.MD]]:
              true,
          })}
          onMouseDown={handlers.handleMouseDown}
        >
          {Icon && <Icon />}
        </Element>
      </Tooltip>
    );
  },
);

IconButton.defaultProps = {
  element: constants.ICON_BUTTON_ELEMENT.BUTTON,
};
