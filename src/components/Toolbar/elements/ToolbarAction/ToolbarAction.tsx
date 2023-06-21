import type { ToolbarActionProps } from './ToolbarAction.types';
import type { FC } from 'react';

import { Popover } from '../../../Popover';
import { IconButton } from '../../../IconButton';

export const ToolbarAction: FC<ToolbarActionProps> = ({
  tooltip,
  onClick,
  isDisabled,
  popover,
  className,
  Icon,
}) => {
  return (
    <Popover isDisabled={!popover?.content || isDisabled} {...popover}>
      <div>
        <IconButton
          Icon={Icon}
          tooltip={tooltip}
          onClick={onClick}
          isDisabled={isDisabled}
          className={className}
        />
      </div>
    </Popover>
  );
};
