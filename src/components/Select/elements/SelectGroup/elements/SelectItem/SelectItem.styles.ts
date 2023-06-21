import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames(
    'relative',
    'flex',
    'items-center',
    'p-1',
    'px-6',
    'bg-secondary-100',
    'rounded-md',

    '[&:not([data-disabled])]:hover:bg-secondary-200',
    '[&:not([data-disabled])]:cursor-pointer',
    '[&:not([data-disabled])]:text-primary-600',

    'outline-none',
    'hover:outline-none',
    'focus:outline-none',

    'font-primaryLight',
    'text-xs',
  ),

  containerDisabled: classnames('cursor-not-allowed', 'text-secondary-400'),

  indicator: classnames('absolute', 'text-primary-600', 'left-0'),
};
