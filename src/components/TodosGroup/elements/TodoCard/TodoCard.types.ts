import type { ComponentProps } from 'react';
import type * as components from '../../../index.ts';
import type { Todo } from '../../../../utils';

export type TodoCardProps = ComponentProps<typeof components.Card> & {
  todo: Todo;
};
