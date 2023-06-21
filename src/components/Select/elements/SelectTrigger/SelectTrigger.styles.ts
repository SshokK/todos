import classnames from 'classnames';

export const CLASSNAMES = {
  trigger: classnames(
    'flex',
    'rounded-md',
    'justify-between',
    'items-center',
    'p-2',
    'w-full',
    'h-full',
    'outline-none',
    'transition-all',

    'bg-secondary-100',
    'shadow',
    'text-secondary-900',
    'data-[placeholder]:text-secondary-500',

    'hover:bg-secondary-200',
    'focus:bg-secondary-200',
  ),

  triggerIcon: classnames('text-secondary-900'),

  value: classnames('truncate'),
};
