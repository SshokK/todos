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

  navContent: classnames('flex-1', 'flex', 'flex-col', 'overflow-auto'),

  copyright: classnames(
    'flex',
    'justify-between',
    'items-center',
    'text-xs',
    'text-secondary-700',
    'font-primaryLight',
    'border-t',
    'border-solid',
    'border-secondary-500',
    'p-4',
    'bg-secondary-400',
  ),

  copyrightText: classnames('text-xs', 'text-center'),

  links: classnames('flex', 'gap-2', 'pl-4', 'text-lg'),
};
