import classnames from 'classnames';

export const CLASSNAMES = {
  toolbarContainer: classnames('flex', 'gap-4'),

  container: classnames(
    'flex',
    'w-full',
    'h-full',
    'relative',
    'overflow-hidden',
  ),

  columnsContainer: classnames(
    'flex',
    'flex-1',
    'w-full',
    'h-full',
    'absolute',
  ),

  columnContainer: classnames(
    'w-[33.33%]',
    'min-w-[33.33%]',
    'h-full',
    'p-0',
    'left-[-33.33%]',
    'relative',
  ),
};
