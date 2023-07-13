import classnames from 'classnames';

export const CLASSNAMES = {
  column: classnames(
    'flex',
    'flex-col',
    'flex-1',
    'gap-2',
    'h-full',
    'overflow-auto',
    'relative',
  ),

  itemsOuterContainer: classnames('flex', 'flex-1'),

  draggablePlaceholder: classnames('hidden'),

  itemsInnerContainer: classnames(
    'flex',
    'flex-col',
    'flex-1',
    'pb-2',
    'overflow-auto',
    'relative',
  ),

  noItemsMessage: classnames('w-full'),
};
