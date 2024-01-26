import classnames from 'classnames';
import * as constants from './Toast.constants.ts';

export const CLASSNAMES = {
  container: classnames(''),

  innerContainer: classnames('shadow-lg', 'p-3', 'rounded', 'relative'),

  innerContainerType: {
    [constants.TOAST_TYPE.NEUTRAL]: classnames('bg-secondary-400/60'),

    [constants.TOAST_TYPE.SUCCESS]: classnames(
      'bg-success-300/90',
      'text-secondary-100',
    ),

    [constants.TOAST_TYPE.WARNING]: classnames(
      'bg-warning-200/80',
      'text-secondary-100',
    ),

    [constants.TOAST_TYPE.ERROR]: classnames(
      'bg-error-300/90',
      'text-secondary-100',
    ),
  },

  contentAligner: classnames('flex', 'justify-center', 'items-center', 'gap-5'),

  textContainer: classnames('flex', 'flex-col', 'overflow-hidden'),
};
