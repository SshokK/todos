import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('flex', 'flex-col', 'gap-8', 'flex-1'),

  todosCounts: classnames('px-6'),

  list: classnames(
    'flex-1',
    'flex',
    'flex-col',
    'items-center',
    'gap-8',
    'relative',
    'w-full',
  ),

  listItem: classnames('px-6'),
};
