import classnames from 'classnames';
import * as constants from './Alert.constants';

export const CLASSNAMES = {
  alert: classnames(
    'flex',
    'rounded-md',
    'py-1',
    'px-2',
  ),

  alertType: {
    [constants.ALERT_TYPES.INFO]: classnames(
      'bg-secondary-100',
      'text-secondary-900',
    ),
    [constants.ALERT_TYPES.SUCCESS]: classnames(
      'bg-success',
      'text-secondary-100',
    ),
    [constants.ALERT_TYPES.WARNING]: classnames(
      'bg-warning',
      'text-secondary-100',
    ),
    [constants.ALERT_TYPES.ERROR]: classnames('bg-error', 'text-secondary-100'),
  },

  contentWrapper: classnames(
    'flex',
    'items-start'
  ),

  body: classnames(

  )
};
