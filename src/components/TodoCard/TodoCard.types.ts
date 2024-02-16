import type { ComponentProps } from 'react';
import type { Card } from '../Card';
import type { Todo } from 'utils';

import type * as constants from './TodoCard.constants.ts';

export type TodoCardProps = ComponentProps<typeof Card> & {
  todo: Todo;
  animationType?: constants.ANIMATION_TYPE;
};
