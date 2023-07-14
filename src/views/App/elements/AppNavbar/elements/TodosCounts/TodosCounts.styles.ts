import classnames from 'classnames';

import * as constants from './TodosCounts.constants.ts';

export const CLASSNAMES = {
  iconsContainer: classnames('flex', 'items-center', 'gap-6', 'text-lg'),

  countContainer: classnames('relative', 'flex', 'flex-col', 'gap-1'),

  countBadge: classnames('text-sm'),

  [constants.TODOS_COUNT_TYPE.OVERDUE]: classnames('text-error'),
  [constants.TODOS_COUNT_TYPE.TO_DO]: classnames('text-warning'),
  [constants.TODOS_COUNT_TYPE.DONE]: classnames('text-success'),
};
