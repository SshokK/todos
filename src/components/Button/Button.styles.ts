import classnames from 'classnames';

import * as constants from './Button.constants.ts';

export const CLASSNAMES = {
  button: classnames(
    'p-2',
    'text-secondary-800',
    'outline-none',
    'text-sm',
    'transition-colors',

    '[&:not([data-disabled])]:hover:bg-secondary-200',
    '[&:not([data-disabled])]:hover:text-primary-600',

    '[&:not([data-disabled])]:focus:bg-secondary-200',
    '[&:not([data-disabled])]:focus:text-primary-600',

    '[&:not([data-disabled])]:cursor-pointer',
  ),

  textAlignment: {
    [constants.BUTTON_TEXT_ALIGNMENT.LEFT]: 'text-left',
    [constants.BUTTON_TEXT_ALIGNMENT.CENTER]: 'text-center',
    [constants.BUTTON_TEXT_ALIGNMENT.RIGHT]: 'text-right',
  },
};
