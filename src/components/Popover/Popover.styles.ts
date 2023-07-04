import classnames from 'classnames';

export const CLASSNAMES = {
  content: classnames('relative'),

  contentWithStyles: classnames(
    'rounded-md',
    'bg-secondary-100',
    'shadow-xl',
    'pt-2',
    'pb-2',
    'px-2',
  ),

  contentWithExtraPadding: classnames('pt-6'),

  arrow: classnames('text-secondary-400'),

  closeButton: classnames(
    'absolute',
    'p-1',
    'top-0',
    'right-0',
    'text-secondary-500',
    'hover:text-secondary-800',
    'focus:text-secondary-800',
    'outline-none',
  ),
};
