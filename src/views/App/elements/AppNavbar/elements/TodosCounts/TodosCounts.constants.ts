import type { ComponentType } from 'react';
import type * as store from 'store';

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
    storeKey: keyof ReturnType<typeof store.getTodosCounts>;
  }
> = {
  [TODOS_COUNT_TYPE.OVERDUE]: {
    Icon: components.IconCrossCircled,
    tooltipTitleTranslation: 'views.App.AppNavbar.TodosCounts.overdue',
    tooltipTitleFallback: 'Overdue',
    storeKey: 'unfinishedOverdueTodos',
  },
  [TODOS_COUNT_TYPE.TO_DO]: {
    Icon: components.IconCircle,
    tooltipTitleTranslation: 'views.App.AppNavbar.TodosCounts.todo',
    tooltipTitleFallback: 'To be done',
    storeKey: 'unfinishedFutureTodos',
  },
  [TODOS_COUNT_TYPE.DONE]: {
    Icon: components.IconCheckCircled,
    tooltipTitleTranslation: 'views.App.AppNavbar.TodosCounts.done',
    tooltipTitleFallback: 'Done',
    storeKey: 'finishedTodos',
  },
};
