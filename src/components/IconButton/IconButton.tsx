import type * as types from './IconButton.types';

import * as react from 'react';
import * as styles from './IconButton.styles';
import * as constants from './IconButton.constants';

import { Tooltip } from '../Tooltip';

import classnames from 'classnames';

export const IconButton = react.forwardRef<
  HTMLButtonElement,
  types.IconButtonProps
>(
  (
    { type, size, tooltip, onClick, isDisabled, Icon, className, ...restProps },
    ref,
  ) => {
    return (
      <Tooltip
        isOpen={!tooltip?.title ? false : undefined}
        title={tooltip?.title}
        side={tooltip?.side}
      >
        <button
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
          onMouseDown={(e) => e.preventDefault()}
        >
          {Icon && <Icon />}
        </button>
      </Tooltip>
    );
  },
);
