import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames(
    'flex',
    'flex-col',
    'items-center',
    'm-auto',
    'w-full',
    'font-primaryMedium',
    'relative',
  ),

  draggablePlaceholder: classnames('hidden'),

  borders: classnames(
    'rounded',
    'border',
    'border-secondary-400',
    'border-solid',
    'flex',
    'justify-center',
    'relative',
  ),

  bordersActive: classnames('w-full', '!border-error-300'),

  bordersSpacer: classnames('w-20', 'h-20', 'rounded', 'transition'),

  bordersSpacerActive: classnames('!w-full'),

  bordersSpacerActiveDragOver: classnames('bg-error-500', 'bg-opacity-5'),

  icon: classnames(
    'text-[3rem]',
    'text-secondary-400',
    'transition',
    'absolute',
    'top-4',
  ),

  iconActive: classnames('!text-error-300'),

  iconActiveDragOver: classnames('!text-error'),
};
