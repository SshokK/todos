import type { InfiniteTodosCountByDaysSelector } from './useTodosInfiniteCountByDays.types.ts';

import type * as api from '../../todos.api.ts';

export const formatFlattenInfiniteTodosCountByDays: InfiniteTodosCountByDaysSelector<
  Awaited<ReturnType<typeof api.fetchTodosCountByDays>>
> = (args) => {
  return args.pages.flat();
};
