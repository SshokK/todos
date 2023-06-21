import type * as react from 'react';

import type { Popover } from '../../../Popover';
import type { IconButton } from '../../../IconButton';

export type ToolbarActionProps = Pick<
  react.ComponentProps<typeof IconButton>,
  'Icon' | 'onClick' | 'tooltip' | 'isDisabled' | 'className'
> & {
  popover?: Pick<
    react.ComponentProps<typeof Popover>,
    | 'content'
    | 'side'
    | 'alignment'
    | 'isBlank'
    | 'isWithCloseButton'
    | 'isWithArrow'
  >;
};
