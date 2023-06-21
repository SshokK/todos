import type { ToolbarSpacingProps } from './ToolbarSpacing.types';
import type { FC } from 'react';

import * as styles from './ToolbarSpacing.styles';

export const ToolbarSpacing: FC<ToolbarSpacingProps> = ({ size }) => {
  return <div className={styles.CLASSNAMES[size]} />;
};
