import type { Todo } from 'store';
import type { ComponentProps } from 'react';
import type * as components from 'components';

export type TodoCardProps = ComponentProps<typeof components.Card> & {
  todo: Todo;
};
