import classnames from 'classnames';
import * as constants from './Checkbox.constants';

export const CLASSNAMES = {
  container: classnames(''),

  innerContainer: classnames('flex', 'items-center', 'gap-2'),

  label: classnames(
    'font-primaryLight',
    'text-xs',
    'text-secondary-700',
    'cursor-pointer',

    'data-[disabled=true]:text-secondary-400',
    'data-[disabled=true]:cursor-not-allowed',
  ),

  checkbox: classnames(
    'flex',
    'items-center',
    'justify-center',
    'outline-none',
    'disabled:cursor-not-allowed',
  ),

  checkboxType: {
    [constants.CHECKBOX_TYPE.PRIMARY]: classnames(
      'bg-secondary-100',
      'shadow',
      'rounded-md',
      'transition',
      '[&:not([disabled])]:hover:bg-secondary-200/60',
      '[&:not([disabled])]:focus:bg-secondary-200/60',
      'disabled:bg-secondary-300/60',
    ),

    [constants.CHECKBOX_TYPE.SECONDARY]: classnames(
      'bg-transparent',
      'rounded-md',
      'transition',
      'border',
      'border-solid',
      'border-secondary-500',
      '[&:not([disabled])]:hover:bg-secondary-200/60',
      '[&:not([disabled])]:focus:bg-secondary-200/60',
      'disabled:bg-secondary-300/60',
    ),
  },

  checkboxSize: {
    [constants.CHECKBOX_SIZE.XS]: classnames(
      'p-0',
      'w-2.5',
      'h-2.5',
      'rounded-sm',
    ),

    [constants.CHECKBOX_SIZE.SM]: classnames('p-0', 'w-4', 'h-4', 'rounded'),

    [constants.CHECKBOX_SIZE.MD]: classnames('p-1', 'w-6', 'h-6'),

    [constants.CHECKBOX_SIZE.LG]: classnames('p-1', 'w-8', 'h-8'),
  },

  checkboxIndicatorType: {
    [constants.CHECKBOX_TYPE.PRIMARY]: classnames(
      'data-[state=checked]:text-primary-500',
      'data-[disabled]:text-secondary-500/60',
      'data-[state=unchecked]:hidden',
    ),

    [constants.CHECKBOX_TYPE.SECONDARY]: classnames(
      'data-[state=checked]:text-secondary-700',
      'data-[disabled]:text-secondary-500/60',
      'data-[state=unchecked]:hidden',
    ),
  },

  checkboxIndicatorSize: {
    [constants.CHECKBOX_SIZE.XS]: classnames('text-sm'),

    [constants.CHECKBOX_SIZE.SM]: classnames('text-sm'),

    [constants.CHECKBOX_SIZE.MD]: classnames('text-md'),

    [constants.CHECKBOX_SIZE.LG]: classnames('text-xl'),
  },
};
