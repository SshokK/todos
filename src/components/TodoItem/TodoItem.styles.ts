import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames(
    'flex',
    'items-center',
    'w-full',
    'justify-center',
    'gap-4',
  ),

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
  actions: classnames('flex', 'gap-2'),

  stateToggleButtonCompleted: classnames('text-success-100'),

  stateToggleButtonOverdue: classnames('text-error'),
};
