import { useTodosCounts } from 'utils';

export const useTodosCountsQueries = () => {
  const todosCounts = useTodosCounts();

  return {
    todosCounts,
  };
};
