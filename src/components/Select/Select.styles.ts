import classnames from 'classnames';
import * as constants from './Select.constants';

export const CLASSNAMES = {
  container: classnames(
    'font-primaryLight',
    'text-xs',
    'text-secondary-900',
    'rounded-md',
    'h-8',
  ),

  content: classnames(
    'flex',
    'items-center',
    'px-3',
    'py-2',
    'rounded-md',
    'shadow',
    'bg-secondary-100',
  ),

  viewport: classnames('w-full'),
};

export const CONTAINER_WIDTH_CLASSNAMES: Record<
  constants.SELECT_WIDTH,
  string
> = {
  [constants.SELECT_WIDTH.XS]: classnames('w-14'),
  [constants.SELECT_WIDTH.SM]: classnames('w-28'),
  [constants.SELECT_WIDTH.MD]: classnames('w-48'),
  [constants.SELECT_WIDTH.LG]: classnames('w-60'),
  [constants.SELECT_WIDTH.XL]: classnames('w-96'),
  [constants.SELECT_WIDTH.FULL]: classnames('w-full'),
};
