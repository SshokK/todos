import classnames from 'classnames';

export const CLASSNAMES = {
  column: classnames(
    'flex',
    'flex-col',
    'gap-2',
    'h-full',
    'overflow-auto',
    'pr-6',
    'relative',
  ),

  itemsOuterContainer: classnames('flex', 'flex-1'),

  itemsInnerContainer: classnames(
    'flex',
    'flex-col',
    'flex-1',
    'gap-2',
    'pb-2',
    'overflow-auto',
  ),

  noItemsMessage: classnames(
    'text-secondary-500',
    'text-center',
    'flex-1',
    'items-center',
    'justify-center',
    'flex',
  ),

  separator: classnames('pl-4'),
};
