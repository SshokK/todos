import classnames from 'classnames';

import * as constants from './Spinner.constants.ts';

export const SIZE_CLASSNAMES = {
  [constants.SPINNER_SIZE.SM]: classnames('w-1', 'h-1'),
  [constants.SPINNER_SIZE.MD]: classnames('w-8', 'h-8'),
  [constants.SPINNER_SIZE.LG]: classnames('w-16', 'h-16'),
};
