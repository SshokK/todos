import * as utils from 'utils';

export const CLASSNAMES = {
  container: utils.cn('flex', 'flex-col', 'gap-8', 'flex-1'),

  todosCounts: utils.cn('px-6'),

  list: utils.cn(
    'flex-1',
    'flex',
    'flex-col',
    'items-center',
    'gap-8',
    'relative',
    'w-full',
  ),

  listItem: utils.cn('px-6'),
};
