import type { ComponentType } from 'react';
import type { useTodosCountAggregations } from 'utils';

import * as components from 'components';

export enum TODOS_COUNT_TYPE {
  OVERDUE = 'overdue',
  TO_DO = 'todo',
  DONE = 'done',
}

export const TODOS_COUNT_CONFIG: Record<
  TODOS_COUNT_TYPE,
  {
    Icon: ComponentType<Record<string, unknown>>;
    tooltipTitleTranslation: string;
    tooltipTitleFallback: string;
    dataKey: keyof ReturnType<typeof useTodosCountAggregations>['data'];
  }
> = {
  [TODOS_COUNT_TYPE.OVERDUE]: {
    Icon: components.IconCrossCircled,
    tooltipTitleTranslation: 'views.App.AppNavbar.TodosCounts.overdue',
    tooltipTitleFallback: 'Overdue',
    dataKey: 'overdueCount',
  },
  [TODOS_COUNT_TYPE.TO_DO]: {
    Icon: components.IconCircle,
    tooltipTitleTranslation: 'views.App.AppNavbar.TodosCounts.todo',
    tooltipTitleFallback: 'To be done',
    dataKey: 'undoneCount',
  },
  [TODOS_COUNT_TYPE.DONE]: {
    Icon: components.IconCheckCircled,
    tooltipTitleTranslation: 'views.App.AppNavbar.TodosCounts.done',
    tooltipTitleFallback: 'Done',
    dataKey: 'doneCount',
  },
};
