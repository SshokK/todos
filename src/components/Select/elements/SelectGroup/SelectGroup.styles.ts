import classnames from 'classnames';

export const CLASSNAMES = {
  group: classnames(
    'after:block',
    'after:content-[""]',
    'after:w-full',
    'after:h-px',
    'after:border-b',
    'after:border-secondary-400',
    'after:m-2',
    'last:after:hidden',
  ),

  groupLabel: classnames(
    'font-primaryRegular',
    'text-secondary-600',
    'px-6',
    'py-1',
    'text-xs',
  ),
};
