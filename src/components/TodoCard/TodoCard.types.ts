import type { ComponentProps } from 'react';
import type { Card } from '../Card';
import type { Todo } from 'utils';

export type TodoCardProps = ComponentProps<typeof Card> & {
  todo?: Todo;
  isLoading?: boolean;
};
