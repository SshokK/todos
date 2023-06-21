import classnames from 'classnames';

export const CLASSNAMES = {
  nav: classnames(
    'bg-secondary-200',
    'border-solid',
    'border-r',
    'border-secondary-400',
    'h-full',
    'flex',
    'flex-col',
  ),

  navContent: classnames('p-6', 'flex-1', 'flex', 'flex-col'),

  copyright: classnames(
    'text-xs',
    'text-secondary-700',
    'font-primaryLight',
    'border-t',
    'border-solid',
    'border-secondary-500',
    'p-4',
    'bg-secondary-400',
    'truncate',
  ),
};
