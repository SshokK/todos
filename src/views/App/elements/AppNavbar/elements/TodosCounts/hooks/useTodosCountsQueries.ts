import { useTodosCountAggregations } from 'utils';

export const useTodosCountsQueries = () => {
  const todosCounts = useTodosCountAggregations();

  return {
    todosCounts,
  };
};
