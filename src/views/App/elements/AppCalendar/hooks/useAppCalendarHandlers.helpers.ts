import type { Todo } from 'utils';

export const reorderItems = ({
  items,
  startIndex,
  endIndex,
}: {
  items: Todo[];
  startIndex: number;
  endIndex: number;
}) => {
  const result = [...items];

  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};
