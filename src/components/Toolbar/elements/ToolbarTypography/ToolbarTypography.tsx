import type { FC } from 'react';
import type { ToolbarTypographyProps } from './ToolbarTypography.types';

import { Typography } from '../../../Typography';

export const ToolbarTypography: FC<ToolbarTypographyProps> = (props) => {
  return <Typography {...props} />;
};
