import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames(
    'h-full',
    'bg-secondary-100',
    'border-l',
    'border-secondary-400',
  ),

  header: classnames('p-6', 'flex', 'justify-end', 'gap-6'),

  title: classnames('w-full', 'truncate'),
};
