import type { FC } from 'react';

import * as reactToolbar from '@radix-ui/react-toolbar';
import * as styles from './ToolbarSeparator.styles';

export const ToolbarSeparator: FC = () => {
  return <reactToolbar.ToolbarSeparator className={styles.CLASSNAMES} />;
};
