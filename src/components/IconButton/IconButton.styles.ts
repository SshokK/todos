import classnames from 'classnames';

import * as constants from './IconButton.constants';

export const CLASSNAMES = classnames(
  'rounded-md',
  'flex',
  'items-center',
  'justify-center',
  'outline-none',
  'transition-all',
  'duration-75',
  'disabled:cursor-not-allowed',
  'aspect-square',
  'relative',
);

export const ICON_CLASSNAMES = {
  icon: '',

  withBadge: '[clip-path:polygon(0%_0,120%_0%,0%_120%)]',
};

export const TYPE_CLASSNAMES: Record<constants.ICON_BUTTON_TYPE, string> = {
  [constants.ICON_BUTTON_TYPE.PRIMARY]: classnames(
    'bg-secondary-300',

    '[&:not([disabled])]:hover:bg-secondary-400',
    '[&:not([disabled])]:focus:bg-secondary-400',

    'disabled:bg-secondary-200',
    'disabled:text-secondary-500',
  ),

  [constants.ICON_BUTTON_TYPE.SECONDARY]: classnames(
    'bg-secondary-100',

    'shadow',

    '[&:not([disabled])]:hover:shadow-lg',
    '[&:not([disabled])]:focus:focus:shadow-lg',

    'disabled:text-secondary-500',
  ),

  [constants.ICON_BUTTON_TYPE.TERTIARY]: classnames(
    'bg-transparent',
    'rounded-full',
    'duration-100',

    '[&:not([disabled])]:hover:text-primary-300',
    '[&:not([disabled])]:focus:text-primary-300',

    'disabled:text-secondary-500',
    'p-0',
  ),
};

export const SIZE_CLASSNAMES: Record<constants.ICON_BUTTON_SIZE, string> = {
  [constants.ICON_BUTTON_SIZE.SM]: classnames('p-1', 'text-xs', 'w-6', 'h-6'),

  [constants.ICON_BUTTON_SIZE.MD]: classnames('p-1.5', 'text-l', 'w-8', 'h-8'),

  [constants.ICON_BUTTON_SIZE.LG]: classnames('p-2', 'text-xl', 'w-12', 'h-12'),
};

export const BADGE_CLASSNAMES = {
  badge: classnames(
    'rounded-full',
    'absolute',
    'flex',
    'items-center',
    'justify-center',
    'truncate',
  ),

  badgeSize: {
    [constants.ICON_BUTTON_SIZE.SM]: classnames(
      'bottom-0.5',
      'right-0.5',
      'text-[0.45rem]',
      'w-3',
      'h-3',
    ),
    [constants.ICON_BUTTON_SIZE.MD]: classnames(
      'bottom-0.5',
      'right-0.5',
      'text-[0.55rem]',
      'w-4',
      'h-4',
    ),
    [constants.ICON_BUTTON_SIZE.LG]: classnames(
      'bottom-1.5',
      'right-1',
      'text-xs',
      'w-5',
      'h-5',
    ),
  },
};
