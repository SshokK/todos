import type { ToolbarButtonProps } from './ToolbarButton.types';
import type { FC } from 'react';

import { Button } from '../../../Button';

export const ToolbarButton: FC<ToolbarButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};
