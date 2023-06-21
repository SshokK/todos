import * as constants from './ToolbarSpacing.constants';
import classnames from 'classnames';

export const CLASSNAMES: Record<constants.TOOLBAR_SPACING_SIZE, string> = {
  [constants.TOOLBAR_SPACING_SIZE.XS]: classnames('w-1'),
  [constants.TOOLBAR_SPACING_SIZE.SM]: classnames('w-3'),
  [constants.TOOLBAR_SPACING_SIZE.MD]: classnames('w-8'),
  [constants.TOOLBAR_SPACING_SIZE.LG]: classnames('w-12'),
  [constants.TOOLBAR_SPACING_SIZE.XL]: classnames('w-16'),
};
