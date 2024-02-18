import type { AppNavbarHandlers } from './useAppNavbarHandlers.types.ts';
import type { useAppNavbarQueries } from './useAppNavbarQueries.ts';

export const useAppNavbarHandlers = ({
  queries,
}: {
  queries: ReturnType<typeof useAppNavbarQueries>;
}): AppNavbarHandlers => {
  const handleRefetch: AppNavbarHandlers['handleRefetch'] = () => {
    queries.todosCounts.refetch();
    queries.todosCountByDays.refetch();
  };

  return {
    handleRefetch,
  };
};
