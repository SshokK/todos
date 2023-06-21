import type { ReactNode } from 'react';

import type * as constants from './Separator.constants';

export type SeparatorProps = {
  orientation?: constants.SEPARATOR_ORIENTATION;
  className?: string;
  children?: ReactNode;
};
