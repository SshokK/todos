import type { FC } from 'react';
import type { ToolbarTextProps } from './ToolbarTextField.types';

import { TextField } from '../../../TextField';

export const ToolbarTextField: FC<ToolbarTextProps> = (props) => {
  return <TextField {...props} />;
};
