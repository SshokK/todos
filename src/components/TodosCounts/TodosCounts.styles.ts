import * as utils from 'utils';
import * as constants from './TodosCounts.constants.ts';

export const CLASSNAMES = {
  iconsContainer: utils.cn('flex', 'items-center', 'gap-1', 'text-lg'),

  countContainer: utils.cn('relative', 'flex', 'flex-col', 'gap-1'),

  countBadge: utils.cn('text-sm'),

  [constants.TODOS_COUNT_TYPE.OVERDUE]: utils.cn('text-error'),

  [constants.TODOS_COUNT_TYPE.TO_DO]: utils.cn(
    'text-warning',
    'rotate-45',

    '[&>svg>*>*>stop:nth-child(1)]:[stop-color:currentColor]',
    '[&>svg>*>*>stop:nth-child(2)]:[stop-color:currentColor]',
    '[&>svg>*>*>stop:nth-child(3)]:[stop-color:theme(colors.secondary.500)]',
    '[&>svg>*>*>stop:nth-child(4)]:[stop-color:theme(colors.secondary.500)]',
  ),

  [constants.TODOS_COUNT_TYPE.DONE]: utils.cn('text-success'),
};
