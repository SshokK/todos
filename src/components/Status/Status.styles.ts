import classnames from 'classnames';
import * as constants from './Status.constants';

export const CLASSNAMES = {
  container: classnames(
    'relative',
    'w-3',
    'h-3',
    'flex',
    'justify-center',
    'items-center',
  ),

  status: classnames('rounded-full', 'w-3', 'h-3'),

  statusPingAnimation: classnames(
    'animate-ping',
    'absolute',
    'inline-flex',
    'h-full',
    'w-full',
    'rounded-full',
  ),
};

export const COLOR_CLASSNAMES: Record<constants.STATUS_TYPES, string> = {
  [constants.STATUS_TYPES.INFO]: classnames('bg-primary-200'),
  [constants.STATUS_TYPES.SUCCESS]: classnames('bg-success-100'),
  [constants.STATUS_TYPES.WARNING]: classnames('bg-warning-100'),
  [constants.STATUS_TYPES.ERROR]: classnames('bg-error-100'),
  [constants.STATUS_TYPES.LOADING]: classnames(
    'animate-pulse',
    'bg-secondary-300',
  ),
};
