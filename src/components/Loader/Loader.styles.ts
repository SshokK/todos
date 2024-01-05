import classnames from 'classnames';

export const CLASSNAMES = {
  outerContainer: classnames('relative', 'w-full', 'h-full'),

  container: classnames(
    'inset-0',
    'bg-secondary-500/20',
    'cursor-not-allowed',
    'absolute',
    'w-full',
    'h-full',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
  ),

  svg: classnames('block', 'bg-transparent', 'w-20', 'h-20'),
};
