import classnames from 'classnames';

export const CLASSNAMES = {
  outerContainer: classnames('relative'),

  outerContainerWithBackground: classnames('w-full', 'h-full'),

  container: classnames(
    'inset-0',
    'absolute',
    'w-full',
    'h-full',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
  ),

  containerWithBackground: classnames(
    'bg-secondary-500/20',
    'cursor-not-allowed',
  ),
};
