import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('flex', 'items-center', 'w-full', 'justify-center'),

  containerSpacingRegular: classnames('gap-4'),

  containerSpacingCompact: classnames('gap-2'),

  checkboxContainer: classnames('p-2', 'rounded', 'shadow', 'bg-secondary-100'),

  content: classnames(
    'flex',
    'p-2',
    'gap-4',
    'rounded',
    'bg-secondary-100',
    'shadow',
    'items-center',
    'flex-1',
    'h-12',
    'transition',
    'duration-[100ms]',
    'cursor-pointer',
    'hover:bg-secondary-200',
    'focus:bg-secondary-200',
    'outline-none',
    'relative',
  ),

  strikethrough: classnames(
    'absolute',
    'top-1/2',
    'left-[-0.3rem]',
    'w-[calc(100%+0.6rem)]',
    'border-b',
    'border-secondary-500',
  ),

  contentCompact: classnames('h-8'),

  actions: classnames('flex', 'gap-2'),

  header: classnames(
    'font-primaryLight',
    'text-secondary-700',
    'flex-1',
    'flex',
    'items-center',
  ),

  titleInputContainer: classnames('w-full'),

  titleInput: classnames('text-secondary-900'),

  titleInputDisabled: classnames('cursor-pointer'),

  stateToggleButtonCompleted: classnames('text-success-100'),
};
