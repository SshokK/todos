import type { ComponentProps } from 'react';
import type * as components from 'components';
import type { Todo } from 'utils';

export type TodoCardProps = ComponentProps<typeof components.Card> & {
  date: Date;
  todo: Todo;
};
