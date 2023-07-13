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
    'w-[calc(33.33%+0.7rem)]',
    'min-w-[calc(33.33%+0.7rem)]',
    'h-full',
    'p-0',
    'left-[calc(-33.33%-0.7rem)]',
    'relative',
    'flex',
  ),

  separator: classnames('p-4'),
};
