import classnames from 'classnames';

export const CLASSNAMES = {
  toolbarContainer: classnames('flex', 'gap-4'),

  container: classnames(
    'w-full',
    'h-full',
    'overflow-hidden',
    'flex',
    'flex-col',
    'gap-4',
  ),

  contentContainer: classnames('flex', 'w-full', 'h-full', 'relative', 'z-10'),

  columnsContainer: classnames(
    'flex',
    'flex-1',
    'w-full',
    'h-full',
    'absolute',
  ),
};
