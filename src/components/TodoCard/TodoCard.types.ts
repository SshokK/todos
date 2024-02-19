import type { ComponentProps } from 'react';
import type { Card } from '../Card';
import type { Todo } from 'utils';

import type * as elements from './elements';

export type TodoCardProps = ComponentProps<typeof Card> & {
  todo?: Todo;
  isLoading?: boolean;
  animationType?: ComponentProps<typeof elements.Container>['animationType'];
};
