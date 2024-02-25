import classnames from 'classnames';
import * as constants from './Separator.constants';

export const CLASSNAMES = {
  container: classnames('flex', 'items-center', 'justify-center', 'relative'),
  separator: classnames('border-secondary-400'),
  text: classnames('p-3'),
};

export const ORIENTATION_CLASSNAMES: Record<
  constants.SEPARATOR_ORIENTATION,
  string
> = {
  [constants.SEPARATOR_ORIENTATION.HORIZONTAL]: classnames(
    'data-[orientation=horizontal]:h-px',
    'data-[orientation=horizontal]:w-full',
    'data-[orientation=horizontal]:border-t',
  ),
  [constants.SEPARATOR_ORIENTATION.VERTICAL]: classnames(
    'data-[orientation=vertical]:w-px',
    'data-[orientation=vertical]:h-full',
    'data-[orientation=vertical]:border-l',
  ),
};
