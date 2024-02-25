import * as utils from 'utils';

export const CLASSNAMES = {
  container: utils.cn('relative', 'w-full', 'h-full'),

  noUpcomingTodosMessage: utils.cn(
    'flex-1',
    'flex',
    'items-center',
    'justify-center',
    'text-secondary-500',
    'absolute',
    'h-full',
    'w-full',
  ),
};
