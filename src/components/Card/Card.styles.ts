import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('p-4', 'bg-secondary-100', 'shadow', 'rounded'),

  isClickable: classnames(
    'transition-colors',
    'cursor-pointer',
    'hover:bg-secondary-150',
    'focus:bg-secondary-150',
    'outline-none',
  ),
};
