import * as utils from '../../utils';

export enum CLEAR_TYPE {
  FULL = 'full',
  OVERDUE_ONLY = 'overdueOnly',
}

export const CLEAR_OPTIONS: Record<
  CLEAR_TYPE,
  {
    translationPath: string;
    translationFallback: string;
  }
> = {
  [CLEAR_TYPE.FULL]: {
    translationPath: 'components.ClearButton.fullClearOption',
    translationFallback: 'Clear all todos',
  },
  [CLEAR_TYPE.OVERDUE_ONLY]: {
    translationPath: 'components.ClearButton.overdueClearOption',
    translationFallback: 'Clear only overdue todos',
  },
};

export const CLEAR_REQUEST_BODY_GETTERS: Record<
  CLEAR_TYPE,
  () => Parameters<typeof utils.bulkDeleteTodos>
> = {
  [CLEAR_TYPE.FULL]: () => [
    {
      filters: {},
    },
  ],
  [CLEAR_TYPE.OVERDUE_ONLY]: () => [
    {
      filters: {
        isDone: false,
        date: {
          rangeEnd: utils.getToday().toISOString(),
        },
      },
    },
  ],
};
