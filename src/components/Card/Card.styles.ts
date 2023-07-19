import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('p-4', 'bg-secondary-100', 'shadow', 'rounded'),

  isClickable: classnames(
    'transition',
    'duration-[100ms]',
    'cursor-pointer',
    'hover:bg-secondary-200',
    'focus:bg-secondary-200',
    'outline-none',
  ),
};
