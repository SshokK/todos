import classnames from 'classnames';

export const CLASSNAMES = {
  itemRemovalZone: classnames(
    'flex',
    'flex-col',
    'items-center',
    'm-auto',
    'w-full',
    'font-primaryMedium',
    'relative',
  ),

  itemRemovalBorders: classnames(
    'rounded',
    'border',
    'border-secondary-400',
    'border-solid',
    'flex',
    'justify-center',
  ),

  itemRemovalBordersActive: classnames('w-full', '!border-error-300'),

  itemRemovalBordersSpacer: classnames('w-20', 'h-20', 'rounded', 'transition'),

  itemRemovalBordersSpacerActive: classnames('!w-full'),

  itemRemovalBordersSpacerActiveDragOver: classnames(
    'bg-error-500',
    'bg-opacity-5',
  ),

  itemRemovalIcon: classnames(
    'text-[3rem]',
    'text-secondary-400',
    'transition',
    'absolute',
    'top-4',
  ),

  itemRemovalIconActive: classnames('!text-error-300'),

  itemRemovalIconActiveDragOver: classnames('!text-error'),
};
