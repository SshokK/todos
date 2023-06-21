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
    'gap-10',
    'w-full',
    'absolute',
  ),

  column: classnames('w-4/12', 'flex', 'flex-col', 'gap-2'),
  itemsOuterContainer: classnames('flex', 'flex-1'),
  itemsInnerContainer: classnames(
    'flex',
    'flex-col',
    'flex-1',
    'gap-2',
    'overflow-auto',
  ),
  item: classnames('flex', 'gap-4'),
  noItemsMessage: classnames(
    'text-secondary-500',
    'text-center',
    'flex-1',
    'items-center',
    'justify-center',
    'flex',
  ),
  separator: classnames('pl-10'),
  dragButton: classnames('cursor-grab'),
};
