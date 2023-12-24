import type { IconButtonProps } from './IconButton.types';
import type { ElementType } from 'react';

import * as react from 'react';
import * as styles from './IconButton.styles';
import * as constants from './IconButton.constants';
import * as twMerge from 'tailwind-merge';

import classnames from 'classnames';

import { Tooltip } from '../Tooltip';

import { useIconButtonHandlers } from './hooks';

export const IconButton = react.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      type,
      size,
      badge,
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

    const iconButtonType = type ?? constants.ICON_BUTTON_TYPE.PRIMARY;
    const iconButtonSize = size ?? constants.ICON_BUTTON_SIZE.MD;

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
          className={twMerge.twMerge(
            classnames(className, {
              [styles.CLASSNAMES]: true,
              [styles.SIZE_CLASSNAMES[iconButtonSize]]: true,
              [styles.TYPE_CLASSNAMES[iconButtonType]]: true,
            }),
          )}
          onMouseDown={handlers.handleMouseDown}
        >
          {Icon && (
            <Icon
              className={classnames({
                [styles.ICON_CLASSNAMES.icon]: true,
                [styles.ICON_CLASSNAMES.withBadge]: badge,
              })}
            />
          )}
          {badge && (
            <div
              className={classnames({
                [styles.BADGE_CLASSNAMES.badge]: true,
                [styles.BADGE_CLASSNAMES.badgeSize[iconButtonSize]]: true,
              })}
            >
              {badge}
            </div>
          )}
        </Element>
      </Tooltip>
    );
  },
);

IconButton.defaultProps = {
  element: constants.ICON_BUTTON_ELEMENT.BUTTON,
};
