import classnames from 'classnames';
import * as constants from './Separator.constants';

export const CLASSNAMES = {
  container: classnames('flex', 'items-center', 'justify-center'),
  separator: classnames('bg-secondary-400'),
  text: classnames('p-3'),
};

export const ORIENTATION_CLASSNAMES: Record<
  constants.SEPARATOR_ORIENTATION,
  string
> = {
  [constants.SEPARATOR_ORIENTATION.HORIZONTAL]: classnames(
    'data-[orientation=horizontal]:h-px',
    'data-[orientation=horizontal]:w-full',
  ),
  [constants.SEPARATOR_ORIENTATION.VERTICAL]: classnames(
    'data-[orientation=vertical]:w-px',
    'data-[orientation=vertical]:h-full',
  ),
};
