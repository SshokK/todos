import * as constants from './Typography.constants';
import classnames from 'classnames';

export const CLASSNAMES = classnames('text-inherit');

export const SIZE_CLASSNAMES: Record<constants.TYPOGRAPHY_SIZE, string> = {
  [constants.TYPOGRAPHY_SIZE.XS]: 'text-xs',
  [constants.TYPOGRAPHY_SIZE.SM]: 'prose-sm',
  [constants.TYPOGRAPHY_SIZE.MD]: 'prose-base',
  [constants.TYPOGRAPHY_SIZE.LG]: 'prose-lg',
  [constants.TYPOGRAPHY_SIZE.XL]: 'prose-xl',
  [constants.TYPOGRAPHY_SIZE.XXL]: 'prose-2xl',
};

export const TRUNCATE_CLASSNAMES = classnames('truncate');

export const TYPE_CLASSNAMES: Record<constants.TYPOGRAPHY_TYPE, string> = {
  [constants.TYPOGRAPHY_TYPE.TITLE_1]: classnames(
    'prose-headings',
    'prose-h1',
    'font-primarySemiBold',
  ),
  [constants.TYPOGRAPHY_TYPE.TITLE_2]: classnames(
    'prose-headings',
    'prose-h2',
    'font-primaryMedium',
  ),
  [constants.TYPOGRAPHY_TYPE.SUBTITLE]: classnames(
    'prose-headings',
    'prose-h4',
    'font-primaryRegular',
  ),
  [constants.TYPOGRAPHY_TYPE.CAPTION]: classnames(
    'prose-headings',
    'prose-h4',
    'font-primaryExtraLight',
  ),
  [constants.TYPOGRAPHY_TYPE.BODY]: classnames(
    'prose-headings',
    'prose-p',
    'font-primaryLight',
  ),
  [constants.TYPOGRAPHY_TYPE.LINK]: classnames(
    'prose-headings',
    'prose-a',
    'font-primaryLight',
    'transition-all',
    'cursor-pointer',
    'text-primary-500',

    'hover:text-primary-700',
    'hover:decoration-primary-700',

    'focus:text-primary-200',
    'focus:decoration-primary-700',

    'underline',
    'decoration-transparent',
  ),
};

export const TEXT_ALIGNMENT_CLASSNAMES: Record<
  constants.TYPOGRAPHY_TEXT_ALIGNMENT,
  string
> = {
  [constants.TYPOGRAPHY_TEXT_ALIGNMENT.LEFT]: 'text-left',
  [constants.TYPOGRAPHY_TEXT_ALIGNMENT.CENTER]: 'text-center',
  [constants.TYPOGRAPHY_TEXT_ALIGNMENT.RIGHT]: 'text-right',
};
