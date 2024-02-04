import { useTodosCountByStatus } from 'utils';

export const useTodosCountsQueries = () => {
  const todosCounts = useTodosCountByStatus();

  return {
    todosCounts,
  };
};
