import classnames from 'classnames';
import * as constants from './TextField.constants.ts';

export const CLASSNAMES = {
  container: classnames('flex', 'justify-center', 'gap-2'),

  input: {
    [constants.TEXTFIELD_TYPE.PRIMARY]: classnames(
      'p-2',
      'text-sm',
      'rounded-md',
      'bg-secondary-100',
      'outline-none',
      'shadow',
      'hover:shadow-lg',
      'focus:shadow-lg',
      'transition',
      'text-secondary-600',
      'font-primaryLight',
      'w-full',
      'h-12',
    ),

    [constants.TEXTFIELD_TYPE.SECONDARY]: classnames(
      'p-2',
      'h-8',
      'rounded',
      'bg-secondary-300/20',
      'border',
      'border-secondary-500/80',
      'outline-none',
      'text-sm',
      'w-full',
      'transition',
      'font-primaryLight',

      '[&:not([disabled])]:hover:bg-secondary-200',
      '[&:not([disabled])]:focus:bg-secondary-200',
    ),

    [constants.TEXTFIELD_TYPE.TRANSPARENT]: classnames(
      'p-2',
      'text-sm',
      'outline-none',
      'h-8',
      'bg-transparent',
      'w-full',
    ),
  },
};
